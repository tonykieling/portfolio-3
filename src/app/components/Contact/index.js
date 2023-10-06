"use client";

import { useState, useRef, useEffect } from "react";
import GoogleReCAPTCHA from 'react-google-recaptcha';
import { GlobalContext } from "../context";
import { useContext } from "react";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LfzerIcAAAAAPmprwz6IhRAiQ_b0YG-onsOuS5h";

const Contact = () => {
  const { setCurrentMenu } = useContext(GlobalContext);

  const [ state, setState ] = useState({
    name: "",
    email: "",
    message: ""
  });

  const contactRef    = useRef(null);
  const reCAPTCHARef  = useRef(null);
  const refName       = useRef(null);
  const refEmail      = useRef(null);
  const refMessage    = useRef(null);
  const refButton     = useRef(null);
  const refFinalMessage = useRef(null);
  
  const [ buttonMessage, setButtonMessage ] = useState("Send Message");
  const [ keepGoodMessage, setKeepGoodMessage ] = useState(false);
  
  const [ inputRedBox, setInputRedBox ] = useState({
    name      : false,
    email     : false,
    message   : false
  });
  
  const [ onContac, setOnContact ] = useState(false);
  const [ initialState, setInitialState ] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && initialState) {
          setOnContact(true);
          setInitialState(false);
        }

        if (entry.isIntersecting) setCurrentMenu("contact");
      }, 
      { threshold: 0.5 }
    );

    observer.observe(contactRef.current);

    return() => {
      // if (contactRef?.current) observer.unobserve(contactRef);
      observer.disconnect();
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const getReCaptchaToken = async () => {
    await reCAPTCHARef.current.reset();
    const token = await reCAPTCHARef.current.executeAsync();
    return token;
  };


  const BadMessage = () => (
    <div className="mt-2 mb-5 text-center bg-[#D9EAF4] p-2 rounded-md">
      <p className="mb-2"><b>Something unexpected happened. &nbsp;:(</b></p>
      <p><b>Please try it later or</b></p>
      <p><b>email to <a style={{color: "blue"}} href="mailto:tony.kieling@gmail.com"> tony.kieling@gmail.com </a></b></p>
    </div>
  );


  const GoodMessage = () => (
    <div className="mt-2 mb-5 text-center bg-[#D9EAF4] p-2 py-3 rounded-md">
      <span><b>Thank you for your message! &nbsp;\o/</b></span>
    </div>
  );


  const handleChange = event => {
    const { name, value } = event.target;
    const key = event.key;
    
    if (key === "Enter") {
      event.preventDefault();
      event.stopPropagation();

      switch(name) {
        case "name":
          state.name && refEmail.current.focus();
          break;
        case "email":
          state.email && refMessage.current.focus();
          break;
        case "message":
          state.message && refButton.current.click();
          break;

        default: // console.log("it's default");
      }
    } else {
      setState({...state, [name]: value});
      (name === "name") && setInputRedBox({...inputRedBox, name: false});
      (name === "email") && setInputRedBox({...inputRedBox, email: false});
      (name === "message") && setInputRedBox({...inputRedBox, message: false});
    }
  }


  const sendMessage = async () => {
    setKeepGoodMessage(false);
    const nameIsNotValid = state.name.trim().length === 0;
    const emailIsNotValid = state.email.trim().length === 0 || !new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(state.email);
    const messageIsNotValid = state.message.trim().length === 0;

    if (nameIsNotValid || emailIsNotValid || messageIsNotValid) {
      setInputRedBox({
        ...inputRedBox,
        name: nameIsNotValid,
        email: emailIsNotValid,
        message: messageIsNotValid
      });
      return;
    }

    setButtonMessage("Sending...");

    try {
      const reCaptchaToken = await getReCaptchaToken();


      const res = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          message: state.message,
          reCaptchaToken
        }),
      });

      const result = await res.json();

      if ("error" in result) throw result.error;
  
      setButtonMessage("Message has been sent successfully!");
      setKeepGoodMessage(true);

      setTimeout(() => {
        setButtonMessage("Send Message");
        setState({
          ...state,
          name    : "",
          email   : "",
          message : ""
        });
        setInputRedBox({
          name: false,
          email: false,
          message: false
        })
      }, 4000);

    } catch(error) {
      console.log("###Error: ", error.message || error);
      setButtonMessage("Refresh your screen, please");
      refFinalMessage.current.scrollIntoView({block: "start"});
    }
  }


  return (
    <section id="contact" ref={contactRef} className="bg-slate-800">
      <div className={`${onContac ? "component-visible" : "component-hidden"} flex flex-col items-center w-full`}>
        <h1 className="text-4xl font-bold tracking-widest mt-7 mb-5 text-slate-100">Contact</h1>
        
        <article className="flex flex-col items-center mb-5 w-11/12 min-[600px]:w-2/3 min-[1000px]:w-1/2">
          <h2 className="text-lg my-3 font-semibold text-slate-100">Feel free to reach out.</h2>

          <div className="w-11/12 min-[500px]:w-4/5 min-[1200px]:w-3/5">
            <input 
              className       = {`w-full rounded-md pl-2 mb-2 h-9 bg-slate-700 outline-none ${inputRedBox.name && "outline outline-red-600 outline-[5px]"} focus:bg-slate-300 focus:text-slate-950 font-semibold`}
              placeholder       = "Your name" 
              data-bs-toggle    = "tooltip" 
              data-bs-placement = "top"
              data-bs-html      = "true"
              title             = "Insert your name"
              type        = "text"
              name        = "name"
              value       = { state.name }
              onChange    = { handleChange }
              onKeyDown   = { handleChange }
              ref         = { refName}
              disabled  = { buttonMessage === "Sending..." ? true : false }
            />

            <input 
              className       = {`w-full rounded-md pl-2 mb-2 h-9 bg-slate-700 outline-none ${inputRedBox.email && "outline outline-red-600 outline-[5px]"} focus:bg-slate-300 focus:text-slate-950 font-semibold`}
              placeholder     = "Your email"
              data-bs-toggle  = "tooltip" 
              title           = "I will never share your email with anyone else."
              aria-describedby= "emailHelp"

              type        = "email"
              name        = "email"
              value       = { state.email }
              onChange    = { handleChange }
              onKeyDown  = { handleChange }
              ref         = { refEmail }
              disabled  = { buttonMessage === "Sending..." ? true : false }
            />

            <textarea
              className       = {`w-full rounded-md pl-2 pt-2 mb-0 bg-slate-700 outline-none ${inputRedBox.message && "outline outline-red-600 outline-[5px]"} focus:bg-slate-300 focus:text-slate-950 font-semibold`}
              rows            = "6"
              placeholder     = "Please, leave your message" 
              data-bs-toggle  = "tooltip" 
              title           = "Insert your message"

              type        = "text"
              name        = "message"
              value       = { state.message }
              onChange    = { handleChange }
              onKeyDown   = { handleChange }
              ref         = { refMessage }
              disabled    = { buttonMessage === "Sending..." ? true : false }
            />

            <button
              type      = "button"
              onClick   = { sendMessage }
              className = {`border border-slate-100 w-full hover:bg-slate-300 hover:text-black text-yellow-100 hover:outline hover:outline-1 hover:outline-blue-950 font-bold py-2 px-4 mb-4 mt-3 rounded-full ${(buttonMessage === "Message has been sent successfully!") && "bg-green-700 text-yellow-400 hover:bg-green-700 hover: hover:text-yellow-400"} ${(buttonMessage === "Refresh your screen, please") && "bg-yellow-500 text-red-800 cursor-not-allowed hover:bg-yellow-500 hover:text-red-800 hover:outline-yellow-600"}`}
              ref       = { refButton }
              disabled  = { buttonMessage === "Sending..." ? true : false }

              data-bs-toggle  = "tooltip" 
              title           = "Send your message"
            >
                { buttonMessage }
            </button>

            { buttonMessage === "Refresh your screen, please" && <BadMessage />}
            { keepGoodMessage && <GoodMessage />}
          </div>

        </article>
      </div>

      { onContac &&
          <GoogleReCAPTCHA
              ref={reCAPTCHARef}
              size='invisible'
              sitekey={RECAPTCHA_SITE_KEY}
          />
      }
      
      <div ref = { refFinalMessage }></div>

    </section>
  )
}

export default Contact;