import { Link } from "react-router-dom"


const Card = ({movie, index}) => {
  return (
  <Link to={`/movie/${movie.id}`} className="cursor-pointer flex flex-col items-center ">
    <div className="relative">
    <img className="rounded-3xl bg-cover" src={`https://picsum.photos/200/30${index}`} alt="" srcset="" />
  <span style={{
                      background:
                        movie.rating > 8
                          ? 'green'
                          : movie.rating > 6
                          ? 'orange'
                          : 'red',
                    }} className="absolute left-[0] bottom-[0] text-white p-1 rounded-full font-semibold ">{movie.rating}</span>
    </div>
    <h3 className="mt-4 font-bold">{movie.title}</h3>
    <p className="text-gray-400 flex gap-2">{movie.year}</p>
    <p className="text-gray-500 flex gap-2">{movie.genre}</p>
    
  </Link>
    )
}

export default Card