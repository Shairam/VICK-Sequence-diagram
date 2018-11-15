import React, { Component } from 'react';
import logo from './logo.svg';
import  ReactDOM from "react-dom";
import './App.css';
import $ from 'jquery';
// import mermaid from './mermaid-1';
//import mermaidAPI from "./mermaidAPI";
import mermaid, {mermaidAPI} from 'mermaid';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            config : test
        };
        this.testFoo = this.testFoo.bind(this);
    }

    render() {
        // $(document).ready(function() {
        //     mermaid.initialize();
        // });
        return (
            <div className="mermaid" id = "mems">
                {this.state.config}
            </div>

        );
    }

    componentDidMount(){
        var element =  ReactDOM.findDOMNode(document.getElementById("mems"));
        let _this = this;

        $(document).ready(function() {
            $( ".messageText" ).on( "click", function() {
                _this.testFoo();
                $('#mems').removeAttr("data-processed");
                mermaid.init(undefined, $("#mems"));
            });
        });
    }

    testFoo() {
        this.setState({
            config: test2
        });
    }
}

export default App;


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
    "Span 1->>+ Span 2: Initiate Span 1\n"+
    "Span 2-->>- Span 1: Return\n"+
    "Span 1->>+ Span 3: Service Name\n"+
    "Span 3->> Span 3: Service Name\n"+
    "Span 3->>- Span 1: Service Name\n"+
    "Span 1->> Span 1: Service Name\n"+
    "Span 1-->>- Service Name: Return\n"+
    "deactivate Service Name\n";

const input =

    'participant Global Gateway\n'+
    'participant Cell 1\n'+
    'participant Cell 2\n'+
    'participant Cell 3\n'+


    'Global Gateway-> Cell 1: API call\n'+
    'Cell 1-> Cell 2: Service Name\n'+
    'Cell 2--> Cell 1: Return\n'+
    'Cell 1-> Cell 3: Service Name\n'+
    'Cell 3-> Cell 3: Service Name\n'+
    'Cell 3-> Cell 1: Service Name\n'+
    'Cell 1-> Cell 1: Service Name\n'+
    'Cell 1--> Global Gateway: Return\n';

const input2 =
    'Andrew->China: Says Hello\n' +
    'Note right of China: China thinks\\nabout it\n' +
    'China-->Andrew: How are you?\n' +
    'Andrew->>China: I am good thanks!';

const options = {
    theme: 'simple'
};

function onError(error) {
    console.log(error);
}

function acts() {
    /* yay, all good, do something */
    // ReactDOM.findDOMNode(document.getElementById("mems")).innerHTML = test2;
}

