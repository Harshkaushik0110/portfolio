import React from 'react';
import { motion } from "framer-motion";

function About() {
    return (
        <div className='border-b pb-4 border-neutral-900'>
            <h2 className='my-20 text-4xl text-center'>
                About
                <span className='text-neutral-600'> Me</span>
            </h2>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <motion.img
                        whileInView={{x:0, opacity:1}}
                        animate={{opacity:1, x:-100}}
                        transition={{duration:0.5}}
                         className='rounded-2xl' src='https://img1.wsimg.com/isteam/ip/e67302b0-44a1-4986-8052-07dc0102848e/About-Me-Transparent-PNG.png/:/rs=w:1240,h:620,cg:true,m/cr=w:1240,h:620' alt='cat image' />

                    </div>

                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center lg:justify-start'>
                        <motion.p
                        whileInView={{x:0, opacity:1}}
                        animate={{opacity:1, x:100}}
                        transition={{duration:0.5}}
                         className='my-2 max-w-xl py-6'>My name is Harsh kaushik, a Full Stack Developer and AI Specialist. I excel in creating efficient and innovative AI-driven solutions and MERN stack applications.<br></br>
                         
                         <b>Education-</b><br></br>•	Bachelor of Technology in Computer Science with specialization in A.I. , pursued with 1st Division from GURUGRAM UNIVERSITY , Gurugram.(2020-2024).<br></br>
•	Senior Higher Secondary(2019-20) done with excellence from S.H. S.N. Sidheshwar Sr. Sec. Public School, Sec-9A , Gurugram.<br></br>
•	Matriculation(2017-18) done with distinction from S.H. S.N. Sidheshwar Sr. Sec. Public School.
                                              
                         </motion.p>
                         
                    </div>
                    <b>Certificates:</b><br></br>
                       1. Python <a href="https://drive.google.com/file/d/1mA-vnVlmzLFEzrS5PCa7yuJ-WoNShktd/view?usp=drive_link">(link)</a> <br></br>
                       2. Social Networks <a href="https://drive.google.com/file/d/1m66y-QSZkGd4DzFxHVoODRGyXL3dznN5/view?usp=drive_link">(link)</a>
                    
                </div>

            </div>
        </div>
    )
}

export default About
