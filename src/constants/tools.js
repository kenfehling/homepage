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
  <a target='_blank' href={href} style={{whiteSpace: 'nowrap'}}>
    {name}
    <span className='external-link'/>
  </a>;

export const categories = [
  'All',
  LANGUAGES,
  LIBRARIES,
  DEVOPS,
  PLATFORMS,
  WEB,
  MOBILE,
  DATABASES,
  SOFTWARE
];

export const tools = [{
  name: 'JavaScript',
  stars: 5,
  categories: [LANGUAGES, WEB],
  description: <div>
    My main programming language.
    Despite the near universal hatred of JavaScript by my peers
    I'm actually quite fond of it.
    <br /><br />
    JavaScript has gotten especially good now with some of the features in
    ES6/ES2015.
    I use [[Babel]] to transpile into ES5 for cross-browser support.
    I'm also interested in adding static typing to JavaScript through
    [[Flow]] and especially [[TypeScript]].
  </div>
}, {
  name: 'HTML',
  stars: 5,
  categories: [LANGUAGES, PLATFORMS, WEB],
  description: <div>
    HTML is the first thing that sparked my interest in programming.
    Since then it's usually been at the center of everything I do,
    whether it's server-side code in [[Java]] servlets, [[Rails]], [[Python]],
    or [[Node]], or client-side web apps written with [[JavaScript]].
  </div>
}, {
  name: 'React',
  stars: 5,
  categories: [LIBRARIES, WEB],
  description: <div>
    By far my favorite [[JavaScript]] framework/library,
    React has drastically changed the way I approach web app
    development.<br /><br />
    This site itself is written in React and two of my own libraries:<br />
    <ul>
      <li>{externalLink("react-router-nested-history",
        "http://github.com/kenfehling/react-router-nested-history")}</li>
      <li>{externalLink("react-designable-audio-player",
          "http://github.com/kenfehling/react-designable-audio-player")}</li>
    </ul>
  </div>
}, {
  name: 'Redux',
  stars: 5,
  categories: [LIBRARIES, WEB],
  description: <div>
    Redux is a great add-on to [[React]], and it's contributed to renewing my interest
    in functional programming. It makes managing client-side state simple and sensible,
    and I appreciate how it's decoupled from the web and can be used in React Native
    and even non-React projects.
  </div>
}, {
  name: 'TypeScript',
  stars: 5,
  categories: [LANGUAGES, WEB],
  description: <div>
    TypeScript is currently my main compile-to-[[JavaScript]] library.
    In the past I've used [[Flow]] but I prefer TypeScript especially
    for its more mature tooling. In many ways they're pretty similar though.
    Along with unit testing, static typing has become a major weapon in my
    arsenal for keeping my web projects maintainable.
    <br /><br />
    My [[React]] library {externalLink("react-router-nested-history",
    "http://github.com/kenfehling/react-router-nested-history")} is written
    in TypeScript.
  </div>
}, {
  name: 'CSS',
  stars: 4.5,
  categories: [LANGUAGES, WEB],
  description: <div>
    Unlike many web developers I actually enjoy styling.
    I don't get to spend as much time doing it as I'd like to since even
    front-end development alone has so many other facets.
    My current preprocessor of choice is [[SASS]];
    in the past I've also used LESS and Stylus.
  </div>
}, {
  name: 'Node',
  fullName: 'Node.js',
  stars: 4.5,
  categories: [PLATFORMS, WEB],
  description: <div>
    Node.js is currently my main back-end platform, along with [[Express]].
    <br /><br />
    In the past I've used [[Java]] servlets, [[Rails]], and [[Python]],
    but Node is very appealing for its use in "Universal JS"
    or Server Side Rendered (SSR) apps with [[React]].
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
    the {externalLink('HackHealth', 'http://kenfehling.github.io/hack-health-2016-website')} registration
    page and some data analysis using the Pandas library.
  </div>
}, {
  name: 'Java',
  stars: 4,
  categories: [LANGUAGES, MOBILE],
  description: <div>
    At my university, the Computer Science curriculum uses Java as its main programming language.
    I've also used Java on my own projects with [[Android]],
    JSP and servlets, and [[Google Web Toolkit]].
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
    After trying LESS and Stylus I settled on SASS as my CSS preprocessor
    of choice. I prefer to use the SCSS dialect of SASS
    because it's just a superset of regular [[CSS]] syntax.
    <br /><br />
    In the past I've used SASS with Compass,
    and I'm currently using it with [[Bourbon]].
  </div>
}, {
  name: 'Gulp',
  stars: 4,
  categories: [DEVOPS, WEB],
  description: <div>
    Gulp was my main [[JavaScript]] build tool
    after a short time with [[Grunt]] and before switching to
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
  name: 'jQuery',
  stars: 4,
  categories: [LIBRARIES, WEB],
  description: <div>
    jQuery used to be my go-to [[JavaScript]] library before I discovered [[React]].
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
  name: 'Express',
  stars: 4,
  categories: [WEB],
  description: <div>
    Express is my main back-end web framework;
    it's what I use on almost all [[Node]] projects.
    <br /><br />
    In the past I've used [[Ruby]] on [[Rails]] and [[Flask]] with [[Python]],
    but have settled mostly on Node, especially for its ability to create
    "Universal JS" or Server-Side Rendered (SSR) apps with [[React]].
  </div>
}, {
  name: 'Git',
  stars: 4,
  categories: [DEVOPS, SOFTWARE],
  description: <div>
    I use Git for all of my projects. Using version control brings an extra
    level of confidence and organization to my work.
    <br/><br/>
    The main Git server I use
    is {externalLink("GitHub", "http://github.com/kenfehling")}
  </div>
}, {
  name: 'NPM',
  stars: 4,
  categories: [DEVOPS, WEB],
  description: <div>
    I first encountered NPM when using [[Node]] and I've gone on to use it
    on the front-end via [[Webpack]] and [[Browserify]]. In the past I had used
    things like [[Bower]], RequireJS and Volo for dependency management but
    I'm much happier since adopting NPM.
  </div>
}, {
  name: 'Babel',
  stars: 4,
  categories: [DEVOPS, WEB],
  description: <div>
    I first got into Babel when I started with [[React]].
    This was also my first real look at ES6, and of course React’s JSX syntax.
    In the beginning I was using Babel with [[Browserify]] and [[Gulp]],
    but soon moved to [[Webpack]] which is my current build tool of choice.
    Webpack's babel-loader plugin works great.
  </div>
}, {
  name: 'Mocha',
  stars: 4,
  categories: [DEVOPS, WEB],
  description: <div>
    My [[JavaScript]] test framework of choice.
    I use it with the Chai assertion library.
    I've also been using [[Jest]] recently but I prefer Mocha for its
    better integration with other tools like [[Webpack]] and [[Babel]], and
    also better [[WebStorm]] IDE integration for debugging.
  </div>
}, {
  name: 'Flow',
  stars: 4,
  categories: [WEB],
  description: <div>
    Becoming overwhelmed while
    writing {externalLink("react-router-nested-history", "http://github.com/kenfehling/react-router-nested-history")} I
    decided to give static typing in [[JavaScript]] a try via Facebook's Flow.
    <br /><br />
    I was extremely pleased with the result.
    The code was more manageable and I had a second place to turn to
    in addition to unit tests for catching bugs early.
    <br /><br />
    In the end however I switched to using [[TypeScript]] which is currently
    my main compile-to-[[JavaScript]] language.
  </div>
}, {
  name: 'WebStorm',
  stars: 4,
  categories: [SOFTWARE],
  description: <div>
    My favorite IDE. PyCharm and of course IntelliJ IDEA are good too,
    but I spend almost all of my time these days working on web projects.
    JetBrains just makes awesome software.
  </div>
}, {
  name: 'MongoDB',
  stars: 3.5,
  categories: [DATABASES],
  description: <div>
    NoSQL databases like Mongo are becoming more prevalent in my projects than
    relational ones like [[Postgresql]] or [[MySQL]].
    <br /><br />
    I've had good experiences with the [[Keystone]] CMS platform for [[Node]]
    which uses Mongo as its default storage.
  </div>
}, {
  name: 'Rails',
  stars: 3.5,
  categories: [LIBRARIES, WEB],
  description: <div>
    I thought learning [[Ruby]] on Rails would be a good experience since
    it's the gold standard of back-end web frameworks.
    It certainly was an enlightening experience.
    <br /><br />
    Nowadays I mostly use [[JavaScript]], [[Node]] and [[Express]]
    or occasionally [[Python]] with [[Flask]] but I'm glad
    I spent some time learning an opinionated framework,
    especially one as influential as Rails.
  </div>
}, {
  name: 'Keystone',
  stars: 3.5,
  categories: [LIBRARIES, WEB],
  description: <div>
    I used the [[Node]]-based CMS platform Keystone with [[MongoDB]]
    on an internship project for my university's radio station, WUSB.
    <br /><br />
    I was on the team who initially created the project,
    and subsequent teams have taken the project over.
    Unfortunately it hasn't been deployed yet to replace the existing website.
    <br /><br />
    {externalLink('Project GitHub repository', 'https://github.com/kingofirony/WUSB-Website')}
  </div>
}, {
  name: 'Bootstrap',
  stars: 3.5,
  categories: [LIBRARIES, WEB],
  description: <div>
    I have used Bootstrap on a few projects and find it good when something
    needs to be done simply and quickly, although for any large project I
    feel more like it gets in my way.
    <br /><br />
    I used Bootstrap for the front-end of
    the {externalLink('HackHealth', 'http://kenfehling.github.io/hack-health-2016-website')} website.
  </div>
}, {
  name: 'Jest',
  stars: 3.5,
  categories: [DEVOPS, WEB],
  description: <div>
    [[Mocha]] is my main [[JavaScript]] test framework, but recently I've been
    trying Jest more. It has some appealing features but for my uses Mocha
    is just more tried-and-true. However Jest is fairly new and it will continue
    to mature, so being such a testing freak I'll definitely be keeping a close eye on it.
  </div>
}, {
  name: 'ESLint',
  stars: 3.5,
  categories: [DEVOPS, WEB],
  description: <div>
    ESLint is a great tool for enforcing coding standards on
    a [[JavaScript]] or [[TypeScript]] project.
    Also its integration with my favorite IDE [[WebStorm]] is great.
  </div>
}, {
  name: 'Nightwatch',
  stars: 3.5,
  categories: [DEVOPS, WEB],
  description: <div>
    I had been using Enzyme a bit for testing React components,
    however my main technique I’ve been using for testing is to have a suite of
    unit tests written in [[Mocha]] or [[Jest]] and end-to-end tests using
    Nightwatch and Selenium. I feel this gives good coverage,
    and the e2e tests are really no harder to maintain than the component tests.
  </div>
}, {
  name: 'Ruby',
  stars: 3.5,
  categories: [LANGUAGES],
  description: <div>
    Most of my Ruby experience has been with the [[Rails]] framework.
    I prefer [[Python]] to Ruby mainly for its readability,
    however Ruby has some interesting features like blocks.
  </div>
}, {
  name: 'Travis CI',
  stars: 3.5,
  categories: [DEVOPS],
  description: <div>
    Travis is currently my main Continuous Integration (CI) service.
    <br /><br />
    I recently started using it with [[Docker]] to run tests
    with [[Nightwatch]] and Chrome in headless mode.
    I wrote a {externalLink('two part article', 'https://medium.com/@kenfehling/ui-testing-with-Nightwatch-js-headless-chrome-and-docker-part-1-f0ce2e8a23a1')} about it.
  </div>
}, {
  name: 'Bower',
  stars: 3.5,
  categories: [DEVOPS, WEB],
  description: <div>
    I used to use Bower before adopting [[NPM]] as my main
    front-end package management tool.
    I much prefer NPM because it works more seamlessly with [[JavaScript]] modules,
    and it can be used from both front-end and back-end dependency management.
  </div>
}, {
  name: 'FFmpeg',
  stars: 3.5,
  categories: [SOFTWARE],
  description: <div>
    FFmpeg is a great command line tool for editing and converting video files.
    One of my [[Android]]
    apps, {externalLink('Video Toolbox', 'http://androidideas.org/videotoolbox')} is
    based on FFmpeg's C libraries. It uses the Android NDK to load the libraries
    for use in [[Java]] using the Java Native Interface (JNI).
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
    I appreciated how it kept things more modular and testable.
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
    I learned ActionScript and [[Adobe Flex]] to rewrite one of my [[Android]]
    apps, {externalLink('Color Sounds', 'http://androidideas.org/colorsounds')},
    to run on the [[Flash]] and Adobe AIR platforms.
  </div>
}, {
  name: 'C#',
  stars: 3,
  categories: [LANGUAGES],
  description: <div>
    Most of my C# experience has been with [[Unity]],
    not so much with the .NET platform.
    C#'s similarity to Java however made it very easy to pick up.
  </div>
}, {
  name: 'iOS',
  stars: 3,
  categories: [PLATFORMS, MOBILE],
  description: <div>
    I've done one iOS project using [[Swift]], an Apple Watch and iPhone app for
    doing sleep-tracking.
  </div>
}, {
  name: 'Raspberry Pi',
  stars: 3,
  categories: [PLATFORMS],
  description: <div>
    I've used Raspberry Pi for a few Internet of Things (IoT) and MIDI projects.
    <br /><br />
    The main language I've used with it is [[Python]], although
    it can be used with basically anything,
    including [[JavaScript]] and [[Node]].
  </div>
}, {
  name: 'Illustrator',
  fullName: 'Adobe Illustrator',
  stars: 3,
  categories: [SOFTWARE],
  description: <div>
    Illustrator by far is my favorite Adobe software.
    It's great for making icons, logos, and other vector graphics.
    Most of the icons on this site are SVG files made with or modified in
    Illustrator.
  </div>
}, {
  name: 'Browserify',
  stars: 3,
  categories: [DEVOPS, WEB],
  description: <div>
    I used to use Browserify before switching to [[Webpack]], which is what I
    presently use. Both are a huge step up from things like Require.js and
    they make [[NPM]] available to use as well as the [[Node]] module setup
    I was used to on the back-end.
  </div>
}, {
  name: 'Bourbon',
  stars: 3,
  categories: [LIBRARIES, WEB],
  description: <div>
    The [[SASS]] mixin library Bourbon is a relatively new addition
    to my tool belt. Previously I had used Compass.
  </div>
}, {
  name: 'Postgresql',
  stars: 3,
  categories: [DATABASES],
  description: <div>
    Before NoSQL databases like [[MongoDB]] my database of choice was Postgres.
  </div>
}, {
  name: 'MySQL',
  stars: 3,
  categories: [DATABASES],
  description: <div>
    I've used MySQL on a couple of projects,
    but I always tended to prefer [[Postgresql]].
  </div>
}, {
  name: 'SQLite',
  stars: 3,
  categories: [DATABASES],
  description: <div>
    SQLite is a useful little database that I mostly used on mobile apps,
    especially [[Android]].
  </div>
}, {
  name: 'Logic',
  iconType: 'png',
  stars: 3,
  categories: [SOFTWARE],
  description: <div>
    Logic was the first Digital Audio Workstation (DAW) I really got serious
    with and probably still currently my favorite. I first came across Logic
    while taking a class on sound design.
  </div>
}, {
  name: 'Reason',
  fullName: 'Propellerhead Reason',
  stars: 3,
  categories: [SOFTWARE],
  description: <div>
    Reason was the first Digital Audio Workstation (DAW) I worked with.
    I was introduced to it in an intro to digital art class.
    It was really fun to use, especially its skeuomorphic interface that
    allows you to flip the pieces of equipment around and see their
    input and output jacks and experiment with patching them together.
  </div>
}, {
  name: 'Ableton',
  fullName: 'Ableton Live',
  stars: 3,
  categories: [SOFTWARE],
  description: <div>
    Ableton Live is probably my second favorite Digital Audio Workstation (DAW),
    after [[Logic]]. One great feature is its integration with Max/MSP.
  </div>
}, {
  name: 'Swift',
  stars: 2.5,
  categories: [LANGUAGES, MOBILE],
  description: <div>
    I've done one [[iOS]] project using Swift, an Apple Watch and iPhone app for
    doing sleep-tracking.
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
    particularly with [[Guice]], and the observer pattern.
  </div>
}, {
  name: 'Firebase',
  stars: 2.5,
  categories: [DATABASES],
  description: <div>
    I used Firebase on one project for the TLT Media Lab because the client
    wanted it. It was interesting, but I felt sort of boxed in by it.
    In retrospect, I think it would have been a much similar and more robust
    to solution to use a traditional back-end on that project,
    but I could see how solutions like Firebase
    might have a use on simpler projects.
  </div>
}, {
  name: 'Flex',
  fullName: 'Adobe Flex',
  stars: 2.5,
  categories: [WEB, SOFTWARE],
  description: <div>
    I learned [[ActionScript]] and Flex to rewrite one of my [[Android]]
    apps, {externalLink('Color Sounds', 'http://androidideas.org/colorsounds')}.
    Flex was used for the main menu interface.
  </div>
}, {
  name: 'Clojure',
  stars: 2,
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
  name: 'Unity',
  stars: 2,
  categories: [PLATFORMS, SOFTWARE, MOBILE],
  description: <div>
    As secretary of the Stony Brook Game Developers (SBGD)
    I was exposed to Unity a lot.
    I experimented with using it for some of my own projects
    but always ultimately went another way,
    usually [[HTML]] or occasionally [[Flash]].
    <br /><br />
    When I did experiment with Unity I spent a lot of time trying to learn
    best practices and tools like Strange IoC and the Unity Testing Tools.
  </div>
}, {
  name: 'Flash',
  fullName: 'Adobe Flash',
  stars: 2,
  categories: [PLATFORMS, WEB, SOFTWARE],
  description: <div>
    I've used Adobe Flash the actual program a little bit, but I have much
    more experience with its scripting language [[ActionScript]] and the
    Flash and Adobe AIR platforms.
  </div>
}, {
  name: 'Photoshop',
  fullName: 'Adobe Photoshop',
  stars: 1.5,
  categories: [SOFTWARE],
  description: <div>
    I first learned Photoshop in a digital art class at my university.
    It comes in handy sometimes, but I use [[Illustrator]] far more often
    in the kinds of projects I do.
  </div>
}, {
  name: 'Docker',
  stars: 1,
  categories: [DEVOPS],
  description: <div>
    I recently started using Docker to run tests
    with [[Nightwatch]] and Chrome in headless mode.
    I wrote a {externalLink('two part article', 'https://medium.com/@kenfehling/ui-testing-with-Nightwatch-js-headless-chrome-and-docker-part-1-f0ce2e8a23a1')} about it.
  </div>
}];