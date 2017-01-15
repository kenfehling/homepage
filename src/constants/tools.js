import React from 'react';

const LANGUAGES = 'Languages';
const LIBRARIES = 'Libraries';
const DEVOPS = 'DevOps';
const PLATFORMS = 'Platforms';
const WEB = 'Web';
const MOBILE = 'Mobile';
const DATABASES = 'Databases';
const SOFTWARE = 'Software';

const externalLink = (name, href='http://' + name) =>
    <a target="_blank" href={href}>
      {name}
      <i style={{paddingLeft: '0.33em', paddingRight: '0.1em'}} className="fa fa-external-link" />
    </a>;

export const categories = [
  LANGUAGES,
  LIBRARIES,
  DEVOPS,
  PLATFORMS,
  WEB,
  MOBILE,
  DATABASES,
  SOFTWARE,
  'All'
];

export const tools = [{
  name: 'JavaScript',
  stars: 5,
  categories: [LANGUAGES, WEB],
  description: <div>
    My main programming language.
    Despite the near universal hatred of JavaScript by my peers, I'm actually quite fond of it.
    It's gotten especially good now with some of the features in ES6/ES2015.
    I use [[Babel]] to transpile into ES5 for cross-browser support.
  </div>
}, {
  name: 'HTML',
  stars: 5,
  categories: [LANGUAGES, PLATFORMS, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'React',
  stars: 4.5,
  categories: [LIBRARIES, WEB],
  description: <div>
    By far my favorite [[JavaScript]] framework/library,
    React has drastically changed the way I approach web app
    development. This site itself is written in React as well as [[Redux]].
    <br /><br />I've also released a couple of libraries for React into open source:<br />
    <ul>
      <li>{externalLink("react-designable-audio-player",
          "http://github.com/kenfehling/react-designable-audio-player")}</li>
    </ul>
  </div>
}, {
  name: 'Redux',
  stars: 4.5,
  categories: [LIBRARIES, WEB],
  description: <div>
    Redux is a great add-on to [[React]], and it's renewed my interest
    in functional programming. It makes managing client-side state simple and sensible,
    and I appreciate how it's decoupled from the web and can be used in React Native
    and even non-React projects.
    <br /><br />
    This site itself uses Redux to manage things like how the individual windows are layered.
  </div>
}, {
  /*
   name: 'Lodash',
   stars: 4.5,
   categories: [LIBRARIES, WEB],
   description: <div>
   Description
   </div>
   }, {
   */
  name: 'CSS',
  stars: 4,
  categories: [LANGUAGES, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'Node',
  stars: 4,
  categories: [PLATFORMS, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'Python',
  stars: 4,
  categories: [LANGUAGES],
  description: <div>
    Python is my go-to language for anything not web or mobile related.
    Since most of my work is on the frontend web I'm usually
    using [[JavaScript]], however I've recently been using Python
    for the backend of
    a {externalLink('hackathon registration page', 'http://kenfehling.github.io/hack-health-2016-website')} and
    some data analysis using the Pandas library.
  </div>
}, {
  name: 'Java',
  stars: 4,
  categories: [LANGUAGES, MOBILE],
  description: <div>
    At my university, the Computer Science curriculum uses Java as its main programming language.
    I've also used Java on my own projects with
    JSP/Servlets, [[GWT', 'Google Web Toolkit]],
    and [[Android]].
  </div>
}, {
  name: 'Webpack',
  stars: 4,
  categories: [DEVOPS, WEB],
  description: <div>
    Currently my main [[JavaScript]] build tool.
  </div>
}, {
  name: 'SASS',
  stars: 4,
  categories: [LIBRARIES, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'Gulp',
  stars: 4,
  categories: [DEVOPS, WEB],
  description: <div>
    Gulp was my main [[JavaScript]] build tool before switching to
    [[Webpack]]. I often used Gulp with [[Browserify]].
  </div>
}, {
  name: 'Grunt',
  stars: 4,
  categories: [DEVOPS, WEB],
  description: <div>
    I used Grunt for a short time before switching to [[Gulp]],
    and currently [[Webpack]].
    Grunt and Gulp are pretty similar build tools for [[JavaScript]] and
    I used both of them frequently with [[Browserify]].
  </div>
}, {
  name: 'Flask',
  stars: 4,
  categories: [LIBRARIES, WEB],
  description: <div>
    I usually use Flask when I write web projects in [[Python]].
    I've dabbled with Django a little,
    but my Python web projects tend to be pretty small so Flask is better suited.
    For larger web apps I typically use [[Node]] for the backend.
  </div>
}, {
  name: 'JQuery',
  stars: 4,
  categories: [LIBRARIES, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'Android',
  stars: 4,
  categories: [PLATFORMS, MOBILE],
  description: <div>
    I was passionate about making Android apps for a couple of years,
    before going back to focusing primarily on web development.
    <br /><br />
    I released 3 major apps:
    <ul>
      <li>Video Toolbox</li>
      <li>Color Sounds</li>
      <li>TaskBomb</li>
    </ul>
  </div>
}, {
  name: 'Git',
  stars: 4,
  categories: [SOFTWARE],
  description: <div>
    Description
  </div>
}, {
  name: 'NPM',
  stars: 4,
  categories: [DEVOPS, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'Babel',
  stars: 4,
  categories: [DEVOPS, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'Mocha',
  stars: 4,
  categories: [DEVOPS, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'MongoDB',
  stars: 3.5,
  categories: [DATABASES],
  description: <div>
    Description
  </div>
}, {
  name: 'Rails',
  stars: 3.5,
  categories: [LIBRARIES, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'Bootstrap',
  stars: 3.5,
  categories: [LIBRARIES, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'Keystone',
  stars: 3.5,
  categories: [LIBRARIES, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'Jest',
  stars: 3.5,
  categories: [DEVOPS, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'ESLint',
  stars: 3.5,
  categories: [DEVOPS, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'Bower',
  stars: 3.5,
  categories: [DEVOPS, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'FFmpeg',
  stars: 3.5,
  categories: [SOFTWARE],
  description: <div>
    Description
  </div>
}, {
  name: 'Guice',
  fullName: 'Google Guice',
  stars: 3.5,
  categories: [LIBRARIES],
  description: <div>
    Google Guice is a dependency injection library for [[Java]].
    I started using Guice while doing [[GWT]] development,
    but I continued to use it on almost all of my [[Java]] projects,
    including for [[Android]] (along with [[RoboGuice]]).
  </div>
}, {
  name: 'RoboGuice',
  iconType: 'png',
  stars: 3.5,
  categories: [LIBRARIES, MOBILE],
  description: <div>
    Back when I was doing [[Android]] development,
    I used [[Guice]] and RoboGuice for dependency injection.
    Android isn't inherently that well suited for DI but RoboGuice smoothed this over a bit,
    helping me strive to write more modular and testable code.
    In 2016 the library was discontinued, however there are now many alternative DI libraries for Android.
  </div>
}, {
  name: 'ActionScript',
  iconType: 'png',
  stars: 3.5,
  categories: [LANGUAGES, WEB, MOBILE],
  description: <div>
    Description
  </div>
}, {
  name: 'Flash',
  stars: 3.5,
  categories: [PLATFORMS, WEB, SOFTWARE],
  description: <div>
    Description
  </div>
}, {
  name: 'Flex',
  stars: 3.5,
  categories: [SOFTWARE],
  description: <div>
    Description
  </div>
}, {
  name: 'Ruby',
  stars: 3,
  categories: [LANGUAGES],
  description: <div>
    Description
  </div>
}, {
  name: 'C#',
  stars: 3,
  categories: [LANGUAGES],
  description: <div>
    Description
  </div>
}, {
  name: 'iOS',
  stars: 3,
  categories: [PLATFORMS, MOBILE],
  description: <div>
    Description
  </div>
}, {
  name: 'TravisCI',
  stars: 3,
  categories: [DEVOPS, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'Browserify',
  stars: 3,
  categories: [DEVOPS, WEB],
  description: <div>
    Description
  </div>
}, {
  name: 'Bourbon',
  stars: 3,
  categories: [LIBRARIES, WEB],
  description: <div>
    Description
  </div>
}, {
  /*
   name: 'Xcode',
   iconType: 'png',
   stars: 3,
   categories: [MOBILE, SOFTWARE],
   description: <div>
   Description
   </div>
   }, {
   */
  name: 'Postgresql',
  stars: 3,
  categories: [DATABASES],
  description: <div>
    Description
  </div>
}, {
  name: 'MySQL',
  stars: 3,
  categories: [DATABASES],
  description: <div>
    Description
  </div>
}, {
  name: 'SQLite',
  stars: 3,
  categories: [DATABASES],
  description: <div>
    Description
  </div>
}, {
  name: 'Firebase',
  stars: 3,
  categories: [DATABASES],
  description: <div>
    Description
  </div>
}, {
  name: 'Logic',
  iconType: 'png',
  stars: 3,
  categories: [SOFTWARE],
  description: <div>
    Description
  </div>
}, {
  name: 'Ableton',
  stars: 3,
  categories: [SOFTWARE],
  description: <div>
    Description
  </div>
}, {
  name: 'Clojure',
  stars: 2.5,
  categories: [LANGUAGES],
  description: <div>
    I had previously learned Scheme over a summer vacation using the
    old {externalLink("SICP lectures", "http://youtube.com/watch?v=2Op3QLzMgSY")} from MIT.
    I was smitten by the power yet simplicity of it all.
    I later learned some Clojure and ClojureScript,
    which also being Lisp variants are similar to Scheme.
    <br /><br />
    Although I don't use any of these languages in my daily work,
    I'm glad I learned them because they completely changed the way I approach writing programs,
    even in more imperative languages
    like [[JavaScript]] and [[Python]].
  </div>
}, {
  name: 'Swift',
  stars: 2.5,
  categories: [LANGUAGES, MOBILE],
  description: <div>
    Description
  </div>
}, {
  name: 'Unity',
  stars: 2.5,
  categories: [PLATFORMS, SOFTWARE, MOBILE],
  description: <div>
    Description
  </div>
}, {
  name: 'GWT',
  iconType: 'png',
  fullName: 'Google Web Toolkit',
  stars: 2.5,
  categories: [WEB],
  description: <div>
    In the past [[Java]] was my primary language, so GWT seemed like an
    alluring tool at the time for creating web apps. However I didn't quite care for it overall,
    and my [[HTML]], [[JavaScript]],
    and [[CSS]] skills continued to progress.
    <br /><br />
    Although I abandoned GWT, I did take away some nice experience with dependency injection,
    particularly with [[Google Guice]], and the observer pattern.
  </div>
}, {
  name: 'Illustrator',
  stars: 2.5,
  categories: [SOFTWARE],
  description: <div>
    Description
  </div>
}, {
  name: 'Photoshop',
  stars: 1.5,
  categories: [SOFTWARE],
  description: <div>
    Description
  </div>
}];
