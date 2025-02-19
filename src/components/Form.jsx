import React, { useRef } from 'react'

const Form = ({setValue, value}) => {
    const nameRef = useRef()
    const authorRef = useRef()
    const YearRef = useRef()
 const addBook =()=>{
    let new_book ={
        name:nameRef?.current?.value,
        author:authorRef?.current?.value,
        year:YearRef?.current?.value
    }


    let current_data = [...value]
    current_data.push(new_book)
  setValue(current_data)
  nameRef.current.value = null
  authorRef.current.value = null
  YearRef.current.value = null
 }

  return (
    <div className='Form pt-4 '>
        <h1 className='text-center font-bold text-[30px] mt-5'>Kitob qo'shish</h1>
        <div className='flex flex-col '>
            <label className='font-bold p-2 ' htmlFor="name">Kitob nomi</label>
            <input ref={nameRef} className='border p-3 rounded-lg ' name='name' type="text" placeholder='Kitob nomini kiriting' />
        </div>
        <div className='flex flex-col'>
            <label className='font-bold p-2 ' htmlFor="author">Kitob muallifi</label>
            <input  ref={authorRef} className='border p-3 rounded-lg ' name='author' type="text" placeholder='Kitob muallifini kiriting' />
        </div>
        <div className='flex flex-col'>
            <label className='font-bold p-2 ' htmlFor="year">Kitob chop etilgan sanasi</label>
            <input  ref={YearRef} className='border p-3 rounded-lg ' name='year' type="number" placeholder='Kitob chop etilgan sanasini kiriting' />
        </div>
        <div className='flex justify-center mt-4'>
            <button onClick={()=>{addBook()}} className='text-[25px] px-4 py-2 rounded-md bg-blue-300 active:bg-blue-500'>{"Qo'shish"}</button>
        </div>
    </div>
  )
}

export default Form