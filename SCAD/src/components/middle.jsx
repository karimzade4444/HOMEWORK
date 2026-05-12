import system from './img/Group (1).png'
import prod from './img/ppc 1.png'
import comp from './img/comparative 1.png'
import strc from './img/hierarchy-structure 1.png'

const Middle = () => {
  return (
    <div>
        <div className=' font-black text-4xl w-145 mt-40 ml-40'>Системы автоматизации и телемеханизации "под ключ"</div>
        <div className=' grid grid-cols-2 place-items-center'>
       <div className='w-150 mt-30'>
        <div className=' flex  items-center gap-10'><img src={system} alt="" /> <p className=' text-3xl'>Системы поддержки принятия решений, анализа и управления</p></div>
        <div className='w-70 h-1 bg-red-500 mt-7'></div>
        <p className=' mt-7 w-120'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercitationem corporis cumque, possimus commodi magnam pariatur nemo iste asperiores ipsa dolores quibusdam ad sint voluptatum, repellat voluptate? Impedit, porro earum.</p>
       </div>

       <div className='w-150 mt-30'>
        <div className=' flex  items-center gap-10'><img src={prod} alt="" /> <p className=' text-3xl'>Серийная продукция собственного производство</p></div>
        <div className='w-70 h-1 bg-red-500 mt-7'></div>
        <p className=' mt-7 w-120'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercitationem corporis cumque, possimus commodi magnam pariatur nemo iste asperiores ipsa dolores quibusdam ad sint voluptatum, repellat voluptate? Impedit, porro earum.</p>
       </div>

       <div className='w-150 mt-30'>
        <div className=' flex  items-center gap-10'><img src={comp} alt="" /> <p className=' text-3xl'>Системы поддержки принятия решений, анализа и управления</p></div>
        <div className='w-70 h-1 bg-red-500 mt-7'></div>
        <p className=' mt-7 w-120'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercitationem corporis cumque, possimus commodi magnam pariatur nemo iste asperiores ipsa dolores quibusdam ad sint voluptatum, repellat voluptate? Impedit, porro earum.</p>
       </div>

       <div className='w-150 mt-30'>
        <div className=' flex  items-center gap-10'><img src={strc} alt="" /> <p className=' text-3xl'>Системы поддержки принятия решений, анализа и управления</p></div>
        <div className='w-70 h-1 bg-red-500 mt-7'></div>
        <p className=' mt-7 w-120'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio exercitationem corporis cumque, possimus commodi magnam pariatur nemo iste asperiores ipsa dolores quibusdam ad sint voluptatum, repellat voluptate? Impedit, porro earum.</p>
       </div>
        </div>
    </div>
  )
}

export default Middle