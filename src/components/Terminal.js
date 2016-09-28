import Typist from 'react-typist';
import Window from './Window';

const menuItems = [
    { name: 'File' }
];

export default () => (
    <Window name="Terminal" menuItems={menuItems} bgColor="#000" fgColor="#3F3">
        <Typist>
            <span className="my-custom-class"> First Sentence </span>
            <br />
            <div className="container">
                <p> This will be animated after first sentence is complete </p>
            </div>
            Final sentence
        </Typist>
    </Window>
);