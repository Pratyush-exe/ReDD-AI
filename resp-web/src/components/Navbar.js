import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNavbar } from '../components/styled-components/Navbar.styled';
import '../Styles/Navbar.css'

const Navbar = () => {
  return <StyledNavbar>
  		<Link to="/">
	  	<div id="logo-container-nav">
			<img id="lungs-nav" src={require("../Images/logo.png")}
				initial={{scale: 1.5, opacity: 0}}
				animate={{scale: 1, opacity: 1}}
				transition={{duration: 0.5, delay: 0.6, type: 'tween'}}/>
			<div id="divider-nav" 
				initial={{opacity: 0}}
				animate={{opacity: 1}} 
				transition={{duration: 0.5, delay: 0.6, type: 'tween'}}>
			</div>
			<h1 id="logo_logo-nav" 
				initial={{marginLeft: '50px', scaleY: 1.5, opacity: 0}} 
				animate={{marginLeft: '0px', scaleY: 1, opacity: 1}}
				transition={{duration: 0.5, delay: 0.6, type: 'tween'}}>
					ReDD
			</h1>
		</div>
		</Link>
		<ul>
			<li><a href="https://github.com/Pratyush-exe/Respiratory-Diseases-Detection/tree/main" target="_blank">Github</a></li>
			<li><Link to="/FAQ">FAQs</Link></li>
			<li><Link to="/Team">Team</Link></li>
		</ul>
  	</StyledNavbar>;
};

export default Navbar;
