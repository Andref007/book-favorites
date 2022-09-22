import { useEffect, useState } from 'react'
import axios from 'axios'
import BootstrapTable  from 'react-bootstrap-table-next'
import React from 'react'

const colunas = [{
  dataField: 'id',
  text: 'ID',
},{
  dataField: 'title',
  text:'Livro'
}]


export default function Books() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  async function getBooks() {
    try{
      const response = await axios({
        method: "get",
        url: "https://books.ronier.me",
      })
    
    setBooks(response.data.content)
    console.log(response.data.content)
     } catch(error) {
    console.log(error)
  }

  return (
    
    <div>
      <h1>Books</h1>
    <BootstrapTable keyField='id' data={books} columns={colunas} />
    </div>
  )
}
}
