import React from 'react'
import "../Styles/NameCard.css"
import { motion } from 'framer-motion'

const NameCard = ({imgUrl, name, prof, loc, college, github, linkedin}) => {
    
    function openGithub() {
        window.open(github)
    }

    function openLinkedin() {
        window.open(linkedin)
    }

    return (
        <motion.div className="Card"   
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
            }}>
            <img className="DP" src={imgUrl} alt="Image not availanle"/>
            <div className="nameCont">
                <h4 className="name"> {name} </h4>
                <div className="linksCont">
                    <svg aria-hidden="true" className="github" height="24" viewBox="0 0 16 16" width="24" onClick={openGithub}>
                        <path fill-rule="evenodd" fill="white" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                    <svg viewBox="0 50 512 512" className="linkedin" height="24" width="24" onClick={openLinkedin}>
                        <path fill="white" d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
                        C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
                        M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
                        c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
                        s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"/>
                    </svg>
                </div>
            </div>
            <div className="details">
                <p>● {prof} </p>
                <p>● {loc} </p>
                <p>● {college} </p>
            </div>
        </motion.div>
    )

}

export default NameCard

