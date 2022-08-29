import Home_Img_1 from "../../assets/img/Home-img-1.png";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import Img from "../../assets/img/img.png";
import ScrollReveal from 'scrollreveal';
const Story = (props) => {
  useEffect(()=> {
    ScrollReveal().reveal('.headline',{
      origin: 'bottom',
      distance: '40px',
      duration: 1200,
      // reset: true,
      interval: 200,
      scale: 0.9,
      viewFactor: 0.1,
  });
  },[])
  return (
    <div>
      <Helmet>

<title>Story | RepoHub</title>
<meta name="title" content="RepoHub"/>
  <meta name="description" content="for Students Project"/>


    <meta property="og:type" content="website"/>
      <meta property="og:url" content="repohub.co"/>
        <meta property="og:title" content="RepoHub"/>
          <meta property="og:description" content="for Students Project"/>
            <meta property="og:image" content={Img}/>


              <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="repohub.co"/>
                  <meta property="twitter:title" content="RepoHub"/>
                    <meta property="twitter:description" content="for Students Project"/>
                      <meta property="twitter:image" content={Img}/>
                      </Helmet>
      {/* Stoty Section */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <section className="container">
              <div className="row">
                <div className="col-12" >
                  <div className="my-5 pt-5" >
                    <h3 className="fw-light headline">Our Story</h3>
                    <h3 className="mb-5 Walone-Bold headline">
                      We developer complex interface systems for Web, Mobile & Ar
                    </h3>
                    <img src={Home_Img_1} alt="Home img" className="img-fluid headline pdf-rounded-xl" />
                    <div className="row my-5 ">
                      <div className="col-3">
                        <h1 className="headline fw-bold fs-1">20</h1>
                        <p>Employers</p>

                      </div>
                      <div className="col-3">
                        <h1 className="headline fw-bold fs-1">5</h1>
                        <p>years of Experiences</p>

                      </div>

                    </div>


                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>
      </div>


      {/* Story */}
      <div className="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <section className="container">
                <div className="row">
                  <div className="col">
                    <div className="my-lg-5 py-2">
                      <Link to="/services" className="text-decoration-none text-secordary">
                        <div className="text-center py-5 my-5 headline">
                          <p className="text-uppercase">next</p>
                          <h4 className="text-black">Our Services</h4>
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                      </Link>

                    </div>

                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <section className="container">
                <div className="row">
                  <div className="col col-lg-auto col-md-10 headline">
                    <div className="small mb-3 mb-lg-0">
                    <NavLink to="/" className="text-decoration-none text-secondary me-4" >Works</NavLink>
                    <NavLink to="/" className="text-decoration-none text-secondary me-4" >Story</NavLink>
                      <NavLink to="/" className="text-decoration-none text-secondary me-4" >Services</NavLink>
                     
                      

                      <NavLink to="/" className="text-decoration-none text-secondary d-lg-none" >Careers</NavLink>
                      <NavLink to="/" className="text-decoration-none text-secondary d-lg-none ms-4" >Contact Us</NavLink>

                    </div>
                  </div>

                  <div className="col headline">
                    <div className="text-center text-md-end">
                      <h5 className="fw-bold">RepoHub</h5>
                    </div>
                  </div>

                  <div className="col d-none d-lg-block headline">
                    <div className="text-end small">
                      <NavLink to="/" className="text-decoration-none text-secondary " >Careers</NavLink>
                      <NavLink to="/" className="text-decoration-none text-secondary ms-4" >Contact Us</NavLink>

                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story;