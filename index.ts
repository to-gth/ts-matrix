import _Row from './src/Row'
import _Tape from './src/Tape'
import _IntTape from './src/IntTape'

import { Int, Natural } from 'ts-number'
import { Range } from 'ts-range'


export const Row = _Row

export interface Tape<I extends Int, R extends Range<number, Natural>> extends _Tape<I, R> {}
export const Tape = _Tape

export interface IntTape extends _IntTape {}
export const IntTape = _IntTape
