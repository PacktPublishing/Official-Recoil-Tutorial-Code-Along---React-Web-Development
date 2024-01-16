// this is index.js:

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Homepage />
);

// this is the homepage.js:
import React,{useState} from 'react';
import Button from './components/Button';
import Title from './components/Title';

const Homepage = () => {
    const [visible, setVisible] = useState(true)
    return (
        <div className='App'>
            <br/>
            <Button setVisible={setVisible} />
            <Title
            visible={visible}
            title={'this is a recoil app'}
            />
</div>    )
};

export default Homepage;

// this is the button.js:

const Button = ({setVisible}) => {
    return (
        <button onClick={()=>setVisible((prevVisible)=>!prevVisible)}>
            Click Me
        </button>
    )
};

export default Button;

// this is the title.js page:

export const Title = ({title, visible}) => {
    return (
        <div className="App">
            <h2>{visible ? title : null}</h2>
        </div>
    );
};


