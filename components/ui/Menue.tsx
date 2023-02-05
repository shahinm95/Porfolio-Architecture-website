import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Link from 'next/link';
interface Void {
    menueHandler: () => void;
    requestHandler: () => void;
}

export default function Menue({ menueHandler, requestHandler }: Void) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className='bg-gray-800  w-full 
        px-10 text-white
        h-full block '>
            <div className='text-l pt-5 font-bold inline-block '>SHAHIN DESIGN</div>
            <div onClick={menueHandler}
                className='inline-block cursor-pointer text-2xl pt-5 float-right'>
                <AiFillCloseCircle />
            </div>
            <div className='pt-20 block text-center' >
                <Link onClick={menueHandler} href="#home" className='text-3xl block mx-auto mt-10'>Home</Link>
                <Link onClick={menueHandler} href="#projects" className='text-3xl block mx-auto mt-10'>Projects</Link>
                <Link onClick={menueHandler} href="#about" className='text-3xl block mx-auto mt-10'>About Us</Link>
                <Link onClick={menueHandler} href="#contacts" className='text-3xl block mx-auto mt-10'>Contacts</Link>
                <button
                    onClick={requestHandler}
                    className="bg-white  relative  my-10 text-black
                 hover:border-white border mx-auto block mt-20
                        px-7 py-3 transition-colors hover:bg-gray-800 
                        hover:text-white duration-500">
                    Make a Request
                </button>
            </div>
            <div className='flex justify-between pb-6 text-sm'>
                <div>office@shahin.design</div>
                <div>+00 000 000 000</div>
            </div>
        </motion.div>
    )
}
