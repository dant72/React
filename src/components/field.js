import { useState } from 'react';
import Cell from './cell';
import './cell.css';

var text = '';
var question = ''

var currentShow = '';

function initShow(show1) {
    return show1.split('');
}

function Field(props) {

    question = props.question;

    const [show, setShow] = useState([]);

    const click = () => {
        let data = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'text': text,
                'answer': currentShow
            }),
        }

        fetch("/word.php", data)
            .then((response) => response.json())
            .then((responseJson) => {

                currentShow = responseJson.answer;
                setShow(initShow(currentShow));

                if (responseJson.success == 1)
                    gameOver();
            })
            .catch((error) => {
                alert('error');
                console.error(error);
            });

    }
   
    return (
        <div className='field'>
            <div className='qSize'>{ question }</div>
            <div className='horizontal'>
                {field(show)}
            </div>
            <div>
                <input type='text' onChange={handleChange} />
                <form>
                    <button type='button' onClick={click}>{buttonText()}</button>
                </form>
            </div>
        </div>
    );
}

function buttonText() {
    if (currentShow == '')
        return 'Start';
    else
        return ' Try '
}


function field(show1) {
    let tmp = [];
    for (let i = 0; i < show1.length; i++) {
        tmp.push(<Cell letter={show1[i]} key={`id${i}`}></Cell>)
    }

    return tmp;
};

function handleChange(event) {
    text = event.target.value;
}

function gameOver() {
    alert(`You win! Word = ${currentShow}`);
}

export default Field;