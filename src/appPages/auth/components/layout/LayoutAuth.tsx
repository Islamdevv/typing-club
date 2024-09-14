import { Outlet } from 'react-router-dom';
import scss from './LayoutAuth.module.scss'

const LayoutAuth = () => {
  return <div className={scss.layout_auth}>
    <main>
        <Outlet/>
    </main>
  </div>;
};

export default LayoutAuth;
