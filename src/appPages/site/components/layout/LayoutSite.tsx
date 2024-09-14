import HomePage from "../pages/HomePage";
import Header from "./header/Header";
import scss from "./LayoutSite.module.scss";

const LayoutSite = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <HomePage/>
      </main>
    </div>
  );
};

export default LayoutSite;
