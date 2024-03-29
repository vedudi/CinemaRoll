

const Hero = () => {
  return (
    <div className="p-10 py-20 lg:px-20 mb-10 bg-[url('../public/xman.jpg')] bg-center bg-cover  text-white ">
        <h1 className="text-5xl font-extrabold  ">wellcome!!</h1>
        <h2 className="text-2xl font-semibold ">find millions Film, movie series and actors </h2>
    
    <div className="relative flex  gap-10 rounded-full overflow-hidden ">
        <input placeholder="search movies..." type="text" className="w-full p-2  text-black " />
    <button className="bg-blue-400 absolute font-bold end-0 h-full w-20 p-2 hover:bg-blue-600 transition-opacity ">search</button>
    </div>
    
    </div>
  )
}

export default Hero