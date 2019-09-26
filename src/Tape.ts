import { Int, Natural } from 'ts-number'
import { Range } from 'ts-range'

// interface Tape {
//   index: Int,
//   range: Range<number, Natural>,
// }
interface Tape<I extends Int, R extends Range<number, Natural>> {
  index: I,
  range: R,
}

namespace Tape {

  export type TTT = number
  // export const admits = (a: any): a is Tape<Index, Index> => {
  //   const { index, range } = a
  //   if (!Index.admits(index)) return false
  //   if (!Range.admits(range)) return false
  //   return true
  // }

  export const from =
    <I extends Int, R extends Range<number, Natural>>(index: I, range: R): Tape<I, R> => {

    return { index, range }
  }
}

namespace Tape {


  // const sOn = <S extends number, L extends number>
  //             (row: any[], starts: Tape.Starts<any>, index: number): Array<Tape<S, L>> => {
  //   const startIndice = Index.esStartsOfRangesIn(column, starts)
  //   const ranges = Range.sStartedAt(startIndice, column)
  //   const tapes = ranges.map((range: Range<number>): Tape<number, number> => {
  //     return from(index, range)
  //   })
  //   return tapes
  // }
  // const sFrom = (ranges: Array<Range<number, Natural>>, i: Int): Array<Tape<Int, Range<number, Natural>>> => {
  //   return ranges.map((range: Range<number, Natural>): Tape<Int, Range<number, Natural>> => from(i, range))
  // }

  // export const sAlongEach =
  // <T>(grid: any[][], starts: IntRange.Starts<T>): Array<Tape<Int, Range<number, Natural>>> => {
  //   const tapes: Array<Tape<Int, Range<number, Natural>>> = []
  //   grid.forEach((row: any[], r: number) => {
  //     const ranges = IntRange.sStartingAt(starts, row)
  //     const tapesOnRow = sFrom(ranges, Int.from(r))
  //     tapes.push(...tapesOnRow)
  //   })
  //   return tapes
  // }
}

namespace Tape {

  // export const raisedLengthwise = (count: number, { index, range }: Tape): Tape => {
  //   const progressed = Range.progressed(count, range)
  //   return from(index, progressed)
  // }

  // export const raisedWidthwise = (count: number, { index, range }: Tape): Tape => {
  //   const raised = Int.from(index + count)
  //   return from(raised, range)
  // }

  // export const fitLengthwiseWithin = (outer: Range<number, Natural>, { index, range }: Tape): Tape | undefined => {
  //   if (!Range.overlapsWith(outer, range)) return undefined
  //   const clamped = Range.clampedWithin(outer, range)
  //   return from(index, clamped)
  // }

  // export const fitWidthwiseWithin = (outer: Range<number, Natural>, { index, range }: Tape): Tape | undefined => {
  //   if (Range.includes(index, outer)) return from(index, range)
  //   return undefined
  // }
}

namespace Tape {

  export const toString = ({ index, range }: Tape<Int, Range<number, Natural>>): string => {

    const rangeStringified = Range.toString(range)
    return `{
      index: ${ index }
      range: ${ rangeStringified }
    }`
  }
}

export default Tape
