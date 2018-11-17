import React, { Component } from 'react';
import logo from './logo.svg';
import  ReactDOM from "react-dom";
import './App.css';
import $ from 'jquery';
// import mermaid from './mermaid-1';
//import mermaidAPI from "./mermaidAPI";
import mermaid, {mermaidAPI} from 'mermaid';
import jsonMainService from './resources/service-details';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            config : test
        }
        const { classes } = props;
        this.testFoo = this.testFoo.bind(this);
        this.revert = this.revert.bind(this);
    }



    render() {
        // $(document).ready(function() {
        //     mermaid.initialize();
        // });
        let _this = this;
        return (
            <div>
            <div className="mermaid" id = "mems">
                {this.state.config}
            </div>
                <input type="button" className="btn" value="Back" height="20px" width="70px"/>
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
                console.log($(this).text());

            });

            // $( ".btn" ).on( "click", function() {
            //     _this.revert();
            //     $('#mems').removeAttr("data-processed");
            //     mermaid.init(undefined, $("#mems"));
            //
            //
            // });
        });
    }


    testFoo() {
        this.setState({
            config: resourceCheck()
        });

    }
    revert(){
        this.setState({
            config: test
        });
    }
}

export default App;

var data1;

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

var copyArr =[];

function onError(error) {
    console.log(error);
}

function acts() {
    /* yay, all good, do something */
    // ReactDOM.findDOMNode(document.getElementById("mems")).innerHTML = test2;
}

function resourceCheck(){
    var spanArray = jsonMainService[0].Spans;
    data1 = "sequenceDiagram\n participant "+jsonMainService[0].Name+"\n activate "+ jsonMainService[0].Name+"\n";
   for (let i=0;i<jsonMainService[0].Spans.length;i++){
       data1+= "participant "+jsonMainService[0].Spans[i].name+"\n";
   }

    for (let i=0;i<jsonMainService[0].Links.length;i++){
        data1+= jsonMainService[0].Name +"->>+ "+jsonMainService[0].Links[i].to+":"+jsonMainService[0].Links[i].text+"\n";
        if(!jsonMainService[0].Links[i].hasChildren){
            data1+= jsonMainService[0].Links[i].to + " -->>- "+ jsonMainService[0].Name+": Return \n";
        }
        else{
            var spanName = jsonMainService[0].Links[i].to;
            var index = findJsonIndex(spanArray,spanName);
            copyArr.push({"from":jsonMainService[0].Links[i].to,"to": jsonMainService[0].Name});

            iterator2(spanArray,index);
        }
    }
   data1+= "deactivate "+jsonMainService[0].Name+"\n";

    console.log(data1);
   return data1;


}

function drawReverse(){
    for (let i=0;i<jsonMainService[0].Links.lengfalseth;i++){
        data1+= jsonMainService[0].Name +" ->+ "+jsonMainService[0].Links[i].to+"\n";
    }
}

function findJsonIndex(data,val){

    var index = data.findIndex(function(item){
        return item.name === val
    });

    return index;
}

function iterator2(array,i){

    if(!(array[i].hasChildren)){
        data1+= array[i].name +"-->>- "+array[i].parent+":Finish Span\n";

        copyArr = copyArr.reverse();
        console.log(copyArr);
        for (let k =1;k<copyArr.length;k++){
            data1+= copyArr[k].from +"-->>- "+ copyArr[k].to+":Finish Span\n";
        }
    }
    else {
        for (let j = 0; j < array[i].Children.length; j++) {
                data1+= array[i].name  +"->>+ "+array[i].Children[j].name+": Initiate"+array[i].Children[j].name+"\n";
                var jsonObj = {
                    "from": array[i].Children[j].name,
                    "to" : array[i].name
                };
                copyArr.push(jsonObj);
                iterator2(array[i].Children,j);
        }

    }

}


