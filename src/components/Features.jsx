import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'

const BentoTilt = ({children , className =''})=>{

    const [transformStyle, setTransformStyle] = useState('');
    const itemRef = useRef();
     
    const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

    return(<div className={className}
        ref={itemRef}
    onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle,
        transition: "transform 0.25s ease-out",
       }}
    >
        {children}
        </div>
    )
}

const BentoCard = ({src, title, description}) => {
    return (
        <div className='relative size-full'>
            <video
            src={src}
            loop
            muted
            autoPlay
            className='absolute left-0 top-o size-full object-cover object-center'
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title special-font '>
                        {title}
                    </h1>
                    {description && (
                        <p className='mt-3 max-w-60 text-xs md:text-base'>
                            {description}
                        </p>
                    )}
                </div>
            </div>
            
        </div>
    )
}




const Features = () => {
  return (
    <section className='bg-black pb-45' id='features'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className="px-5 py-20 md:py-18 text-center md:text-left">
  {/* Title with subtle glow */}
  <p className="font-circular-web text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
    Into The MetaGame Layer
  </p>

  <p className="mt-6 max-w-2xl font-circular-web text-base md:text-lg text-blue-100 opacity-70 leading-relaxed tracking-wide">
    Immerse yourself in a <span className="text-blue-600 font-medium">rich and ever-expanding universe</span> 
    where a vibrant community of players, creators, and innovators come together to 
    <span className="text-blue-600 font-medium"> shape the future of gaming.</span> 
    Our platform offers a diverse range of games, each with its own unique mechanics, 
    art styles, and narratives — <span className="text-blue-700 font-medium">ensuring there's something for everyone.</span>
  </p>
</div>

            
        <BentoTilt className='border-hsla relative mb-[15px] h-90 w-full overflow-hidden rounded-md md:h-[65vh]'>
            <BentoCard
            src="videos/feature-1.mp4"
            title={<>radia<b>n</b>t</>}
            description="Across platforms and devices, Radiant brings players together in a shared universe where their actions have real consequences."
            />
        </BentoTilt>
        <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-5'>
            <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                <BentoCard 
                src='videos/feature-2.mp4'
                title={<>zigma</>}
                description="A game inspired by the classic Tetris, but with a modern twist. "
                />
            </BentoTilt>
            <BentoTilt className='bento-tilt_1 row-span-1 ms-30 md:col-span-1 md:ms-0'>
            <BentoCard 
                src='videos/feature-3.mp4'
                title={<>n<b>e</b>xus</>}
                description="A gamified social platform where players can connect, share, and collaborate on various projects and activities."
                />

            </BentoTilt>
            <BentoTilt className='bento-tilt_1 row-span-1 me-14 md:col-span-1 md:me-0'>
            <BentoCard 
                src='videos/feature-4.mp4'
                title={<>az<b>u</b>l</>}
                description="A gamified social platform where players can connect, share, and collaborate on various projects and activities."
                />

            </BentoTilt>
            <BentoTilt className="bento-tilt_2">
                <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                    <h1 className='bento-title special-font m-w-60 text-black'>M<b>o</b>re Comm<b>ing</b> S<b>oo</b>n</h1>
                    <p className='md:text-2xl text-blue-50 sm:text-xs'>Wait for More Exciting things <br/>which are on there way for all. </p>
                    <TiLocationArrow className='m-5 scale-[5] self-end'/>
                </div>
            </BentoTilt>
            <BentoTilt className="bento-tilt_2">
                <video src="public\videos\feature-5.mp4"
                loop
                 muted
                 autoPlay
                 className='h-full w-full object-cover'
                 ></video>
                
            </BentoTilt>
        </div>
        </div>
    </section>
  )
}

export default Features