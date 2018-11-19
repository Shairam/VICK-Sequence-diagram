import React, { Component } from 'react';
import logo from './logo.svg';
import  ReactDOM from "react-dom";
import './App.css';
import $ from 'jquery';
// import mermaid from './mermaid-1';
//import mermaidAPI from "./mermaidAPI";
import mermaid, {mermaidAPI} from 'mermaid';
import {jsonMainService} from './resources/service-details';
import {cellDetails} from './resources/cell-details';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            config : testCells()
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

var copyArr =[];


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

            iteratorSpan(spanArray,index);
        }
    }
   data1+= "deactivate "+jsonMainService[0].Name+"\n";

    console.log(data1);
   return data1;
}

function findJsonIndex(data,val){
    var index = data.findIndex(function(item){
        return item.name === val
    });
    return index;
}

function iteratorSpan(array, i) {
    if (!(array[i].hasChildren)) {
        data1 += array[i].name + "-->>- " + array[i].parent + ":Finish Span\n";
        copyArr = copyArr.reverse();
        console.log(copyArr);
        for (let k = 1; k < copyArr.length; k++) {
            data1 += copyArr[k].from + "-->>- " + copyArr[k].to + ":Finish Span\n";
        }
    }
    else {
        for (let j = 0; j < array[i].Children.length; j++) {
            data1 += array[i].Children[j].parent + "->>+ " + array[i].Children[j].name + ": Initiate" + array[i].Children[j].name + "\n";
            var jsonObj = {
                "from": array[i].Children[j].name,
                "to": array[i].Children[j].parent
            };
            copyArr.push(jsonObj);
            iteratorSpan(array[i].Children, j);
        }
    }
}

function iteratorCell(array) {
    data1+= array[0].parent + "->> " + array[0].to  + ":"+array[0].text+"\n";
    if (!(array[0].hasChildren)) {
        if(array[0].hasOwnProperty("returnTo")) {
            data1 += array[0].to + "-->>- " + array[0].returnTo + ": Return \n"
        }
    }
    else {
            iteratorCell(array[0].Children);
    }
}

function testCells() {
    var cells = cellDetails[0].Cells;
    data1 = "sequenceDiagram\n participant " + cellDetails[0].name + "\n activate " + cellDetails[0].name + "\n";
    for (let i = 0; i < cells.length; i++) {
        data1 += "participant " + cells[i].name + "\n";
    }
    data1 += cellDetails[0].Paths.parent + "->> " + cellDetails[0].Paths.to + ":" + cellDetails[0].Paths.text + "\n";

    if (!cellDetails[0].Paths.hasChildren) {
        // data1+= cellDetails[0].Paths.to + "-->>- " + cellDetails[0].Paths.parent + ":Return\n";
    }
    else {
        for (let i = 0; i < cellDetails[0].Paths.Children.length; i++) {
            data1 += cellDetails[0].Paths.Children[i].parent + "->> " + cellDetails[0].Paths.Children[i].to + ":" + cellDetails[0].Paths.Children[i].text + "\n";
            if ((cellDetails[0].Paths.Children[i].self)) {
                if(cellDetails[0].Paths.Children[i].hasOwnProperty("returnTo")) {
                    data1 += cellDetails[0].Paths.Children[i].to + "-->> " + cellDetails[0].Paths.Children[i].returnTo + ": Return \n"
                }
            }
            else if ((!cellDetails[0].Paths.Children[i].hasChildren)) {
                data1 += cellDetails[0].Paths.Children[i].to + "-->> " + cellDetails[0].Paths.Children[i].parent + ":" + "Return \n";
            }

            else {
                iteratorCell(cellDetails[0].Paths.Children[i].Children);
            }
        }
    }
    data1 += "deactivate " + cellDetails[0].name + "\n";
    console.log(data1);
    return data1;
}

function selfIterator(pathLink){
        if(!pathLink.hasChildren){
                 data1+= pathLink.to + "-->> " + pathLink.returnTo  + ": Return \n"

        }

        else {

        }
}

function drawRects(array,callId){
    if(array[0].callId==1){
        //activate
    }
    if(array[0].callId===callId){
        //deactivate
    }
}






