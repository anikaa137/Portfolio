import React, { useEffect } from "react";
import "./Projects.css";
import pakkapati from '../../images/pakka.PNG'
import pakkapati2 from '../../images/pakkapati 2.PNG'
import pakkapati3 from '../../images/pakkapati 3.PNG'
import pakkapati4 from '../../images/pakkapati 4.PNG'

import happymart from '../../images/happymart.PNG'
import  happymart1 from '../../images/happymart1.PNG'
import  happymart2 from '../../images/happymart2.PNG'
import  happymart3 from '../../images/happymat3.PNG'

import    vroom from '../../images/vroom.PNG'
import  vroom1 from '../../images/vroom1.PNG'
import   vroom2 from '../../images/vroom2.PNG'
import    vroom3 from '../../images/vroom4.PNG'

import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import Aos from 'aos';
import 'aos/dist/aos.css'



const Projects = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  },[])

  return (
    <div id="projects" data-aos="fade-up">
       <div class="mt-5 mb-5 p-5 ">
        <h1 className="projects text-center ml11 readMore">My projects </h1>
        <br />
        <br/>
<div  id="carouselExampleIndicators" class="carousel slide shadow-lg p-3 mb-5 bg-body rounded projects"  data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class='container'>
        <div class="row">
            <div class='col-md-6' data-aos="fade-left">
            <Gallery>
    <Item
      original={pakkapati}
      thumbnail={pakkapati}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
                          <img ref={ref} onClick={open} class="shadow p-3 mb-5 bg-body rounded" alt='' src={pakkapati} style={{width:'200px',height:'200px', margin:"7px", cursor:'pointer'}}/>
      )}
    </Item>
    <Item
      original={pakkapati2}
      thumbnail={pakkapati2}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={pakkapati2} class="shadow p-3 mb-5 bg-body rounded" style={{width:'200px',height:'200px',margin:"7px", cursor:'pointer'}}/>
      )}
                      </Item>
                      <Item
      original={pakkapati3}
      thumbnail={pakkapati3}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={pakkapati3} class="shadow p-3 mb-5 bg-body rounded" style={{width:'200px',height:'200px',margin:"7px", cursor:'pointer'}}/>
      )}
                      </Item>
                      <Item
      original={pakkapati4}
      thumbnail={pakkapati4}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={pakkapati4} class="shadow p-3 mb-5 bg-body rounded" style={{width:'200px',height:'200px',margin:"7px", cursor:'pointer'}}/>
      )}
  </Item>
                      <h5 class="text-center">Click on the images!</h5>
  </Gallery>
            </div>
            <div class='col-md-6' data-aos="fade-right">
                    <h3 class="text-center"> Flooring Service</h3>
                    <hr/>
                    <br/>
                    <h5 class="text-center">It’s a full-stack web site that offers different types of service for  flooring.</h5>
                    <br/>
                    <ul>
                      <li>Login and Logout Functionality by the using of google chrome</li>
                      <li>Users can order any particular service and have to pay for the service.</li>
                      <li>Users will be able to make payments via Visa Card .</li>
                      <li>Users can give a review from her/his dashboard which will be shown to the home page.</li>
                      <li>Login and Logout Functionality .</li>
                      <li>An admin can make another one as admin.</li>
                    </ul>
                    <br/>
                    <a class="btn   mx-5" href="https://pakkapati-flooring-service.web.app/" role="button"> live </a>


                    <a class="btn " href="https://github.com/anikaa137/Flooring-Service-client" role="button">Github</a>

            </div>
        </div>
    </div>
    </div>
    <div class="carousel-item">
    <div class='container'>
        <div class="row">
            <div class='col-md-6'data-aos="fade-right">
            <Gallery>
    <Item
      original={happymart}
      thumbnail={happymart}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
                          <img ref={ref} onClick={open} class="shadow p-3 mb-5 bg-body rounded" alt='' src={happymart} style={{width:'200px',height:'200px', margin:"7px", cursor:'pointer'}}/>
      )}
    </Item>
    <Item
      original={happymart1}
      thumbnail={happymart1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={happymart1} class="shadow p-3 mb-5 bg-body rounded" style={{width:'200px',height:'200px',margin:"7px", cursor:'pointer'}}/>
      )}
                      </Item>
                      <Item
      original={happymart2}
      thumbnail={happymart2}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={happymart2} class="shadow p-3 mb-5 bg-body rounded" style={{width:'200px',height:'200px',margin:"7px", cursor:'pointer'}}/>
      )}
                      </Item>
                      <Item
      original={happymart3}
      thumbnail={happymart3}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={happymart3} class="shadow p-3 mb-5 bg-body rounded" style={{width:'200px',height:'200px',margin:"7px", cursor:'pointer'}}/>
      )}
                      </Item>
                      <h5 class="text-center">Click on the images!</h5>

  </Gallery>
            </div>
            <div class='col-md-6'data-aos="fade-left">
                    <h3 class="text-center">HAPPY Mart</h3>
                    <hr />
                    <br/>
                    <h5 class="text-center">It’s a full-stack website made as an online grocery shop.
