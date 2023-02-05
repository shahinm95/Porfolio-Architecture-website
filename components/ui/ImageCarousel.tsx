import React, { useState, useEffect } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { AnimatePresence, motion } from 'framer-motion'
interface Silde {
    src: string,
    title: string
}
const slide: Silde[] = [
    {
        src: "/images/first.jpg",
        title: "Munich House"
    },
    {
        src: "/images/second.jpg",
        title: "Infinity Black Apartment"
    },
    {
        src: "/images/KLR_View120000.jpg",
        title: "Flying Landscape House"
    }
]

export default function ImageCarousel() {
    const [currentImage, setCurrentImage] = useState(0)
    useEffect(() => {
        const intervalUse = setInterval(() => {
            nextHandler()
        }, 3000)

        return () => {
            clearInterval(intervalUse)
        }
    }, [nextHandler, currentImage])

    const pervHandler = (): void => {
        const isFirstOne = currentImage === 0
        const newIndex = isFirstOne ? slide.length - 1 : currentImage - 1
        setCurrentImage(newIndex)
    }
    function nextHandler(): void {
        const isLast = currentImage === slide.length - 1
        const newIndex = isLast ? 0 : currentImage + 1
        setCurrentImage(newIndex)
    }
    let nextSlide = currentImage + 1
    if (currentImage === slide.length - 1) {
        nextSlide = 0
    }

    return (
        <div id="home"
            className='flex  mt-[-200px] w-[99vw] h-[120vh] z-[-1]'>
            <AnimatePresence>
                <motion.div key="modalOne"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='bg-center w-screen sm:w-5/6 bg-cover brightness-50 duration-500'
                    style={{ backgroundImage: `url(${slide[currentImage].src})` }}>
                </motion.div>
                <motion.div
                    key="modalTwo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className='absolute top-[50%] left-[10%] text-5xl text-white duration-800'>
                    {slide[currentImage].title}
                </motion.div>
            </AnimatePresence>
            <div onClick={nextHandler} className='w-0 bg-center  invisible sm:visible sm:w-1/6 bg-cover cursor-pointer 
            brightness-50' style={{ backgroundImage: `url(${slide[nextSlide].src})` }}>

            </div>

            <div onClick={nextHandler} className='invisible text-center sm:visible absolute top-[60%] right-[-80px] text-4xl hover:scale-110 cursor-pointer text-white -rotate-90'>
                {slide[nextSlide].title}
            </div>
            <div onClick={pervHandler} className='absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 text-2xl 
            rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft size={30} />
            </div>
            <div onClick={nextHandler} className='absolute top-[50%] translate-x-0 translate-y-[-50%] right-12 text-2xl 
            rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight size={30} />
            </div>

        </div>
    )
}
