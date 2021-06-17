import { useState } from 'react';

 export default function Filter() {
    const [isActiveAll, setIsActiveAll] = useState('btn active');
    const [isActiveHTMLandCSS, setIsActiveHTMLandCSS] = useState('');
    const [isActiveJs, setIsActiveJs] = useState('');
    const [isActiveNode, setIsActiveNode] = useState('');
    const [isActiveReact, setIsActiveReact] = useState('');
    const [isActiveSass, setIsActiveSass] = useState('');
    const [isActiveTailwind, setIsActiveTailwind] = useState('');
    const [isActiveBootstrap, setIsActiveBootstrap] = useState('');

    const [isDiscord, setIsDiscord] = useState(true);
    const [isTelegram , setIsTelegram] = useState(true);
    const [isENewsSite , setIsENewsSite] = useState(true);
    const [isPersonalSite, setIsPersonalSite] = useState(true);
    
    function all() {
        setIsActiveAll('btn active');
        setIsActiveHTMLandCSS('')
        setIsActiveJs('')
        setIsActiveNode('')
        setIsActiveReact('')
        setIsActiveSass('')
        setIsActiveTailwind('')
        setIsActiveBootstrap('');

        setIsDiscord(true);
        setIsTelegram(true);
        setIsENewsSite(true); 
        setIsPersonalSite(true);
    };

    function onlyHTMLandCSS() {
        setIsActiveAll('');
        setIsActiveHTMLandCSS('btn active')
        setIsActiveJs('')
        setIsActiveNode('')
        setIsActiveReact('')
        setIsActiveSass('')
        setIsActiveTailwind('')
        setIsActiveBootstrap('');

        setIsDiscord(false);
        setIsTelegram(false);
        setIsENewsSite(true); 
        setIsPersonalSite(true);
    };

    function onlyJs() {
        setIsActiveAll('');
        setIsActiveHTMLandCSS('')
        setIsActiveJs('btn active')
        setIsActiveNode('')
        setIsActiveReact('')
        setIsActiveSass('')
        setIsActiveTailwind('')
        setIsActiveBootstrap('');

        setIsDiscord(true);
        setIsTelegram(true);
        setIsENewsSite(true); 
        setIsPersonalSite(true);        
    };
    
    function onlyNode() {
        setIsActiveAll('');
        setIsActiveHTMLandCSS('')
        setIsActiveJs('')
        setIsActiveNode('btn active')
        setIsActiveReact('')
        setIsActiveSass('')
        setIsActiveTailwind('')
        setIsActiveBootstrap('');

        setIsDiscord(true);
        setIsTelegram(true);
        setIsENewsSite(false); 
        setIsPersonalSite(false);       
    };

    function onlyReact() {
        setIsActiveAll('');
        setIsActiveHTMLandCSS('')
        setIsActiveJs('')
        setIsActiveNode('')
        setIsActiveReact('btn active')
        setIsActiveSass('')
        setIsActiveTailwind('')
        setIsActiveBootstrap('');

        setIsDiscord(false);
        setIsTelegram(false);
        setIsENewsSite(true); 
        setIsPersonalSite(true);       
    };
    
    function onlySass() {
        setIsActiveAll('');
        setIsActiveHTMLandCSS('')
        setIsActiveJs('')
        setIsActiveNode('')
        setIsActiveReact('')
        setIsActiveSass('btn active')
        setIsActiveTailwind('')
        setIsActiveBootstrap('');

        setIsDiscord(false);
        setIsTelegram(false);
        setIsENewsSite(true);
        setIsPersonalSite(false);     
    };

    function onlyTailwind() {
        setIsActiveAll('');
        setIsActiveHTMLandCSS('')
        setIsActiveJs('')
        setIsActiveNode('')
        setIsActiveReact('')
        setIsActiveSass('')
        setIsActiveTailwind('btn active')
        setIsActiveBootstrap('');

        setIsDiscord(false);
        setIsTelegram(false);
        setIsENewsSite(false); 
        setIsPersonalSite(true);       
    };
    
    function onlyBootstrap() {
        setIsActiveAll('');
        setIsActiveHTMLandCSS('')
        setIsActiveJs('')
        setIsActiveNode('')
        setIsActiveReact('')
        setIsActiveSass('')
        setIsActiveTailwind('')
        setIsActiveBootstrap('btn active');

        setIsDiscord(false);
        setIsTelegram(false);
        setIsENewsSite(true); 
        setIsPersonalSite(false);          
    };
    
    return (
        <>
            <div id="myBtnContainer" className="animate-fade-in-down hidden transition duration-300 flex space-x-6 mt-8 h-8 justify-center text-5x1 md:flex md:w-full text-base">
                <div className={isActiveAll}><button id="all" className="btn py-1 px-2 focus:outline-none hover:bg-black hover:text-gray-300 text-base" onClick={all}>All</button></div>
                <div className={isActiveHTMLandCSS}><button id="HTMLandCSS" className="btn py-1 hover:border-2 px-2 focus:outline-none hover:bg-black hover:text-gray-300 text-base" onClick={onlyHTMLandCSS}>HTML/CSS</button></div>
                <div className={isActiveJs}><button id="js" className="btn py-1 hover:border-2 px-2 focus:outline-none hover:bg-black hover:text-gray-300 text-base" onClick={onlyJs}>JavaScript</button></div>
                <div className={isActiveNode}><button id="node" className="btn py-1 hover:border-2 px-2 focus:outline-none hover:bg-black hover:text-gray-300 text-base" onClick={onlyNode}>Node</button></div>
                <div className={isActiveReact}><button id="react" className="btn py-1 hover:border-2 px-2 focus:outline-none hover:bg-black hover:text-gray-300 text-base" onClick={onlyReact}>React</button></div>
                <div className={isActiveSass}><button id="sass" className="btn py-1 hover:border-2 px-2 focus:outline-none hover:bg-black hover:text-gray-300 text-base" onClick={onlySass}>Sass</button></div>
                <div className={isActiveTailwind}><button id="tailwind" className="btn py-1 hover:border-2 px-2 focus:outline-none hover:bg-black hover:text-gray-300 text-base" onClick={onlyTailwind}>Tailwind CSS</button></div>
                <div className={isActiveBootstrap}><button id="bootstrap" className="btn py-1 hover:border-2 px-2 focus:outline-none hover:bg-black hover:text-gray-300 text-base" onClick={onlyBootstrap}>Bootstrap</button></div>
            </div>
            
            <div className="mt-3 flex flex-wrap text-center justify-center lg:mx-20">
                { isDiscord &&
                <div className="img__discord bg-black text-white h-1/4 w-full lg:w-1/2 lg:h-1/2">
                    <div className="project hover:animate-fade-in-down transition duration-300 text-center py-16 opacity-0 hover:opacity-100 shadow-md">
                        <h3 className="transition duration-500 ease-in-out transform hover:scale-110 text-xl">ENews - Discord Bot</h3>
                        <p className="text-sm"> JavaScript/Node.JS</p>
                        <a href="https://github.com/AlexNicolasCode/ENews-DiscordBot">
                        <button className="border-2 border-white mt-6 py-1 px-2 focus:outline-none hover:bg-black hover:border-0 hover:bg-white hover:text-black transition duration-500 ease-in-out transform hover:scale-110 text-base">See More</button>
                        </a>
                    </div>
                </div>
                }

                { isTelegram &&
                <div className="img__telegram bg-black text-white h-1/4 w-full lg:w-1/2 lg:h-1/2">
                    <div className="project hover:animate-fade-in-down transition duration-300 text-center py-16 opacity-0 hover:opacity-100 shadow-md">
                        <h3 className="transition duration-500 ease-in-out transform hover:scale-110 text-xl">ENews - Telegram Bot</h3>
                        <p className="text-sm">JavaScript/Node.js</p>
                        <a href="https://github.com/AlexNicolasCode/ENews-TelegramBot">
                            <button className="border-2 border-white mt-6 py-1 px-2 focus:outline-none hover:bg-black hover:border-0 hover:bg-white hover:text-black transition duration-500 ease-in-out transform hover:scale-110 text-base">See More</button>
                        </a>
                    </div>
                </div>
                }

                { isENewsSite &&
                <div className="img__enews bg-black text-white h-1/4 w-full lg:w-1/2 lg:h-1/2">
                    <div className="project hover:animate-fade-in-down transition duration-300 text-center py-16 opacity-0 hover:opacity-100 shadow-md z-20">
                        <h3 className="transition duration-500 ease-in-out transform hover:scale-110 text-xl">Enews Site</h3>
                        <p className="text-sm">React/Bootstrap/Sass</p>
                        <a href="https://github.com/AlexNicolasCode/ENews">
                            <button className="border-2 border-white mt-6 py-1 px-2 focus:outline-none hover:bg-black hover:border-0 hover:bg-white hover:text-black transition duration-500 ease-in-out transform hover:scale-110 text-base">See More</button>
                        </a>
                    </div>
                </div>
                }

                { isPersonalSite &&
                <div className="img__personal bg-black text-white h-1/4 w-full lg:w-1/2 lg:h-1/2">
                    <div className="project hover:animate-fade-in-down transition duration-300 text-center py-16 opacity-0 hover:opacity-100 shadow-md">
                        <h3 className="transition duration-500 ease-in-out transform hover:scale-110 text-xl">Personal Site</h3>
                        <p className="text-sm">ReactJS/Tailwind</p>
                        <a href="https://github.com/AlexNicolasCode/website">
                            <button className="border-2 border-white mt-6 py-1 px-2 focus:outline-none hover:bg-black hover:border-0 hover:bg-white hover:text-black transition duration-500 ease-in-out transform hover:scale-110 text-base">See More</button>
                        </a>
                    </div>
                </div>
                }

            </div>
        </>
    );
}
 