(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{213:function(e,t,a){e.exports=a(459)},218:function(e,t,a){},458:function(e,t,a){},459:function(e,t,a){"use strict";a.r(t);var n=a(10),s=a.n(n),c=a(192),l=a.n(c),i=(a(218),a(193)),r=a(194),o=a(210),u=a(195),d=a(211),p=(a(219),a(270),a(458),a(2)),m=a(461),h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).addToInput=function(e){"no"===a.state.percentageKeyPressed&&("yes"===a.state.operationKeyPressed||"yes"===a.state.calculateKeyPressed?("."===e?"-"===a.state.input?a.setState({input:"-0."}):a.setState({input:"0."}):"-"===a.state.input?a.setState({input:a.state.input+e}):a.setState({input:e}),a.setState({calculateKeyPressed:"no"}),a.setState({operationKeyPressed:"no"})):a.state.input.length<15&&(a.state.input.includes(".")&&"."===e?alert("Only one comma allowed."):("0"===a.state.input&&"."!==e?a.setState({input:e}):"-"===a.state.input&&"."===e?a.setState({input:"-0"+e}):a.setState({input:a.state.input+e}),a.setState({easterMsgCounter:0}),a.setState({operationKeyPressed:"no"}))))},a.delInput=function(){"Infinity"!==a.state.input&&"NaN"!==a.state.input&&""!==a.state.input&&"no"===a.state.percentageKeyPressed&&a.setState({input:a.state.input.slice(0,-1)},function(){""!==a.state.input&&"-"!==a.state.input&&"-0."!==a.state.input||a.setState({input:"0"})})},a.clearAll=function(){a.setState({input:"0",lastInput:"",allInput:"",operationKeyPressed:"no",lastOperation:"",calculateKeyPressed:"no",percentageKeyPressed:"no",easterMsgCounter:0})},a.changeSign=function(){a.setState({easterMsgCounter:a.state.easterMsgCounter+1}),9===a.state.easterMsgCounter?(alert(String.fromCharCode(67,114,101,97,116,101,100,32,98,121,32,66,97,114,116,111,115,122,32,66,105,97,322,97,99,104)),a.setState({easterMsgCounter:0})):"no"===a.state.percentageKeyPressed&&("0"===a.state.input||""===a.state.input||"0."===a.state.input?a.setState({input:"-"}):"-"===a.state.input?a.setState({input:"0"}):"Infinity"!==a.state.input&&a.setState({input:(-1*parseFloat(a.state.input)).toString()}))},a.mathOperation=function(e){"Infinity"!==a.state.input&&"NaN"!==a.state.input&&"-"!==a.state.input&&"no"===a.state.operationKeyPressed&&(a.state.input.includes("e")?alert("Sorry, number too big :("):0===parseFloat(a.state.input)&&"/"===a.state.allInput.slice(-1)?alert("Do not divide by 0"):(a.setState({operationKeyPressed:"yes"}),a.setState({lastOperation:e}),a.setState({calculateKeyPressed:"no"}),a.setState({easterMsgCounter:0}),"no"===a.state.percentageKeyPressed?a.setState({allInput:a.state.allInput+a.state.input+e}):(a.setState({allInput:a.state.allInput+e}),a.setState({percentageKeyPressed:"no"})),a.setState({input:""})))},a.calcPercentage=function(){if("no"===a.state.percentageKeyPressed&&""!==a.state.input&&"-"!==a.state.input&&0!==parseFloat(a.state.input)&&""!==a.state.allInput){var e=0;e="*/".includes(a.state.allInput.slice(-1))?parseFloat(a.state.input)/100:p.ce(m.a(a.state.allInput.slice(0,-1)),10)*parseFloat(a.state.input)/100,a.setState({allInput:a.state.allInput+e}),a.setState({input:e.toString()}),a.setState({percentageKeyPressed:"yes"}),a.setState({operationKeyPressed:"no"})}},a.calcResult=function(){"yes"===a.state.calculateKeyPressed?a.setState({input:p.ce(m.a(a.state.input+a.state.lastOperation+a.state.lastInput),10).toString()}):"no"===a.state.operationKeyPressed&&"-"!==a.state.input&&(0===parseFloat(a.state.input)&&"/"===a.state.allInput.slice(-1)?alert("Do not divide by 0"):(a.setState({lastInput:a.state.input}),"no"===a.state.percentageKeyPressed?a.setState({input:p.ce(m.a(a.state.allInput+a.state.input),10).toString()}):(a.setState({input:p.ce(m.a(a.state.allInput),10).toString()}),a.setState({percentageKeyPressed:"no"})),a.setState({allInput:""}),a.setState({calculateKeyPressed:"yes"})))},a.displayInput=function(){return a.state.input.replace(".",",")},a.displayAllInput=function(){var e=a.state.allInput,t={"/":"\xf7","*":"\xd7"};return(e=e.replace(/\/|\*/gi,function(e){return t[e]})).length>23?"..."+e.slice(-23):e},a.componentDidUpdate=function(){var e=document.getElementById("inputField"),t=document.getElementById("textField");e.style.fontSize="160px";for(var a=e.getBoundingClientRect().width,n=t.getBoundingClientRect().width;a>.84*n;)e.style.fontSize=parseInt(e.style.fontSize)-1+"px",a=e.getBoundingClientRect().width},a.handleKeyPress=function(e){"1234567890".includes(e.key)&&a.addToInput(e.key)},a.handleSpecialKeyPress=function(e){switch(e.keyCode){case 13:a.calcResult();break;case 46:a.delInput();break;case 67:a.clearAll();break;case 80:a.calcPercentage();break;case 83:a.changeSign();break;case 106:a.mathOperation("*");break;case 107:a.mathOperation("+");break;case 109:a.mathOperation("-");break;case 110:a.addToInput(".");break;case 111:a.mathOperation("/");break;case 188:a.addToInput(".")}},a.isIE=function(){var e=window.navigator.userAgent,t=e.indexOf("MSIE "),a=e.indexOf("Trident/");return t>0||a>0},a.componentDidMount=function(){a.isIE()?(document.ondragstart=function(){return!1},document.addEventListener("keydown",a.handleSpecialKeyPress,!1)):(document.addEventListener("keydown",a.handleKeyPress,!1),document.addEventListener("keydown",a.handleSpecialKeyPress,!1))},a.componentWillUnmount=function(){a.isIE()?document.removeEventListener("keydown",a.handleSpecialKeyPress,!1):(document.removeEventListener("keydown",a.handleKeyPress,!1),document.removeEventListener("keydown",a.handleSpecialKeyPress,!1))},a.state={input:"0",lastInput:"",allInput:"",operationKeyPressed:"no",lastOperation:"",calculateKeyPressed:"no",percentageKeyPressed:"no",easterMsgCounter:0},a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Calc",onKeyPress:this.handleKeyPress},s.a.createElement("div",{className:"Calc-header"},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1242 2208",className:"Calc-UI",shapeRendering:"crispEdges"},s.a.createElement("g",{id:"Artboard_1","data-name":"Artboard 1"},s.a.createElement("g",null,s.a.createElement("rect",{className:"cls-1",width:"1242",height:"2208"}),s.a.createElement("rect",{className:"cls-2",x:"931",y:"658",width:"311",height:"1550"}),s.a.createElement("rect",{id:"textField",className:"cls-3",y:"348",width:"1242",height:"310"}),s.a.createElement("rect",{id:"allTextField",className:"cls-4",width:"1242",height:"348"}),s.a.createElement("text",{id:"inputField",textAnchor:"end",className:"cls-5 disable-select",x:"1142.826",y:"567.032"},this.displayInput()),s.a.createElement("text",{id:"allInputField",textAnchor:"end",className:"cls-6 disable-select",x:"1132",y:"211.031"},this.displayAllInput()),s.a.createElement("g",{className:"cls-7"},s.a.createElement("text",{id:"_1","data-name":"1",className:"cls-8",x:"133.116",y:"1159.703"},"1"),s.a.createElement("text",{id:"C",className:"cls-8",x:"114.116",y:"849.702"},"C"),s.a.createElement("text",{id:"_4","data-name":"4",className:"cls-8",x:"124.116",y:"1469.702"},"4"),s.a.createElement("text",{id:"_7","data-name":"7",className:"cls-8",x:"128.116",y:"1779.703"},"7"),s.a.createElement("text",{id:"_0","data-name":"0",className:"cls-8",x:"125.117",y:"2089.704"},"0")),s.a.createElement("g",{className:"cls-7"},s.a.createElement("text",{id:"_-","data-name":"+/-",className:"cls-8",x:"390.965",y:"849.797"},"+/-"),s.a.createElement("text",{id:"_2","data-name":"2",className:"cls-8",x:"436.116",y:"1159.703"},"2"),s.a.createElement("text",{id:"_5","data-name":"5",className:"cls-8",x:"435.116",y:"1468.704"},"5"),s.a.createElement("text",{id:"_8","data-name":"8",className:"cls-8",x:"437.116",y:"1779.703"},"8"),s.a.createElement("text",{id:"_","data-name":".",className:"cls-8",x:"457.116",y:"2090.702"},",")),s.a.createElement("g",{className:"cls-7"},s.a.createElement("text",{id:"_2-2","data-name":"%",className:"cls-8",x:"732.291",y:"849.89"},"%"),s.a.createElement("text",{id:"_3","data-name":"3",className:"cls-8",x:"748.116",y:"1159.703"},"3"),s.a.createElement("text",{id:"_6","data-name":"6",className:"cls-8",x:"745.116",y:"1468.704"},"6"),s.a.createElement("text",{id:"DEL",className:"cls-8",x:"697.921",y:"2082.157"},"DEL"),s.a.createElement("text",{id:"_9","data-name":"9",className:"cls-8",x:"745.116",y:"1779.703"},"9")),s.a.createElement("g",{className:"cls-7"},s.a.createElement("text",{id:"_3-2","data-name":"\xf7",className:"cls-10",x:"1054.29",y:"863.891"},"\xf7"),s.a.createElement("text",{id:"_4-2","data-name":"\xd7",className:"cls-10",x:"1054.116",y:"1174.702"},"\xd7"),s.a.createElement("text",{id:"_5-2","data-name":"\u2212",className:"cls-10",x:"1054.116",y:"1484.703"},"\u2212"),s.a.createElement("text",{id:"_6-2","data-name":"=",className:"cls-10",x:"1053.92",y:"2104.156"},"="),s.a.createElement("text",{id:"_7-2","data-name":"+",className:"cls-10",x:"1054.116",y:"1793.704"},"+")),s.a.createElement("rect",{onClick:function(){return e.clearAll()},className:"f1",y:"658",width:"310",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.addToInput("1")},className:"f1",y:"968",width:"310",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.addToInput("4")},className:"f1",y:"1278",width:"310",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.addToInput("7")},className:"f1",y:"1588",width:"310",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.addToInput("0")},className:"f1",y:"1898",width:"310",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.changeSign()},className:"f1",y:"658",x:"310",width:"311",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.addToInput("2")},className:"f1",y:"968",x:"310",width:"311",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.addToInput("5")},className:"f1",y:"1278",x:"310",width:"311",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.addToInput("8")},className:"f1",y:"1588",x:"310",width:"311",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.addToInput(".")},className:"f1",y:"1898",x:"310",width:"311",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.calcPercentage()},className:"f1",y:"658",x:"621",width:"310",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.addToInput("3")},className:"f1",y:"968",x:"621",width:"310",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.addToInput("6")},className:"f1",y:"1278",x:"621",width:"310",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.addToInput("9")},className:"f1",y:"1588",x:"621",width:"310",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.delInput()},className:"f1",y:"1898",x:"621",width:"310",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.mathOperation("/")},className:"f2",y:"658",x:"931",width:"311",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.mathOperation("*")},className:"f2",y:"968",x:"931",width:"311",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.mathOperation("-")},className:"f2",y:"1278",x:"931",width:"311",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.mathOperation("+")},className:"f2",y:"1588",x:"931",width:"311",height:"310"}),s.a.createElement("rect",{onClick:function(){return e.calcResult()},className:"f2",y:"1898",x:"931",width:"311",height:"310"}))))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[213,1,2]]]);
//# sourceMappingURL=main.e04e66c5.chunk.js.map