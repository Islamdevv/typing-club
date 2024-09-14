import { useNavigate } from 'react-router-dom';
import scss from './Welcome.module.scss'
import keyboard from './images/atype keyboard.webp'
import SprayAnimation from './SprayAnimation';

const Welcome = () => {
  const navigate = useNavigate();

  return <section className={scss.welcome}>
    <SprayAnimation/>
    <div className="container">
        <div className={scss.main_welcome_section}>
          <div className={scss.about_welcome_section}>

            <div className={scss.welcome1}>
              <p>Find out your typing speed <br /> with <span>A type</span></p>
            </div>

            <div className={scss.welcome2}>
              <p>Let's explore and create your experience <br /> with A type.</p>
            </div>

            <button onClick={() => navigate('/type/dasboard')}>Get Started</button>
          </div>

          <div className={scss.img_welcome_section}>
            <img src={keyboard} alt="" />
            <div className={scss.helper}></div>
          </div>
        </div>
    </div>
  </section>;
};

export default Welcome;
