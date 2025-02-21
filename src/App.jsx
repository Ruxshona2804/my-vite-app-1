import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState([
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
    },
  ]);

  const [book_id, setBookId] = useState(null);
  console.log(book_id);

  return (
    <div className="container">
      {/* ✅ Передаём setBookId в Form */}
      <Form setValue={setData} value={data} book_id={book_id} setBookId={setBookId} />
      <Table arr={data} setArr={setData} setBookId={setBookId} />
    </div>
  );
}

export default App;