import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Out Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you. We
            beleive a good place fo live can make your life better.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon"><ion-icon name="call-outline" /></div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 123 1456</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Call Now
                </div>
              </div>

              {/* second mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon"><ion-icon name="chatbox-ellipses-outline"/></div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 123 1456</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Chat Now
                </div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon"><ion-icon name="chatbubbles-outline"/></div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 123 1456</span>
                  </div>
                </div>
                <div className="flexCenter button">
                Message Now
                </div>
              </div>

              {/* fourth mode */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon"><ion-icon name="videocam-outline"/></div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">021 123 1456</span>
                  </div>
                </div>
                <div className="flexCenter button">
                    Video Call Now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
