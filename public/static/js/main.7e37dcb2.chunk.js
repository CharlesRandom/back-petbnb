(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{193:function(e,t,a){e.exports=a(421)},198:function(e,t,a){},414:function(e,t,a){},421:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=(a(198),a(18)),i=a(19),s=a(21),m=a(20),u=a(22),h=a(437),p=a(438),d=a(435),g=a(316),E=a(427),f=a(432),v=a(9),y=a(423),b=E.a.Item,w=function(e){var t=e.login,a=e.handleText;return r.a.createElement("div",{className:"auth-form"},r.a.createElement(E.a,{layout:"vertical",method:"POST",onSubmit:t},r.a.createElement(b,null,r.a.createElement(f.a,{name:"email",onChange:a,prefix:r.a.createElement(v.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"})),r.a.createElement(b,null,r.a.createElement(f.a,{name:"password",onChange:a,prefix:r.a.createElement(v.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"})),r.a.createElement(b,null,r.a.createElement("div",{className:"d-flex jcc aic"},r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Log in"))),r.a.createElement("div",{className:"d-flex jcc aic"},r.a.createElement("p",null,"Or ",r.a.createElement("a",{href:"/signup"},"register now!")))))},S=E.a.Item,O=function(e){var t=e.signup,a=e.handleText;return r.a.createElement("div",{className:"auth-form"},r.a.createElement(E.a,{layout:"vertical",method:"POST",onSubmit:t},r.a.createElement(S,null,r.a.createElement(f.a,{name:"name",onChange:a,prefix:r.a.createElement(v.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Name"})),r.a.createElement(S,null,r.a.createElement(f.a,{name:"email",onChange:a,prefix:r.a.createElement(v.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Email"})),r.a.createElement(S,null,r.a.createElement(f.a,{name:"password",onChange:a,prefix:r.a.createElement(v.a,{type:"lock",style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"Password"})),r.a.createElement(S,null,r.a.createElement("div",{className:"d-flex jcc aic"},r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Sign up")))))},k=a(424),C=a(97),j=a.n(C),x=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(k.a,{to:"/"},r.a.createElement("img",{src:j.a,alt:"logo pic"})),r.a.createElement("div",null,r.a.createElement(k.a,{to:"/hosts"},r.a.createElement("p",null,"Find a Host")),r.a.createElement(k.a,{to:"/host"},r.a.createElement("p",null,"Become a Host")),r.a.createElement(k.a,{to:"/login"},r.a.createElement("p",null,"Login"))))}}]),t}(n.Component),N=a(30),T=a.n(N),I="https://ironpetbnb.herokuapp.com/auth",P=function(e){return T.a.post(I+"/signup",e,{}).then(function(e){return e.data}).catch(function(e){return e.response})},U=function(e){return T.a.post(I+"/login",e,{withCredentials:!0}).then(function(e){return e.data}).catch(function(e){return e.response})},A=function(e){return T.a.get(I+"/profile/"+e,{withCredentials:!0}).then(function(e){return e.data}).catch(function(e){return e.response})},L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},loading:!1},a.authError=function(e){d.a.error(e),a.setState({loading:!1})},a.signup=function(e){a.setState({loading:!0});var t=a.state.user;e.preventDefault(),P(t).then(function(e){e._id?a.props.history.push("/login"):(console.log("Something went wrong, try sign up again"),a.authError("Something went wrong, try sign up again"))}).catch(function(e){console.log(e),a.authError("Something went wrong, try sign up again")})},a.login=function(e){a.setState({loading:!0});var t=a.state.user;e.preventDefault(),U(t).then(function(e){e._id?(console.log("logged"),A(e._id).then(function(e){localStorage.setItem("loggedUser",JSON.stringify(e)),a.props.history.push("/profile")})):(console.log("Something went wrong, please check credentials"),a.authError("Something went wrong, please check credentials"))}).catch(function(e){console.log(e),a.authError("Something went wrong, please check credentials")})},a.handleText=function(e){var t=a.state.user,n=e.target.name,r=e.target.value;t[n]=r,a.setState({user:t})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.location.pathname,t=this.signup,a=this.login,n=this.handleText,l=this.state.loading;return r.a.createElement("div",{className:"home"},r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement("div",{className:"search-container"},r.a.createElement("div",null,"/login"===e?r.a.createElement("div",null,l?r.a.createElement(g.a,{tip:"Loading..."},r.a.createElement(w,{login:a,handleText:n})):r.a.createElement(w,{login:a,handleText:n})):r.a.createElement("div",null,l?r.a.createElement(g.a,{tip:"Loading..."},r.a.createElement(O,{signup:t,handleText:n})):r.a.createElement(O,{signup:t,handleText:n}))))))}}]),t}(n.Component),D=a(422),M=a(134);M.initializeApp({apiKey:"AIzaSyCUZR4LVQ38JAwRKhiIxqojyOotsjz6yZs",authDomain:"testing-b927c.firebaseapp.com",databaseURL:"https://testing-b927c.firebaseio.com",projectId:"testing-b927c",storageBucket:"testing-b927c.appspot.com",messagingSenderId:"1077716813882"});var R=M,B="https://ironpetbnb.herokuapp.com/pets",z=function(e){return T.a.post(B+"/new",e,{withCredentials:!0}).then(function(e){return e.data}).catch(function(e){return e.response})},_=function(e){return console.log("uploading pet image"),R.storage().ref("pets").child(e.name).put(e).then(function(e){return e.ref.getDownloadURL()}).then(function(e){return e})},F=a(433),W=a(425),H=F.a.Meta,J=function(e){var t=e.pet;return r.a.createElement("div",null,r.a.createElement(F.a,{style:{width:300},cover:r.a.createElement("img",{style:{height:"50%"},alt:"pet pic",src:t.photoURL?t.photoURL:"https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif"}),actions:[r.a.createElement(v.a,{type:"delete"}),r.a.createElement(v.a,{type:"edit"})]},r.a.createElement(H,{avatar:r.a.createElement(W.a,{src:"https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif"}),title:t.name,description:t.description})))},G=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){console.log("Pets page will mount");var e=JSON.parse(localStorage.getItem("loggedUser"));e?this.setState({user:e}):this.props.history.push("/login")}},{key:"render",value:function(){var e=this.state.user;return r.a.createElement("div",null,r.a.createElement("div",{className:"d-flex jcc aic"},r.a.createElement("h2",null,"Your pets")),r.a.createElement("div",{className:"pets-container"},e.pets?e.pets.map(function(e){return r.a.createElement(J,{key:e._id,pet:e})}):r.a.createElement("p",null,"No pets found")),r.a.createElement("div",{className:"d-flex jcc aic"},r.a.createElement(y.a,{type:"primary",size:"large",icon:"plus",href:"/add-pet"},"Add pet")))}}]),t}(n.Component),K="https://ironpetbnb.herokuapp.com/hosts",X=function(e){return T.a.put(K+"/new",e,{withCredentials:!0}).then(function(e){return e.data}).catch(function(e){return e.response})},V=function(e){return console.log("uploading file"),R.storage().ref("hosts").child(e.name).put(e).then(function(e){return e.ref.getDownloadURL()}).then(function(e){return e})},Z=a(434),$=function(e){var t=e.host;return r.a.createElement("div",{className:"host-card"},r.a.createElement("div",{className:"host-avatar",style:{backgroundImage:'url("'.concat(t.photoURL,'")')}}),r.a.createElement("div",{className:"host-info"},r.a.createElement("h2",null,t.name),r.a.createElement("h3",null,t.title),r.a.createElement("div",null,r.a.createElement(v.a,{type:"environment"}),t.address.zipcode,", ",t.address.city),r.a.createElement(Z.a,{disabled:!0,allowHalf:!0,defaultValue:t.rate?t.rate:4.5}),r.a.createElement("div",null,r.a.createElement(v.a,{type:"clock-circle"})," Responds within 1h")),r.a.createElement("div",null,r.a.createElement("h3",null,"$",t.price),r.a.createElement("h4",null,"Per night")))},Y=a(82),q={height:"80%",width:"300px",flexGrow:2,margin:"20px",padding:"10px 10px"},Q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},a.onMarkerClick=function(e,t,n){return a.setState({selectedPlace:e,activeMarker:t,showingInfoWindow:!0})},a.onClose=function(e){a.state.showingInfoWindow&&a.setState({showingInfoWindow:!1,activeMarker:null})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(Y.Map,{google:this.props.google,zoom:12,style:q,initialCenter:{lat:19.3977762,lng:-99.1715564}},this.props.hosts.map(function(t){return r.a.createElement(Y.Marker,{key:t._id,onClick:e.onMarkerClick,position:{lat:t.address.location.coordinates[0],lng:t.address.location.coordinates[1]},photo:t.photoURL,price:t.price,title:t.name},r.a.createElement("h3",null,t.name))}),r.a.createElement(Y.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},r.a.createElement("div",null,r.a.createElement("h4",null,this.state.selectedPlace.title),r.a.createElement("h5",null,"$",this.state.selectedPlace.price," per night"),r.a.createElement("a",{href:"/host"},r.a.createElement("img",{style:{width:"200px"},src:this.state.selectedPlace.photo,alt:"profile pic"}))))))}}]),t}(n.Component),ee=Object(Y.GoogleApiWrapper)({apiKey:"AIzaSyDCFh6m1V3DjbWxzTDD9XauPCebaxX-tdA"})(Q),te=a(428),ae=a(14),ne=a.n(ae),re=f.a.Search,le=te.a.RangePicker;function oe(e,t){console.log("From: ",e[0],", to: ",e[1]),console.log("From: ",t[0],", to: ",t[1])}var ce=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-card"},r.a.createElement("h3",null,"Petbnb"),r.a.createElement("div",{className:"search-buttons"},r.a.createElement(y.a,{style:{width:"170px"},icon:"crown"},"Boarding"),r.a.createElement(y.a,{style:{width:"170px"},disabled:!0,icon:"fire"},"Sitting"),r.a.createElement(y.a,{style:{width:"170px"},disabled:!0,icon:"rocket"},"Walking")),r.a.createElement("div",{className:"search-buttons"},r.a.createElement(re,{style:{marginRight:"20px"},placeholder:"Town or postcode...",onSearch:function(e){return console.log(e)}}),r.a.createElement(le,{ranges:{Today:[ne()(),ne()()],"This Month":[ne()().startOf("month"),ne()().endOf("month")]},onChange:oe})),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(y.a,{style:{backgroundColor:"#59a4ad",border:"none",color:"white"}},"Find host")))}}]),t}(n.Component),ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},hosts:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;console.log("Hosts Page will mount"),JSON.parse(localStorage.getItem("loggedUser"))?T.a.get(K+"/all",{withCredentials:!0}).then(function(e){return e.data}).catch(function(e){return e.response}).then(function(t){console.log(t),e.setState({hosts:t})}).catch(function(e){console.log(e)}):this.props.history.push("/login")}},{key:"render",value:function(){var e=this.state.hosts;return r.a.createElement("div",{className:"hosts-page-container"},r.a.createElement("div",{className:"d-flex jcc aic"},r.a.createElement("h2",null,"Hosts")),r.a.createElement("div",{className:"d-flex jcc aic"},r.a.createElement(ce,null)),r.a.createElement("div",{className:"map-hosts-container"},r.a.createElement("div",{className:"hosts-container"},e.length>0?e.map(function(e){return r.a.createElement("a",{key:e._id,href:"/host"},r.a.createElement($,{key:e._id,host:e}))}):r.a.createElement("p",null,"No hay hosts")),r.a.createElement("div",{className:"map-container"},r.a.createElement(ee,{hosts:e}))))}}]),t}(n.Component),se=function(e){return T.a.post("https://ironpetbnb.herokuapp.com/banks/new",e,{withCredentials:!0}).then(function(e){return e.data}).catch(function(e){return e.response})},me=function(e){return T.a.post("https://ironpetbnb.herokuapp.com/new",e,{withCredentials:!0}).then(function(e){return e.data}).catch(function(e){return e.response})},ue=E.a.Item,he=function(e){var t=e.addBank,a=e.handleText,n=e.goBack;return r.a.createElement("div",{className:"bank-form"},r.a.createElement(E.a,{layout:"vertical",method:"POST",onSubmit:t},r.a.createElement(ue,null,r.a.createElement(f.a,{name:"name",onChange:a,prefix:r.a.createElement(v.a,{type:"bank",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Bank name"})),r.a.createElement(ue,null,r.a.createElement(f.a,{name:"clabe",onChange:a,prefix:r.a.createElement(v.a,{type:"wallet",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Clabe"})),r.a.createElement(ue,null,r.a.createElement(y.a,{style:{marginRight:"20px"},onClick:n},"Back"),r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Done"))))},pe=E.a.Item,de=function(e){var t=e.addAddress,a=e.handleText,n=e.goBack;return r.a.createElement("div",{className:"address-form"},r.a.createElement("h3",null,"Address"),r.a.createElement(E.a,{layout:"vertical",method:"POST",onSubmit:t},r.a.createElement(pe,null,r.a.createElement(f.a,{name:"street",onChange:a,prefix:r.a.createElement(v.a,{type:"car",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Street"})),r.a.createElement(pe,null,r.a.createElement(f.a,{name:"houseNumber",onChange:a,prefix:r.a.createElement(v.a,{type:"home",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"House Number"})),r.a.createElement(pe,null,r.a.createElement(f.a,{name:"aptNumber",onChange:a,prefix:r.a.createElement(v.a,{type:"block",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Interior Number"})),r.a.createElement(pe,null,r.a.createElement(f.a,{name:"city",onChange:a,prefix:r.a.createElement(v.a,{type:"environment",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"City"})),r.a.createElement(pe,null,r.a.createElement(f.a,{name:"state",onChange:a,prefix:r.a.createElement(v.a,{type:"flag",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"State"})),r.a.createElement(pe,null,r.a.createElement(f.a,{name:"zipcode",onChange:a,prefix:r.a.createElement(v.a,{type:"mail",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Zipcode"})),r.a.createElement(pe,null,r.a.createElement(y.a,{style:{marginRight:"20px"},onClick:n},"Back"),r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Next"))))},ge=a(431),Ee=a(429),fe=E.a.Item,ve=ge.a.Button,ye=ge.a.Group,be=f.a.TextArea,we=function(e){var t=e.addHost,a=e.handleText,n=(e.handleImage,e.onChange);return r.a.createElement("div",{className:"host-form"},r.a.createElement("h3",null,"Profile"),r.a.createElement(E.a,{layout:"vertical",method:"POST",onSubmit:t},r.a.createElement(fe,null,r.a.createElement(Ee.a,{onChange:function(e){return n(e,"photoURL")}},r.a.createElement(y.a,null,r.a.createElement(v.a,{type:"upload"})," Upload Profile Pic"))),r.a.createElement(fe,null,r.a.createElement(Ee.a,{onChange:function(e){return n(e,"cover")}},r.a.createElement(y.a,null,r.a.createElement(v.a,{type:"upload"})," Upload Cover Pic"))),r.a.createElement(fe,null,r.a.createElement(f.a,{name:"phone",onChange:a,prefix:r.a.createElement(v.a,{type:"phone",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Phone"})),r.a.createElement(fe,null,r.a.createElement(f.a,{name:"price",onChange:a,prefix:r.a.createElement(v.a,{type:"dollar",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Price per night"})),r.a.createElement(fe,null,r.a.createElement(ye,{name:"homeType",size:"large",buttonStyle:"solid",onChange:a},r.a.createElement(ve,{value:"House"},"House"),r.a.createElement(ve,{value:"Apt"},"Apt"),r.a.createElement(ve,{value:"Other"},"Other"))),r.a.createElement(fe,null,r.a.createElement(f.a,{name:"title",onChange:a,prefix:r.a.createElement(v.a,{type:"smile",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Profile title, how your profile will be listed"})),r.a.createElement(fe,null,r.a.createElement(be,{name:"description",rows:4,placeholder:"Describe how will be the experience with you",onChange:a})),r.a.createElement(fe,null,r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Next"))))},Se=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{},data:{},current:0},a.addHost=function(e){e.preventDefault();var t=a.state,n=t.data,r=t.user;n.user=r._id,X(n).then(function(e){e.data||(localStorage.setItem("loggedUser",JSON.stringify(e)),a.setState({user:e}),a.setState({current:1}))}).catch(function(e){console.log("Something went wrong D: try adding the data again"),console.log(e)})},a.addBank=function(e){e.preventDefault();var t=a.state,n=t.data,r=t.user;n.user=r._id;var l={user:n.user,name:n.name,clabe:n.clabe};se(l).then(function(e){localStorage.setItem("loggedUser",JSON.stringify(e)),a.setState({user:e}),a.props.history.push("/profile")}).catch(function(e){console.log("Something went wrong D: try adding the bank data again"),console.log(e)})},a.addAddress=function(e){e.preventDefault();var t=a.state,n=t.data,r=t.user;n.user=r._id;var l={user:n.user,street:n.street,houseNumber:n.houseNumber,aptNumber:n.aptNumber,city:n.city,state:n.state,zipcode:n.zipcode};me(l).then(function(e){e.data||(localStorage.setItem("loggedUser",JSON.stringify(e)),a.setState({user:e})),a.setState({current:2})}).catch(function(e){console.log("Something went wrong D: try adding the address again"),console.log(e)})},a.handleText=function(e){var t=a.state.data,n=e.target.name,r=e.target.value;t[n]=r,a.setState({data:t})},a.handleImage=function(e){var t=e.target.name,n=a.state.data,r=e.target.files[0];V(r).then(function(e){n[t]=e,a.setState({data:n}),console.log("done")}).catch(function(e){console.log("Something went wrong D: try adding the image again"),console.log(e)})},a.onChange=function(e,t){var n=a.state.data,r=e.file.originFileObj;V(r).then(function(r){e.file.status="done",n[t]=r,a.setState({data:n})}).catch(function(e){console.log("Something went wrong D: try adding the image again"),console.log(e)})},a.goBack=function(){var e=a.state,t=e.user,n=e.current;n--,a.setState({user:t,current:n})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("loggedUser"));e&&e.name?this.setState({user:e}):this.props.history.push("/login")}},{key:"render",value:function(){var e=this.addHost,t=this.addBank,a=this.addAddress,n=this.handleText,l=this.handleImage,o=this.onChange,c=this.goBack,i=this.state.current;return r.a.createElement("div",{className:"account-container"},0===i?r.a.createElement(we,{addHost:e,handleText:n,handleImage:l,onChange:o}):1===i?r.a.createElement(de,{addAddress:a,handleText:n,goBack:c}):r.a.createElement(he,{addBank:t,handleText:n,goBack:c}))}}]),t}(n.Component),Oe=F.a.Meta,ke=function(e){var t=e.user;return r.a.createElement("div",null,r.a.createElement("div",{className:"account-container"},r.a.createElement(F.a,{style:{width:350},cover:r.a.createElement("img",{alt:"cover pic",src:t.cover?t.cover:"https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif"}),actions:[r.a.createElement("div",null,r.a.createElement(v.a,{type:"setting"}),r.a.createElement("p",null,"Settings")),r.a.createElement("div",null,r.a.createElement(v.a,{type:"edit"}),r.a.createElement("p",null,"Personal Details")),r.a.createElement("div",null,r.a.createElement(v.a,{type:"project"}),r.a.createElement("p",null,"Transactions"))]},r.a.createElement(Oe,{avatar:r.a.createElement(W.a,{size:"large",src:t.photoURL?t.photoURL:"https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif"}),title:t.name,description:t.email}))))},Ce=a(191),je=a(430),xe=a(426),Ne=f.a.TextArea,Te=function(e){var t=e.comments;return r.a.createElement(je.a,{dataSource:t,header:"".concat(t.length," ").concat(t.length>1?"replies":"reply"),itemLayout:"horizontal",renderItem:function(e){return r.a.createElement(xe.a,e)}})},Ie=function(e){var t=e.onChange,a=e.onSubmit,n=e.submitting,l=e.value;return r.a.createElement("div",null,r.a.createElement(E.a.Item,null,r.a.createElement(Ne,{rows:4,onChange:t,value:l})),r.a.createElement(E.a.Item,null,r.a.createElement(y.a,{htmlType:"submit",loading:n,onClick:a,type:"primary"},"Add Comment")))},Pe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={user:{},comments:[],submitting:!1,value:""},a.handleSubmit=function(){a.state.value&&(a.setState({submitting:!0}),setTimeout(function(){a.setState({submitting:!1,value:"",comments:[{author:a.state.user.name,avatar:a.state.user.photoURL?a.state.user.photoURL:"https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif",content:r.a.createElement("p",null,a.state.value),datetime:ne()().fromNow()}].concat(Object(Ce.a)(a.state.comments))})},1e3))},a.handleChange=function(e){a.setState({value:e.target.value})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){console.log("Messenger page will mount");var e=JSON.parse(localStorage.getItem("loggedUser"));e?this.setState({user:e}):this.props.history.push("/login")}},{key:"render",value:function(){var e=this.state,t=e.comments,a=e.submitting,n=e.value,l=e.user;return r.a.createElement("div",{className:"messenger"},t.length>0&&r.a.createElement(Te,{comments:t}),r.a.createElement(xe.a,{avatar:r.a.createElement(W.a,{src:l.photoURL?l.photoURL:"https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif",alt:"Mastermind"}),content:r.a.createElement(Ie,{onChange:this.handleChange,onSubmit:this.handleSubmit,submitting:a,value:n})}))}}]),t}(n.Component),Ue=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav",style:{color:"#595959",borderBottom:"1px solid #ccc",backgroundColor:"white",zIndex:"999"}},r.a.createElement("img",{src:j.a,alt:"logo pic"}),r.a.createElement("div",null,r.a.createElement(k.a,{style:{color:"black"},to:"/profile"},r.a.createElement("p",null,"Home")),r.a.createElement(k.a,{style:{color:"black"},to:"/"},r.a.createElement("p",null,"Logout"))))}}]),t}(n.Component),Ae=D.a.TabPane,Le=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={user:{}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("loggedUser"));e.name?this.setState({user:e}):this.props.history.push("/login")}},{key:"render",value:function(){var e=this.state.user;return r.a.createElement("div",{className:"box_profile",style:{height:"100vh",overflowY:"scroll",backgroundColor:"#F6FBF9"}},r.a.createElement(Ue,null),r.a.createElement("h1",{style:{marginTop:"80px"}},"Hi ",e.name,","),r.a.createElement("h2",null,"Welcome!"),r.a.createElement("div",{className:"d-flex jcc"},r.a.createElement(D.a,{defaultActiveKey:"search",size:"large"},r.a.createElement(Ae,{tab:r.a.createElement("span",null,r.a.createElement(v.a,{type:"search"}),"Find a host"),key:"search"},r.a.createElement(ie,null)),r.a.createElement(Ae,{tab:r.a.createElement("span",null,r.a.createElement(v.a,{type:"inbox"}),"Messenger"),key:"messenger"},r.a.createElement(Pe,null)),r.a.createElement(Ae,{tab:r.a.createElement("span",null,r.a.createElement(v.a,{type:"smile"}),"Pets"),key:"pets"},r.a.createElement(G,null)),!e.host&&r.a.createElement(Ae,{tab:r.a.createElement("span",null,r.a.createElement(v.a,{type:"audit"}),"Become a host"),key:"host"},r.a.createElement(Se,null)),r.a.createElement(Ae,{tab:r.a.createElement("span",null,r.a.createElement(v.a,{type:"user"}),"Account"),key:"account"},r.a.createElement(ke,{user:e})))))}}]),t}(n.Component),De=a(176),Me=E.a.Item,Re=ge.a.Button,Be=ge.a.Group,ze=De.a.Option,_e=f.a.TextArea,Fe=function(e){var t=e.addPet,a=e.handleText,n=e.handleSelectChange,l=(e.handleImage,e.onChange);return r.a.createElement("div",{className:"pet-form"},r.a.createElement(E.a,{layout:"vertical",method:"POST",onSubmit:t},r.a.createElement(Me,null,r.a.createElement(Ee.a,{onChange:function(e){return l(e,"photoURL")}},r.a.createElement(y.a,null,r.a.createElement(v.a,{type:"upload"})," Upload Pet Pic"))),r.a.createElement(Me,null,r.a.createElement(f.a,{name:"name",onChange:a,prefix:r.a.createElement(v.a,{type:"smile",style:{color:"rgba(0,0,0,.25)"}}),placeholder:"Name"})),r.a.createElement(Me,null,r.a.createElement(Be,{name:"size",size:"large",buttonStyle:"solid",onChange:a},r.a.createElement(Re,{value:"Small"},"Small"),r.a.createElement(Re,{value:"Medium"},"Medium"),r.a.createElement(Re,{value:"Large"},"Large"),r.a.createElement(Re,{value:"X-large"},"X-large"))),r.a.createElement(Me,null,r.a.createElement(Be,{name:"gender",size:"large",buttonStyle:"solid",onChange:a},r.a.createElement(Re,{value:"Male"},"Male"),r.a.createElement(Re,{value:"Female"},"Female"))),r.a.createElement(Me,null,r.a.createElement(De.a,{name:"kind",showSearch:!0,style:{width:200},placeholder:"Select a kind",optionFilterProp:"children",onChange:n,filterOption:function(e,t){return t.props.children.toLowerCase().indexOf(e.toLowerCase())>=0}},r.a.createElement(ze,{value:"Dog"},"Dog"),r.a.createElement(ze,{value:"Cat"},"Cat"),r.a.createElement(ze,{value:"Other"},"Other"))),r.a.createElement(Me,null,r.a.createElement(_e,{name:"description",rows:4,placeholder:"Describe your pet",onChange:a})),r.a.createElement(Me,null,r.a.createElement(y.a,{type:"primary",htmlType:"submit"},"Save"))))},We=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={pet:{}},a.addPet=function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("loggedUser")),n=a.state.pet;n.owner=t._id,console.log(n),z(n).then(function(e){console.log(e),localStorage.setItem("loggedUser",JSON.stringify(e)),a.props.history.push("/pets")}).catch(function(e){console.log("Something went wrong D: try again"),console.log(e)})},a.handleText=function(e){var t=a.state.pet,n=e.target.name,r=e.target.value;t[n]=r,a.setState({pet:t})},a.handleSelectChange=function(e){var t=a.state.pet;t.kind=e,console.log(t),a.setState({pet:t})},a.handleImage=function(e){console.log(e.target.files);var t=a.state.pet,n=e.target.files[0];_(n).then(function(e){t.photoURL=e,a.setState({pet:t}),console.log("done")})},a.onChange=function(e,t){var n=a.state.pet,r=e.file.originFileObj;_(r).then(function(r){e.file.status="done",n[t]=r,a.setState({pet:n}),console.log(n)}).catch(function(e){console.log("Something went wrong D: try adding the image again"),console.log(e)})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.addPet,t=this.handleText,a=this.handleSelectChange,n=this.handleImage,l=this.onChange;return r.a.createElement("div",{className:"home"},r.a.createElement("div",null,r.a.createElement(Ue,null),r.a.createElement("div",{className:"search-container"},r.a.createElement("div",null,r.a.createElement(Fe,{addPet:e,handleText:t,handleSelectChange:a,handleImage:n,onChange:l})))))}}]),t}(n.Component),He=f.a.Search,Je=te.a.RangePicker;function Ge(e,t){console.log("From: ",e[0],", to: ",e[1]),console.log("From: ",t[0],", to: ",t[1])}var Ke=function(){return r.a.createElement("div",{className:"search-box"},r.a.createElement("h3",null,"Petbnb"),r.a.createElement(He,{placeholder:"Town or postcode...",onSearch:function(e){return console.log(e)},style:{margin:"0 20px"}}),r.a.createElement(Je,{ranges:{Today:[ne()(),ne()()],"This Month":[ne()().startOf("month"),ne()().endOf("month")]},onChange:Ge}))},Xe=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement("div",{className:"search-container"},r.a.createElement("div",null,r.a.createElement("h1",null,"Happy pets, happy owners"),r.a.createElement("p",null,"Find a loving pet sitter who will take care of your pet ",r.a.createElement("br",null),"just like you would do it"),r.a.createElement(ce,null)))))}}]),t}(n.Component),Ve=function(){return r.a.createElement(h.a,null,r.a.createElement(p.a,{exact:!0,path:"/",component:Xe}),r.a.createElement(p.a,{path:"/signup",component:L}),r.a.createElement(p.a,{path:"/login",component:L}),r.a.createElement(p.a,{path:"/profile",component:Le}),r.a.createElement(p.a,{path:"/pets",component:G}),r.a.createElement(p.a,{path:"/hosts",component:ie}),r.a.createElement(p.a,{path:"/add-pet",component:We}),r.a.createElement(p.a,{path:"/host",component:Se}),r.a.createElement(p.a,{path:"/search",component:Ke}))},Ze=(a(414),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ve,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $e=a(436);a(416);a(418).config();o.a.render(r.a.createElement(function(){return r.a.createElement($e.a,null,r.a.createElement(Ze,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e,t,a){e.exports=a.p+"static/media/pethouse.6d0da58f.png"}},[[193,2,1]]]);
//# sourceMappingURL=main.7e37dcb2.chunk.js.map