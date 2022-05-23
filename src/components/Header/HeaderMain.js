import React from 'react';

class HeaderMain extends React.Component {
    render() {
        var ascii_name = `
ooooooooo.              .o8        .o8                 
 \`888   \`Y88.           "888       "888                 
 888   .d88'  .oooo.    888oooo.   888oooo.   .ooooo.  
 888ooo88P'  \`P  )88b   d88' \`88b  d88' \`88b d88' \`88b 
 888\`88b.     .oP"888   888   888  888   888 888   888 
 888  \`88b.  d8(  888   888   888  888   888 888   888 
o888o  o888o \`Y888""8o  \`Y8bod8P'  \`Y8bod8P' \`Y8bod8P' 
`
var ascii_art = `
⠀⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀
⠀⠀⠀⣴⠿⠏⠀⠀⠀⠀⠀⠀⢳⡀⠀⡏⠀⠀⠀⠀⠀⢷
⠀⠀⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀⣧⠀⢸⠀⠀⠀⠀⠀ ⡇
⠀⠀⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲⣿⠀⣸⠀⠀OK⠀ ⡇
⠀⠀⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀⣿⠀⢹⠀⠀⠀⠀⠀ ⡇
⠀⠀⠙⢿⣯⠄⠀⠀⠀⢀⡀⠀⠀⡿⠀⠀⡇⠀⠀⠀⠀⡼
⠀⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀⠀⠘⠤⣄⣠⠞⠀
⠀⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀
⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀
⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀⠀⣄⢸⠀⠀⠀⠀⠀⠀
⣿⣿⣧⣀⣿………⣀⣰⣏⣘⣆⣀⠀⠀`
        return (
        <div>
            <div className='d-flex'>
                <div className='m-3'>
                    <pre>
                        {ascii_art}
                    </pre>
                </div>
                <div className='m-3'>
                    <pre>
                        {ascii_name}  
                    </pre>
                </div>
            </div>
            <div>
                <p><span className="text-info">Welcome!</span> This is the browser CLI for rabbo! To get started why not try typing <span className='text-danger'>'help'</span> to get a list of commands?</p>
            </div>
        </div>
        );
    }
}

export default HeaderMain;