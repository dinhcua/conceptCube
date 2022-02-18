import "./FourthPage.scss";
import { useTranslation } from "react-i18next";
const FourthPage = () => {
  const { t } = useTranslation();
  return (
    <div className="story-page">
      <p className="story-text">story</p>
      <div className="story-list">
        <div className="story-box">
          <p className="story-heading">2021</p>
          <div className="story">
            <div className="story-item">
              <p className="story-title">{t("storytitle1")}</p>
              <p className="story-detail">{t("storycontent1")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle2")}</p>
              <p className="story-detail">{t("storycontent1")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle3")}</p>
              <p className="story-detail">{t("storycontent1")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle4")}</p>
              <p className="story-detail">{t("storycontent1")}</p>
            </div>
          </div>
        </div>
        <div className="story-box">
          <p className="story-heading">2020</p>
          <div className="story">
            <div className="story-item">
              <p className="story-title">{t("storytitle5")}</p>
              <p className="story-detail">{t("storycontent1")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle6")}</p>
              <p className="story-detail">{t("storycontent1")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle7")}</p>
              <p className="story-detail">{t("storycontent1")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle8")}</p>
              <p className="story-detail">{t("storycontent1")}</p>
            </div>
          </div>
        </div>
        <div className="story-box">
          <p className="story-heading">2019</p>
          <div className="story">
            <div className="story-item">
              <p className="story-title">{t("storytitle9")}</p>
              <p className="story-detail">{t("storycontent2")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle10")}</p>
              <p className="story-detail">{t("storycontent1")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle11")}</p>
              <p className="story-detail">{t("storycontent1")}</p>
            </div>
            <div className="story-item">
              <p className="story-title">{t("storytitle12")}</p>
              <p className="story-detail">{t("storycontent1")}</p>
            </div>
          </div>
        </div>
        <div className="story-box">
          <p className="story-heading">2018</p>
          <div className="story">
            <div className="story-item">
              <p className="story-title">{t("storytitle13")}</p>
              <p className="story-detail">{t("storycontent1")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
