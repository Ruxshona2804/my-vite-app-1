import { useState } from "react"
import Form from "./components/Form"
import Table from "./components/Table"


function App() {
const [data,setData] = useState([
  {
    name: "Sariq devni minib",
    author: "Xudoyberdi To'xtaboyev",
    year: 2023,
  },
  {
    name: "Ikki eshik orasi",
    author: "O'tkir Hoshimov",
    year: 2024,
  },
  {
    name: "Yulduzli tunlar",
    author: "Pirimqul Qodirov",
    year: 2025,
  }



])
  return (
   <div className="container ">
 <Form setValue={setData} value={data} />
 <Table arr={data} setArr={setData} />
   </div>
  )
}

export default App
