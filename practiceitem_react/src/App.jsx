import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemList from "./assets/ItemList"
import ItemForm from "./assets/ItemForm"
import ItemDetail from "./assets/ItemDetail"
import Login from "./assets/Login"

function App() {


  return (
    <Routes>
      <Route path='' element={<ItemList />}/>
      <Route path='/detail/:itemNo' element={<ItemDetail />} />
      <Route path='/reg' element={<ItemForm />}/>
      <Route path='/login' element={<Login />}/>
    </Routes>
  )
}

export default App
