import { Route, Routes } from "react-router-dom"
import MainLayout from "./components/layout/MainLayout"
import Landing from "./pages/home/Landing"



function App() {

  return (
    <Routes>
      {/* 처음페이지 */}
      <Route path="/" element={<Landing />}/>

      {/* 메인 페이지 */}
      <Route path="/velora" element={<MainLayout />}>
        
        
      </Route>
    </Routes>
  )
}

export default App
