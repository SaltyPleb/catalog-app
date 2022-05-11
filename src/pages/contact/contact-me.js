import React from "react";
import "./contact-me.css";
import logo2 from "../../images/eqP9BlVTUj0.jpg"
import logo1 from "../../images/si8xwQyxq8c.jpg"

const Contact = () => {
  return (
    <>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>We are a team of young and promising individuals who are eager to write code and create beautiful designs for pages.</p>
        <p>We were born to fulfill any request of the customer, and only together we can cope. 🧡</p>
        <p>
          Resize the browser window to see that this page is responsive by the way.
        </p>
      </div>

      <h2 style={{textAlign: 'center'}}>My Team</h2>
      <div className="contact_row">
        <div className="contact_column">
          <div className="contact_card">
            <img src={logo1} alt="Yauheni" style={{width:'100%'}} />
            <div className="contact_container">
              <h2 style={{marginTop: '16px'}}>Yauheni Bulyha</h2>
              <p style={{marginTop: '16px'}} className="title">Full Stack engineer(Not yet, but soon)</p>
              <p style={{marginTop: '16px'}}>A person who born for solving problems and providing workable solutions. Strong analytical and reasoning skills with an ability to visualise processes and outcomes.</p>
              <p style={{marginTop: '16px'}}>sergun4ik22@gmail.com</p>
              <p style={{marginTop: '16px'}}>
                <button className="contact_button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="contact_column">
          <div className="contact_card">
            <img src={logo1} alt="Yauheni" style={{width:'100%'}} />
            <div className="contact_container">
              <h2 style={{marginTop: '16px'}}>Yauheni Bulyha</h2>
              <p style={{marginTop: '16px'}} className="title">Full Stack engineer(Not yet, but soon)</p>
              <p style={{marginTop: '16px'}}>A person who born for solving problems and providing workable solutions. Strong analytical and reasoning skills with an ability to visualise processes and outcomes.</p>
              <p style={{marginTop: '16px'}}>sergun4ik22@gmail.com</p>
              <p style={{marginTop: '16px'}}>
                <button className="contact_button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="contact_column">
          <div className="contact_card">
            <img src={logo1} alt="Sonya" style={{width:'100%'}} />
            <div className="contact_container">
              <h2 style={{marginTop: '16px'}}>Yauheni Bulyha</h2>
              <p style={{marginTop: '16px'}} className="title">Only this page Designer:)</p>
              <p style={{marginTop: '16px'}}>Color theory introducer. Ideas about the best uses of color. Many different theories on color exist that help understand how to combine colors and the effect different colors have on people.</p>
              <p style={{marginTop: '16px'}}>sergun4ik22@gmail.com</p>
              <p style={{marginTop: '16px'}}>
                <button className="contact_button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Contact;
