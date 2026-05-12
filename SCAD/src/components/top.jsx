import scad from "./img/лого.png";
import phone from "./img/Group.png";
import mail from "./img/mail 1.png";

const Top = () => {
  return (
    <div>
      <div className="flex justify-around items-center mt-5">
        <div className=" flex gap-10 justify-center items-center">
          <img src={scad} alt="" className=" h-8" />
          <p className=" w-48 leading-none">
            Комплексные решения в сфере управления технологиями
          </p>
        </div>
        <div className="flex justify-center items-center gap-10">
          <div className=" flex flex-col justify-start items-start">
            <div className="flex justify-center items-center gap-2.5">
              <img src={phone} alt="" />
              <p>+992 917 20 8222</p>
            </div>
            <div className="flex justify-center items-center gap-2.5">
              <img src={mail} alt="" />
              <p>mustafo.karimzoda@zet-mobile.com</p>
            </div>
          </div>
          <button className=" w-45 h-12 bg-red-500 rounded-2xl text-white text-xl cursor-pointer">
            Подать заявку
          </button>
        </div>
      </div>
      <div className=" mt-10">
        <div className=" w-7xl h-0.5 bg-gray-300 m-auto"></div>
      </div>
      <div className="flex justify-center items-center gap-20 mt-10">
        <h1 className=" font-semibold text-2xl text-gray-400">О нас</h1>
        <h1 className=" font-semibold text-2xl text-gray-400">Производство</h1>
        <h1 className=" font-semibold text-2xl text-gray-400">Документация</h1>
        <h1 className=" font-semibold text-2xl text-gray-400">Контакты</h1>
      </div>
    </div>
  );
};

export default Top;
