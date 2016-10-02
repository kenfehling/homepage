import './Animation.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React, { Component } from 'react';

const Page1 = () => (
    <div className="box">
        <h1>Page 1</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
);

const Page2 = () => (
    <div className="box">
        <h1>Page 2</h1>
        <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
);

export default class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageFlipped: false
        }
    }

    render() {
        const page = this.state.pageFlipped ? '' : <Page2 key="key" /> ;
        console.log(page);
        return <div>
            <button onClick={() => this.setState({pageFlipped: !this.state.pageFlipped})}>Flip page</button>
            <ReactCSSTransitionGroup
                transitionName="slide"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
            >
                {page}
            </ReactCSSTransitionGroup>
        </div>;
    }
}