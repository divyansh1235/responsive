import React from "react";
import { NavLink } from "react-router-dom";
const img ="https://w7.pngwing.com/pngs/723/883/png-transparent-netflix-app-logo-tech-companies-thumbnail.png"
const Home = () => {
    return (  
        <> 
        <section>
            <div className="row">
            <div className="col-10 mx-auto">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                    Welcome to the <strong>Netflix</strong>
                </h1>
                <h2 className="my-3">
                    I am the developer of this website
                </h2>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={img} alt="homeimg"/>
            </div>
                <div className="mt-3">
                <NavLink to="/Service" className="btn-get-started">
                Get Started
                </NavLink>
                </div>

            </div>
           
            </div>
            </div>
        <h1>
            
        </h1>
        </section>
        </>
    );
}
 
export default Home;