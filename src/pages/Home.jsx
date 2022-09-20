import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'


export default function Home() {

  const books = [
    {
      id: 1,
      nome: "As vinhas da Ira"
    },
    {
      id: 2,
      nome: "Dom Casmurro",
    }
  ]

  const colunas = [{
    dataField: 'id',
    text: 'ID'
  },{
    dataField: 'nome',
    text:'Livro'
  }]

  return (
  
   <BootstrapTable keyField='id' data={ books } columns={ colunas } />
  )
}