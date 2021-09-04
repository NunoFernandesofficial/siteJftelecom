import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import '../css/About.css'

function About() {
    return (
        <div className="flex-container">
        <div className="main-container" id="about">
            <div className="main">
            <h1 className="main1">Quem Somos?</h1>
            <h2 className="main2">Bem vindo á Jftelecom!<br/>Uma empresa criada em 2017 com
                o objetivo de concretizar o projeto que sempre idealizou.
                Somos uma empresa 100% portuguesa composta por dois trabalhadores com imenso gosto pelo que fazem.
                Para mais informações vejam oresto do nosso website ou contacte-nos que teremos todo o gosto em falar consigo!</h2>
                </div>
               
        </div>
        </div>
    )
}

export default About
