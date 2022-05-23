import {React, useState}  from 'react';
import Result from './Result.js';

function TypingArea() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        var lowerCase = e.target.value;
        setInputText(lowerCase);
    };

    return (
        <div className="main">
            <div className="search d-flex">
                <p className='mt-3 mr-2'><span className='text-success'>rabbo@localhost:3000</span>:<span className='text-info'>home</span>$</p>
                <input
                className='ml-5'
                id="outlined-basic"
                autoFocus
                variant="outlined"
                onChange={inputHandler}
                value={inputText}
                label="Search"
                />
            </div>
            <Result query={inputText} />
        </div>
    );
}

export default TypingArea;