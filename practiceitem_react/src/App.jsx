import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemList from "./assets/ItemList"
import ItemForm from "./assets/ItemForm"
import ItemDetail from "./assets/ItemDetail"

function App() {


  return (
    <Routes>
      <Route path='' element={<ItemList />}/>
      <Route path='/detail/:itemNo' element={<ItemDetail />} />
      <Route path='/reg' element={<ItemForm />}/>
    </Routes>
  )
}

export default App
