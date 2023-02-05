import React, { useEffect, useState } from 'react'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const animateToUp = {
    visible: { opacity: 1, translateY: -30, transition: { duration: 1 } },
    hidden: { opacity: 0, translateY: 0 }
};

export default function Projects() {
    const controls = useAnimation();
    const [ref, inView] = useInView();


    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);


    return (
        <div id="projects"
        className='bg-gray-800 max-w-screen text-white mt-[400px] pt-12 mx-auto'>
            <div className='mx-10 font-serif md:text-center'>
                <h1 className='text-3xl pt-10'>
                    OUR PROJECTS
                </h1>
                <p className='mt-10 max-w-[500px] mx-auto'>
                    Through the last years, we worked on more than 150 projects located all around the world,
                    providing our Clients with creative solutions in a modern, stylish, well thought-out
                    design.
                </p>
            </div>
            <div className='sm:flex md:justify-center mt-20 mx-auto px-10' ref={ref}>
                <motion.div
                    animate={controls}
                    initial="hidden"
                    variants={animateToUp}
                    className='w-10/6 h-[350px] group mx-1 mt-1 sm:h-[500px]  bg-cover bg-center  relative'
                >
                    <img className='w-full h-full z-0 duration-500 sm:group-hover:brightness-50 sm:brightness-100 brightness-50  relative'
                        alt="Infinity black apartment" src="/images/second.jpg" />
                    <div className='flex z-20 relative sm:group-hover:visible sm:invisible -translate-y-[1100%] sm:-translate-y-[1500%] '>
                        <section className='ml-6 mt-3 text-sm  font-serif'>Poland</section>
                        <section className='ml-6 mt-3 text-sm font-serif'>2022</section>
                        <section className='ml-6 mt-3 text-sm font-serif'>144 m&#xB2;</section>
                    </div>
                    <div className='-translate-y-[300%] sm:invisible  sm:group-hover:visible font-serif ml-5 text-xl z-20 relative '>
                        Infinity Black Apartment
                    </div>
                </motion.div>
                <motion.div
                    animate={controls}
                    initial="hidden"
                    variants={animateToUp}
                    className='w-10/6 h-[350px] mt-1 group sm:h-[500px] mx-1 bg-cover bg-center  relative'
                >
                    <img className='w-full h-full z-0 brightness-50 duration-500 sm:group-hover:brightness-50 sm:brightness-100 relative'
                        alt="Infinity black apartment" src="/images/KLR_View120000.jpg" />
                    <div className='flex z-20 relative sm:group-hover:visible sm:invisible -translate-y-[1100%] sm:-translate-y-[1500%] '>
                        <section className='ml-6 mt-3 text-sm  font-serif'>Poland</section>
                        <section className='ml-6 mt-3 text-sm font-serif'>2022</section>
                        <section className='ml-6 mt-3 text-sm font-serif'>286 m&#xB2;</section>
                    </div>
                    <div className='-translate-y-[300%] sm:group-hover:visible sm:invisible font-serif ml-5 text-xl z-20 relative '>
                        Flying Landscape House
                    </div>
                </motion.div>

            </div>
            <motion.div
                animate={controls}
                initial="hidden"
                variants={animateToUp}
                className='sm:flex mt-5 md:justify-center mx-auto px-10'>
                <div
                    className='w-10/6 h-[350px] mt-1 group sm:h-[500px] bg-cover bg-center mx-1 relative'
                >
                    <img className='w-full h-full z-0 brightness-50 duration-500 sm:group-hover:brightness-50 sm:brightness-100 relative'
                        alt="Infinity black apartment" src="/images/first.jpg" />
                    <div className='flex z-20 relative sm:group-hover:visible sm:invisible -translate-y-[1100%] sm:-translate-y-[1500%]'>
                        <section className='ml-6 mt-3 text-sm  font-serif'>Munich, Germany</section>
                        <section className='ml-6 mt-3 text-sm font-serif'>2022</section>
                        <section className='ml-6 mt-3 text-sm font-serif'>762 m&#xB2;</section>
                    </div>
                    <div className='-translate-y-[300%] sm:group-hover:visible sm:invisible font-serif ml-5 text-xl z-20 relative '>
                        Munich House
                    </div>
                </div>
                <div
                    className='w-10/6 h-[350px] group mt-1 sm:h-[500px] bg-cover bg-center mx-1 relative'
                >
                    <img className='w-full h-full z-0 brightness-50 duration-500 sm:group-hover:brightness-50 sm:brightness-100 relative'
                        alt="Infinity black apartment" src="/images/dentalhouse.jpg" />
                    <div className='flex z-20 relative sm:group-hover:visible sm:invisible -translate-y-[1100%] sm:-translate-y-[1500%]'>
                        <section className='ml-6 mt-3 text-sm font-serif'>Poland</section>
                        <section className='ml-6 mt-3 text-sm font-serif'>2022</section>
                        <section className='ml-6 mt-3 text-sm font-serif'>132 m&#xB2;</section>
                    </div>
                    <div className='-translate-y-[300%] sm:group-hover:visible sm:invisible font-serif ml-5 text-xl z-20 relative '>
                        Dental House
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
