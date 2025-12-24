const aboutData = {
  designation: "Frontend Engineer",
  title: "Building Scalable, User-Centric Applications that Drive Impact",
  text: [
    {
      content:
        "Frontend engineer with 5+ years building fast, accessible web apps that put users first.",
    },
    {
      title: "IdeaFloat",
      content:
        "AI business validation platform using ChatGPT-3.5, ChatGPT-4, DataForSEO, and REST APIs to turn market signals into launch-ready plans.",
    },
    {
      title: "ALAUTUN",
      content:
        "Freight logistics portals for carriers and shippers with Stream chat, Stripe payments, and Firebase alerts that keep teams aligned in real time.",
    },
    {
      title: "Thrively Care",
      content:
        "Healthcare platform delivering secure bookings, video visits, and clinic scheduling with privacy-first workflows.",
    },
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
                {aboutData.text.map((item, i) => (
                  <p key={i}>
                    {item.title ? <strong>{item.title}: </strong> : null}
                    {item.content}
                  </p>
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
