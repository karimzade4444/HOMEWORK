import log from "./img/лого.png";
import ph from "./img/Group.png";
import email from "./img/mail 1.png";

const Footer = () => {
  return (
    <div className="w-auto h-90 bg-red-500 mt-30">
      <div className=" flex justify-around items-center gap-60 pt-10">
        <img src={log} alt="" className=" grayscale-100  mix-blend-multiply" />
        <div>
          {" "}
          <div className=" flex flex-col justify-start items-start">
            <div className="flex justify-center items-center gap-2.5">
              <img src={ph} alt="" className=" grayscale" />
              <p>+992 917 20 8222</p>
            </div>
            <div className="flex justify-center items-center gap-2.5">
              <img src={email} alt="" className=" grayscale" />
              <p>mustafo.karimzoda@zet-mobile.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-7">
        <div className="w-285 h-0.5 bg-gray-400 m-auto"></div>
      </div>
      <div className=" flex justify-around items-center pt-7 gap-25">
        <div className=" flex justify-center items-center gap-30">
          <div className="text-gray-400 font-semibold text-2xl">
            <p>О нас</p>
            <p>Производство</p>
            <p>Документация</p>
            <p>Контакты</p>
          </div>
          <div><p className="w-50 text-white text-">Использование самых современных технологий автоматизированного проектирования для решения задач наших клиентов.</p></div>
        </div>
        <div><p className="w-45 text-white">129110, Москва, Олимпийский проспект, д. 16, стр. 5</p></div>
      </div>
      <div className="text-white pt-9 pl-45"><p>@ 2007 - 2026 Частная компания - Фонд реформированию жилищно - коммунального хозяйства</p></div>
    </div>
  );
};

export default Footer;
