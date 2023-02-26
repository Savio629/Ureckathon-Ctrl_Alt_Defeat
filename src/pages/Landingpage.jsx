
//  import './Landingpage.css';
import React, { useState } from "react";
import img1 from "./img1.png";
import img2 from "./img2.png";
import imgm1 from "./imgm1.png"
import './lpage.css';
//import homepageimg from './assets/homepageimg.png';
import "bootstrap/dist/css/bootstrap.min.css";

const Landingpage = () => {
    const [showImg2, setShowImg2] = useState(false);

    const toggleImg = () => {
      setShowImg2((prevState) => !prevState);
    };
    return (
    <>
        <main>
        <h1 className="logotext">MINDSHINE</h1>
         <img className="imgm"src={imgm1}/>

        <h2 className="mainh2">Find hope, healing, and strength in our community dedicated to improving mental wellness</h2>
        {/* <img src={gifg} alt="loading..." /> */}
              
        <section><div className="imgBx">
            
          
         

          <img src={img1} />
        </div>
        <div className="content">
          <h2>What is Mental Health?</h2>
          <p>
          Mental health is about being emotionally and socially healthy - the way we think, feel and develop relationships - and not merely the absence of a mental health condition.Mental stress, also known as psychological stress, is a type of stress that affects a person's mental and emotional well-being. It can be caused by a wide variety of factors, including work-related pressures, financial difficulties, family problems, relationship issues, and health concerns, among others.
          </p>
        </div>
      </section>
      <section>
        <div className="imgBx">
          <img src={img2} />
        </div>
        <div className="content">
          <h2>Why do we need to address it?</h2>
          <p>
          It is also important to address any underlying issues that may be contributing to mental health challenges. This may include addressing past trauma, improving communication skills, or developing better coping mechanisms.
Ultimately, the key to curing mental health is to approach it holistically and to develop a personalized treatment plan that takes into account each individual's unique needs and circumstances. With the right support, resources, and strategies, it is possible to manage mental health challenges and live a fulfilling and meaningful life.
          </p>
        </div>
      </section>
      <section>
        <div className="imgBx">
          {/* <img
            src={require("./img1.png")}
            onMouseOver={(this.src = require("./img2.png"))}
            onMouseOut={(this.src = require("./img1.png"))}
          /> */}
          <img
            src={showImg2 ? img2 : img1}
            onMouseEnter={toggleImg}
            onMouseLeave={toggleImg}
            alt="Image"
          />
        </div>
        <div className="content">
        <h2>Try to seek positive thought!</h2>
          <p>
          Mental stress is also often viewed as a response to external circumstances or events that cause us to feel anxious, overwhelmed, or worried. Mental stress is not just the result of external factors, but is also shaped by our internal responses and interpretations. By learning to recognize and manage our thoughts and beliefs, we can reduce the impact of mental stress on our well-being and cultivate greater happiness and resilience in our lives.
          </p>
        </div>
      </section>
    </main>
    </>
  )
}

export default Landingpage