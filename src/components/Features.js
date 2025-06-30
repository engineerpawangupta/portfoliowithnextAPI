const features_list = [
  {
    title: "Dedication",
    icon: "img/svg/design.svg",
    text: "Success begins with unwavering dedication. It's the commitment to consistently put in the effort, overcome challenges, and push beyond limits. Dedication fuels perseverance, ensuring that every step taken leads closer to excellence.",
  },
  {
    title: "Smart Work",
    icon: "img/svg/development.svg",
    text: "Efficiency is just as important as effort. Smart work means optimizing time, leveraging technology, and strategizing effectively to achieve more with less. It's about focusing on what truly matters and finding innovative ways to accomplish goals efficiently.",
  },
  {
    title: "Intelligence",
    icon: "img/svg/landing.svg",
    text: "Beyond hard work and strategy, intelligence drives success. It involves critical thinking, problem-solving, and making informed decisions. Intelligence empowers individuals to adapt, innovate, and stay ahead in a competitive world.",
  },
];
const Features = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_features">
        <div className="container">
          <div className="features_list">
            <ul>
              {features_list.map((feature, i) => (
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`"0.${i * 2}s"`}
                  key={i}
                >
                  <div className="list_inner">
                    <div className="short">
                      <div className="title">
                        <span>{`0${i + 1}`}</span>
                        <h3>{feature.title}</h3>
                      </div>
                      <div className="icon">
                        <img className="svg" src={feature.icon} alt="" />
                      </div>
                    </div>
                    <div className="text">
                      <p>{feature.text}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Features;
