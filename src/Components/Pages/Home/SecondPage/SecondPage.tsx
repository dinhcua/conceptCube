import { useTranslation } from "react-i18next";
import "./SecondPage.scss";
import mainImage from "../../../../Assets/console-img-1.png";
import mainImage2 from "../../../../Assets/console-img-2.png";
import mainImage3 from "../../../../Assets/console-img-3.png";
import mainImage4 from "../../../../Assets/console-img-4.png";
const SecondPage = () => {
  const { t } = useTranslation();
  return (
    <div className="second-page">
      <span className="second-main-text">{t("heading2")}</span>
      <img src={mainImage2} alt="" className="main-image" />
    </div>
  );
};

export default SecondPage;
