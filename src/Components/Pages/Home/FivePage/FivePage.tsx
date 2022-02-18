import "./FivePage.scss";
import { useTranslation } from "react-i18next";
const FivePage = () => {
  const { t } = useTranslation();
  return (
    <div className="five-page">
      <div className="text-box">
        <p className="text-box-heading">{t("fouthheading1")}</p>
        <p className="text-box-second">looc.tzlee@gmail.com</p>
        <p className="text-box-heading">{t("fouthheading2")}</p>
        <p className="text-box-second">looc.tzlee@gmail.com</p>
        <p className="text-box-heading">{t("fouthheading3")}</p>
        <p className="text-box-second">{t("fouthheading4")}</p>
        <div className="main-text-five">
          Let's <br /> Make the world Together.
        </div>
      </div>
    </div>
  );
};

export default FivePage;
