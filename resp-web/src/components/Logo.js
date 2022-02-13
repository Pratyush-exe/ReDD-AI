import React from 'react'
import "../Styles/Logo.css"
import { motion } from 'framer-motion'

function Logo() {

    return (
        <motion.div id="logo-page-containers"
            initial={{background: 'linear-gradient(270deg, rgba(93,93,93,1) 0%, rgba(0,0,0,1) 50%)'}}
            animate={{background: 'linear-gradient(134deg, rgb(106, 152, 240) 0%, rgb(34 55 167) 99%)'}}
            transition={{duration: 0.6}}>
            <div id="logo-container">
                <motion.img id="lungs" src={require("../Images/logo.png")}
                    initial={{scale: 1.5, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.6, type: 'tween'}}/>
                <motion.div id="divider" 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}} 
                    transition={{duration: 0.5, delay: 0.6, type: 'tween'}}>
                </motion.div>
                <motion.h1 id="logo_logo" 
                    initial={{marginLeft: '50px', scaleY: 1.5, opacity: 0}} 
                    animate={{marginLeft: '0px', scaleY: 1, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.6, type: 'tween'}}>
                        ReDD
                </motion.h1>
            </div>
        </motion.div>
    )
}

export default Logo
