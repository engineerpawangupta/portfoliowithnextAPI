const aboutData = {
  designation: "Frontend Engineer",
  title: "I Develop Applications that Empower and Connect People",
  text: [
    "With over four years of experience, I specialize in developing AI-powered applications and platforms that solve real-world problems. I led the development of IdeaFloat, an AI-powered business validation tool that integrates ChatGPT-3.5, ChatGPT-4, and external APIs to provide strategic recommendations using market trends, customer feedback, and business analytics. The platform enhances decision-making through data-driven insights via DataForSEO, processing extensive data to identify patterns, track SEO performance, and conduct competitive analysis.",
    "I've successfully built and deployed multiple full-stack applications including ALAUTUN, a comprehensive freight logistics platform connecting shippers, carriers, and owner-operators. This involved developing carrier and shipper portals, integrating Stream Chat for real-time communication, implementing Stripe payment gateway for secure transactions, and setting up Firebase push notifications. I also developed Thrively Care, a healthcare platform connecting patients with professional healthcare providers and therapists, featuring online booking, video call functionality, and in-person appointment scheduling.",
    "My technical expertise includes React.js, Material-UI (MUI), Tailwind CSS, and JavaScript for creating intuitive user interfaces. I implement Redux Toolkit for efficient state management and integrate Firebase Services including Push Notifications and Real-Time Database to enhance real-time interactivity. I've also developed and optimized real-time chat functionality using GetStream.io, ensuring seamless communication within platforms while maintaining security and performance standards.",
  ],
  skillIcons: [
    { name: "joomla", icon: "img/svg/joomla.svg" },
    { name: "wp", icon: "img/svg/wp.svg" },
    { name: "drupal", icon: "img/svg/drupal.svg" },
    { name: "laravel", icon: "img/svg/laravel.svg" },
  ],
};

const About = () => {
  return (
    <div className="devman_tm_section" id="about">
      <div className="devman_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="image_wrap">
                <img src="img/thumbs/64-49.jpg" alt="" />
                <div className="main" data-img-url="img/about/image1.webp" />
                <div className="extra_image">
                  <div className="image_inner">
                    <img src="img/thumbs/1-1.jpg" alt="" />
                    <div
                      className="main_extra"
                      data-img-url="img/about/image2.webp"
                    />
                  </div>
                </div>
                {aboutData.skillIcons.map((skill, i) => (
                  <div className={i === 0 ? "extra_image" : ""} key={i}>
                    <span
                      className={`icon_${i + 1} wow fadeIn`}
                      data-wow-duration="1s"
                      data-wow-delay={`0.${i * 2}s`}
                    >
                      <img className="svg" src={skill.icon} alt="" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>
                  {`I'm`} a {aboutData.designation}
                </span>
                <h3>{aboutData.title}</h3>
              </div>
              <div className="text">
                {aboutData.text.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
              <div className="devman_tm_button">
                <a className="anchor" href="#portfolio">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
