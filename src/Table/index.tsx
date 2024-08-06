import React from 'react'
import "./styles.css"

interface TableProps{
  content: (number | string)[][]
}

const Table: React.FC<TableProps> = (props) => {
  const {
    content
  } = props

  


  return (
    <table>
      <thead>
        <tr>
        {
          content.map((row, index) => {
            if (index === 0) {
              return row.map((col, j) => (
                <th className='Table_head' key={j}>{col}</th>
              ))
            }
          })
        }
        </tr>
      </thead>
      
      <tbody>
        {content.map((row, rowIndex) => {
          if (rowIndex !== 0) {
            return (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => {
                  if (cellIndex === 0) {
                    return (
                      <td className='Table_ceil_year' key={cellIndex}>{cell}</td>
                    )
                  }
                  return (
                    <td className='Table_ceil' key={cellIndex}>{cell}</td>
                  )
                })}
              </tr>
            )
          }
        })}
      </tbody>
    </table>
  )
}

export default Table