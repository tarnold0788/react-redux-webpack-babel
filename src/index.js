import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import "./styles/styles.scss";

console.log("my test");

const jsx = (
    <div>
        <h1>Hello World!</h1>
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));