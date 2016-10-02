import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import Tools from '../src/components/Tools';
import Animation from './Animation';

storiesOf('Welcome', module)
    .add('to Storybook', () => (
        <Welcome showApp={linkTo('Button')}/>
    ));

    storiesOf('Button', module)
    .add('with text', () => (
        <Button onClick={action('clicked')}>Hello Button</Button>
    ))
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
    ));

    storiesOf('Tools', module)
    .add('goldblum', () => (
        <Tools />
    ));

    storiesOf('Animation', module)
        .add('test', () => (
            <Animation />
        ));