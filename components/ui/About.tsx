import React, { useEffect } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const animateToUp = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, translateY: 30 }
};
const animateToRight = {
    visible: { opacity: 1, translateX: -30, transition: { duration: 1 } },
    hidden: { opacity: 0, translateY: 0 }
}
const animateToLeft = {
    visible: { opacity: 1, translateX: 30, transition: { duration: 1 } },
    hidden: { opacity: 0, translateY: 0 }
}

export default function About() {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    return (
        <div id="about"
            className='w-screen h-fit mb-1 max-h-[120vh] bg-white pt-28 pb-1 relative'>
            <div className=' w-screen mr-4 ml-14 md:ml-[250px] md:flex md:mr-[50px]'>
                <div className='max-w-screen-sm md:w-[515px] '>
                    <motion.h1  
                        ref={ref}
                        animate={controls}
                        initial="hidden"
                        variants={animateToUp}
                        className='text-4xl pt-7 font-bold'>
                        HILIGHT YOUR LIFE</motion.h1>
                    <motion.p
                        animate={controls}
                        initial="hidden"
                        variants={animateToRight}
                        className='mt-7 text-base text-gray-400 font-serif	max-w-[400px]'>An exclusive house layout or a custom solutions - we'll take all your wishes
                        into account to design the area of your dreams and make the design so good,
                        you'll always want to return.
                    </motion.p>
                </div>
                <motion.div
                    animate={controls}
                    initial="hidden"
                    variants={animateToUp}
                    style={{ backgroundImage: `url(/images/about/first.jpg)` }}
                    className='hidden md:block lg:w-[250px] lg:h-[607px] xl:w-[513px] xl:h-[607px]  bg-cover bg-center translate-y-[-50px] absolute right-0'>
                </motion.div>
            </div>
            <div className='ml-20 mt-6 md:ml-[200px] md:flex md:mt-40'>
                <div>
                    <motion.div
                        animate={controls}
                        initial="hidden"
                        variants={animateToRight}
                        className='w-[250px] h-[250px]  md:w-[280px] md:h-[270px] duration-500 ralative bg-cover md:translate-y-[-40px] bg-center z-10 md:translate-x-[150px]' style={{ backgroundImage: `url(/images/about/second1.jpg)` }}>
                    </motion.div>
                    <motion.div
                        animate={controls}
                        initial="hidden"
                        variants={animateToLeft}
                        className='w-[250px] h-[300px] mt-4 md:w-[316px] md:h-[400px] duration-500 relative md:translate-y-[-40px] z-0 bg-cover bg-center' style={{ backgroundImage: `url(/images/about/second2.jpg)` }}>
                    </motion.div>
                </div>
                <motion.div
                    animate={controls}
                    initial="hidden"
                    variants={animateToRight}
                    className='mt-6  text-base lg:absolute md:top-[100%] md:left-[55%]  text-gray-600 font-serif w-[380px] h-[160px]' >
                    "According to some of them, one of our main advantages is our ability to combine
                    elements, one would call incompatible, into a consistent, well-balanced piece of
                    art. Combining retro with modernity? Pure minimalism with oversaturated colors?
                    Or timeless classics with something extremely modern? The answer's yes. We can
                    figure it out."
                </motion.div>

            </div>
        </div>
    )
}