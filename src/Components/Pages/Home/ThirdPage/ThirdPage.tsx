import "./ThirdPage.scss";
import { useTranslation } from "react-i18next";
import onGame from "../../../../Assets/on-game-dev-img.png";
import offGame from "../../../../Assets/off-game-dev-img.png";
import offSi from "../../../../Assets/off-si-img.png";
import onSi from "../../../../Assets/on-si-img.png";
import onMar from "../../../../Assets/on-game-mar-img.png";
import offMar from "../../../../Assets/off-game-mar-img.png";
import offUi from "../../../../Assets/off-ui-design-img.png";
import onUi from "../../../../Assets/on-ui-design-img.png";
import { useState } from "react";
import { useEffect } from "react";

const ThirdPage = () => {
  const { t } = useTranslation();
  const [datas, setDatas] = useState<any[]>([]);
  useEffect(() => {
    let dataCategory = [
      {
        id: 0,
        heading: t("cardHeading1"),
        onImg: onGame,
        offImg: offGame,
        active: true,
        paragraph: t("cardDesc1"),
      },
      {
        id: 1,
        heading: t("cardHeading2"),
        onImg: offUi,
        active: false,
        paragraph: t("cardDesc2"),
      },
      {
        id: 2,
        heading: t("cardHeading3"),
        onImg: offSi,
        active: false,
        paragraph: t("cardDesc3"),
      },
      {
        id: 3,
        heading: t("cardHeading4"),
        onImg: offGame,
        active: false,
        paragraph: t("cardDesc4"),
      },
    ];
    setDatas(dataCategory);
  }, [t("cardHeading1")]);

  const onActive = (id: number) => {
    let temp = datas.map((data) => {
      if (data.active === true) {
        data.active = false;
      }
      if (data.id === id) {
        data.active = true;
      }
      return data;
    });
    console.log(temp);

    setDatas(temp);
  };
  return (
    <div className="third-page">
      {datas.map((data) => (
        <div
          className={data.active ? "box-third active" : "box-third"}
          onClick={() => onActive(data.id)}
        >
          <div className={data.active ? "box-heading active" : "box-heading"}>
            {data.heading}
          </div>
          <img className="box-image" src={data.onImg} alt="" />
          {data.active ? (
            <p
              className={
                data.active ? "box-heading-two active" : "box-heading-two"
              }
            >
              {data.heading}
            </p>
          ) : (
            ""
          )}
          <p className={data.active ? "box-paragraph active" : "box-paragraph"}>
            {data.paragraph}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ThirdPage;
