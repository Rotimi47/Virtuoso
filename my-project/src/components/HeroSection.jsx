import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import  video1  from "../assets/video1.mp4";
import  video2  from "../assets/video2.mp4";



 const HeroSection = () => {
    useGSAP(() => {
        gsap.to('#text', {
            ease: 'power1.inOut',
            opacity: 1,
            y: 0,
        })

            gsap.fromTo('.para', {
                    opacity: 0,
                    y: 20
                    }, {
                    opacity: 1,
                    y:0,
                    delay:1,
                    stagger: 0.1
                }
            )

    }, []) 


  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 id="text" className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide opacity-0">
            Virtuoso build tools
            <span className="bg-linear-to-r from-orange-500 to-red-800 text-transparent bg-clip-text"> for developers</span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl para">
            Release your creativity and bring your virtual ideas to life with our intuitive development tools. Get started today and turn your wildest imaginations into reality!...SIKEEE!
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-linear-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
                Start with a dream
            </a>
            <a href="#" className=" px-4 py-3 mx-3 border rounded-md">
                Documentation
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            <video 
                autoPlay 
                loop 
                muted 
                className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                <source src={video1} type="video/mp4"/>
                Your browser does not support greatness.sigh!
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
            <source src={video2} type="video/mp4"/>
            Your browser does not support greatness.sigh!
            </video>
        </div>
    </div>
  )
 }

export default HeroSection