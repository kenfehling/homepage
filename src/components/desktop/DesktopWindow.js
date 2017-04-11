import React, {PropTypes} from 'react'
import {HistoryWindow} from 'react-router-nested-history'
import ReactTooltip from 'react-tooltip'
import Helmet from 'react-helmet'
import * as styles from './DesktopWindow.scss'

const noop = () => {}

const ToolbarButton = ({name, onClick=noop}) => (
  <img src={require(`img/icons/desktop/${name}.svg`)} onClick={onClick} />
)

const ShareItem = ({name, text=name, url}) => (
  <a className='item'
     target='_blank'
     href={url}
  >
    <img alt={name} src={require(`img/icons/social/${name}.svg`)} />
    {name}
  </a>
)

const Share = ({location=window.location.href}) => (
  <div>
    <div className='share-title'>Share</div>
    <ShareItem name='Twitter'
               url={`https://twitter.com/intent/tweet?text=${location}`}
    />
    <ShareItem name='Facebook'
               url={`https://www.facebook.com/sharer/sharer.php?u=${location}`}
    />
    <ShareItem name='Reddit'
               url={`https://www.reddit.com/submit?url=${location}`}
    />
  </div>
)

const DesktopWindow = ({name, container='desktop_' + name.toLowerCase(),
                        children, ...windowProps}) => (
  <HistoryWindow forName={container}
                 visible={false}
                 {...windowProps}
                 draggable={true}
                 draggableProps={{
                   cancel: ".body"
                 }}
                 rememberPosition={false}
  >
    {({close}) => (
      <div className={`${styles.window} ${name}`}>
        <Helmet title={name} titleTemplate="Ken Fehling - %s" />
        <div className='toolbar'>
          <div className='buttons left'>
            <ToolbarButton name='close' onClick={close} />
            <ToolbarButton name='minimize' onClick={close} />
          </div>
          <div className='buttons right'>
            <a data-tip data-for={`${name}-share`}>
              <ToolbarButton name='share' />
            </a>
            <ReactTooltip place='right'
                          type='light'
                          effect='solid'
                          event='click'
                          globalEventOff='click'
                          className='share-window'
                          id={`${name}-share`}
            >
              <Share />
            </ReactTooltip>
          </div>
          <div className='title'>{name}</div>
        </div>
        <div className="body">
          {children instanceof Function ? children() : children}
        </div>
      </div>
    )}
  </HistoryWindow>
)

DesktopWindow.propTypes = {
  name: PropTypes.string.isRequired,
  container: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  visible: PropTypes.bool,
  className: PropTypes.string,
  topClassName: PropTypes.string
}

export default DesktopWindow