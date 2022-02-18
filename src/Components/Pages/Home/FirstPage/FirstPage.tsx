import { useTranslation } from "react-i18next";
import "./FirstPage.scss";
import bg_1 from "../../../../Assets/bg-object-1.png";
import bg_2 from "../../../../Assets/bg-object-2.png";
import bg_3 from "../../../../Assets/bg-object-3.png";
import bg_4 from "../../../../Assets/bg-object-4.png";
import bg_5 from "../../../../Assets/bg-object-5.png";
const FirstPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-first-page">
      <span className="about-text">{t("aboutText")}</span>
      <span className="main-text">{t("heading1")}</span>
      <img src={bg_1} className="bg-object-1" />
      <img src={bg_2} className="bg-object-2" />
      <img src={bg_3} className="bg-object-3" />
      <img src={bg_4} className="bg-object-4" />
      <img src={bg_5} className="bg-object-5" />
      <span className="intro">{t("intro")}</span>
    </div>
  );
};

export default FirstPage;
