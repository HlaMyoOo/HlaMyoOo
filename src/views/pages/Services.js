import { useEffect } from "react";
import { Link,NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import ScrollReveal from 'scrollreveal';
import Img from "../../assets/img/img.png";
import Home_Img_1 from "../../assets/img/Home-img-1.png";
import Service_1 from "../../assets/img/our_service_1.png";
import Service_2 from "../../assets/img/our_service_2.png";
import Service_3 from "../../assets/img/our_service_3.png";
import Service_4 from "../../assets/img/our_service_4.png";
const Services = (props) => {
  useEffect(() => {
    ScrollReveal().reveal('.headline', {
      origin: 'bottom',
      distance: '40px',
      duration: 1200,
      // reset: true,
      interval: 200,
      scale: 0.9,
      viewFactor: 0.1,
    });
  }, [])
  return (
    <div>
<Helmet>

<title>Services | RepoHub</title>
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

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <section className="container">
              <div className="row">
                <div className="col-12" >
                  <div className="my-5 pt-5" >
                    <h3 className="fw-light headline">Services</h3>
                    <h3 className="mb-5 Walone-Bold headline py-3">
                      Our services extend to every aspect of the project development process
                    </h3>
                    <img src={Home_Img_1} alt="Home img" className="img-fluid headline pdf-rounded-xl" />


                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>
      </div>


      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <div className="row">
                    <h3>Research & Analytics</h3>
                    <p>We immerse ourselves in the analytics of your business, in order to study all the subtleties and determine target audience.</p>
                    <div className="mt-5">
                      <h4 className="Walone-Bold">What we do</h4>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="pt-2">- Analyze cliente business</h5>
                      <h5 className="pt-2">- Branding Strategy</h5>
                      <h5 className="pt-2">- Research opportunities</h5>
                    </div>
                    <div className="col-md-6">
                      <h5 className="pt-2">- Create information architecture</h5>
                      <h5 className="pt-2">- Study the target audience</h5>
                      <h5 className="pt-2">- Production planning</h5>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <img src={Service_1} alt="Home img" className="img-fluid headline pdf-rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <div className="row">
                    <h3>Product Design</h3>
                    <p>We know how to create complex and intuitive interface systems that are enjoyable to use.</p>
                    <div className="mt-5">
                      <h4 className="Walone-Bold">What we do</h4>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="pt-2">- interface design</h5>
                      <h5 className="pt-2">- Visual Identity</h5>
                      <h5 className="pt-2">- Corporate & Promo landings</h5>
                    </div>
                    <div className="col-md-6">
                      <h5 className="pt-2">- UI Kits & Libraries</h5>
                      <h5 className="pt-2">- E-commerce</h5>
                      <h5 className="pt-2">- Apps for iOS & Android</h5>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <img src={Service_2} alt="Home img" className="img-fluid headline pdf-rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <div className="row">
                    <h3>Development & Integration</h3>
                    <p>Our developer team easily subdue developments of any complexity. We dominate all the cycle of development.</p>
                    <div className="mt-5">
                      <h4 className="Walone-Bold">What we do</h4>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="pt-2">- Front-end Development</h5>
                      <h5 className="pt-2">- Development Consulting</h5>
                      <h5 className="pt-2">- CMS Development</h5>
                    </div>
                    <div className="col-md-6">
                      <h5 className="pt-2">- API</h5>
                      <h5 className="pt-2">- Highload-systems</h5>
                      <h5 className="pt-2">- Animations</h5>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <img src={Service_3} alt="Home img" className="img-fluid headline pdf-rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="container my-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <div className="row">
                    <h3>Support</h3>
                    <p>We provide technical assistance, that will help you to improve, keep the quality and speed of the launched project like website, app or full product.</p>
                    <div className="mt-5">
                      <h4 className="Walone-Bold">What we do</h4>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="pt-2">- Content Strategy & Research</h5>
                      <h5 className="pt-2">- Branding Strategy</h5>
                      <h5 className="pt-2">- Opportunity Analysis</h5>
                    </div>
                    <div className="col-md-6">
                      <h5 className="pt-2">- Content Strategy</h5>
                      <h5 className="pt-2">- Strategic Planning</h5>
                      <h5 className="pt-2">- Production Planning</h5>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <img src={Service_4} alt="Home img" className="img-fluid headline pdf-rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <section className="container">
                <div className="row">
                  <div className="col">
                    <div className="my-lg-5 py-2">
                      <Link to="/contact" className="text-decoration-none text-secordary">
                        <div className="text-center py-5 my-5 headline">
                          <p className="text-uppercase">next</p>
                          <h4 className="text-black">Our Contact</h4>
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

export default Services;