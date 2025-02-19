import React from 'react'

const Table = ({ arr, setArr}) => {
   
    const deleteBook = (index) =>{
        console.log("delete ishladi" , index);
        let current_data = [...arr]
        current_data.splice(index,1)
        setArr(current_data)
    }

    return (
        <table className='w-full mt-5   text-xl text-left rtl:text-right text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th className='border p-2 text-center text-[16px]'>Kitob nomi</th>
                    <th className='border p-2 text-center text-[16px]'>Kitob muallifi</th>
                    <th className='border p-2 text-center text-[16px]'>Kitob chop etilgan yili</th>
                    <th className='border p-2 text-center text-[16px]'>Amallar</th>
                </tr>
            </thead>
            <tbody>
                {arr.map((item, index) => (
                    <tr key={index}>
                        <td className='w-[30%] border p-1 text-center'>{item?.name}</td>
                        <td className='w-[30%] border p-1 text-center'>{item?.author}</td>
                        <td className='w-[30%] border p-1 text-center'>{item?.year}</td>
                        <td className='w-[30%] border p-1 text-center'>
                            <button onClick={()=>{deleteBook(index)}} className='border rounded-md bg-red-500 active:bg-red-300 text-white py-2 px-1'>O'chirish</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table