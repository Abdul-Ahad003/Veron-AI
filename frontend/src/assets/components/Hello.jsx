import React, { useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";


const Hello = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [showheading, setshowheading] = useState(true)
    const [promptarray, setpromptarray] = useState([])
    const [responsearray, setresponsearray] = useState([])
    const [loading, setloading] = useState(false)




    const getData = async () => {
        setloading(true)

        const a = await fetch("https://veron-ai-assistant.onrender.com/api", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ prompt: prompt }) })
        const b = await a.json()

        if (b) {
            setloading(false)
        }
        if (Object.keys(b).length == 1) {
            setresponsearray([...responsearray, b.message])
        } else {
            //setResponse(b.data.message)
            setresponsearray([...responsearray, b.data.message])
        }
    }

    const handleChange = (e) => {
        setPrompt(e.target.value)

    }

    const handleSubmit = () => {
        let n = [...promptarray, prompt]
        setpromptarray(n)
        setPrompt('')
        setshowheading(false)
        getData()
    }

    const copyText = (value) => {
        navigator.clipboard.writeText(value)
    }

    return (

        <>
            <section className=' md:min-h-[75vh] min-h-[84vh] md:px-20 px-5 py-5'>

                {showheading && <div className='  md:text-[50px] text-[24px] font-semibold py-10  flex justify-center text-fuchsia-600 '>Hello, how can i help you?</div>}
                {promptarray &&
                    promptarray.map((item, ind) => {
                        return <React.Fragment key={ind}> <div className=' flex justify-end'> <p className=' rounded-full bg-gray-200 mx-10 py-1.5 px-2.5'>{item}</p> </div>
                            <div className=' flex mt-3 gap-5'>

                                <img src='./images/e.png' className=' w-6 h-6' alt='' />
                                <div>
                                    <BeatLoader
                                        color="#2e43e8"
                                        loading={loading}
                                        size={15}
                                    />
                                </div>
                                <div className=' max-w-[80vw] '><p className=' text-start'>{responsearray.length === promptarray.length && responsearray[ind].split('\n').map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}</p> <span onClick={() => { copyText(responsearray[ind]) }}>{responsearray.length === promptarray.length && <img className=' w-6 h-6 my-4 cursor-pointer' src='./copy.svg' alt='' />} </span> </div>
                            </div>
                        </React.Fragment>
                    })
                }
            </section>

            <footer className='sticky bottom-0 bg-white md:my-4 my-2 px-10' >
                <div className=' flex items-center justify-center w-full gap-2 '>
                    <input className=' min-h-3 bg-[#d6d3d3] w-full pl-5 pr-3 py-3 outline-none border-none rounded-full' onChange={handleChange} type='text' value={prompt} placeholder='Enter message' />
                    <button className=' bg-blue-600 rounded-full  py-1 px-1.5' onClick={handleSubmit} type='submit'><img className=' w-8 h-8' src='./send.svg' alt='' /></button>
                </div>
            </footer>
        </>


    );
};

export default Hello;
