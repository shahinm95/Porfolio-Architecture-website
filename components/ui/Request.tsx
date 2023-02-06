import React, { useState } from 'react'
import { AiFillCloseCircle } from "react-icons/ai"
import { motion } from 'framer-motion';

interface Form {
    name: string;
    last: string;
    phone: number;
    email: string;
    city: string;
    type: string;
    comment: string;
    area: number;
}

interface Void {
    menueHandler: () => void;
    requestHandler: () => void;
    menue: boolean;
}

export default function Request({ requestHandler, menueHandler, menue }: Void) {
    const [formVals, setFormVals] = useState<Form>({
        name: "",
        last: "",
        phone: 0,
        email: "",
        city: "",
        type: "",
        comment: "",
        area: 0,
    })
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        setFormVals({
            name: "",
            last: "",
            phone: 0,
            email: "",
            city: "",
            type: "",
            comment: "",
            area: 0,
        })
        requestHandler();
        if (menue) {
            menueHandler();
        }

    }

    const nameHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormVals(
            {
                ...formVals,
                name: e.currentTarget.value
            }
        )
    }
    const lastHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormVals(
            {
                ...formVals,
                last: e.currentTarget.value
            }
        )
    }
    const phoneHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormVals(
            {
                ...formVals,
                phone: e.currentTarget.valueAsNumber
            }
        )
    }
    const emailHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormVals(
            {
                ...formVals,
                email: e.currentTarget.value
            }
        )
    }

    const cityHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormVals(
            {
                ...formVals,
                city: e.currentTarget.value
            }
        )
    }
    const typeHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormVals(
            {
                ...formVals,
                type: e.currentTarget.value
            }
        )
    }

    const commentHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormVals(
            {
                ...formVals,
                comment: e.currentTarget.value
            }
        )
    }
    const areaHandler = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormVals(
            {
                ...formVals,
                area: e.currentTarget.valueAsNumber
            }
        )
    }


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className='w-screen  h-screen bg-gray-800 pt-2  '>
            <form onSubmit={submitHandler} className="pt-3 mx-auto max-w-[810px]  
            md:my-auto 
            ">
                <div className='w-[80%] mx-auto text-gray-500  bg-gray-100 pb-1 md:my-4
                '>
                    <div className='text-center translate-x-7 inline-block w-[85%] 
                    text-xl pt-2'>Make Request</div>
                    <div onClick={requestHandler}
                        className='inline-block w-fit cursor-pointer  text-2xl pr-2 pt-2 float-right'>
                        <AiFillCloseCircle
                            className="cursor-pointer"
                        />
                    </div>
                    <div className='md:grid md:grid-cols-2 md:py-4 '>
                        <div className=" ">
                            <label
                                className='block my-2 mx-auto px-2 w-[90%]   
                    md:py-2 '
                                htmlFor='name'>Name</label>
                            <input
                                className='block my-2 mx-auto px-2 w-[90%] max-w-[500px] 
                    md:py-2 '
                                onChange={nameHandler} value={formVals.name}
                                required type="text" id="name"></input>
                        </div>
                        <div className=" ">
                            <label
                                className='block my-2 mx-auto px-2 w-[90%] 
                    md:py-2 '
                                htmlFor='last'>Last Name</label>
                            <input
                                className='block my-2 mx-auto px-2 w-[90%] max-w-[500px] 
                    md:py-2 '
                                onChange={lastHandler} value={formVals.last}
                                required type="text" id="last"></input>
                        </div>
                        <div className="">
                            <label
                                className='block my-2 mx-auto px-2 w-[90%]  
                    md:py-2 '
                                htmlFor='phone'>Phone</label>
                            <input
                                className='block my-2 mx-auto px-2 w-[90%] max-w-[500px] 
                    md:py-2 '
                                onChange={phoneHandler} value={formVals.phone}
                                required type="number" id="phone"></input>
                        </div>
                        <div className="">
                            <label
                                className='block my-2 mx-auto px-2 w-[90%]  
                    md:py-2 '
                                htmlFor='email'>Email</label>
                            <input
                                className='block my-2 mx-auto px-2 w-[90%] max-w-[500px] 
                    md:py-2 '
                                onChange={emailHandler} value={formVals.email}
                                required type="email" id="email"></input>
                        </div>
                        <div className="">
                            <label
                                className='block my-2 mx-auto px-2 w-[90%]  
                    md:py-2 '
                                htmlFor='city'>Your City</label>
                            <input
                                className='block my-2 mx-auto px-2 w-[90%] max-w-[500px] 
                    md:py-2 '
                                onChange={cityHandler} value={formVals.city}
                                required type="text" id="city"></input>
                        </div>
                        <div className="">
                            <label
                                className='block my-2 mx-auto px-2 w-[90%]  
                    md:py-2 '
                                htmlFor='type'>Property Type</label>
                            <input
                                className='block my-2 mx-auto px-2 w-[90%] max-w-[500px] 
                    md:py-2 '
                                onChange={typeHandler} value={formVals.city}
                                required type="text" id="type"></input>
                        </div>
                        <div className="">
                            <label
                                className='block my-2 mx-auto px-2 w-[90%]  
                    md:py-2 '
                                htmlFor='comment'>Your Comment</label>
                            <input
                                className='block my-2 mx-auto px-2 w-[90%] max-w-[500px] 
                    md:py-2 '
                                onChange={commentHandler} value={formVals.comment}
                                required type="text" id="comment"></input>
                        </div>
                        <div className="">
                            <label
                                className='block my-2 mx-auto px-2 w-[90%]  
                    md:py-2 '
                                htmlFor='area'>Area</label>
                            <input
                                className='block my-2 mx-auto px-2 w-[90%] max-w-[500px] 
                    md:py-2  '
                                onChange={areaHandler} value={formVals.area}
                                required type="number" id="area"></input>
                        </div>
                    </div>
                </div>
                <button type='submit'
                    className="border bg-white border-white  hover:bg-gray-800 hover:text-white
                        px-7 py-3 mt-[8%] mx-auto block transition-colors  duration-500 md:my-12
                        ">
                    Send Request
                </button>
            </form>
        </motion.div>
    )
}
