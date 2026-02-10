import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemList from "./assets/ItemList"
import ItemForm from "./assets/ItemForm"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<ItemList/>}/>
        <Route path='/reg' element={<ItemForm />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
