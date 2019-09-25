
namespace Row {

  const at = <T>(r: number, columns: T[][]): T[] => {
    const row = columns.map((column: T[]): T => column[r])
    return row
  }

  export const sOf = <T>(columns: T[][]): T[][] => {
    const rows = columns[0].map((_, r): T[] => at(r, columns))
    return rows
  }
}

export default Row
