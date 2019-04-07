(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,image:"./assets/images/img1.png",color:"grey lighten-1"},{id:2,image:"./assets/images/img2.png",color:"purple accent-1"},{id:3,image:"./assets/images/img3.png",color:"orange lighten-2"},{id:4,image:"./assets/images/img4.png",color:" pink lighten-2"},{id:5,image:"./assets/images/img5.png",color:"deep-purple lighten-3"},{id:6,image:"./assets/images/img6.png",color:"pink lighten-3"},{id:7,image:"./assets/images/img7.png",color:"blue lighten-4"},{id:8,image:"./assets/images/img8.png",color:"yellow accent-3"},{id:9,image:"./assets/images/img9.png",color:"light-blue accent-1"},{id:10,image:"./assets/images/img10.png",color:"amber accent-2"},{id:11,image:"./assets/images/img11.png",color:"pink accent-2"},{id:12,image:"./assets/images/img12.png",color:"indigo accent-2"},{id:13,image:"./assets/images/img13.png",color:"yellow lighten-3"},{id:14,image:"./assets/images/img14.png",color:"light-blue lighten-4"},{id:15,image:"./assets/images/img15.png",color:"yellow"},{id:16,image:"./assets/images/img16.png",color:"deep-purple lighten-3"},{id:17,image:"./assets/images/img17.png",color:"red lighten-4"},{id:18,image:"./assets/images/img18.png",color:"purple lighten-2"},{id:19,image:"./assets/images/img19.png",color:"grey lighten-2"},{id:20,image:"./assets/images/img20.png",color:"grey lighten-3"}]},,,function(e,a,t){e.exports=t(18)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),c=t(2),s=t.n(c),r=(t(15),t(3)),l=t(4),o=t(7),g=t(5),m=t(8);t(16),t(17);var d=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{id:"image-container"},e.children)))};var h=function(e){return n.a.createElement("div",{className:"card-panel ".concat(e.image.color)},n.a.createElement("img",{className:"responsive-img",src:e.image.image,alt:"flower ".concat(e.image.id),onClick:function(){return e.flowerClicked(e.image.id)}}))},u=t(6),p=function(e){function a(){var e,t;Object(r.a)(this,a);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(n)))).state={imageArr:u,msg:"Click a flower!",score:0,highScore:0,clickedFlowers:[],titleColors:[{c1:"blue lighten-1",c2:"lime-text text-accent-2"},{c1:"purple darken-1",c2:"orange-text text-lighten-1"},{c1:"pink accent-2",c2:"purple-text text-darken-4"},{c1:"deep-purple lighten-2",c2:"red-text text-lighten-4"}][Math.floor(4*Math.random())]},t.flowerClicked=function(e){var a=t.state.clickedFlowers,i=t.state.msg,n=t.state.score,c=t.state.highScore;a.includes(e)?(a=[],i="Previously clicked",n>c&&(c=n),n=0):(a.push(e),n++),a.length===t.state.imageArr.length&&(i="Score Maxed Out! Play Again?",c=n,n=0,a=[]);var s=t.state.imageArr.sort(function(e,a){return.5-Math.random()});t.setState({imageArr:s,msg:i,score:n,highScore:c,clickedFlowers:a})},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:"App"},n.a.createElement("div",{className:"nav-wrapper ".concat(this.state.titleColors.c1)},n.a.createElement("h3",{className:"brand-logo center ".concat(this.state.titleColors.c2)},"React Click Game")),n.a.createElement("div",{clasclassNames:"blue lighten-1",id:"banner"},n.a.createElement("div",{className:"container"}))),n.a.createElement("main",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},n.a.createElement("div",{className:"card grey lighten-5"},n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m4 offset-m4 center-align grey lighten-4"},n.a.createElement("h5",null,"Have Fun and Enjoy!"),n.a.createElement("p",null,"Start the Click Game by clicking a flower. Each time you click a flower that you have yet to click you will be given a point. When you click an image that has already been clicked this round then the current round will end and a new round will begin. Your high score will be tracked and can be seen next to the current round's score. The highest possible score is 20. Start your clicking!")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12 m6 offset-m3 center-align white"},n.a.createElement("h5",{className:"col s4 grey-text text-darken-3",id:"msg-box"},this.state.msg),n.a.createElement("h5",{className:"col s4 grey-text text-darken-3",id:"score-box"},"Score: ",this.state.score),n.a.createElement("h5",{className:"col s4 grey-text text-darken-3",id:"highscore-box"},"High Score: ",this.state.highScore))),n.a.createElement(d,{msg:this.state.msg,score:this.state.score,highScore:this.state.highScore},this.state.imageArr.map(function(a,t){return n.a.createElement(h,{key:t,image:a,flowerClicked:e.flowerClicked})})))))),n.a.createElement("div",{className:"divider"}),n.a.createElement("footer",{className:"page-footer blue-grey lighten-5"},n.a.createElement("div",{className:"footer-copyright"},n.a.createElement("div",{className:"container black-text"},"\xa9 Peter Tanzy, 2019",n.a.createElement("a",{className:"right",href:"https://github.com/ptanzy/Clicky-Game"},"Github")))))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.3d28c73a.chunk.js.map