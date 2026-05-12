import rec from "./img/image 1.png";
import gazprom from "./img/газпром.png";
import lukoil from "./img/лукойл.png";
import rosneft from "./img/RN-GRP 1.png";
import trneft from "./img/транснефть.png";
import rostelekom from "./img/Ростелеком-Solar лого 1.png";

const TopRec = () => {
  return (
    <div>
      <div className=" mt-10 relative">
        <img src={rec} alt="" className=" brightness-50" />
        <div className=" absolute top-25 left-80">
          <h1 className=" text-white font-bold text-5xl">SCAD tech</h1>{" "}
          <p className="text-gray-300 text-xl w-93 pt-10">
            Развитие передовых производств в сфере автоматизации технологических
            процессов. Лучшие экспертные ресурсы для создания новых,
            высокотехнологичных продуктов.
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-end gap-20 mt-20">
        <img src={gazprom} alt="" />
        <img src={lukoil} alt="" />
        <img src={rosneft} alt="" />
        <img src={trneft} alt="" />
        <img src={rostelekom} alt="" />
      </div>
    </div>
  );
};

export default TopRec;
