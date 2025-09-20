import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from './AnimatedTitle';
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger:{
                trigger:'#clip',
                start:'center center',
                end:'+=800 center',
                scrub:0.5,
                pin:true,
                pinSpaceing:true,
                }
        })
        clipAnimation.to('.mask-clip-path',{
            width:'100vw',
            height:'100vh',
            borderRadius: 0,
        })
    })

  return (
    <div id='about' className='min-h-screen w-screen'>
        <div className="relative mb-8 mt-10 flex flex-col items-center gap-5">
            <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome</h2>
            <AnimatedTitle title="disc<b>o</b>ver the World's L<b>a</b>rgest Shared Adventure" containerClass="mt-5 !text-black text-center"/>
            <div className="about-subtext">
                <p>The Game Of Games Begins-your life, now an epic MMORPG. </p>
                <p>Zentry Unites Every player from countless games and platforms.</p>
            </div>
        </div>
        <div className='h-dvh w-screen ' id='clip'>
            <div className='mask-clip-path about-image'>
                <img src="img/about.webp" alt="back" className='absolute left-0 top-0 mt-1 size-full object-cover' />
            </div>
        </div>
    </div>
  )
}

export default About