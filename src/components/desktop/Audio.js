import React from 'react'
import Helmet from 'react-helmet'
import {connectAudioPlayer, TitleMarquee, TimeSlider} from 'react-designable-audio-player'
import {tracks} from '../../constants/music'
import * as styles from './Audio.scss'

const Audio = ({play, stop, next, prev, isPlaying, timeElapsed}) => (
  <div className={`${styles.container} code-font`}>
      <div className="controls">
          <i className="fa fa-step-backward" onClick={prev} />
          <i className={`fa fa-${isPlaying ? 'pause' : 'play'}`} onClick={play} />
          <i className="fa fa-stop" onClick={stop} />
          <i className="fa fa-step-forward" onClick={next} />
      </div>
      <div className="current-track">
          <TitleMarquee />
      </div>
      <div className="time-slider">
          <TimeSlider />
      </div>
      <div className="time">{timeElapsed}</div>
      <Helmet>
        <title>Ken Fehling - Music</title>
        <meta name='description'
              content="Music I've created"
        />
        <meta name="keywords"
              content="music, songs"
        />
      </Helmet>
  </div>
)

export default connectAudioPlayer(Audio, tracks)