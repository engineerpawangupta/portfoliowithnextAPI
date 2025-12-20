const aboutData = {
  designation: "Frontend Engineer",
  title: "Building Scalable, User-Centric Applications that Drive Impact",
  text: [
    "I am a Frontend Engineer with over 5 years of experience designing and developing high-performance, user-focused web applications. I specialize in building AI-powered platforms and scalable frontend architectures that solve real-world business problems and deliver measurable value.",
    "I have led the development of IdeaFloat, an AI-driven business validation platform that integrates ChatGPT-3.5, ChatGPT-4, and external APIs to generate strategic insights based on market trends, customer feedback, and business analytics. By leveraging DataForSEO, the platform processes large-scale datasets to identify patterns, track SEO performance, and perform competitive analysis—enabling data-driven decision-making for startups and enterprises.",
    "I have also contributed to the successful delivery of multiple full-stack platforms, including ALAUTUN, a comprehensive freight logistics solution connecting shippers, carriers, and owner-operators. My work included building carrier and shipper portals, integrating real-time chat (Stream), implementing Stripe payment processing, and configuring Firebase push notifications for real-time engagement.",
    "Additionally, I developed Thrively Care, a healthcare platform that connects patients with licensed professionals and therapists. The platform supports online bookings, video consultations, and in-person appointment scheduling, delivering a seamless and secure patient experience.",
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
