import React from "react";
import  about from "../../images/about.png";
import "./About.css";
const About = () => {
    return (
        <section id="about">
            <div class="container">
                <div class="section-header">
                    <h2>
                        Who Am I

                    </h2>
                    <h5>
                        <em>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting.
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
                    <div class="col-sm-4 col-sm-offset-1 scrollimation fade-right in">
                        <img
                            class="img-responsive img-circle img-center"
                            src={about}
                            alt=""
                        />
                    </div>
                    <div class="col-sm-6 col-sm-offset-1 scrollimation fade-left in">


                        <div class="mi-about-content me-5">
                            <h3>
                                I am{" "}
                                <span class="color-theme">Amina Anika</span>
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
                                    <b>Age :</b> 20 Years
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
                                <li>
                                    <b>Freelance :</b> Available
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
                            <h1>Services</h1>

                        </div>

                        <div class="d-flex justify-content-evenly mt-5">
                        <div class="card" style={{ width: "18rem" }}>
                            <div class="card-body">
                                <h1 class="card-title text-dark">
                                    Web Development
                                </h1>
                                <p class="card-text text-dark">
                                    {" "}
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Autem tenetur ratione
                                    quod.
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
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Autem tenetur ratione
                                    quod.
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
