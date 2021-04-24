import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_ecwithXRlvZuOhzFI51A0");

export default function ContactUs() {
  const [isNotify, setIsNotify] = useState(false);

  function removeNotify() {
    setIsNotify(false);
  };
  
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_m1xauwa", "template_2psmiut", e.target, "user_ecwithXRlvZuOhzFI51A0")
      .then((result) => {
          console.log(result.text);
          setIsNotify(true);
          setTimeout(() => {
            setIsNotify(false);
          }, 15000);
      }, (error) => {
          console.log(error.text);
      });
      
  }

  
  return (
    <footer>
      <section id="contact" className="bg-gray-100 text-black w-full h-screen mt-20 md:bg-black md:text-white" data-aos="fade-up" data-aos-duration="1000">
            { isNotify &&
              <div id="notify" className="fixed bg-green-600 absolute bottom-0 right-10 h-12 w-3/12 mb-5 mr-5 text-center py-3">
                Your mensagem was sended! <button className="transform translate-x-10 right-10 text-gray focus:outline-none z-10" onClick={removeNotify}>x</button>
                </div>
            } 
            <div className="text-center tracking-widest ">
                <h2 className="pt-10 text-2xl">CONTACT</h2>
                <div className="bg-black w-10 h-0.5 flex mx-auto md:bg-white"></div>
            </div>
          <form id="contact-form"  onSubmit={sendEmail}>
            <div className="flex flex-col mx-auto block w-3/4 h-58 mt-14 space-y-1 text-black text-sm md:w-2/4">
                <input type="text" name="user_name" className="w-full h-12 pl-2 focus:outline-none text-sm md:h-8 " placeholder="What's your name?"></input>
                <input type="email" name="user_email" className="w-full h-12 pl-2 focus:outline-none text-sm md:h-8 " placeholder="What's your mail?"></input>
                <textarea name="message" className="w-full h-32 outline-none mt-3 pl-2 pt-2 focus:outline-none text-sm md:h-64 " placeholder="Descrive about your contact"></textarea>
            </div>
            <button type="submit" className="bg-none border-2 border-black flex mx-auto mt-4 py-2 px-10 resize-none focus:outline-none transition duration-500 ease-in-out transform hover:bg-black hover:text-white md:hover:bg-white md:hover:text-black text-base md:border-white">Send</button>
          </form>
          <div className="text-center text-gray-500 mt-10 text-sm">
            or
            <div className="mt-1 text-gray-400 hover:text-gray-300 text-sm">
             Contato.AlexNicolas@gmail.com
            </div>
          </div>
      </section>
    </footer>
    );
}