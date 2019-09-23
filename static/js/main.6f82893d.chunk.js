(window["webpackJsonpgrammar-app-react"]=window["webpackJsonpgrammar-app-react"]||[]).push([[0],{21:function(e,t,a){e.exports=a(47)},26:function(e,t,a){},27:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),c=a.n(s),i=(a(26),a(2)),l=a(3),o=a(5),u=a(4),h=a(6),m=(a(27),a(19)),p=a.n(m),d=a(20),f=a.n(d),E=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"form"},r.a.createElement("form",{action:"",label:"grammarForm"},r.a.createElement("textarea",{rows:"4",onChange:this.props.handleChange,value:this.props.inputField,label:"text","aria-label":"enter your sentence here"}),r.a.createElement("button",{onClick:this.props.handleSubmit,disabled:this.props.charsLeft>49975?"disabled":null,type:"submit"},"Check my grammar!")))}}]),t}(r.a.Component),b=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("button",{onClick:this.props.handleReset,className:"resetButton",type:"submit"},"Check a new sentence!")}}]),t}(r.a.Component),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).characterCountMessage=function(){return 5e4===a.props.charsLeft?"Go ahead and write something!":a.props.charsLeft<=49999&&a.props.charsLeft>49975?"Must be at least 25 characters":a.props.charsLeft<=49975?null:0===a.props.charsLeft?"You've hit the character limit!":void 0},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.edits.length>0?r.a.createElement("div",{className:"errors"},r.a.createElement("p",{className:"savedInput"},this.props.savedInput),r.a.createElement("p",null,"Error(s) found:"),r.a.createElement("ol",null,this.props.wrongWord.map(function(e,t){return r.a.createElement("li",{key:t,className:"wrongWordListItem"},e)})),r.a.createElement("ol",{className:"errorMessages"},this.props.edits.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("p",{className:"message"},e.message))}))):r.a.createElement("div",null,r.a.createElement("p",{className:"errorHandling"},this.characterCountMessage()))}}]),t}(r.a.Component),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).checkMyGrammar=function(){p()({method:"GET",url:"https://proxy.hackeryou.com",dataResponse:"JSON",paramsSerializer:function(e){return f.a.stringify(e,{arrayFormat:"brackets"})},params:{reqUrl:"http://api.grammarbot.io/v2/check",params:{queryParam:e.state.userInput,key:"KS9C5N3Y",format:"JSON",text:e.state.userInput,language:"en-CA"},proxyHeaders:{header_params:"value"},xmlToJSON:!1}}).then(function(t){e.setState({edits:t.data.matches,wrongWord:t.data.matches.map(function(t){return e.state.userInput.slice(t.context.offset,t.context.offset+t.context.length)})})}).then(function(){e.state.edits.length>=0&&e.setState({newEditState:"Your sentence didn't contain any errors"})}).then(function(){""!=e.state.inputField&&e.setState({newEditState:""})})},e.handleChange=function(t){var a=5e4-t.target.value.length;e.setState({inputField:t.target.value,userInput:t.target.value,charsLeft:a}),""!=e.state.inputField&&e.setState({newEditState:""})},e.handleSubmit=function(t){t.preventDefault(),e.setState({savedInput:e.state.inputField,inputField:""}),e.state.charsLeft<=49975&&e.checkMyGrammar()},e.handleReset=function(t){t.preventDefault(),e.reset()},e.state={inputField:"",userInput:"",savedInput:"",edits:[],charsLeft:5e4,newEditState:"",wrongWord:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"reset",value:function(){this.setState({inputField:"",userInput:"",edits:[],savedInput:"",wrongWords:"",newEditState:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("header",null,r.a.createElement("h1",null,"Grammarist"),r.a.createElement("h2",null,"Let me tell you what ",r.a.createElement("span",null,"you're")," your problem is!"),r.a.createElement("p",null,"Type a sentence below."),r.a.createElement("div",{class:"perfectSentence"},r.a.createElement("p",null,this.state.newEditState))),r.a.createElement("main",null,r.a.createElement(g,{savedInput:this.state.savedInput,edits:this.state.edits,newEditState:this.state.newEditState,charsLeft:this.state.charsLeft,wrongWord:this.state.wrongWord}),r.a.createElement(E,{run:this.checkMyGrammar,handleChange:this.handleChange,handleSubmit:this.handleSubmit,inputField:this.state.inputField,charsLeft:this.state.charsLeft,userInput:this.state.userInput,handleReset:this.onButtonClick}),r.a.createElement(b,{handleReset:this.handleReset}))),r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 2019 Jessica Chin. Grammar by GrammarBot.")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.6f82893d.chunk.js.map