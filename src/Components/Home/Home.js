import React from 'react';
import Typical from 'react-typical'
// import About from '../About/About';
// import Navbar from '../Navbar/Navbar';
import './Home.css'
const Home = () => {
    return (
        <>
             <section  id="home">
            {/* <Navbar></Navbar> */}
             <div class="overlay">
            <div class="container">
                <div class="content-heading text-center">
                <h1 class="ml11">
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
                                    Frontend Developer
                                </h1>
                    <p class="lead">I Love to create beautiful and amazing Websites.</p>
                    <a href="#works" class="scroll goto-btn">Download Resume</a>
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