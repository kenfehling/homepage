import React from 'react'
import Tone from 'tone'
import styles from './Dialer.scss'

const createOsc = () => new Tone.MonoSynth({
  "portamento" : 0.01,
  "oscillator" : {
    "type" : "sine"
  },
  "envelope" : {
    "attack" : 0.05,
    "decay" : 2.2,
    "sustain" : 2.4,
    "release" : 0.1,
  }
})

const rowFreq = [697, 770, 852, 941]
const colFreq = [1209, 1336, 1477, 1633]

const synth1 = createOsc().toMaster()
const synth2 = createOsc().toMaster()

function play(freq1, freq2) {
  synth1.triggerAttack(freq1)
  synth2.triggerAttack(freq2)
}

function stop() {
  synth1.triggerRelease()
  synth2.triggerRelease()
}

const Button = ({number, row, col, special=false}) => (
  <button className={`button ${special ? 'special' : ''}`}
          onMouseDown={() => play(rowFreq[row], colFreq[col])}
          onMouseUp={stop}
  >
    {number}
  </button>
)

export default () => (
  <div className={styles.container}>
    <div className='controls'>
      <button className='speed-dial'>Speed dial</button>
    </div>
    <div className='buttons'>
      <Button number='1' row={0} col={0} />
      <Button number='2' row={0} col={1} />
      <Button number='3' row={0} col={2} />
      <Button number='A' row={0} col={3} special={true} />
      <Button number='4' row={1} col={0} />
      <Button number='5' row={1} col={1} />
      <Button number='6' row={1} col={2} />
      <Button number='B' row={1} col={3} special={true} />
      <Button number='7' row={2} col={0} />
      <Button number='8' row={2} col={1} />
      <Button number='9' row={2} col={2} />
      <Button number='C' row={2} col={3} special={true} />
      <Button number='*' row={3} col={0} />
      <Button number='0' row={3} col={1} />
      <Button number='#' row={3} col={2} />
      <Button number='D' row={3} col={3} special={true} />
    </div>
  </div>
)