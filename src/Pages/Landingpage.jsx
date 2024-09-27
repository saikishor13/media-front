import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";


function Landingpage() {
  const navigateByUrl = useNavigate()
  return (
    <>
      <Row className="align-items-center justify-content-between w-100" style={{marginTop:'50px'}}>
        <Col></Col>
        <Col lg={5}>
          <h1 style={{fontSize:'40px'}}>
            Welcome to <span style={{color:'blue'}}>Media-Player</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            quis deserunt quaerat aliquid nemo numquam distinctio ab corporis
            perspiciatis dolor non, nam, earum vero sapiente possimus ratione,
            quidem aspernatur libero?
          </p>
          <button onClick={() => navigateByUrl('/home')} className="btn btn-primary">Get Satrted</button>
        </Col>
        <Col lg={5}>
          <img src="https://img.freepik.com/premium-vector/media-player-icon_150234-67171.jpg?size=626&ext=jpg&ga=GA1.1.1169378554.1725901454&semt=ais_hybrid" width={400} style={{marginLeft:'150px'}} alt="" />
        </Col>
        <Col></Col>
      </Row>

      <div className="container-fluid" style={{backgroundColor:'#f2f2f2',height:'800px',marginTop:'100px'}}>
        <h3 style={{textAlign:'center',paddingTop:'50px',fontSize:'40px'}}>Features</h3>
        <div className="cards d-flex justify-content-center w-100">
          <Card style={{ width: "22rem",margin:'40px'}} className="p-4">
            <Card.Img style={{borderRadius:'10px'}} variant="top" src="https://img.freepik.com/free-vector/casting-call-abstract-concept-vector-illustration-open-call-models-commercial-shootings-photo-video-casting-modelling-agency-request-audition-brand-advertising-abstract-metaphor_335657-4165.jpg?t=st=1725902085~exp=1725905685~hmac=e758c4dbe7fc363e3715296810c6160fe31ff3e609d46bd697181be986f4708e&w=740" height={'300px'} width={'300px'} />
            <Card.Body>
              <Card.Title className="text-dark">Play Everything</Card.Title>
              <Card.Text style={{fontFamily: 'Georgia, serif'}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "22rem",margin:'40px' }} className="p-4">
            <Card.Img style={{borderRadius:'10px'}} variant="top" src="https://img.freepik.com/premium-vector/content-creator-creating-content_1169380-1447.jpg?ga=GA1.1.1169378554.1725901454&semt=ais_hybrid" height={'300px'} width={'300px'} />
            <Card.Body>
              <Card.Title className="text-dark">Managing Videos</Card.Title>
              <Card.Text style={{fontFamily: 'Georgia, serif'}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Card style={{ width: "22rem",margin:'40px' }} className="p-4">
            <Card.Img style={{borderRadius:'10px'}} variant="top" src="https://img.freepik.com/free-vector/content-creator-editing-video-footage-studio-editor-publishing-viral-video-social-media-multimedia-production-flat-vector-illustration-motion-design-concept-banner-landing-web-page_74855-21752.jpg?ga=GA1.1.1169378554.1725901454&semt=ais_hybrid" height={'300px'} width={'300px'} />
            <Card.Body>
              <Card.Title className="text-dark">Customized Videos</Card.Title>
              <Card.Text style={{fontFamily: 'Georgia, serif'}}>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container border rounded p-5 border-light mb-5 d-flex align-items-center justify-content-between w-100">
        <div className="col-lg-5">
          <h4 className="text-dark" style={{fontSize:'40px',marginBottom:'50px',fontFamily: 'Georgia, serif'}}>Simple, Powerful & Fast</h4>
          <h6 className="mb-5 mt-3" style={{fontFamily: 'Georgia, serif',lineHeight:'1.5'}}>
            <span className="text-warning fw-border">Play Everything</span>: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut voluptatum repudiandae et sit reprehenderit.
            Dolorum, corrupti facilis commodi odit expedita aspernatur illo
            ducimus assumenda aliquid. Repellendus numquam blanditiis
            exercitationem porro.
          </h6>

          <h6 className="mb-5 mt-3" style={{fontFamily: 'Georgia, serif',lineHeight:'1.5'}}>
            <span className="text-warning fw-border">Categoried Videos</span>: Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Aut voluptatum repudiandae et sit
            reprehenderit. Dolorum, corrupti facilis commodi odit expedita
            aspernatur illo ducimus assumenda aliquid. Repellendus numquam
            blanditiis exercitationem porro.
          </h6>

          <h6 className="mb-5 mt-3" style={{fontFamily: 'Georgia, serif',lineHeight:'1.5'}}>
            <span className="text-warning fw-border">Managing Videos</span>: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut voluptatum repudiandae et sit reprehenderit.
            Dolorum, corrupti facilis commodi odit expedita aspernatur illo
            ducimus assumenda aliquid. Repellendus numquam blanditiis
            exercitationem porro.
          </h6>
        </div>
        <div className="video col-lg-5">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IKpkXzMxTq0?si=nZJK5ZduUEBxOJBm"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      
    </>
  );
}

export default Landingpage;
