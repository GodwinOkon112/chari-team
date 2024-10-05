import { Button } from './button';
const NavBar = () => {

  function toggler() {
     const ul = document.querySelector('.ul');
     const classname = ul.classList.contains('flex')
     if(classname == true){
        ul.classList.remove("flex")
        ul.classList.add('hidden')
     }else{
          ul.classList.remove('hidden');
          ul.classList.add('flex');
     }


    }

  return (
    <div>
        
      <TopNav />
      <div className='flex justify-between sm:py-4 py-0 gap-[10rem] pt-8 items-start'>
        <h2 className='text-[#e27126] sm:text-3xl text-4xl pt-[1px] font-bold w-[30%]'>
          Chari<span className='text-white'>Team</span>
        </h2>
        <h3 className='text-5xl sm:hidden cursor-pointer ' onClick={toggler} >&#8801;</h3>

        <ul className='sm:flex hidden sm:flex-row ul flex-col sm:items-center sm:justify-end items-end sm:pt-[1px] pt-[5rem] sm:pr-[auto] pr-[2rem]  sm:h-[auto] w-[90%] h-[100vh]  m-auto sm:relative fixed left-[-5rem]  sm:left-0 bg-[#020607fd]  sm:bg-transparent sm:gap-5 gap-4 font-semibold sm:text-lg top-0  text-[1.5rem] flex-wrap'>
          <li className='text-[#e27126]'>Home</li>
          <li>About</li>
          <li>Causes</li>
          <li>Pages</li>
          <li>Contact</li>
          <Button value='Donate Now' />
        </ul>
      </div>
    </div>
  );
};
export default NavBar;

const TopNav =()=>{
    return (
      <div className='sm:flex hidden justify-between pt-3  text-gray-400'>
        <ol className='flex gap-6'>
          <li>123 Street, New York, USA</li>
          <li>info@example.com</li>
        </ol>
        <ul className='flex gap-6'>
          <li>Follow us:</li>
          <li>fb</li>
          <li>tw</li>
          <li>lind</li>
          <li>insta</li>
        </ul>
      </div>
    );

}
export {TopNav}
