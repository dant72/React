import { useState } from 'react';
import Cell from './cell';
import './cell.css';

var word = [];
var text = '';

function Field(props) {

    word = props.word.split('');
    const [show, setShow] = useState(initShow());
    const click = () => { setShow(answer(text, word, show)); }
   
    return (
        <>
            <div className='horizontal'>
                {field(show)}
            </div>
            <div>
                <input type='text' onChange={handleChange} />
                <button onClick={click}>Button</button>
            </div>
        </>
    );
}

function field(show) {
    let tmp = [];
    for (let i = 0; i < show.length; i++) {
        tmp.push(<Cell letter={show[i]} key={`id${i}`}></Cell>)
    }

    return tmp;
};

function initShow() {
    let tmp = initSh();
    if (document.cookie != '') {
        let js = JSON.parse(document.cookie);
        for (let i = 0; i < js.length; i++) {
            tmp[i] = js[i];
        }
    }

    return tmp;
}

function initSh() {
    let tmp = [];
    for (let i = 0; i < word.length; i++) {
        tmp[i] = '';
    }

    return tmp;
}

function handleChange(event) {
    text = event.target.value;
}

function answer(text, word, show) {

    for (let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === text.toLowerCase()) {
            show[i] = word[i];
            saveWord(show);
        }          
    }
    console.log(text);
    console.log(word);
    console.log(show);

    return gameOver(text, word, show);
}

function gameOver(text, word, show) {
    if (show.join('').toLowerCase() === word.join('').toLowerCase() || text.toLowerCase() === word.join('').toLowerCase()) {
        document.cookie = "";
        alert(`You win! Word: ${word.join('')}`);
        show = initSh();
        saveWord(show);
    }

    return Array.from(show);
}

function saveWord(text) {

    var saveJson = JSON.stringify(text);
    console.log(saveJson);
    document.cookie = saveJson;
}

export default Field;