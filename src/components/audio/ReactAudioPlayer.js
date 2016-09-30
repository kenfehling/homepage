import { Component, PropTypes, createElement } from 'react';
import { play, stop, next, prev, seek, addTracks, addListener, UpdateTypes } from './audioPlayerCore';
import _ from 'lodash';

export function connectAudioPlayer(WrappedComponent, tracks) {
    class Connect extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isPlaying: false,
                currentTrack: {},
                secondsElapsed: 0,
                timeElapsed: null,
                timeRemaining: null,
            };
        }

        componentDidMount() {
            addListener(update => this.setState(_.omit(update, 'type')));
            addTracks(tracks);
        }

        render() {
            const props = {
                play,
                stop,
                next,
                prev,
                seek,
                isPlaying: this.state.isPlaying,
                currentTrack: this.state.currentTrack,
                secondsElapsed: this.state.secondsElapsed,
                timeElapsed: this.state.timeElapsed,
                timeRemaining: this.state.timeRemaining,
            };
            return createElement(WrappedComponent, props);
        }
    }
    return Connect;
}


/* TitleMarquee component */

const animationName = 'marquee_' + Math.round(Math.random() * 10000000);

const keyframes =
    `@keyframes ${animationName} {
        0% {-webkit-transform:translate(0, 0)} 
        100% {-webkit-transform:translate(-100%, 0)}
     }`;

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, _.size(styleSheet.cssRules));

const baseStyle  = {
    paddingLeft: '100%',
    display: 'inline-block'
};

const marqueeStyle = {
    ...baseStyle,
    animation: `${animationName} 10s infinite linear`
};

class Marquee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: true
        };
    }

    componentDidMount() {
        addListener(update => this.setState({on: update.type !== UpdateTypes.TRACK_SWITCH}));
    }

    render() {
        return <div style={{overflow: 'hidden', whiteSpace: 'nowrap'}}>
            <div style={this.state.on ? marqueeStyle : baseStyle}>{this.props.text}</div>
        </div>
    }
}

Marquee.propTypes = {
    text: PropTypes.string.isRequired
};

export const TitleMarquee = Marquee;