</h5>
                      <br/>

                    <ul>
                      <li>Login and Logout Functionality by the using of google chrome</li>
                      <li>Users can order any products of any quantity.</li>
                      <li>User can see their order list.</li>
                      <li>Admin can add products with images using imgbb.</li>
                      <li>Admin can delete any product which will be removed from the home page also mongoDB database  collection.</li>
                    </ul>
                      <br/>
                    <a class="btn   mx-5" href="https://happy-mart-fdc30.web.app/" role="button"> live </a>


                    <a class="btn " href="https://github.com/anikaa137/Happy-mart-client" role="button">Github</a>
            </div>
        </div>
    </div>
    </div>
    <div class="carousel-item">
    <div class='container'>
        <div class="row">
            <div class='col-md-6'data-aos="fade-left">
            <Gallery>
    <Item
      original={vroom}
      thumbnail={vroom}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
                          <img ref={ref} onClick={open} class="shadow p-3 mb-5 bg-body rounded" alt='' src={vroom} style={{width:'200px',height:'200px', margin:"7px", cursor:'pointer'}}/>
      )}
    </Item>
    <Item
      original={vroom1}
      thumbnail={vroom1}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={vroom1} class="shadow p-3 mb-5 bg-body rounded" style={{width:'200px',height:'200px',margin:"7px", cursor:'pointer'}}/>
      )}
                      </Item>
                      <Item
      original={vroom2}
      thumbnail={vroom2}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={vroom2} class="shadow p-3 mb-5 bg-body rounded" style={{width:'200px',height:'200px',margin:"7px", cursor:'pointer'}}/>
      )}
                      </Item>
                      <Item
      original={vroom3}
      thumbnail={vroom3}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} alt='' src={vroom3} class="shadow p-3 mb-5 bg-body rounded" style={{width:'200px',height:'200px',margin:"7px", cursor:'pointer'}}/>
      )}
                      </Item>
                      <h5 class="text-center">Click on the images!</h5>

  </Gallery>
            </div>
            <div class='col-md-6'data-aos="fade-right">
                    <h3 class="text-center">Vroom Riders</h3>
                    <hr/>
                    <br/>
                    <h5 class="text-center">It’s a rider website.From the home page user can take a ride
    of his choice.
</h5>
          <br/>
                    <ul>
                      <li>Users can use Bus, Car or Bike to go to their destination.</li>
                      <li>Users can set their destination to use google map.</li>
                      <li>Users can see their chosen vehicles on the destination page.</li>
                      <li> Login and Logout Functionality .</li>
                      <li>Login and Logout Functionality .</li>

                    </ul>
                  <br/>
                    <a class="btn   mx-5" href="https://vroom-riders.firebaseapp.com/" role="button"> live </a>


                    <a class="btn " href="https://github.com/anikaa137/VRoom-Riders" role="button">Github</a>
            </div>
        </div>
    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>

    </div>
        );
};

export default Projects;

