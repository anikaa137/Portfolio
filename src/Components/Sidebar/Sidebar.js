import React from 'react';
import  './Sidebar.css'
const Sidebar = () => {
    return (
        <div class=" col-md-3">
            <nav class="mi-header">
                <button class="mi-header-toggler"><i class="lni-menu size-md "></i></button>
                 
                <div class="mi-header-inner">
                    <div class="mi-header-image"><a href="/"><img alt="brandimage" src="/images/brand-image.jpg"/></a></div>
                        <ul class="mi-header-menu">
                            <li><a aria-current="page" class="active" href="/"><span>Home</span></a></li>
                            <li><a href="/about"><span>About</span></a></li>
                            <li><a href="/resume"><span>Resume</span></a></li>
                            <li><a href="/portfolios"><span>Portfolios</span></a></li>
                            <li><a href="/blogs"><span>Blogs</span></a></li>
                            <li><a href="/contact"><span>Contact</span></a></li>
                        </ul>
                        <p class="mi-header-copyright">© 2021 <b><a rel="noopener noreferrer" target="_blank" href="https://nuclearthemes.com">NuclearThemes</a></b></p>
                    </div>
                    </nav>
        </div>
    );
};

export default Sidebar;