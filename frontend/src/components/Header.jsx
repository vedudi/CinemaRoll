import { Link } from "react-router-dom"



const Header = () => {
  return (
    <header className=" flex justify-between items-center py-3 px-5 border-b ">
        <Link className=" flex items-center gap-10" to={'/'}>
            <img width={120} src={"../public/cinema.jpeg"} />
            <span className="font-bold text-2xl max-sm:hidden">Cinema Roll</span>
        </Link>
        <Link to={'/create'} className="border rounded-full p-1 px-5 hover:bg-black hover:text-white transition-all">Create a Film</Link>
    </header>
  )
}

export default Header