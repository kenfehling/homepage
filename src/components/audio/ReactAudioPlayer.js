import { Component, createElement } from 'react';
import { play, stop, next, prev, seek, addTracks, addListener } from './audioPlayerCore';

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
            addListener(newState => this.setState(newState));
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