import React, { useState } from 'react';
import emailjs from 'emailjs-com';

type FormProps = {
  name: string,
  email: string,
  message: string
}

export default function ContactUs() {
  const [isNotify, setIsNotify] = useState<boolean>(false);
  const [form, setForm] = useState<FormProps>({name: "", email: "", message: ""})

  const removeNotify = () => {
    setIsNotify(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.name != "" && form.email != "") {
      emailjs.sendForm('service_m1xauwa', 'template_2psmiut', e.target, 'user_ecwithXRlvZuOhzFI51A0')
        .then((result) => {
            setIsNotify(true);
            setForm({name: "", email: "", message: ""})
            
            setTimeout(() => {
              setIsNotify(false);
            }, 10000);
        }, (error) => {
            console.log(error);
        });
    }
  }


  return (
    <section id="contact" className="bg-gray-100 text-black w-full h-screen mt-20 md:bg-black md:text-white" data-aos="fade-up" data-aos-duration="1000">
          <div className="text-center tracking-widest ">
              <h2 className="pt-10 text-2xl">CONTACT</h2>
              <div className="bg-black w-10 h-0.5 flex mx-auto md:bg-white"/>
          </div>

        <form onSubmit={sendEmail}>
          <div className="flex flex-col mx-auto block w-3/4 h-58 mt-14 space-y-1 text-black text-sm md:w-2/4">
              <input 
                type="text" 
                name="user" 
                className="w-full h-12 pl-2 focus:outline-none text-sm md:h-8" 
                placeholder="What's your name?"
                onChange={(e) => setForm({...form, name: e.target.value})}
                value={form.name}
              />
              <input 
                type="email" 
                name="email" 
                className="w-full h-12 pl-2 focus:outline-none text-sm md:h-8" 
                placeholder="What's your email?"
                onChange={(e) => setForm({...form, email: e.target.value})}
                value={form.email}
              />
              <textarea  
                name="message" 
                className="w-full h-32 outline-none mt-3 pl-2 pt-2 focus:outline-none text-sm md:h-64" 
                placeholder="Leave a message"
                onChange={(e) => setForm({...form, message: e.target.value})}
                value={form.message}
              />
          </div>

          <button 
            type="submit" 
            className="bg-none border-2 border-black flex mx-auto mt-4 py-2 px-10 resize-none 
            focus:outline-none transition duration-500 ease-in-out transform hover:bg-black hover:text-white 
            md:hover:bg-white md:hover:text-black text-base md:border-white"
            >
            Send
          </button>

          {isNotify &&
            <div id="notify" className="bg-green-600 float-right h-12 w-1/4 mt-5 mr-5 text-center py-3">
              Your mensagem was sended! <button className="transform translate-x-10 right-10 text-gray focus:outline-none z-10" onClick={removeNotify}>x</button>
            </div>
          }
        </form>
    </section>
    );
}
