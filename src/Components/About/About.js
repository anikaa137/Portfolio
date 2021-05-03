import React from "react";
import  about from "../../images/about.png";
import "./About.css";
 


// Wrap every letter in a span
// var textWrapper = document.querySelector('.ml14 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml14 .line',
//     scaleX: [0,1],
//     opacity: [0.5,1],
//     easing: "easeInOutExpo",
//     duration: 900
//   }).add({
//     targets: '.ml14 .letter',
//     opacity: [0,1],
//     translateX: [40,0],
//     translateZ: 0,
//     scaleX: [0.3, 1],
//     easing: "easeOutExpo",
//     duration: 800,
//     offset: '-=600',
//     delay: (el, i) => 150 + 25 * i
//   }).add({
//     targets: '.ml14',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
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
                            <h1>Services</h1>npm
                            {/* <h1 class="ml14">
  <span class="text-wrapper">
    <span class="letters">Find Your Element</span>
    <span class="line"></span>
  </span>
</h1> */}

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
