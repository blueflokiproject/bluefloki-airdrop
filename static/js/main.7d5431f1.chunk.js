(this.webpackJsonpblueflokiairdrop=this.webpackJsonpblueflokiairdrop||[]).push([[0],{19:function(t,e,n){t.exports={topbar:"App_topbar__3CDEo",topbarleftalign:"App_topbarleftalign__l7Oxh",logo:"App_logo__27Rq1",logostaking:"App_logostaking__E6-pC",connectwalletbutton:"App_connectwalletbutton__ZgLtN",connectwalletbuttonactive:"App_connectwalletbuttonactive__3ZEwy",contentcontainer:"App_contentcontainer__20NR1",infotext:"App_infotext__3ggUp",eligibleWallet:"App_eligibleWallet__3Hwy1"}},211:function(t){t.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"wallet","type":"address"}],"name":"isEligible","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]')},218:function(t,e,n){},233:function(t,e){},235:function(t,e){},239:function(t,e){},240:function(t,e){},267:function(t,e){},269:function(t,e){},279:function(t,e){},281:function(t,e){},291:function(t,e){},293:function(t,e){},309:function(t,e){},343:function(t,e){},344:function(t,e){},414:function(t,e){},416:function(t,e){},421:function(t,e){},423:function(t,e){},430:function(t,e){},442:function(t,e){},445:function(t,e){},450:function(t,e){},526:function(t,e,n){"use strict";n.r(e);var c=n(22),a=n.n(c),o=n(207),i=n.n(o),l=(n(218),n(21)),s=n.n(l),r=n(110),u=n(53),p=n(19),b=n.n(p),f=n(208),d=n.n(f),h=n(211),j=n(14);var x=function(){var t=Object(c.useState)(!1),e=Object(u.a)(t,2),n=e[0],a=e[1],o=Object(c.useState)([]),i=Object(u.a)(o,2),l=i[0],p=i[1],f=Object(c.useState)(null),x=Object(u.a)(f,2),g=x[0],w=x[1],O=Object(c.useState)(null),_=Object(u.a)(O,2),m=_[0],v=_[1],y=Object(c.useState)(!1),A=Object(u.a)(y,2),k=A[0],C=A[1];function S(){return(S=Object(r.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=new d.a,!window.ethereum){t.next=20;break}return console.log("2s"),e.eth.setProvider(window.ethereum),t.next=6,window.ethereum.enable();case 6:return t.next=8,e.eth.net.getId();case 8:if(t.t0=t.sent,56==t.t0){t.next=12;break}return t.next=12,window.ethereum.request({method:"wallet_addEthereumChain",params:[{chainId:"0x".concat(56..toString(16)),chainName:"Binance Smart Chain Mainnet",nativeCurrency:{name:"BNB",symbol:"bnb",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org/"],blockExplorerUrls:["https://bscscan.com/"]}]});case 12:return t.t1=p,t.next=15,e.eth.getAccounts();case 15:t.t2=t.sent,(0,t.t1)(t.t2),v(new e.eth.Contract(h,"0xd178cAec2246347b5201b699B601932A39B8A2BA")),a(!0),w(e);case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)(Object(r.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==g){t.next=6;break}return t.t0=C,t.next=4,m.methods.isEligible(l[0]).call();case 4:t.t1=t.sent,(0,t.t0)(t.t1);case 6:case"end":return t.stop()}}),t)}))),[g]),Object(j.jsxs)("div",{class:b.a.contentcontainer,children:[Object(j.jsxs)("div",{class:b.a.topbar,children:[Object(j.jsxs)("div",{class:b.a.topbarleftalign,children:[Object(j.jsx)("div",{class:b.a.logo}),Object(j.jsx)("p",{class:b.a.logostaking,children:"AIRDROP"})]}),n?Object(j.jsx)("div",{class:"".concat(b.a.connectwalletbutton," ").concat(b.a.connectwalletbuttonactive),children:"Connected"}):Object(j.jsx)("div",{onClick:function(){return S.apply(this,arguments)},class:b.a.connectwalletbutton,children:"Connect Wallet"})]}),!n&&Object(j.jsx)("p",{class:b.a.infotext,children:"Please connect wallet!"}),!k&&n&&Object(j.jsx)("p",{class:b.a.infotext,children:"You did not participate in the airdrop!"}),k&&n&&Object(j.jsx)("div",{onClick:function(){m.methods.claim().send({from:l[0]})},class:b.a.eligibleWallet,children:"Claim Airdrop"})]})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,529)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),o(t),i(t)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),g()}},[[526,1,2]]]);
//# sourceMappingURL=main.7d5431f1.chunk.js.map