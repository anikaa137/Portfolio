import React, { useEffect } from "react";
import  about from "../../images/about.png";
import "./About.css";
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        Aos.init({duration:2000})
      },[])
    return (
        <section id="about">
            <div class="container">
                <div class="section-header">
                    <h2>
                        Who Am I

                    </h2>
                    <h5>
                        <em>
                        I am an frontend developer with knowing some framework. I know how to work under pressure.
                        </em>
                    </h5>
                    <hr/>
                    <div class="fancy">
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 col-sm-offset-1 scrollimation fade-right in" data-aos="flip-left">
                        <img
                            class="img-responsive img-circle img-center"
                            src={about}
                            alt=""
                        />
                    </div>
                    <div class="col-sm-6 col-sm-offset-1 scrollimation fade-left in">


                        <div class="mi-about-content me-5" data-aos="flip-right">
                            <h3>
                                I am{" "}
                                <span class="color-theme readMore">Amina Anika</span>
                            </h3>
                            <p>
                                I am a frontend web developer. I can provide
                                clean code and pixel perfect design. I also make
                                website more &amp; more interactive with web
                                animations.
                            </p>
                            <ul>
                                <li>
                                    <b>Full Name :</b> Amina Anika
                                </li>
                                <li>
                                    <b> Email :</b>  anikaa137@gmail.com
                                </li>
                                <li>
                                    <b>Contact No :</b>  +880 1842643738
                                </li>
                                <li>
                                    <b>Nationality :</b> Bangladesh
                                </li>
                                <li>
                                    <b>Languages :</b> Bangla, English, Hindi
                                </li>
                                <li>
                                    <b>Address :</b> Chittagong, Bangladesh
                                </li>

                            </ul>
                            {/* <a class="mi-button" href="/files/empty.pdf">
                                Download CV
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>

            <div id="counter" class="text-center mt-5 ">
                <div class="mi-service-area mi-section mi-padding-top">
                    <div class="container">
                        <div class="mi-sectiontitle">
                            <h1 >I love to work</h1>
                            {/* <h1 class="ml14">
  <span class="text-wrapper">
    <span class="letters">Find Your Element</span>
    <span class="line"></span>
  </span>
</h1> */}

                        </div>

                        <div class="d-flex justify-content-evenly mt-5" data-aos="fade-up">
                        <div class="card" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h1 class="card-title text-dark">
                                    Frontend Development
                                </h1>
                                <p class="card-text text-dark">
                                    {" "}
                                    A front-end web developer is responsible for implementing visual and interactive elements that users engage with through their web browser when using a web application. They are usually supported by back-end web developers, who are responsible for server-side application logic and integration of the work front-end developers do.
                                </p>
                            </div>
                        </div>
                        <div class="card" style={{ width: "18rem" }}>
                            <div class="card-body ">
                                <h1 class="card-title text-dark">
                                    Web  Design
                                </h1>
                                <p class="card-text text-dark">
                                    {" "}
                                    Web design is the process of planning, conceptualizing, and arranging content online. Today, designing a website goes beyond aesthetics to include the website’s overall functionality. Web design also includes web apps, mobile apps, and user interface design.
                                </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
