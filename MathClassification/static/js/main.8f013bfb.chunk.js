(this.webpackJsonpClassificationMathVideosEpsilonStream=this.webpackJsonpClassificationMathVideosEpsilonStream||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(2),i=a.n(o);a(16),a(4);var r=function(){return l.a.createElement("div",{className:"page-header"},l.a.createElement("h1",null,"Classification of Mathematical Videos"),l.a.createElement("h4",{className:"project-tagline"},"Epsilon Stream Project, by Angelique Husson"),l.a.createElement("form",{action:"https://github.com/AngeliqueHusson/InternshipOneOnEpsilon"},l.a.createElement("input",{className:"btn",type:"submit",value:"View project on Github"})))};var c=function(){return l.a.createElement("div",{className:"main-content",id:"main1"},l.a.createElement("h1",null,"How it works"),l.a.createElement("p",null,"On this webpage you can insert a mathematical video and let our classifcation algorithm categorize it into one of the 11 Math categories. The 11 categories in math are defined as: "),l.a.createElement("p",null," 'Exploding Dots', 'Statistics and probability',  'Geometry', 'Numbers','Polygons lines and quadrilaterals', 'Arithmetic', 'Algebra', 'Logic and discrete maths', 'Measurement','Trigonometry' and 'Calculus'."),l.a.createElement("p",null,"Disclaimer: The classification algorithms are only around 72% accurate. "))},s=a(6),u=a(7),m=a(8),d=a(3),h=a(10),p=a(9),g=(a(17),a(1)),E=a.n(g),f=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){e.preventDefault(),n.setState(Object(s.a)({},e.target.name,e.target.value))},n.componentDidMount=function(){var e=Object(d.a)(n);E()("#form1").submit((function(t){t.preventDefault();var a=E()("#input-title").val(),n=E()("#input-text").val(),l=E()("#input-method").val();e.setState({store:"Loading..."}),E()("#form-message").html("<h3>The Result will be displayed here:</h3>Loading..."),E.a.ajax({method:"POST",url:"http://localhost:8080/cgi-bin/Website.py",data:{titleVideo:a,textVideo:n,dropdown:l},dataType:"html",complete:function(e){console.log("Succes"),console.log(e),E()("#form-message").html(e.responseText)},error:function(e){console.log("An error occured"),console.log(e)}}),console.log("Succes!")})),E()("#form2").submit((function(t){t.preventDefault();var a=E()("#input-url").val(),n=E()("#input-method1").val();e.setState({store1:"Loading..."}),E()("#form-message1").html("<h3>The Result will be displayed here:</h3>Loading...");var l=null,o=a.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);if(o&&11==o[2].length){l=o[2];E.a.ajax({method:"POST",url:"http://localhost:8080/cgi-bin/WebsiteUrl.py",data:{videoID:l,dropdown:n},dataType:"html",complete:function(e){console.log("Succes"),console.log(e),E()("#form-message1").html(e.responseText)},error:function(e){console.log("An error occured"),console.log(e)}})}else{l=null;E()("#form-message1").html("<p id='red'> Please enter a valid url and try again</p>")}console.log(l),console.log("Succes!")}))},n.state={titleVideo:null,textVideo:null,store:"",store1:"",url:null},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.titleVideo,t=this.state.textVideo,a=this.state.url;return[l.a.createElement("div",{className:"main-content",id:"main2"},l.a.createElement("h1",null,"Input data"),l.a.createElement("p",null,"Insert the title and the text of a video, a text document or an article below."),l.a.createElement("h4",null,"Title:"),l.a.createElement("form",{action:"http://localhost:8080/cgi-bin/Website.py",id:"form1",type:"post",target:"_blank"},l.a.createElement("p",null,l.a.createElement("input",{id:"input-title",type:"text",placeholder:"Title",name:"titleVideo",onChange:this.handleInputChange})," "),l.a.createElement("p",null," ",e," "),l.a.createElement("h4",null,"Text:"),l.a.createElement("p",null,l.a.createElement("input",{id:"input-text",type:"text",placeholder:"Text",name:"textVideo",onChange:this.handleInputChange}),"  "),l.a.createElement("p",null," ",t," "),l.a.createElement("h4",null,"Classification algorithm:"),l.a.createElement("select",{id:"input-method",name:"dropdown"},l.a.createElement("option",{value:"Logistic Regression",selected:!0},"Logistic Regression"),l.a.createElement("option",{value:"Support Vector Machine"},"Support Vector Machine"),l.a.createElement("option",{value:"Recurrent Neural Network"},"Recurrent Neural Network")),l.a.createElement("p",null),l.a.createElement("p",null,l.a.createElement("input",{id:"sub",type:"submit",value:"Submit"})))),l.a.createElement("div",{class:"main-content",id:"form-message"},l.a.createElement("h3",null,"The Result will be displayed here:"),this.state.store),l.a.createElement("div",{className:"main-content",id:"main2"},l.a.createElement("h1",null,"Input YouTube url"),l.a.createElement("p",null,"Instead of inserting the title and the captions, you only have to insert the video URL of a YouTube video below:"),l.a.createElement("form",{id:"form2",target:"_blank"},l.a.createElement("h4",null,"URL:"),l.a.createElement("p",null,l.a.createElement("input",{id:"input-url",type:"text",placeholder:"URL",name:"url",onChange:this.handleInputChange}),"  "),l.a.createElement("p",null," ",a," "),l.a.createElement("select",{id:"input-method1",name:"dropdown"},l.a.createElement("option",{value:"Logistic Regression",selected:!0},"Logistic Regression"),l.a.createElement("option",{value:"Support Vector Machine"},"Support Vector Machine"),l.a.createElement("option",{value:"Recurrent Neural Network"},"Recurrent Neural Network")),l.a.createElement("p",null),l.a.createElement("p",null,l.a.createElement("input",{id:"sub",type:"submit",value:"Submit"})))),l.a.createElement("div",{class:"main-content",id:"form-message1"},l.a.createElement("h3",null,"The Result will be displayed here:"),this.state.store1),l.a.createElement("div",{class:"site-footer",id:"footer"},l.a.createElement("p",{class:"site-footer-owner"},"Created by: Angeliqe Husson"),l.a.createElement("p",{class:"site-footer-credits"}," Supervisors:  Y. Nazarathy (University of Queensland), M.A.A. Boon (TU/e Eindhoven) "))]}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r,null),l.a.createElement(c,null),l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.8f013bfb.chunk.js.map