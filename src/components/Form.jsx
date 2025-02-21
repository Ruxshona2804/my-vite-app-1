import React, { useEffect, useState } from 'react'

const Form = ({ setValue, value, book_id, setBookId }) => {

    const [name, setname] = useState(null)
    const [author, setAuthor] = useState(null)
    const [year, setYear] = useState(null)

    const [error, setError] = useState("");

   
    
    
    
    
    
    const addBook = () => {
        if (!name || !author || !year) {
          setError("Barcha maydonlarni to'ldiring!");
          return;
        }

        let new_book = {
            name: name,
            author: author,
            year: year,
        }
        
      

        let current_data = [...value]
        current_data.push(new_book)
        setValue(current_data)
        setname("")
        setAuthor("")
        setYear("")
    }


    useEffect(() => {
        if (book_id !== null) {
            setname(value[book_id].name)
            setAuthor(value[book_id].author)
            setYear(value[book_id].year)

        }
    }, [book_id])

    const editBook = () => {
        if (!name || !author || !year) {
            setError("Barcha maydonlarni to'ldiring!");
            return;
        }
    
        let current_data = [...value];
        current_data[book_id] = { name, author, year };
        setValue(current_data);
        setname("");
        setAuthor("");
        setYear("");
        setError("");
    
        setBookId(null);
    };



    return (
        <div className='Form pt-4 '>
            <h1 className='text-center font-bold text-[30px] mt-5'>Kitob qo'shish</h1>
            <div className='flex flex-col '>
                <label className='font-bold p-2 ' htmlFor="name">Kitob nomi</label>
                <input className='border p-3 rounded-lg '
                    name='name'
                    type="text"
                    placeholder='Kitob nomini kiriting'
                    onInput={(val) => {
                        console.log(val);
                        setname(val.target?.value)
                    }}
                    value={name}
                />
            </div>
            <div className='flex flex-col'>
                <label className='font-bold p-2 ' htmlFor="author">Kitob muallifi</label>
                <input className='border p-3 rounded-lg ' name='author' type="text" placeholder='Kitob muallifini kiriting'
                    onInput={(val) => {
                        console.log(val);
                        setAuthor(val.target?.value)
                    }}
                    value={author}
                     />
            </div>
            <div className='flex flex-col'>
                <label className='font-bold p-2 ' htmlFor="year">Kitob chop etilgan sanasi</label>
                <input className='border p-3 rounded-lg ' name='year' type="number" placeholder='Kitob chop etilgan sanasini kiriting'
                    onInput={(val) => {
                        console.log(val);
                        setYear(val.target?.value)
                    }}
                    value={year}
                />
            </div>
            <div className='flex justify-center mt-4'>
                {book_id == null ? <button onClick={() => { addBook() }} className='text-[25px] px-4 py-2 rounded-md bg-blue-300 active:bg-blue-500'>{"Qo'shish"}</button> : <button onClick={() => { editBook() }} className='text-[25px] px-4 py-2 rounded-md bg-blue-300 active:bg-blue-500'>{"Tahrirlash"}</button>}
                
            </div>
        </div>
    )
}

export default Form