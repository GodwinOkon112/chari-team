import { Button } from './button';
const HeroSection = () => {
  return (
    <div className='text-center mt-[10rem] sm:pb-[5rem] pb-[0rem] sm:w-[75%] w-[100%] m-auto'>
      <h1 className='sm:text-5xl text-4xl font-extrabold'>
        Lets Change The World <br /> With Humanity{' '}
      </h1>
      <p className='py-5 text-gray-400 sm:text-xl text-[1rem] font-medium'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab provident
        minus vel, dignissimos in ad autem <br /> magnam labore? In, dolorum!
      </p>
      <div className=' flex justify-center'>
        <Button value='Learn More' />
      </div>
    </div>
  );
};
export default HeroSection;
