(function(){"use strict";var t={505:function(t,e,n){var s=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("SimonTheGame")],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"simon-the-game"},[n("div",{staticClass:"board"},[n("div",{staticClass:"first-row"},[n("Button",{ref:"button1",attrs:{color:"yellow",audioLink:"http://www.kellyking.me/projects/simon/sounds/1.ogg","data-num":"0"},on:{checkSeq:t.checkSeq}}),n("Button",{ref:"button2",attrs:{color:"blue",audioLink:"http://www.kellyking.me/projects/simon/sounds/2.ogg","data-num":"1"},on:{checkSeq:t.checkSeq}})],1),n("div",{staticClass:"second-row"},[n("Button",{ref:"button3",attrs:{color:"red",audioLink:"http://www.kellyking.me/projects/simon/sounds/3.ogg","data-num":"2"},on:{checkSeq:t.checkSeq}}),n("Button",{ref:"button4",attrs:{color:"green",audioLink:"http://www.kellyking.me/projects/simon/sounds/4.ogg","data-num":"3"},on:{checkSeq:t.checkSeq}})],1)]),n("div",{staticClass:"options"},[n("button",{staticClass:"button-start",on:{click:t.toggleGame}},[t._v(" "+t._s(this.started?"Остановить":"Начать")+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.lost,expression:"lost"}],staticClass:"message"},[t._v("Вы проиграли. Попробуйте снова.")]),n("div",{staticClass:"modes"},[n("p",{staticClass:"easy-mode"},[n("input",{ref:"easyMode",attrs:{type:"radio",id:"easy-mode",name:"mode","data-delay":"1500"},on:{click:t.setMode}}),n("label",{attrs:{for:"easy-mode"}},[t._v("Легко")])]),n("p",{staticClass:"normal-mode"},[n("input",{ref:"normalMode",attrs:{type:"radio",id:"normal-mode",name:"mode","data-delay":"1000",checked:""},on:{click:t.setMode}}),n("label",{attrs:{for:"normal-mode"}},[t._v("Нормально")])]),n("p",{staticClass:"hard-mode"},[n("input",{ref:"hardMode",attrs:{type:"radio",id:"hard-mode",name:"mode","data-delay":"400"},on:{click:t.setMode}}),n("label",{attrs:{for:"hard-mode"}},[t._v("Сложно")])])])])])},r=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"button",style:"background-color:"+t.color+";filter:brightness("+t.brightness+"%)",on:{click:function(e){t.play(),t.$emit("checkSeq",e)}}})},c=[],l={props:{color:String,audioLink:String},data(){return{audio:new Audio(this.audioLink),brightness:80}},created(){this.audio.onplaying=()=>this.brightness=150,this.audio.onpause=()=>this.brightness=80},methods:{play(){this.audio.paused||(console.log("playing"),this.audio.pause()),this.audio.play()}}},d=l,h=n(1),m=(0,h.Z)(d,u,c,!1,null,null,null),f=m.exports,p={data(){return{buttons:[],started:!1,delay:1e3,sequence:[],currentButton:0,lost:!1}},components:{Button:f},mounted(){this.buttons.push(this.$refs.button1,this.$refs.button2,this.$refs.button3,this.$refs.button4),this.currentMode=this.$refs.normalMode},methods:{setMode(t){this.delay=t.target.dataset.delay},toggleGame(){this.started=!this.started,this.started?this.startGame():this.endGame()},startGame(){this.lost=!1,this.startRound()},endGame(){this.lost=!0,this.sequence.length=0,this.currentButton=0},startRound(){this.sequence.push(Math.floor(4*Math.random())),this.playSequence()},async playSequence(){for(let t=0,e=this.sequence.length-1;t<e;t++)this.buttons[this.sequence[t]].play(),await this.wait(this.delay);this.buttons[this.sequence[this.sequence.length-1]].play()},wait(t){return new Promise((e=>setTimeout(e,t)))},async checkSeq(t){t.target.dataset.num==this.sequence[this.currentButton]?(this.currentButton++,this.currentButton===this.sequence.length&&(this.currentButton=0,await this.wait(1e3),this.startRound())):this.endGame()}}},g=p,b=(0,h.Z)(g,a,r,!1,null,null,null),y=b.exports,v={components:{SimonTheGame:y}},k=v,w=(0,h.Z)(k,o,i,!1,null,null,null),q=w.exports;s.Z.config.productionTip=!1,new s.Z({render:function(t){return t(q)}}).$mount("#app")}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,i){if(!s){var a=1/0;for(l=0;l<t.length;l++){s=t[l][0],o=t[l][1],i=t[l][2];for(var r=!0,u=0;u<s.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](s[u])}))?s.splice(u--,1):(r=!1,i<a&&(a=i));if(r){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[s,o,i]}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,i,a=s[0],r=s[1],u=s[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(u)var l=u(n)}for(e&&e(s);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},s=self["webpackChunksimon_the_game"]=self["webpackChunksimon_the_game"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(505)}));s=n.O(s)})();
//# sourceMappingURL=app-legacy.900ae165.js.map