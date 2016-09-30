/* global Audio */

import _ from 'lodash';

const audio = new Audio();
let tracks;
let currentTrackIndex = 0;
let timer;
let listeners = {};
let lastListenerId = 0;

function isPlaying() {
    return audio.duration > 0 && !audio.paused;
}

function zeroPadNumber(number) {
    return number < 10 ? '0' + number : number;
}

function formatTime(seconds) {
    if (seconds) {
        const m = Math.round(seconds / 60);
        const s = Math.round(seconds) % 60;
        return zeroPadNumber(m) + ':' + zeroPadNumber(s);
    }
    else {
        return '--:--';
    }
}

function updateListeners() {
    _.each(_.values(listeners), listener => listener({
        currentTrack: {...tracks[currentTrackIndex], number: currentTrackIndex + 1, lengthInSeconds: audio.duration},
        isPlaying: isPlaying(),
        secondsElapsed: audio.currentTime,
        timeElapsed: formatTime(audio.currentTime),
        timeRemaining: formatTime(audio.duration - audio.currentTime)
    }));
}

function switchTrack() {
    const wasStopped = audio.currentTime === 0;
    audio.src = tracks[currentTrackIndex].file;
    if (!wasStopped) {
        play();
    }
    updateListeners();
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    updateListeners();
}

export function addTracks(newTracks) {
    if (_.isEmpty(tracks)) {
        audio.src = newTracks[0].file;
    }
    tracks = newTracks;
}

export function play() {
    if (isPlaying()) {
        audio.pause();
        stopTimer();
    }
    else {
        audio.play();
        updateListeners();
        timer = setInterval(updateListeners, 1000);
    }
}

export function stop() {
    audio.pause();
    audio.currentTime = 0;
    stopTimer();
}

export function next() {
    currentTrackIndex = currentTrackIndex + 1 >= _.size(tracks) ? 0 : currentTrackIndex + 1;
    switchTrack();
}

export function prev() {
    currentTrackIndex = currentTrackIndex - 1 < 0 ? _.size(tracks) - 1 : currentTrackIndex - 1;
    switchTrack();
}

export function seek(seconds) {
    audio.currentTime = seconds;
    updateListeners();
}

export function addListener(callback) {
    listeners[String(++lastListenerId)] = callback;
    return lastListenerId;
}

export function removeListener(id) {
    delete listeners[String(id)];
}

audio.addEventListener('durationchange', updateListeners);

audio.addEventListener('ended', () => {
    next();
    play();
});