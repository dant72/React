import { useState, useEffect } from 'react';

var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function Game(props) {
    var sizeX = 300;
    var sizeY = 200;
    let vb = `0 0 ${sizeX} ${sizeY}`;
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCount(count + 1); setArr();
            if (!checkArr(sizeY)) {
                alert("GameOver!");
                initArr();
			}
        }, 100);

        return () => clearTimeout(timeout);
    }, [count]);

    return (
        <div>
            <p>Game</p>
            <svg version="1.1" width={sizeX} height={sizeY}
                viewBox={vb} stroke="black">
                <rect x={0} y={0} width={sizeX} height={sizeY} fillOpacity={0} />
                {manyLines(sizeX, sizeY, arr)}
            </svg>
        </div>
    );
}

function setArr() {
    for (let i = 0; i < 10; i++)
        arr[i]++;
}

function initArr() {
    for (let i = 0; i < 10; i++)
        arr[i] = 0;
}

function checkArr(size) {
    for (let i = 0; i < 10; i++) {
        if (arr[i] >= size)
            return false;
    }

    return true;    
}
function manyLines(sizeX, sizeY, arr) {
    let tmp = [];
    for (let i = 0; i < 10; i++) {
        tmp.push(<rect x={i * sizeX / 10} y={0} width={sizeX / 10} height={arr[i]} fill="orange" stroke="black" onClick={() => { arr[i] /= 2}}/>);
    }

    return tmp;
};

export default Game;