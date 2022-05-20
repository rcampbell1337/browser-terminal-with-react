import React from 'react';
import HeaderMain from './Header/HeaderMain.js';
import TypingArea from './Searchbar/TypingArea.js'

class TerminalBase extends React.Component {
    render() {
        return (
            <div>
                <HeaderMain />
                <TypingArea />
            </div>
        )
    }
}    

export default TerminalBase;