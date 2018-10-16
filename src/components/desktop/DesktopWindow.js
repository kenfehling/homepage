import React, {PropTypes} from 'react'
import {HistoryWindow} from 'react-router-nested-history'
import ReactTooltip from 'react-tooltip'
import * as styles from './DesktopWindow.scss'
import {getLocation} from '../../utils/tools'

const noop = () => {}

const ToolbarButton = ({name, onClick=noop}) => (
  <img alt={name}
       src={require(`img/icons/desktop/${name}.svg`)}
       onClick={onClick}
  />
)

const ShareItem = ({name, text=name, url, target='_blank'}) => (
  <a className='item'
     target={target}
     href={url}
  >
    <img alt={name} src={require(`img/icons/social/${name}.svg`)} />
    {name}
  </a>
)

const getEmailSubject = () => {
  //TODO: This will interfere with SSR because server and client are different
  return typeof document !== 'undefined' ? document.title : ''
}

const _Share = ({location}) => (
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
    <ShareItem name='Email'
               target='_top'
               url={`mailto:?subject=${getEmailSubject()}&body=${location}`}
    />
  </div>
)

const Share = (props, context) => _Share({location: getLocation(context)})
Share.contextTypes = {serverRequest: PropTypes.object}

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