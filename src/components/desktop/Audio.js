import React from 'react'
import {connectAudioPlayer, TitleMarquee, TimeSlider} from 'react-designable-audio-player'
import {tracks} from '../../constants/music'
import * as styles from './Audio.scss'
import Head from '../shared/Head'

const Audio = ({play, stop, next, prev, isPlaying, timeElapsed}) => (
  <div className={`${styles.container} code-font`}>
      <div className="controls">
          <span className="icon step-backward" onClick={prev} />
          <span className={`icon ${isPlaying ? 'pause' : 'play'}`} onClick={play} />
          <span className="icon stop" onClick={stop} />
          <span className="icon step-forward" onClick={next} />
      </div>
      <div className="current-track">
          <TitleMarquee />
      </div>
      <div className="time-slider">
          <TimeSlider />
      </div>
      <div className="time">{timeElapsed}</div>
      <Head title='Ken Fehling - Music'
            description="Music I've created"
            keywords='music, songs'
      />
  </div>
)

export default connectAudioPlayer(Audio, tracks)