import { Helmet } from "react-helmet";
import Img from "../../assets/img/img.png";

const Contact = (props) => {
  return (
    <div>
        <Helmet>

<title>Contact | RepoHub</title>
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
                    <h3 className="fw-light headline">Wazup there</h3>
                    <h3 className="mb-5 Walone-Bold headline py-3">
                      We’re here for you, drop as a line
                    </h3>
                    <div className="row mg-top mb-4">
                      <div className="col">
                      <input type="text" className="form-control border-0  border-bottom  py-2" placeholder="New Business" aria-label="Username"/>
                      </div>
                      <div className="col">
                      <i class="fa-solid fa-arrow-right pt-2 fs-4 text"></i>
                      </div>
                    
                   
                    </div>

                    <div className="row mg-top mb-4">
                      <div className="col">
                      <input type="text" className="form-control border-0  border-bottom  py-2" placeholder="Send a message" aria-label="Username"/>
                      </div>
                      <div className="col">
                      <i class="fa-solid fa-arrow-right pt-2 fs-4 text"></i>
                      </div>
                    
                   
                    </div>

                    <div className="row mg-top ">
                      <div className="col">
                      <input type="text" className="form-control border-0  border-bottom  py-2" placeholder="Careers" aria-label="Username"/>
                      </div>
                      <div className="col">
                      <i class="fa-solid fa-arrow-right pt-2 fs-4 text"></i>
                      </div>
                    
                   
                    </div>
                    
                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
          <h5 className="fs-6">General inquiries —</h5>
           <h3 className="fw-lighter">Quick chart</h3>
           <h4 className="fs-6"><i class="fa-brands fa-facebook-messenger"></i>  Message on facebook</h4>
          </div>
          <div className="col">
            <h5 className="fs-6">New business —</h5>
           <h3 className="fw-lighter">hi@repohub.co</h3>
           <h4 className="fs-6">+95 9 888 777 666</h4>
          </div>
          <div className="col">
          <h5 className="fs-6">Office —</h5>
           <h3  className="fw-lighter">Yangon</h3>
           <h4 className="fs-6">Yangon, Myanmar</h4>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact;