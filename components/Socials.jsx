"use client";
import React from "react";
import { Instagram, Linkedin, Telephone } from "react-bootstrap-icons";


const Socials = () => {
    return (
    <footer id="footer-bottom">   
    <div id="footer-content">
        <p>Connect with us through our socials</p>
        
        <ul id="socials">
        <li><a href="https://www.instagram.com/gpm_studios/" target="_blank" id="bi-instagram"><Instagram size={35} color="black" /></a></li>
        <li><a href="https://shorturl.at/gvyz0" target="_blank" id="bi-instagram"><Linkedin size={35} color="black" /></a></li>
        <li><a href="tel:+233-54-817-5807" target="_blank" id="bi-instagram"><Telephone size={35} color="black" /></a></li>



        

    
        
        </ul>
    </div>
    </footer> 
    )
}

export default Socials