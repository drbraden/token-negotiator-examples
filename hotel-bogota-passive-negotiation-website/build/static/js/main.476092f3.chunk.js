(this["webpackJsonphotel-bogota"]=this["webpackJsonphotel-bogota"]||[]).push([[0],{126:function(e,t,n){},128:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},143:function(e,t){},153:function(e,t,n){},154:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(23),r=n.n(o),i=(n(126),n(3)),s=n.n(i),l=n(82),d=n(39),j=n(189),u=n(193),b=n(156),p=(n(128),n(10));var h=function(e){var t=e.title;return Object(p.jsx)(j.a,{className:"logoCard",children:Object(p.jsxs)(u.a,{className:"cardContent",children:[Object(p.jsx)(b.a,{gutterBottom:!0,variant:"h1",component:"h1",children:t}),Object(p.jsxs)("div",{className:"logo-wrapper",children:[Object(p.jsx)("div",{className:"logo-emblem"}),Object(p.jsx)("div",{className:"logo-emblem"}),Object(p.jsx)("div",{className:"logo-emblem"})]})]})})},m=n(199),x=n(201),v=n(200),O=n(55),f=n(83),g=n(194),y=n(205),k=n(208),C=n(198),N=n(196),S=n(195);n(134);var I=function(e){var t=e.tokenInstance,n=e.applyDiscount,a=e.discount,c=a.tokenInstance&&a.tokenInstance.ticketId===t.ticketId;return Object(p.jsxs)("div",{onClick:function(e){return n(c?null:t)},className:c?"tokenCard selected":"tokenCard",children:[Object(p.jsxs)("div",{className:"ticketDetails",children:[Object(p.jsx)(b.a,{className:"ticketClass",gutterBottom:!0,variant:"h5",component:"h2",children:t.ticketClass.toString()}),Object(p.jsx)(b.a,{className:"ticketId",variant:"body2",color:"textSecondary",component:"p",children:t.ticketId.toString()}),Object(p.jsxs)(b.a,{className:"devconId",variant:"body2",color:"textSecondary",component:"p",children:["Devcon ID: ",t.devconId.toString()]})]}),Object(p.jsx)("img",{className:"ticketImg",src:"ticket_example_image.svg"})]})};n(135);function D(e){var t=e.roomType,n=e.applyDiscount,o=e.discount,r=e.price,i=e.tokens,s=e.book,l=c.a.useState(!1),j=Object(d.a)(l,2),u=j[0],b=j[1],h=Object(a.useReducer)((function(e,t){return Object(f.a)(Object(f.a)({},e),t)}),{reference:"Beeple",cardNo:"00000000000",cardSort:"00-00-00",cardCsv:"000"}),m=Object(d.a)(h,2),x=m[0],v=m[1],D=function(e){var t=e.target.name,n=e.target.value;v(Object(O.a)({},t,n))},w=function(e){e.preventDefault(),s({formInput:x,roomType:t})},T=function(){b(!1)},B=r-(o.value?o.value:0)/100*r,P=["0"];return Object(p.jsxs)("div",{children:[Object(p.jsx)(g.a,{size:"small",color:"primary",onClick:function(){b(!0)},children:"Book"}),Object(p.jsx)(k.a,{open:u,onClose:T,"aria-labelledby":"form-dialog-title",children:Object(p.jsxs)("div",{className:"modalContainer",children:[Object(p.jsx)(S.a,{className:"title",disableTypography:!0,children:t}),Object(p.jsxs)(S.a,{className:"subTitle",disableTypography:!0,children:[B," COP per night. ",o.value?"(".concat(o.value,"% discount)"):""]}),Object(p.jsx)(N.a,{children:Object(p.jsxs)("form",{onSubmit:w,children:[Object(p.jsxs)("div",{style:{border:"1px solid darkcyan",padding:"7px 12px",fontSize:"14px",display:"flex",justifyContent:"space-between"},children:[Object(p.jsx)("div",{style:{textAlign:"left"},children:"check in 01/08/2021"}),Object(p.jsx)("div",{style:{textAlign:"left"},children:"check out 15/08/2021"})]}),Object(p.jsx)("div",{style:{borderLeft:"1px solid darkcyan",borderRight:"1px solid darkcyan",borderBottom:"1px solid darkcyan",padding:"7px 12px",fontSize:"14px",textAlign:"left"},children:Object(p.jsxs)("div",{children:["Total ",14*B," COP"]})}),Object(p.jsx)("div",{children:i.length>0&&Object(p.jsx)("p",{className:"smallCopy",children:"Select a ticket to apply discount:"})}),Object(p.jsx)("div",{className:"ticketWrapper",children:i&&i.filter((function(e){return P.toString().indexOf(e.ticketClass)>-1})).map((function(e,t){return Object(p.jsx)("div",{children:Object(p.jsx)(I,{applyDiscount:n,tokenInstance:e,discount:o})},t)}))}),Object(p.jsx)(y.a,{id:"booking-name",label:"Reference name",placeholder:"Beeple",value:"Beeple",helperText:"(a check-in reference name for your booking)",fullWidth:!0,name:"reference",margin:"normal",onChange:D,InputLabelProps:{shrink:!0}}),Object(p.jsx)(y.a,{id:"card-no",label:"Card Number",fullWidth:!0,placeholder:"00000000000",value:"00000000000",name:"cardNo",margin:"normal",onChange:D,InputLabelProps:{shrink:!0}}),Object(p.jsx)(y.a,{id:"card-sort",label:"Card Sort Number",fullWidth:!0,placeholder:"00-00-00",value:"00-00-00",name:"cardSort",margin:"normal",onChange:D,InputLabelProps:{shrink:!0}}),Object(p.jsx)(y.a,{id:"card-csv",label:"CSV",fullWidth:!0,value:"000",placeholder:"000",name:"cardCsv",margin:"normal",onChange:D,InputLabelProps:{shrink:!0}}),Object(p.jsxs)("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"flex-end",marginTop:"12px"},children:[Object(p.jsx)("div",{style:{color:"grey",fontSize:"12px",marginRight:"5px"},children:"cards accepted"}),Object(p.jsx)("img",{style:{width:"100px",height:"24px"},src:"./cards-accepted-demo.png"})]})]})}),Object(p.jsx)("div",{className:"booking",children:Object(p.jsxs)(C.a,{children:[Object(p.jsx)(g.a,{onClick:T,color:"primary",children:"Cancel"}),Object(p.jsx)(g.a,{onClick:w,color:"primary",disabled:!1,children:"Pay Now"})]})})]})})]})}n(137);var w=Object(m.a)({root:{maxWidth:345,margin:"20px"},media:{height:140}});function T(e){var t=e.room,n=e.applyDiscount,a=e.discount,c=e.tokens,o=e.book,r=w(),i=t.type,s=t.price,l=t.image,d=t.frequency;return Object(p.jsxs)(j.a,{className:"roomCard",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(v.a,{className:r.media,image:l,title:"token"}),Object(p.jsxs)(u.a,{children:[Object(p.jsx)(b.a,{gutterBottom:!0,variant:"h5",component:"h2",children:i}),Object(p.jsxs)(b.a,{variant:"body2",color:"textSecondary",component:"p",children:["From ",s," COP / ",d]})]})]}),Object(p.jsx)(x.a,{children:Object(p.jsx)(D,{book:o,applyDiscount:n,tokens:c,roomType:i,discount:a,price:s})})]})}var B=n(202);n(138);function P(e){var t=e.tokensNumber;return Object(p.jsxs)(j.a,{className:"tokenNotificationCard",children:[Object(p.jsxs)(u.a,{children:[Object(p.jsxs)(b.a,{gutterBottom:!0,variant:"h1",component:"h1",children:[t," Devcon Tickets"]}),Object(p.jsx)(b.a,{gutterBottom:!0,variant:"body1",component:"p",children:"booking discounts available"})]}),Object(p.jsx)("div",{className:"cardBottomLip"})]})}var L=function(e){var t=e.tokensNumber;return Object(p.jsx)(B.a,{in:!0,style:{transitionDelay:"500ms"},children:Object(p.jsx)(P,{tokensNumber:t})})},E=n(203),F=n(108),W=n(28),K=n(206);function R(e){var t=e.label,n=e.handleInput,a=e.date;return Object(p.jsx)(W.a,{utils:F.a,children:Object(p.jsx)(E.a,{container:!0,justifyContent:"space-around",children:Object(p.jsx)(K.a,{disableToolbar:!0,variant:"inline",format:"dd/MM/yyyy",margin:"normal",className:"date-picker-inline",label:t,disabled:!0,value:a,onChange:function(e){return n(e,t)},KeyboardButtonProps:{"aria-label":"change date"}})})})}var _=function(){var e=new Date,t=new Date;t.setDate(t.getDate()+1);var n=Object(a.useState)({from:e,to:t}),c=Object(d.a)(n,2),o=(c[0],c[1]),r=function(e,t){o(Object(O.a)({},t,e))};return Object(p.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(p.jsxs)("div",{style:{display:"flex",justifyContent:"center",width:"80%"},children:[Object(p.jsx)("div",{style:{margin:"10px"},children:Object(p.jsx)(R,{name:"from",label:"check in",handleInput:r,date:"08/01/2021"})}),Object(p.jsx)("div",{style:{margin:"10px"},children:Object(p.jsx)(R,{name:"to",label:"check out",handleInput:r,date:"08/15/2021"})})]})})},q=n(107),z=(n(153),[{type:"Deluxe Room",price:2e5,frequency:"per night",image:"./hotel_3.jpg"},{type:"King Suite",price:32e4,frequency:"per night",image:"./hotel_2.png"},{type:"Superior Deluxe Suite",price:250030,frequency:"per night",image:"./hotel_1.jpg"}]);var A=function(){var e=new q.a({},"devcon-ticket-local-3002",{useOverlay:!1}),t=Object(a.useState)([]),n=Object(d.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(!1),i=Object(d.a)(r,2),j=i[0],u=i[1],m=Object(a.useState)([]),x=Object(d.a)(m,2),v=x[0],O=x[1],f=Object(a.useState)({value:void 0,tokenInstance:null}),g=Object(d.a)(f,2),y=g[0],k=g[1],C=Object(a.useState)({useTicket:void 0,ethKey:void 0}),N=Object(d.a)(C,2),S=N[0],I=N[1],D=function(){var t=Object(l.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n&&null!==n){t.next=5;break}k({value:void 0,tokenInstance:void 0}),I({proof:void 0,useEthKey:void 0}),t.next=10;break;case 5:return"https://crypto-verify.herokuapp.com/use-devcon-ticket",t.next=8,e.authenticate({unEndPoint:"https://crypto-verify.herokuapp.com/use-devcon-ticket",unsignedToken:n});case 8:(a=t.sent).useEthKey&&a.proof&&(I(a),k({value:10,tokenInstance:n}));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:({discount:S,bookingData:{formData:t}}).discount.proof&&alert("Transaction Complete, we look forward to your stay with us!");case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){O(z),e.negotiate().then((function(e){e.length>0&&(o(e),u(!0))})).catch((function(e){console.log("error",e)}))}),[]),Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)(h,{title:"Hotel Bogota"}),Object(p.jsx)(L,{tokensNumber:c.length})]}),Object(p.jsx)(_,{}),Object(p.jsx)("div",{className:"roomCardsContainer",children:v.map((function(e,t){return Object(p.jsx)(T,{room:e,applyDiscount:D,discount:y,tokens:c,book:w},t)}))}),j&&Object(p.jsx)("div",{children:Object(p.jsx)(b.a,{style:{padding:"20px"},className:"applyDiscountCopyContainer",gutterBottom:!0,variant:"body2",component:"p",children:"Free shuttle service available to you as a Devcon Ticket holder! Enjoy the event."})})]})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,211)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(p.jsx)(A,{}),document.getElementById("root")),J()}},[[154,1,2]]]);
//# sourceMappingURL=main.476092f3.chunk.js.map