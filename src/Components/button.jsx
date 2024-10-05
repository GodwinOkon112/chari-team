const Button = (prop) => {
  return (
    <>
      <button className='text-[#e27126] font-semibold text-lg border border-[#e27126] p-2 px-4 rounded-lg hover:bg-[rgb(226,113,38)] hover:text-white transition-colors flex items-center gap-4'>
        {prop.value}
        <h2 className=' bg-white w-10 h-10 rounded-[50%] text-3xl text-[#e27126]'>
          &#8594;
        </h2>
      </button>
    </>
  );
};
export { Button };
