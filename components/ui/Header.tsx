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
            : "bg-transparent sm:items-end text-white",
            "flex justify-between h-20  transition px-16 sticky z-10 top-0 duration-500")}
        >
            <div className='flex justify-between w-2/3 sm:w-1/3'>
                <Link href="#home" className='float-left min-w-max sm:pr-5 pt-7 sm:pt-0  font-bold'>SHAHIN DESIGN</Link>
                <div className='flex float-right '>

                    <Link href="#projects" className='pr-5 min-w-max invisible xl:visible'>Projects</Link>
                    <Link href="#about" className='pr-5 min-w-max invisible xl:visible'>About US</Link>
                    <Link href="#contacts" className='min-w-max invisible xl:visible'>Contacts</Link>
                </div>
                <div onClick={menueHandler}
                    className={classNames(scrollPosition > 199 ? 'before:bg-black after:bg-black'
                        : 'before:bg-white after:bg-white'
                        , 'before:w-8 before:block before:h-1 before:content-[""] sm:left-80 invisible sm:visible cursor-pointer before:mb-2   absolute  after:w-8 after:h-1 after:content-[""] after:block after:top-20 xl:invisible')
                    } >
                </div>
            </div>
            <div className='flex justify-end w-1/6 sm:w-2/3 invisible sm:visible duration-0 '>
                {/* <button className='sm:pr-5 mr-["-20"] visible relative sm:relative '>En</button> */}
                <button
                    onClick={requestHandler}
                    className={classNames(scrollPosition > 199 ?
                        "border border-black  hover:bg-black hover:text-white" :
                        "border border-white  hover:bg-white hover:text-black",
                        "sm:px-7 sm:py-3 px-0 py-0 transition-colors  duration-500")}>Make a Request</button>
                <motion.div
                    onClick={menueHandler}
                    animate={{ y: 30 }}
                    transition={{ ease: "easeOut", duration: 1 }}
                    className={classNames(scrollPosition > 199 ? 'before:bg-black after:bg-black'
                        : 'before:bg-white after:bg-white'
                        , 'before:w-8 before:block before:h-1 before:content-[""] sm:left-80 sm:invisible cursor-pointer before:mb-2 top-0 absolute  right-10 after:w-8 after:h-1 after:content-[""] after:block after:top-20 visible xl:invisible')
                    } >
                </motion.div>
            </div>

        </div>
    )
}
