import React from 'react';
//  import './Landingpage.css';
import './lpage.css';
//import homepageimg from './assets/homepageimg.png';


const Landingpage = () => {
  return (
    <>
        <main>
        <div class="big-wrapper">
            <img src="./img/shape.png" class="shape" alt=""/>
            <header>
                <div class="contain">
                    <div >
                        MINDSHINE
                    </div>
                </div>
            </header>

            <div class="showcase-area">
                <div class="container">
                <div class="left">
                    <div class="big-title">
                        <h2 id="start-playing-text">Mind Matters!</h2>
                        <h2 id="start-playing-text">Start Healing!<br></br></h2>
                        
                    </div>
                    <p class="text">You're not alone. MindShine is here to provide you with the support and guidance you need to get back on track. Our interactive tools and resources are here to help you find the right path. Take the first step towards a healthier, happier life today with MindShine.
                    </p>
                </div>
                <div class="right">
                    <img src="./assets/homepageimg1.png" alt=" Image" class="console"/>
                </div>
            </div>              
            </div>

            <div class="bottom-area">
                <div class="container">
                  
                </div>
            </div>
        </div>
    </main>

    </>
  )
}

export default Landingpage