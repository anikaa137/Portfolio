import React from "react";
import "./Projects.css";
import pakkapati from '../../images/pakka.PNG'
import pakkapati2 from '../../images/pakkapati 2.PNG'
import pakkapati3 from '../../images/pakkapati 3.PNG'
import pakkapati4 from '../../images/pakkapati 4.PNG'

import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'



const Projects = () => {
    return (
      <div class="mt-5">
  <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">

      <div class='container'>
        <div class="row">
            <div class='col-md-6'>
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
  </Gallery>
            </div>
            <div class='col-md-6'>
                    <h4>description</h4>
                    <ul>
                      <li>hello</li>
                      <li>hi</li>
                    </ul>
            </div>
        </div>
    </div>
    </div>


      <div class="carousel-item" data-bs-interval="2000">
              <div class='container'>
        <div class="row">
            <div class='col-md-5'>
            <Gallery>
    <Item
      original="https://placekitten.com/1024/768?image=1"
      thumbnail="https://placekitten.com/80/60?image=1"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
      )}
    </Item>
    <Item
      original="https://placekitten.com/1024/768?image=2"
      thumbnail="https://placekitten.com/80/60?image=2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=2" />
      )}
    </Item>
  </Gallery>
            </div>
            <div class='col-md-6'>
                    <h4>description</h4>
                    <ul>
                      <li>hello</li>
                      <li>hi</li>
                    </ul>
            </div>
        </div>
    </div>
    </div>


    <div class="carousel-item">
    <div class='container'>
        <div class="row">
            <div class='col-md-5'>
            <Gallery>
    <Item
      original="https://placekitten.com/1024/768?image=1"
      thumbnail="https://placekitten.com/80/60?image=1"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
      )}
    </Item>
    <Item
      original="https://placekitten.com/1024/768?image=2"
      thumbnail="https://placekitten.com/80/60?image=2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=2" />
      )}
    </Item>
  </Gallery>
            </div>
            <div class='col-md-6'>
                    <h4>description</h4>
                    <ul>
                      <li>hello</li>
                      <li>hi</li>
                    </ul>
            </div>
        </div>
    </div>
    </div>
  </div>


  <button class="carousel-control-prev" style={{colot:'black'}} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" style={{colot:'black'}} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>
    );
};

export default Projects;
