import React from 'react'
import {connectAudioPlayer, TimeSlider} from 'react-designable-audio-player'
import {tracks} from '../../constants/music'
import MobilePage from './MobilePage'
import * as styles from './MobileAudio.scss'
import Head from '../shared/Head'

const AudioPlayer = ({play, stop, next, prev, isPlaying, currentTrack, isDesktop}) => (
  <MobilePage title='Music' isDesktop={isDesktop} navClassName={styles.nav}>
    <div className={styles.container}>
      <div className='picture'>
        <img alt='Music background'
             src={require('img/icons/mobile/music/background.svg')}
        />
      </div>
      <div className="time-slider">
        <TimeSlider />
      </div>
      <div className="current-track">
        <div className='title'>{currentTrack.title}</div>
        <div className='artist'>{currentTrack.artist}</div>
      </div>
      <div className="controls">
        <span className="icon backward" onClick={prev} />
        <span className={`icon ${isPlaying ? 'pause' : 'play'}`} onClick={play} />
        <span className="icon forward" onClick={next} />
      </div>
      <Head title='Ken Fehling - Music'
            description="Music I've created"
            keywords='music, songs'
      />
    </div>
  </MobilePage>
)

export default connectAudioPlayer(AudioPlayer, tracks)