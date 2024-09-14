import { useNavigate } from "react-router-dom";
import scss from "./Header.module.scss";
import UserProfile from "../../../../auth/components/pages/UserProfile";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <div className="container">
       <div className={scss.content}>
       <h1 onClick={() => navigate('/')}>A type</h1>

       <div className={scss.main_auth_block}>
       <div className={scss.user_profile}>
          <UserProfile/>
        </div>

        <div className={scss.auth_block}>     
        {/* <button className={scss.auth_sign_up} onClick={() => navigate('/auth/sign-up')}>Sign Up</button>
        <button className={scss.auth_sign_in} onClick={() => navigate('/auth/sign-in')}>Sign In</button> */}
        {/* <LogOut/> */}
        <BurgerMenu/>
        </div>
       </div>

       </div>
      </div>
    </header>
  );
};

export default Header;
