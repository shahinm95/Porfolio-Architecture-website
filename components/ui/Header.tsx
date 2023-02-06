import React, { useState } from 'react'
import useScrollPosition from '../customHooks/useScrollPosition'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface Void {
    menueHandler: () => void;
    requestHandler: () => void;
}


export default function Header({ menueHandler, requestHandler }: Void) {

    const scrollPosition = useScrollPosition()
    function classNames(...classes: string[]): string {
        return classes.filter(Boolean).join(" ")
    }


    return (
        <div className={classNames(scrollPosition > 199 ?
            "bg-gray-100 items-center text-black"
            : "bg-transparent sm:items-end items-end text-white",
            "flex justify-between h-20  transition pl-5 sm:px-16 w-screen sticky z-10 top-0 duration-500")}
        >
            <div className='flex justify-between w-2/3 sm:w-1/3'>
                <Link href="#home" className='float-left  sm:pr-5  sm:pt-0 font-bold'>SHAHIN DESIGN</Link>
                <div className='flex float-right '>

                    <Link href="#projects" className='pr-5  hidden xl:block'>Projects</Link>
                    <Link href="#about" className='pr-5  hidden xl:block'>About US</Link>
                    <Link href="#contacts" className=' hidden xl:block'>Contacts</Link>
                </div>
                <div onClick={menueHandler}
                    className={classNames(scrollPosition > 199 ? 'before:bg-black after:bg-black'
                        : 'before:bg-white after:bg-white'
                        , 'before:w-8 before:block before:h-1 before:content-[""] sm:left-80 hidden sm:block cursor-pointer before:mb-2   absolute  after:w-8 after:h-1 after:content-[""] after:block after:top-20 xl:hidden')
                    } >
                </div>
            </div>
            <div className='flex justify-end w-1/6 sm:w-2/3  duration-0 '>
                <button
                    onClick={requestHandler}
                    className={classNames(scrollPosition > 199 ?
                        "border border-black  hover:bg-black hover:text-white items-center" :
                        "border border-white  hover:bg-white hover:text-black",
                        "sm:px-7 sm:py-3 hidden sm:block transition-colors  duration-500")}>Make a Request</button>
                <motion.div
                    onClick={menueHandler}
                    animate={{ y: 30 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className={classNames(scrollPosition > 199 ? 'before:bg-black after:bg-black items-center'
                        : 'before:bg-white after:bg-white items-end pt-7'
                        , 'before:w-8 before:block before:h-1 before:content-[""] sm:left-80 sm:hidden cursor-pointer before:mb-2 top-0 absolute  right-10 after:w-8 after:h-1 after:content-[""] after:block after:top-20 block xl:hidden')
                    } >
                </motion.div>
            </div>

        </div>
    )
}
