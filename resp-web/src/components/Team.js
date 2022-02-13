import React from 'react'
import "../Styles/Team.css"
import {TeamData} from "../Data/TeamData"
import NameCard from '../components/NameCard'
import Navbar from './Navbar'

function Team() {
    return (
        <div id="Teams-Container">
            <Navbar />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" id="curve">
			    <path fill="#000b76" fill-opacity="1" d="M0,64L21.8,101.3C43.6,139,87,213,131,250.7C174.5,288,218,288,262,261.3C305.5,235,349,181,393,149.3C436.4,117,480,107,524,122.7C567.3,139,611,181,655,202.7C698.2,224,742,224,785,202.7C829.1,181,873,139,916,112C960,85,1004,75,1047,85.3C1090.9,96,1135,128,1178,133.3C1221.8,139,1265,117,1309,101.3C1352.7,85,1396,75,1418,69.3L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path>
		    </svg>
            <div id="Cards-Container">
                {TeamData.map(({imgUrl, name, prof, loc, college, github, linkedin}) => {
                    return (
                        <NameCard 
                            imgUrl={imgUrl} 
                            name={name} 
                            prof={prof} 
                            loc={loc} 
                            college={college}
                            github={github}
                            linkedin={linkedin}
                        />
                    )
                })}
            </div>            
        </div>
    )
}

export default Team
