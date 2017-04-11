import React from 'react'
import {connectAudioPlayer, TimeSlider} from 'react-designable-audio-player'
import {tracks} from '../../constants/music'
import MobilePage from './MobilePage'
import * as styles from './MobileAudio.scss'

const AudioPlayer = ({play, stop, next, prev, isPlaying, currentTrack, isDesktop}) => (
  <MobilePage title='Music' isDesktop={isDesktop} navClassName={styles.nav}>
    <div className={styles.container}>
      <div className='picture'>
        <img src={require('img/icons/mobile/music/background.svg')} />
      </div>
      <div className="time-slider">
        <TimeSlider />
      </div>
      <div className="current-track">
        <div className='title'>{currentTrack.title}</div>
        <div className='artist'>{currentTrack.artist}</div>
      </div>
      <div className="controls">
        <i className="fa fa-backward" onClick={prev} />
        <i className={`fa fa-${isPlaying ? 'pause' : 'play'}`} onClick={play} />
        <i className="fa fa-forward" onClick={next} />
      </div>
    </div>
  </MobilePage>
)

export default connectAudioPlayer(AudioPlayer, tracks)