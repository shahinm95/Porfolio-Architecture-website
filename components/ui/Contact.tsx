import React, { useEffect } from 'react'
import { AiFillBehanceCircle, AiFillFacebook } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Void {
    requestHandler: () => void;
}

const animateToUp = {
    visible: { opacity: 1, translateY: -30, transition: { duration: 1 } },
    hidden: { opacity: 0, translateY: 0 }
};
const animateToRight = {
    visible: { opacity: 1, translateX: 30, transition: { duration: 1 } },
    hidden: { opacity: 0, translateY: 0 }
}
const animateToLeft = {
    visible: { opacity: 1, translateX: -30, transition: { duration: 1 } },
    hidden: { opacity: 0, translateY: 0 }
}


export default function Contact({ requestHandler }: Void) {

    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView])


    return (
        <div
            className='bg-gray-800 realtive font-sans pt-11 max-w-screen text-white '>
            <div className='relative md:block max-w-[80%]'>
                <div className='w-10/6 text-3xl text-center pb-8 
                md:-translate-x-40
                '>
                    MAKE A REQUEST
                </div>
                <p className='max-w-[600px] block w-[90%] pl-10 
                md:translate-x-80 md:mt-20 md:text-left md:pr-40
                sm:text-center sm:mx-auto'>
                    Please, fill out the form below if you have any questions and our manager will contact
                    you as soon as possible to clarify all the details. We’ll prepare a detailed quotation
                    according to the details provided and will be ready to discuss all the questions you
                    have.
                </p>
                <button
                    onClick={requestHandler}
                    className="bg-white  relative  my-10 text-black
                 hover:border-white border mx-auto block
                        px-7 py-3 transition-colors hover:bg-gray-800 
                        hover:text-white duration-500">
                    Make a Request
                </button>
            </div>
            <div id="contacts"
                className='pt-[80px] 
            '>
                <motion.div
                    animate={controls}
                    initial="hidden"
                    variants={animateToUp}
                    className='w-10/6 text-3xl text-center pb-8'>
                    Get in touch!
                </motion.div>
                <motion.p
                    animate={controls}
                    initial="hidden"
                    variants={animateToUp}
                    className='max-w-[450px] pl-10 md:mx-auto'>
                    Let's make friends! We will convince You to love our vision and
                    make your dream designs come true!
                </motion.p>
                <div className='md:flex w-[80%] pb-20'>
                    <div className='flex max-w-[450px] text-center mx-auto mt-[50px]'>
                        <motion.div
                            ref={ref}
                            animate={controls}
                            initial="hidden"
                            variants={animateToRight}
                        >
                            <div className='w-10/6 text-2xl text-center pb-8'>
                                Berlin
                            </div>
                            <p className='max-w-[450px] text-xs pl-10'>
                                +00 000 000 00
                            </p>
                            <p className='max-w-[450px] text-xs pl-10'>
                                Address One
                            </p>
                        </motion.div>
                        <motion.div
                            animate={controls}
                            initial="hidden"
                            variants={animateToLeft}
                            className='ml-12'>
                            <div className='w-10/6 text-2xl text-center pb-8'>
                                Amsterdam
                            </div>
                            <p className='max-w-[450px] text-xs pl-10'>
                                +00 000 000 00
                            </p>
                            <p className='max-w-[450px] text-xs pl-10'>
                                Address Two
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        animate={controls}
                        initial="hidden"
                        variants={animateToRight}
                        className='flex ml-10 py-10 text-xs'>
                        <div className='mr-10 '>
                            office@shahin.design
                        </div>
                        <div className='flex'>
                            <AiFillFacebook />
                            <BsInstagram className='mx-5' />
                            <AiFillBehanceCircle />
                        </div>

                    </motion.div>
                </div>

            </div>
        </div>
    )
}
