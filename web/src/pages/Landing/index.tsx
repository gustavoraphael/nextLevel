import React from 'react';
import logoImg from '../../assets/images/logo.svg'
import ladingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveGlassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css';

function Landing(){
    return (
        <div id="page-lading">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h1>Sua plataforma do curso</h1>
                </div>

                <img src={ladingImg} alt="Plataforma de estudos" className="hero-image"/>

                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="" className="study">
                        <img src={giveGlassesIcon} alt="Dar aulas"/>
                        Estudar
                    </a>
                </div>

                <span className="total-connections">
                    Total de 200 conexoes já realizadas <img src={purpleHeartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>

        
    )
    
}

export default Landing;