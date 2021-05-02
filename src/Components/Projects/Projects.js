// import React from 'react';

// const Projects = () => {
//     return (
//         <div>
//             <section id="works">
//         <div class="container">
//             <div class="section-header">
//                 <h2>My Works</h2>
//                 <h5><em>Lorem Ipsum is simply dummy text of the printing and typesetting industry</em></h5>
//                 <div class="fancy"><span></span></div>
//             </div>

//             <div class="text-center">
//                 <ul class="list-inline cat">
//                     <li><a href="#" data-filter="*" class="active">All</a></li>
//                     <li><a href="#" data-filter=".brand">Design</a></li>
//                     <li><a href="#" data-filter=".web">Web</a></li>
//                     <li><a href="#" data-filter=".app">Apps</a></li>
//                     <li><a href="#" data-filter=".others">Others</a></li>
//                 </ul>
//             </div>

//         </div>

//         <div class="container-fluid">
//              <div id="itemsWork" class="row text-center isotope" style="position: relative; overflow: hidden; height: 432px;">

//                 <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 nopadding brand others isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 0px, 0px);"> <!-- Works #1 col 3 -->
//                     <div class="box">
//                         <div class="hover-bg">
//                             <div class="hover-text off">
//                                 <a title="Logo Identity Design" href="img/portfolio/01.jpg" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/portfolio/01.jpg"/>
//                                     <i class="fa fa-expand"></i>
//                                 </a>
//                                 <a href="#"><i class="fa fa-chain"></i></a>
//                             <img src="img/portfolio/01.jpg" class="img-responsive" alt="Image"/>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 nopadding apps isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(339px, 0px, 0px);"> <!-- Works #2 col 3 -->
//                     <div class="box">
//                         <div class="hover-bg">
//                             <div class="hover-text off">
//                                 <a title="Mobile Application" href="img/portfolio/02.jpg" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/portfolio/02.jpg">
//                                     <i class="fa fa-expand"></i>
//                                 </a>
//                                 <a href="#"><i class="fa fa-chain"></i></a>
//                             </div>
//                             <img src="img/portfolio/02.jpg" class="img-responsive" alt="Image"/>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 nopadding others brand isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(678px, 0px, 0px);"><!-- Works #3 col 3 -->
//                     <div class="box">
//                         <div class="hover-bg">
//                             <div class="hover-text off">
//                                 <a title="Freedom Project #1" href="img/portfolio/03.jpg" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/portfolio/03.jpg">
//                                     <i class="fa fa-expand"></i>
//                                 </a>
//                                 <a href="#"><i class="fa fa-chain"></i></a>
//                             </div>
//                             <img src="img/portfolio/03.jpg" class="img-responsive" alt="Image"/>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3 nopadding others web isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(1017px, 0px, 0px);"> <!-- Works #4 col 3 -->
//                     <div class="box">
//                         <div class="hover-bg">
//                             <div class="hover-text off">
//                                 <a title="Freedom Project #1" href="img/portfolio/04.jpg" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/portfolio/04.jpg">
//                                     <i class="fa fa-expand"></i>
//                                 </a>
//                                 <a href="#"><i class="fa fa-chain"></i></a>
//                             </div>
//                             <img src="img/portfolio/04.jpg" class="img-responsive" alt="Image"/>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-xs-12 col-sm-6 col-md-3 nopadding web others isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(0px, 216px, 0px);"> <!-- Works #5 col 3 -->
//                     <div class="box">
//                         <div class="hover-bg">
//                             <div class="hover-text off">
//                                 <a title="Freedom Project #1" href="img/portfolio/05.jpg" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/portfolio/05.jpg">
//                                     <i class="fa fa-expand"></i>
//                                 </a>
//                                 <a href="#"><i class="fa fa-chain"></i></a>
//                             </div>
//                             <img src="img/portfolio/05.jpg" class="img-responsive" alt="Image"/>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-xs-12 col-sm-6 col-md-3 nopadding app isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(339px, 216px, 0px);">  <!-- Works #6 col 3 -->
//                     <div class="box">
//                         <div class="hover-bg">
//                             <div class="hover-text off">
//                                 <a title="Freedom Project #1" href="img/portfolio/06.jpg" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/portfolio/06.jpg">
//                                     <i class="fa fa-expand"></i>
//                                 </a>
//                                 <a href="#"><i class="fa fa-chain"></i></a>
//                             </div>
//                             <img src="img/portfolio/06.jpg" class="img-responsive" alt="Image"/>
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-xs-12 col-sm-6 col-md-3 nopadding web brand isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(678px, 216px, 0px);"><!-- Works #7 col 3 -->
//                     <div class="box">
//                         <div class="hover-bg">
//                             <div class="hover-text off">
//                                 <a title="Freedom Project #1" href="img/portfolio/07.jpg" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/portfolio/07.jpg">
//                                     <i class="fa fa-expand"></i>
//                                 </a>
//                                 <a href="#"><i class="fa fa-chain"></i></a>
//                             </div>
//                             <img src="img/portfolio/07.jpg" class="img-responsive" alt="Image">
//                         </div>
//                     </div>
//                 </div>

//                 <div class="col-xs-12 col-sm-6 col-md-3 nopadding app isotope-item" style="position: absolute; left: 0px; top: 0px; transform: translate3d(1017px, 216px, 0px);"> <!-- Works #8 col 3 -->
//                     <div class="box">
//                         <div class="hover-bg">
//                             <div class="hover-text off">
//                                 <a title="Freedom Project #1" href="img/portfolio/08.jpg" data-lightbox-gallery="gallery1" data-lightbox-hidpi="img/portfolio/08.jpg">
//                                     <i class="fa fa-expand"></i>
//                                 </a>
//                                 <a href="#"><i class="fa fa-chain"></i></a>
//                             </div>
//                             <img src="img/portfolio/08.jpg" class="img-responsive" alt="Image">
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     </section>
//         </div>
//     );
// };

// export default Projects;