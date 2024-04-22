import React from "react";
import './Home.css';
import Header from '../Header/Header.jsx';
import imgArrow from '../assets/img/Arrow.png';
import imgBooks from '../assets/img/vecteezy_book.png';
import tg from '../assets/icons/telegramm.svg';
import whatsapp from '../assets/icons/watsapp.svg';

function Home() {
    return (
        <section id="home" className={"home"}>
            <Header />
            <div className="container">
                <div className="content">
                    <div className="text_wrapper">
                        <h1>Онлайн-платформа для <span className="yellow-text">дошкольного</span> образования</h1>
                        <span>
                            Добро пожаловать на нашу платформу "Дай пять", где процесс обучения становится увлекательным и эффективным для самых маленьких. Мы предлагаем уникальные тесты и материалы, разработанные специально для дошкольного образования. Наши уроки помогут детям развивать навыки, осваивать новые знания и готовиться к школе, играя и веселясь. Давайте вместе откроем великий мир обучения!
                        </span>
                    </div>
                    <div className="home-content-wrapper">
                    <img src={imgArrow} alt="arrow" className="img-arrow" />
                        
                        <div className="wrapper_social_media">
                            <button >Записаться на обучение</button>
                            <div className="social_media">
                                <span>или написать:</span>
                                <a href="#"><img src={tg} alt="telegram" /></a>
                                <a href="#"><img src={whatsapp} alt="whatsApp" /></a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <img className="img-books" src={imgBooks} alt="books" />
                
            </div>
        </section>
    )
}

export default Home;