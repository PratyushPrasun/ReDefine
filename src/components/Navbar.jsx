import React, { useEffect, useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti';
import Buttom from './Buttom';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap/all';
const navItems =[    { path: '#', label: 'Nexus' },
    { path: '#features', label: 'Vault' }, 
    { path: '#story', label: 'Prologue' },  
    { path: '#about', label: 'About' },
    { path: '#contact', label: 'Contact' },]

const Navbar = () => {
    
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false)
    const navContainerRef = useRef(null);
    const audioElementRef = useRef(null);
    const [lastScrollY, setLastScrollY] = useState(true);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const toogleAudioIndicator=() =>{
        setIsAudioPlaying((prev) =>!prev);
        setIsIndicatorActive((prev)=>!prev);
    }
    const {y:currentScrollY} = useWindowScroll();
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);
    useEffect(()=>{
        if (isAudioPlaying) {
            audioElementRef.current.play();
        }else{
            audioElementRef.current.pause()
        }
    },[isAudioPlaying])
  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-2 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
        <nav className='flex size-full items-center justify-between p-4'>
            <div className='flex items-center gap-5'>
                <img src="/img/logo.png" alt="" className='w-10'/>
                <Buttom
                id='product-button'
                title='Products'
                leftIcon={<TiLocationArrow />}
                containerClass="bg-blue-50 md:flex hidden item-center justify-center gap-1 hover:bg-black hover:text-white transition-all duration-500"
                />
            </div>
            <div className="flex h-full items-center">
                <div className='hidden md:block'>
                    {navItems.map(({ path, label }) => (
    <a key={path} href={path} className='nav-hover-btn text-2xl'>
        {label}
    </a>
))}

                </div>
                <button className='ml-10 flex items-center space-x-0.5' onClick={toogleAudioIndicator}>
                    <audio ref={audioElementRef} className='hidden' src='/audio/loop.mp3' loop/>


                    {[1,2,3,4].map((bar)=>(
                        <div key={bar} className={`indicator-line ${isIndicatorActive? "active": ''}`} 
                        style={{animationDelay:`${bar*0.1}s`}}
                        >

                        </div>
                    ))}
                    
                </button>
            </div>
        </nav>
        </header>

    </div>
  )
}

export default Navbar