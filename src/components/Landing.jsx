import React, { Component, useEffect, useRef, useState} from 'react'
import gsap from 'gsap'; 
//SASS
import '../scss/landing.scss'; 
//ASSETS
import menu from '../assets/menu.png';
import avatar from '../assets/avatar.jpg';
import search from '../assets/search.png'; 
import tent from '../assets/1-tent.jpg';
import snow from '../assets/2-snow.jpg';
import river from '../assets/3-river.jpg';
import desert from '../assets/4-mountain.jpg';
import mount from '../assets/5-desert.jpg';
import egypt from '../assets/egypt-01.png'; 
import japan from '../assets/japan-01.png';
import vid from '../assets/video.mp4';  
const Landing = () => {
    
    
    let landing = useRef(null); 
    let logo = useRef(null); 
    let menuIcon = useRef(null); 
    let Stories = useRef(null); 
    let Blog = useRef(null); 
    let profil = useRef(null); 
    let hey = useRef(null); 
    let vacationP = useRef(null); 
    let buttonL = useRef(null); 
    let pRightPage = useRef(null); 
    let SearchR = useRef(null); 
    let d1 = useRef(null); 
    let d2 = useRef(null); 
    let d3 = useRef(null); 
    let d4 = useRef(null); 
    let d5 = useRef(null); 
    let f1 = useRef(null); 
    let f2 = useRef(null); 
    let f3 = useRef(null); 
    let f4 = useRef(null); 
    // let d5 = useRef(null); 
    // let logo = useRef(null); 
    
    useEffect(()=>{
        gsap.to(landing , {
            duration: 2,
            opacity:1,
            ease:'power3.inOut', 
        })

        gsap.from(logo, {
            duration:1, 
            delay:.3,
            y: -200, 
            ease:"power3.inOut"
        })

        gsap.from([menuIcon, Stories,Blog, profil], {
            duration: 1, 
            delay: .5,
            y: -200,
            ease: "power3.inOut", 
            stagger: {
                amount: 0.3
            }
        })

        gsap.from([hey, vacationP, buttonL], {
            duration: 1, 
            delay:.7, 
            y: 1200,
            ease: "power3.inOut", 
            stagger: {
                amount: .3
            }
        })

        gsap.from([pRightPage, SearchR], {
            duration: 1, 
            delay:.9,
            x: 520,
            ease: "power3.inOut", 
            stagger: {
                amount: .4
            }
        })

        gsap.from([d1, d2,d3,d4,d5], {
            duration: 1, 
            delay: 1.5, 
            x: 530, 
            ease: "power3.inOut",
            stagger : {
                amount:.3
            }
        })
        gsap.from([f1, f2,f3,f4], {
            duration: 1, 
            delay: 1, 
            x: 530, 
            ease: "power3.inOut",
            stagger : {
                amount:.3
            }
        })

    })
    // render() {
        return (
            <div ref={el => (landing = el)} className="landing">
                <header>
                    <h3 ref={el => (logo = el)}>Viajes.</h3>
                    <ul className="nav-items">
                        <li ref={el => (menuIcon = el)}><img src={menu} alt=""/></li>
                        <li ref={el => (Stories = el)}><a href="#">Stories</a></li>
                        <li ref={el => (Blog = el)}><a href="#">Blog</a></li>
                        <li ref={el => (profil = el)}><img src={avatar} alt="" className="avatar"/></li>
                    </ul>
                </header>

                <div className="content">
                    
                    <div className="leftPage">
                        <p className="firstP" ref={el => (hey = el)}>Hey,</p>
                        <p className="secondP" ref={el => (vacationP = el)}>Where are you going on <span className="span">Vacation</span>  now? </p>
                        <button ref={el => (buttonL = el)}>Get Started</button>
                    </div>

                    <div className="rightPage">
                        <p className="rightPageP" ref={el => (pRightPage = el)}>
                            Let's enjoy <br /> your vacation!! 
                        </p>
                        <div className="inputDiv" ref={el => (SearchR = el)}>
                            <input type="text" name="" id="" placeholder="Type here for search"/>
                            <img src={search} alt=""/>
                        </div>

                        <div className="destinations">
                            <div ref={el => (d1 = el)}><img src={river} alt=""/></div>
                            <div ref={el => (d2 = el)}><img src={snow} alt=""/></div>
                            <div ref={el => (d3 = el)}><img src={mount} alt=""/></div>
                            <div ref={el => (d4 = el)}><img src={desert} alt=""/></div>
                            <div ref={el => (d5 = el)}><img src={tent} alt=""/></div>
                        </div>

                        <ul className="filters">
                            <li ref={el => (f1 = el)}><a href="#">All</a></li>
                            <li ref={el => (f2 = el)}><a href="#">New</a></li>
                            <li ref={el => (f3 = el)}><a href="#">Most Viewed</a></li>
                            <li ref={el => (f4 = el)}><a href="#">Recomended</a></li>
                        </ul>

                        <div className="viajes">
                            <div className="tokyo">
                                <img src={japan} alt=""/>
                                <p>Hiroshima <br/> Historic Kyoto</p>
                                <span>Japan</span>

                            </div>
                            <div className="giza">
                                <img src={egypt} alt=""/>
                                <p>Pyramids of<br/> Temple Giza</p>
                                <span>Egypt</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    // }
}

export default Landing
