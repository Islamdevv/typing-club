import scss from "./AboutUs.module.scss";

const AboutUs = () => {
  return <section className={scss.about}>
    <div className="container">
        <div className={scss.content}>
            <h1>About Us</h1>
        </div>
    </div>
  </section>;
};

export default AboutUs;
