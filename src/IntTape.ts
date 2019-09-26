import { Int } from 'ts-number'
import { IntRange } from 'ts-range'

import Tape from './Tape'

// interface IntTape<I extends Int, S extends Int, L extends NaturalInt> {
//   index: I,
//   range: Range<S, L>,
// }
interface IntTape extends Tape<Int, IntRange> {}

namespace IntTape {

  export const from = <I extends Int, R extends IntRange>(index: I, range: R): IntTape => {
    return Tape.from(index, range)
  }
}

namespace IntTape {

  const sFrom = (ranges: IntRange[], i: Int): Tape<Int, IntRange>[] => {
    return ranges.map((range: IntRange): IntTape => {
      return from(i, range)
    })
  }

  // export const sAlongEach =
  //   <T>(grid: any[][], starts: IntRange.Starts<T>): IntTape[] => {

  //   const tapes: Tape<Int, IntRange>[] = []
  //   grid.forEach((row: any[], r: number) => {
  //     const ranges = IntRange.sStartingAt(starts, row)
  //     const tapesOnRow = sFrom(ranges, Int.from(r))
  //     tapes.push(...tapesOnRow)
  //   })
  //   return tapes
  // }
}

namespace IntTape {

  // export const raisedLengthwise = (count: Int, { index, range }: IntTape): IntTape => {
  //   const progressed = Range.progressed(count, range) as IntRange
  //   const raised = from(index, progressed)
  //   return raised
  // }

  // export const raisedWidthwise = (count: number, { index, range }: IntTape): IntTape => {
  //   const raisedIndex = Int.from(index + count)
  //   return from(raisedIndex, range)
  // }
}

namespace IntTape {

  export const toString = Tape.toString
}

export default IntTape
