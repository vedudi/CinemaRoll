import { BrowserRouter,Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import CreatePage from "./pages/CreatePage"
import DetailPage from "./pages/DetailPage"
import Header from "./components/Header"


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/"element={<MainPage/>}/>
      <Route path="/movie/:id"element={<DetailPage/>}/>
      <Route path="/create"element={<CreatePage/>}/>
    </Routes>
    </BrowserRouter>
  )
  
}

export default App