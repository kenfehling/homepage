import Typist from 'react-typist';

export default () => (
    <Typist>
        <span className="my-custom-class"> First Sentence </span>
        <br />
        <div className="container">
            <p> This will be animated after first sentence is complete </p>
        </div>
        Final sentence
    </Typist>
);