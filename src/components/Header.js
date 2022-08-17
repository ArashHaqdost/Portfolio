import React,{useState, useEffect} from  'react';


//import component

import Logo from '../assets/img/logoo.png';
import Nave from './Nave.js';
import MbNave from './MbNave';
import Sotial from './Soctial';

const Header = () =>{
const [bg,setBg] =  useState(false);

useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
});

    return(
        <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'} flex items-center fixed top-0  w-full text-white z-10 transition-all duration-300 `}>
            <div className='container mx-auto h-full flex items-center justify-between'>
                {/* logo */}
                <a href='#'>
                    <img src={Logo}/>
                </a>
                {/**nave */}
            <div className='hidden lg:block'>
                <Nave  />
            </div>
             {/**sotial */}
            <div className='hidden lg:block'>
                <Sotial  />
            </div>
             {/**nav mobile */}
             <div className='lg:hidden'>
                <MbNave  />
            </div>
                
                  </div>

        </header>
    )
}

export default Header;