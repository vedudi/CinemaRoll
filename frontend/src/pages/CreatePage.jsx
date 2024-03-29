import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import InputField from "../components/InputField"

function CreatePage() {
  const navigate=useNavigate()

  const handleSubmit= (e)=>{
    e.preventDefault()
    const form= new FormData(e.taget)
    const data=Object.fromEntries(form.entries())
 axios
 .post('http://127.0.0.1:5001/api/movies', data)
 .then(()=>{
  toast.success(" Movie had added successfull")
  navigate("/")
 })
 .catch(()=>{
  toast.error(" Adding movie is failed")
 })



  }
  return (
    <div className="grid place-items-center bg-yellow-600 h-[calc(100vh-81px)]">
        <div className=" w-11/12 max-w-[700px] sm:grid-cols-2  bg-cover bg-center grid grid-cols-2 bg-white rounded p-10 shadow-lg">
            <form onSubmit={handleSubmit} className="  flex flex-col gap-10 mt-10">
            <h1 className=" text-nowrap text-blue-600 text-4xl font-bold m-auto mb-10">Add a New Film</h1>
              
                    <InputField label="title" type="text" name="title"/>
                    <InputField label="category" type="text" name="genre"/>
                    <InputField label="rating" type="number" name="rating"/>
                    <InputField label="year" type="number" name="year"/>
                
                <button className="bg-green-600 p-1 rounded-md text-white font-semibold hover:bg-yellow-500"> add</button>
            </form>
            <div className="flex items-center justify-center ">
                          <img src="../public/cinema.jpeg" alt="" />

            </div>
        </div>
    </div>
  )
}

export default CreatePage