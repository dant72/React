import { useState, useEffect } from 'react';
import './cell.css';

function Cell(props) {
    return (
        <div className="cell">
            <b>{props.letter}</b>
        </div>
    );
}

export default Cell;