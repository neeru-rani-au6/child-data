(this.webpackJsonpfrontend1=this.webpackJsonpfrontend1||[]).push([[0],{154:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(13),c=a.n(n),i=a(21),s=a(22),o=a(24),l=a(23),u=a(7),h=a.n(u),d=a(11),p=a(30),j=a(9),b=a(107),O=a(230),m=a(211),x=a(209),f=a(229),v=a(210),g=a(104),y=a.n(g),C=a(157),k=a(204),w=a(207),S=a(20),N="LOGIN",D="LOGOUT",R="POSTCHILD",L="GETCHILD",I="FATCHING",A="GETSTATE",T="POSTSTATE",z="GETDISTRICT",U="POSTDISTRICT",W="GETONECHILD",E=a(28),M=a.n(E),G=function(e){return function(){var t=Object(d.a)(h.a.mark((function t(a){var r,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M()({method:"post",url:"/users",data:{email:e.email,name:e.name}});case 3:r=t.sent,n=r.data,a({type:N,payload:{user:n,isAuthenticated:!0}}),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0),a({type:N,payload:{error:t.t0.response.data.error,info:null,isAuthenticated:!1,user:null}});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},B=a(16),F=a(2),H=Object(k.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function J(){var e=H(),t=Object(S.d)((function(e){return e.userReducer})),a=Object(B.e)(),n=Object(S.c)(),c=Object(r.useState)({email:"",name:"",isSubmitting:!1}),i=Object(b.a)(c,2),s=i[0],o=i[1],l=function(e,t){o(Object(j.a)(Object(j.a)({},s),{},Object(p.a)({},e,t)))},u=function(){var e=Object(d.a)(h.a.mark((function e(r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),o(Object(j.a)(Object(j.a)({},s),{},{isSubmitting:!0})),e.next=4,n(G(s));case 4:o(Object(j.a)(Object(j.a)({},s),{},{isSubmitting:!1})),t.error||a.push("/home");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(F.jsxs)(w.a,{component:"main",maxWidth:"xs",children:[Object(F.jsx)(x.a,{}),Object(F.jsxs)("div",{className:e.paper,children:[Object(F.jsx)(O.a,{className:e.avatar,children:Object(F.jsx)(y.a,{})}),Object(F.jsx)(C.a,{component:"h1",variant:"h5",children:"Login"}),Object(F.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:u,children:[Object(F.jsx)(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"name",label:"name",type:"name",id:"name",autoComplete:"current-name",value:s.name,onChange:function(e){return l("name",e.target.value)}}),Object(F.jsx)(f.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:s.email,onChange:function(e){return l("email",e.target.value)}}),t.error&&Object(F.jsx)(v.a,{item:!0,xs:12,className:"error",children:Object(F.jsx)("div",{className:"error",children:t.error})}),Object(F.jsx)(m.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,disabled:s.isSubmitting,children:"Submit"})]})]})]})}var _=a(216),P=a(220),V=a(219),q=a(215),K=a(217),Q=a(218),X=a(77),Y=a(212),Z=a(213),$=a(214),ee=a(105),te=a.n(ee),ae=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).logoutUser=Object(d.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.logout();case 2:e.props.history.push("/");case 3:case"end":return t.stop()}}),t)}))),e}return Object(s.a)(a,[{key:"render",value:function(){return Object(F.jsx)("div",{className:"grow",children:Object(F.jsx)(Y.a,{position:"static",children:Object(F.jsxs)(Z.a,{children:[Object(F.jsx)(C.a,{className:"title",variant:"h6",noWrap:!0,children:"Logo"}),Object(F.jsx)("div",{className:"grow"}),Object(F.jsxs)("div",{children:[Object(F.jsx)(m.a,{color:"inherit",href:"/#/home",children:"Home"}),Object(F.jsx)(m.a,{color:"inherit",className:"sectionDesktop",href:"/#/state",children:"State"}),Object(F.jsx)(m.a,{color:"inherit",className:"sectionDesktop",href:"/#/district",children:"District"}),Object(F.jsx)(m.a,{color:"inherit",className:"sectionDesktop",href:"/#/child",children:"Child"})]}),Object(F.jsx)("div",{className:"sectionMobile",children:Object(F.jsx)($.a,{"aria-label":"show more","aria-haspopup":"true",color:"inherit",onClick:this.logoutUser,children:Object(F.jsx)(te.a,{})})})]})})})}}]),a}(r.Component),re=Object(S.b)((function(e){return{user:e.userReducer}}),{logout:function(){return function(){var e=Object(d.a)(h.a.mark((function e(t,a){var r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().userReducer.user,e.prev=1,e.next=4,M()({method:"delete",url:"/logout",headers:{authorization:r.token}});case 4:t({type:D,payload:null}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}()}})(Object(B.f)(ae)),ne=a(158),ce=a(221),ie=a(224),se=a(223),oe=a(222),le=a(225),ue=function(){return function(){var e=Object(d.a)(h.a.mark((function e(t,a){var r,n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=a().userReducer.user,t({type:I}),e.next=5,M()("/child/get",{headers:{authorization:r.token}});case 5:n=e.sent,c=n.data,t({type:L,payload:c}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}()},he=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleClose=function(){e.setState({open:!1,name:"",sex:"",fatherName:"",motherName:"",state:"",district:"",photoURL:""})},e.handleChange=function(t,a){e.setState(Object(j.a)(Object(j.a)({},e.state),{},Object(p.a)({},t,a)))},e.handleSubmit=function(){var t=Object(d.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({showBackdrop:!0}),t.next=3,e.props.postChildData(e.state);case 3:e.setState({open:!1,childList:e.props.child.child,name:"",sex:"",fatherName:"",motherName:"",state:"",district:"",photoURL:"",showBackdrop:!1});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleClickOpen=function(){e.setState({open:!0})},e.state={childList:null,open:!1,showBackdrop:!1,name:"",sex:"",fatherName:"",motherName:"",state:"",district:"",photoURL:""},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getChildData();case 2:this.setState({childList:this.props.child.child});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(F.jsxs)("div",{children:[Object(F.jsx)(re,{}),Object(F.jsx)(v.a,{container:!0,justify:"flex-end",children:Object(F.jsx)(v.a,{item:!0,style:{margin:"15px"},children:Object(F.jsx)(m.a,{size:"large",color:"primary",variant:"contained",onClick:this.handleClickOpen,children:"ADD CHILD"})})}),Object(F.jsx)(v.a,{container:!0,children:Object(F.jsx)(q.a,{component:X.a,children:Object(F.jsxs)(_.a,{"aria-label":"caption table",className:"table",children:[Object(F.jsx)(K.a,{children:Object(F.jsxs)(Q.a,{children:[Object(F.jsx)(V.a,{children:"Name"}),Object(F.jsx)(V.a,{align:"right",children:"Sex"}),Object(F.jsx)(V.a,{align:"right",children:"Father's Name"}),Object(F.jsx)(V.a,{align:"right",children:"Mother's Name"}),Object(F.jsx)(V.a,{align:"right",children:"State"}),Object(F.jsx)(V.a,{align:"right",children:"District"}),Object(F.jsx)(V.a,{align:"right",children:"View"})]})}),Object(F.jsx)(P.a,{children:this.state.childList&&this.state.childList.map((function(t){return Object(F.jsxs)(Q.a,{children:[Object(F.jsx)(V.a,{component:"th",scope:"row",children:t.name}),Object(F.jsx)(V.a,{align:"right",children:t.sex}),Object(F.jsx)(V.a,{align:"right",children:t.fatherName}),Object(F.jsx)(V.a,{align:"right",children:t.motherName}),Object(F.jsx)(V.a,{align:"right",children:t.state}),Object(F.jsx)(V.a,{align:"right",children:t.district}),Object(F.jsx)(V.a,{align:"right",children:Object(F.jsx)(m.a,{size:"small",color:"primary",variant:"contained",onClick:function(){return e.props.history.push("/view/"+t._id)},children:"View"})})]},t.name)}))})]})})}),Object(F.jsxs)("div",{children:[Object(F.jsxs)(ce.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:this.state.open,onClose:this.handleClose,"aria-labelledby":"form-dialog-title",children:[Object(F.jsx)(oe.a,{id:"form-dialog-title",children:"Add Child"}),Object(F.jsxs)(se.a,{dividers:!0,children:[Object(F.jsx)(f.a,{autoFocus:!0,margin:"dense",id:"photoURL",label:"Photo URL",type:"photoURL",fullWidth:!0,value:this.state.photoURL,onChange:function(t){return e.handleChange("photoURL",t.target.value)}}),Object(F.jsx)(f.a,{margin:"dense",id:"name",label:"Name",type:"name",fullWidth:!0,value:this.state.name,onChange:function(t){return e.handleChange("name",t.target.value)}}),Object(F.jsx)(f.a,{margin:"dense",id:"sex",label:"Sex",type:"sex",fullWidth:!0,value:this.state.sex,onChange:function(t){return e.handleChange("sex",t.target.value)}}),Object(F.jsx)(f.a,{margin:"dense",id:"fatherName",label:"Father Name",type:"fatherName",fullWidth:!0,value:this.state.fatherName,onChange:function(t){return e.handleChange("fatherName",t.target.value)}}),Object(F.jsx)(f.a,{margin:"dense",id:"motherName",label:"Mother Name",type:"motherName",fullWidth:!0,value:this.state.motherName,onChange:function(t){return e.handleChange("motherName",t.target.value)}}),Object(F.jsx)(f.a,{margin:"dense",id:"state",label:"State",type:"state",fullWidth:!0,value:this.state.state,onChange:function(t){return e.handleChange("state",t.target.value)}}),Object(F.jsx)(f.a,{margin:"dense",id:"district",label:"District",type:"district",fullWidth:!0,value:this.state.district,onChange:function(t){return e.handleChange("district",t.target.value)}})]}),Object(F.jsxs)(ie.a,{children:[Object(F.jsx)(m.a,{onClick:this.handleClose,color:"primary",children:"Cancel"}),Object(F.jsx)(m.a,{onClick:this.handleSubmit,color:"primary",variant:"contained",children:"Submit"})]})]}),Object(F.jsx)(ne.a,{className:"backdrop",open:this.state.showBackdrop,children:Object(F.jsx)(le.a,{color:"inherit"})})]})]})}}]),a}(r.Component),de=Object(S.b)((function(e){return{child:e.childReducer}}),{getChildData:ue,postChildData:function(e){return function(){var t=Object(d.a)(h.a.mark((function t(a,r){var n,c,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r().userReducer.user,t.prev=1,t.next=4,M()({method:"post",url:"/child",data:e,headers:{authorization:n.token}});case 4:c=t.sent,i=c.data,a({type:R,payload:i.child}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),a({type:R,payload:{error:t.t0.response.data.error}});case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}()}})(he),pe=a(226),je=a(228),be=a(227),Oe=a(65),me=a.n(Oe),xe=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={stateList:null,state:""},e.handleChange=function(t,a){e.setState(Object(j.a)(Object(j.a)({},e.state),{},Object(p.a)({},t,a)))},e.handleSubmit=function(){var t=Object(d.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.postState({state:e.state.state});case 2:e.setState({stateList:e.props.states.allState,state:""});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getState();case 2:this.setState({stateList:this.props.states.allState});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(F.jsxs)("div",{children:[Object(F.jsx)(re,{}),Object(F.jsxs)(v.a,{container:!0,justify:"flex-start",alignItems:"center",children:[Object(F.jsx)(v.a,{item:!0,children:Object(F.jsxs)(pe.a,{className:"root",children:[Object(F.jsx)(be.a,{children:Object(F.jsx)(f.a,{id:"standard-basic",label:"state",type:"state",value:this.state.state,onChange:function(t){return e.handleChange("state",t.target.value)}})}),Object(F.jsx)(je.a,{children:Object(F.jsx)(m.a,{color:"primary",variant:"contained",size:"large",onClick:this.handleSubmit,children:"Add State"})})]})}),this.state.stateList&&this.state.stateList.map((function(e){return Object(F.jsx)(v.a,{item:!0,children:Object(F.jsxs)(pe.a,{className:"root",children:[Object(F.jsx)(be.a,{children:Object(F.jsx)(C.a,{children:e.state})}),Object(F.jsx)(je.a,{children:Object(F.jsx)($.a,{className:"arrowIcon",children:Object(F.jsx)(me.a,{style:{width:"100px",height:"50px"}})})})]})},e._id)}))]})]})}}]),a}(r.Component),fe=Object(S.b)((function(e){return{states:e.addressReducer}}),{getState:function(){return function(){var e=Object(d.a)(h.a.mark((function e(t,a){var r,n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().userReducer.user,e.prev=1,t({type:I}),e.next=5,M()("/address/getState",{headers:{authorization:r.token}});case 5:n=e.sent,c=n.data,t({type:A,payload:c}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}()},postState:function(e){return function(){var t=Object(d.a)(h.a.mark((function t(a,r){var n,c,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r().userReducer.user,t.prev=1,t.next=4,M()({method:"post",url:"/address/state",data:e,headers:{authorization:n.token}});case 4:c=t.sent,i=c.data,console.log(i),a({type:T,payload:i.result}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0),a({type:T,payload:{error:t.t0.response}});case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,a){return t.apply(this,arguments)}}()}})(xe),ve=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={districtList:null,state:"",district:""},e.handleChange=function(t,a){e.setState(Object(j.a)(Object(j.a)({},e.state),{},Object(p.a)({},t,a)))},e.handleSubmit=function(){var t=Object(d.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.props.postDistrict(e.state);case 2:e.setState({stateList:e.props.states.district,state:"",district:""});case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getDistrict();case 2:this.setState({districtList:this.props.states.district});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(F.jsxs)("div",{children:[Object(F.jsx)(re,{}),Object(F.jsxs)(v.a,{container:!0,justify:"flex-start",alignItems:"center",children:[Object(F.jsx)(v.a,{item:!0,children:Object(F.jsxs)(pe.a,{className:"root",children:[Object(F.jsx)(be.a,{children:Object(F.jsx)(f.a,{id:"standard-basic",label:"Enter state Name",type:"state",value:this.state.state,onChange:function(t){return e.handleChange("state",t.target.value)}})}),Object(F.jsx)(be.a,{children:Object(F.jsx)(f.a,{id:"standard-basic",label:"Enter district Name",type:"district",value:this.state.district,onChange:function(t){return e.handleChange("district",t.target.value)}})}),Object(F.jsx)(je.a,{children:Object(F.jsx)(m.a,{color:"primary",variant:"contained",size:"large",onClick:this.handleSubmit,children:"Add District"})})]})}),this.state.districtList&&this.state.districtList.map((function(e){return Object(F.jsx)(v.a,{item:!0,children:Object(F.jsxs)(pe.a,{className:"root",children:[Object(F.jsxs)(be.a,{children:[Object(F.jsx)(C.a,{children:e.state}),Object(F.jsx)(C.a,{children:e.district})]}),Object(F.jsx)(je.a,{children:Object(F.jsx)($.a,{className:"arrowIcon",children:Object(F.jsx)(me.a,{style:{width:"100px",height:"50px"}})})})]})},e._id)}))]})]})}}]),a}(r.Component),ge=Object(S.b)((function(e){return{states:e.addressReducer}}),{getDistrict:function(){return function(){var e=Object(d.a)(h.a.mark((function e(t,a){var r,n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().userReducer.user,e.prev=1,t({type:I}),e.next=5,M()("/address/getDistrict",{headers:{authorization:r.token}});case 5:n=e.sent,c=n.data,t({type:z,payload:c}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}()},postDistrict:function(e){return function(){var t=Object(d.a)(h.a.mark((function t(a,r){var n,c,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r().userReducer.user,t.prev=1,t.next=4,M()({method:"post",url:"/address/district",data:e,headers:{authorization:n.token}});case 4:c=t.sent,i=c.data,console.log(i),a({type:U,payload:i.result}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,a){return t.apply(this,arguments)}}()}})(ve),ye=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.getChildData();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t;return Object(F.jsxs)("div",{children:[Object(F.jsx)(re,{}),Object(F.jsx)(X.a,{variant:"outlined",style:{margin:"15px",padding:"10px"},children:Object(F.jsxs)("span",{style:{fontSize:"30px"},children:["Name: ",null===(e=this.props.child)||void 0===e||null===(t=e.child[0])||void 0===t?void 0:t.name," "]})}),Object(F.jsx)("img",{alt:"child-development-5-6-yearsnarrow",width:"100%",height:"500px",src:"https://raisingchildren.net.au/__data/assets/image/0019/48043/child-development-5-6-yearsnarrow.jpg"})]})}}]),a}(r.Component),Ce=Object(S.b)((function(e){return{child:e.childReducer}}),{getChildData:ue})(ye),ke=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).getAvatar=function(){var t,a;return(null===(t=e.props.child.currentChild)||void 0===t?void 0:t.photoURL)?Object(F.jsx)(O.a,{style:{width:"200px",height:"200px"},src:e.props.child.currentChild.photoURL}):Object(F.jsxs)(O.a,{style:{width:"200px",height:"200px"},children:[null===(a=e.props.child.currentChild)||void 0===a?void 0:a.name[0]," "]})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(d.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.oneChildData(this.props.match.params.id);case 2:console.log(this.props.child.currentChild);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,a,r,n,c;return Object(F.jsxs)("div",{children:[Object(F.jsx)(re,{}),Object(F.jsxs)(pe.a,{style:{maxWidth:"50%",margin:"0 auto",marginTop:"30px"},children:[this.getAvatar(),Object(F.jsxs)(be.a,{style:{display:"flex"},children:[Object(F.jsxs)("h3",{style:{marginRight:"10px"},children:["Name:",null===(e=this.props.child.currentChild)||void 0===e?void 0:e.name," ,"]}),Object(F.jsxs)("h3",{style:{marginRight:"10px"},children:["Sex = ",null===(t=this.props.child.currentChild)||void 0===t?void 0:t.sex," ,"]}),Object(F.jsxs)("h3",{style:{marginRight:"10px"},children:["Father Name = ",null===(a=this.props.child.currentChild)||void 0===a?void 0:a.fatherName," ,"]}),Object(F.jsxs)("h3",{style:{marginRight:"10px"},children:["Mother Name = ",null===(r=this.props.child.currentChild)||void 0===r?void 0:r.motherName," ,"]}),Object(F.jsxs)("h3",{style:{marginRight:"10px"},children:["State = ",null===(n=this.props.child.currentChild)||void 0===n?void 0:n.state," ,"]}),Object(F.jsxs)("h3",{style:{marginRight:"10px"},children:["District = ",null===(c=this.props.child.currentChild)||void 0===c?void 0:c.district," ,"]})]})]})]})}}]),a}(r.Component),we=Object(S.b)((function(e){return{child:e.childReducer}}),{oneChildData:function(e){return function(){var t=Object(d.a)(h.a.mark((function t(a,r){var n,c,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r().userReducer.user,t.prev=1,t.next=4,M()("/child/".concat(e),{headers:{authorization:n.token}});case 4:c=t.sent,i=c.data,a({type:W,payload:i}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,a){return t.apply(this,arguments)}}()}})(ke),Se=a(59),Ne=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(F.jsxs)(Se.a,{children:[Object(F.jsx)(B.a,{path:"/",component:J,exact:!0}),Object(F.jsx)(B.a,{path:"/home",component:Ce,exact:!0}),Object(F.jsx)(B.a,{path:"/child",component:de,exact:!0}),Object(F.jsx)(B.a,{path:"/state",component:fe,exact:!0}),Object(F.jsx)(B.a,{path:"/view/:id",component:we,exact:!0}),Object(F.jsx)(B.a,{path:"/district",component:ge,exact:!0})]})}}]),a}(r.Component),De=(a(154),a(47)),Re={user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,isAuthenticated:localStorage.getItem("isAuth")||!1,data:null,error:null},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case N:return r.user&&(localStorage.setItem("user",JSON.stringify(r.user)),localStorage.setItem("isAuth",!0)),Object.assign(e,r);case D:return console.log(r),localStorage.removeItem("user"),localStorage.removeItem("isAuth"),localStorage.removeItem("userJwtToken"),Object(j.a)(Object(j.a)({},e),{},{user:null,isAuthenticated:!1});default:return e}},Ie=a(52),Ae={child:[],currentChild:null},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case R:return Object(j.a)(Object(j.a)({},e),{},{child:[].concat(Object(Ie.a)(e.child),[r])});case L:return Object(j.a)(Object(j.a)({},e),{},{child:r});case W:return Object(j.a)(Object(j.a)({},e),{},{currentChild:r});default:return e}},ze={allState:[],district:[]},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case T:return Object(j.a)(Object(j.a)({},e),{},{allState:[].concat(Object(Ie.a)(e.allState),[r])});case A:return Object(j.a)(Object(j.a)({},e),{},{allState:r});case U:return Object(j.a)(Object(j.a)({},e),{},{district:[].concat(Object(Ie.a)(e.district),[r])});case z:return Object(j.a)(Object(j.a)({},e),{},{district:r});default:return e}},We=a(106),Ee=Object(De.c)({userReducer:Le,childReducer:Te,addressReducer:Ue}),Me=Object(De.d)(Ee,Object(De.a)(We.a));c.a.render(Object(F.jsx)(S.a,{store:Me,children:Object(F.jsx)(Ne,{})}),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.284ff276.chunk.js.map