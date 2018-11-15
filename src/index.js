import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var  test =
    "sequenceDiagram\n"+
    "participant Global Gateway\n"+
    "participant Cell 1\n"+
    "participant Cell 2\n"+
    "participant Cell 3\n"+

    "activate Global Gateway\n"+
    "Global Gateway->>+ Cell 1: API call\n"+
    "Cell 1->>+ Cell 2: Service Name\n"+
    "Cell 2-->>- Cell 1: Return\n"+
    "Cell 1->>+ Cell 3: Service Name\n"+
    "Cell 3->> Cell 3: Service Name\n"+
    "Cell 3->>- Cell 1: Service Name\n"+
    "Cell 1->> Cell 1: Service Name\n"+
    "Cell 1-->>- Global Gateway: Return\n"+
    "deactivate Global Gateway\n";

var  test2 =
    "sequenceDiagram\n"+
    "participant Service Name\n"+
    "participant Span 1\n"+
    "participant Span 2\n"+
    "participant Span 3\n"+

    "activate Service Name\n"+
    "Service Name->>+ Span 1: API call\n"+
    "Span 1->>+ Span 2: Service Name\n"+
    "Span 2-->>- Span 1: Return\n"+
    "Span 1->>+ Span 3: Service Name\n"+
    "Span 3->> Span 3: Service Name\n"+
    "Span 3->>- Span 1: Service Name\n"+
    "Span 1->> Span 1: Service Name\n"+
    "Span 1-->>- Service Name: Return\n"+
    "deactivate Service Name\n";

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.findDOMNode(document.getElementById("root")).innerHTML =  test2;


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
