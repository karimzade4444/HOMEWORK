import scad from './img/лого.png'
import phone from './img/Group.png'
import mail from './img/mail 1.png'


const Top = () => {
  return (
    <div>
        <div>
            <div><img src={scad} alt="" /><p>Комплексные решения в сфере управления технологиями</p></div><div><div><div className=''><img src={phone} alt="" /><p>+992 917 20 8222</p></div><div><img src={mail} alt="" /><p>mustafo.karimzoda@zet-mobile.com</p></div></div></div>
        </div>

    </div>
  )
}

export default Top