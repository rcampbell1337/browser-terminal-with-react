import {React, useState}  from 'react';
import Result from './Result.js';

function TypingArea() {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="main">
        <h1>React Search</h1>
        <div className="search">
            <input
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
            />
        </div>
        <Result query={inputText} />
        </div>
    );
}

export default TypingArea;