import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
    
  return (
    <div>
      {/* -------------- MAIN ---------------- */}
      <main className="wrapper">
        {/* -------------- FEATURED BOX ---------------- */}
        <section className="featured-box" id="home">
          <div className="featured-text">
            <div className="featured-text-card">
              <span>Ram Thakur</span>
            </div>
            <div className="featured-name">
            <p>
        Hi, I'm a{" "}
        <span style={{ color: "blue", fontWeight: "bold" }}>
          <TypeAnimation
            sequence={["Developer", 2000,"Designer", 2000]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </span>
      </p>
            </div>
            <div className="featured-text-info">
              <p>
              Experienced MERN stack developer with a passion for building dynamic, user-friendly, and visually stunning web applications.
              </p>
            </div>
            <div className="featured-text-btn">
              
            <button
  className="btn"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/assets/images/Ram_new.pdf";
    link.setAttribute("download", "Ram_Thakur_CV.pdf"); // Sets a custom file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  Download CV <i className="uil uil-file-alt" />
</button>
            </div>
            <div className="social_icons">
             
              
              <a href="https://www.linkedin.com/in/ram-thakur-ram214/" target="_blank">
              
              <div className="icon">
                <i className="uil uil-linkedin-alt" />
              </div>
              </a>

              <a href="https://github.com/RamThakur10007" target="_blank" >
              
              <div className="icon">
                <i className="uil uil-github-alt" />
              </div>
              </a>

              <a href="https://www.instagram.com/ram_thakur_11/" target="_blank">
              <div className="icon">
                <i className="uil uil-instagram" />
              </div>
              </a>

              <a href="https://x.com/ThakurR93539886?t=qSUWRTVUNcAdKoTdjChixQ&s=09" target="_blank" >
              
              <div className="icon">
                <i className="uil uil-twitter" />
              </div>
              </a>
            </div>
          </div>
          <div className="featured-image">
            <div className="image">
              <img src="/assets/images/ram-img.png" alt="avatar" />
            </div>
          </div>
          <div className="scroll-icon-box">
            <a href="#about" className="scroll-btn">
              <i className="uil uil-mouse-alt" />
              <p>Scroll Down</p>
            </a>
          </div>
        </section>

        {/* -------------- ABOUT BOX ---------------- */}
        <section className="section" id="about">
          <div className="top-header">
            <h1>About Me</h1>
          </div>
          <div className="row">
            <div className="col">
              <div className="about-info">
                <h3>My introduction</h3>
                <p>
                I am well-versed in MongoDB, Express.js, React.js, and Node.js, enabling me to develop dynamic and interactive web applications. Additionally, I have expertise in implementing responsive UI/UX designs and integrating RESTful APIs for seamless functionality.
                </p>
               
              </div>
            </div>
            <div className="col">
              <div className="skills-box">
                <div className="skills-header">
                  <h3>Frontend</h3>
                </div>
                <div className="skills-list">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Bootstrap</span>
                  <span>Tailwind CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Angular</span>
                </div>
              </div>
              <div className="skills-box">
                <div className="skills-header">
                  <h3>Backend</h3>
                </div>
                <div className="skills-list">
                  
                  <span>Node.js</span>
                  <span>Express.js</span>

                </div>
              </div>
              <div className="skills-box">
                <div className="skills-header">
                  <h3>Database</h3>
                </div>
                <div className="skills-list">
                  <span>MySQL</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------- PROJECT BOX ---------------- */}
        <section className="section" id="projects">
          <div className="top-header">
            <h1>Projects</h1>
          </div>
          <div className="project-container">
    <div className="project-box">
        <a href="https://imagezify-subscription-system.onrender.com/" target="_blank" >
            <img src="assets/images/Personal Project 1.png" alt="ImageGen" />
        </a>
            <div className="project-content">
                <h3>AI Image Generator</h3>
                <p>
                    AI Image Generator built with MERN Stack & TailwindCSS 🖼️ Uses Clipdrop API for image generation 💳 Subscription management via Razorpay Payment Gateway.
                </p>
            </div>
    </div>

    <div className="project-box">
        <a href="https://instac.vercel.app/" target="_blank" >
            <img src="assets/images/instac.png" alt="Portfolio" />
        </a>
            <div className="project-content">
                <h3>Portfolio</h3>
                <p>
                    A dynamic and responsive personal portfolio website showcasing skills, projects, and experience.
                </p>
            </div>
    </div>

    <div className="project-box">
        <img src="assets/images/ecom.png" alt="E-commerce" />
        <div className="project-content">
            <h3>E-commerce (In progress)</h3>
            <p>
                An innovative online store with seamless UI/UX, secure payments, and real-time order tracking.
            </p>
        </div>
    </div>
</div>



        </section>

        {/* -------------- CONTACT BOX ---------------- */}
        <section className="section" id="contact">
          <div className="top-header">
            <h1>Contact Me</h1>
            
          </div>
          <div className="row">
    <div className="col">
        <div className="contact-info border-only"> 
           
            <h3>
            For any inquiries or feedback, please feel free to reach out to me via email.
            </h3>
        </div>
    </div>
    <div className="col">
        <div className="contact-info"> 
            <h2>
                Find Me <i className="uil uil-corner-right-down" />
            </h2>
            <p>
                <i className="uil uil-envelope" /> Email: <a href="mailto:ramthakur10007@gmail.com">ramthakur10007@gmail.com</a>
            </p>
        </div>
    </div>
</div>

        </section>
      </main>
    </div>
  );
};

export default Hero;
