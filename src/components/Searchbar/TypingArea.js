import {React, useState}  from 'react';
import Result from './Result.js';

function TypingArea() {
    const [inputText, setInputText] = useState("");
    const [search, setSearch] = useState(false);
    let [list, setList] = useState([]);

    let inputHandler = (e) => {
        var lowerCase = e.target.value;
        setInputText(lowerCase);
        setSearch(false);
    };

    let submitSearchQuery = (e) => {
        e.preventDefault();
        addToList();
        setInputText("");
        handleSpecialCases();
    }

    let handleSpecialCases = (e) => {
        if (inputText === "cls") {
            setList([])
        }
    }

    function addToList() {
        const newList = list.concat(<p><span className='text-success'>rabbo@localhost:3000</span>:<span className='text-info'>home</span>$> {inputText}</p>).concat( <Result query={inputText} />)
        setList(newList);
    }

    return (
        <div className="main">
            {list}
            <div className="search d-flex">
                <p><span className='text-success'>rabbo@localhost:3000</span>:<span className='text-info'>home</span>$></p>
                <form onSubmit={submitSearchQuery}>
                        <input
                        id="outlined-basic"
                        autoFocus
                        variant="outlined"
                        onChange={inputHandler}
                        value={inputText}
                        label="Search"
                        />
                </form>
            </div>
        </div>
    );
}

export default TypingArea;