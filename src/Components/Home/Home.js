import React from 'react';
import Typical from 'react-typical'
import './Home.css'
const Home = () => {
    return (
        <>
             <section  id="home">

             <div class="overlay">
            <div class="container">
                <div class="content-heading text-center">
                <h1 class="ml11 ">
                                    {/* <Typical
                                        steps={['I am a', 1000, 'Frontend Developer', 2500]}
                                        loop={Infinity}
                                        wrapper="p"
                                    /> */}
                                    <Typical
                                        steps={['I am', 1000, 'Amina Anika', 2500]}
                                        loop={Infinity}
                                        wrapper="p"
                                    />

                            </h1>
                            <h2 class= "ml11 readMore"> Frontend Developer</h2>
                    <p class="lead">I Love to create beautiful and amazing Websites.</p>
                    <a href='https://drive.google.com/uc?export=download&id=1S0Pefi_6ZPLTGxxJLaC1X_GUI3F84UjN' class="scroll goto-btn">Download Resume</a>
                </div>
        </div>
        </div>
        </section>
        <section  class="intro">
        <div class="container">
            <div class="row">

                <div class="col-md-8 col-md-offset-2">
                     <h1>I Love to create beautiful Websites.</h1>
                    <p class="lead">Please go through my Profile.</p>
                </div>

            </div>
                </div>

    </section>
    {/* <About></About> */}
    </>
    );
};

export default Home;