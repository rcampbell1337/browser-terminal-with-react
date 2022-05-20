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
            <div className="search">
                <input
                id="outlined-basic"
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