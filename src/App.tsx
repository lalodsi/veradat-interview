import './App.css'
import Table from './Table'

const meses = [
  "Enero",
  "Febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
]

const YEARS_QUANTITY = 10;

const years: number[] = []

for (let i = 0; i < YEARS_QUANTITY; i++) {
  years.push(2020 + i);
}

const randomArray: number[][] = meses.map((mes,i) => {
  const yearRandom = years.map((year,j) => {
    return Math.floor(Math.random() * 100)
  })
  return yearRandom
})

const averageArray = randomArray.map(col => {
  const sum = col.reduce((prev, curr) => prev + curr)
  return sum / col.length
})

let suma: number[] = []
const sumArray = randomArray.map(col => {
  col.forEach((ceil, index) => {
    if(suma[index] === undefined){
      suma[index] = ceil
    } else {
      suma[index] += ceil
    }
  })
  return suma
})

function App() {

  /**
   * Join all data into an array of months + 2 cols * YEARS_QUANTITY +2 rows
   */
  const totalArray: (number|string)[][] = Array.from({ length: YEARS_QUANTITY + 2 }).map((col, colIndex) => {
    return Array.from({ length: meses.length + 2}).map((row, rowIndex) => {
      if (rowIndex === 0) {
        if (colIndex === 0 || colIndex === YEARS_QUANTITY + 1) {
          return " "
        }
        return years[colIndex-1]
      }

      if (colIndex === 0) {
        if (rowIndex === 0 || rowIndex === meses.length + 1) {
          return " "
        }
        return meses[rowIndex-1]
      }

      if (colIndex === YEARS_QUANTITY + 1) {
        return averageArray[rowIndex - 1]
      }
      if (rowIndex === meses.length + 1) {
        return suma[colIndex - 1]
      }

      return randomArray[rowIndex-1][colIndex-1]
      // return randomArray[rowIndex-1][colIndex-1]
    })
  })

  return (
    <>
      <Table content={totalArray} />
    </>
  )
}

export default App
