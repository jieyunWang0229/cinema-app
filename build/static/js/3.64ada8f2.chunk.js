(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{109:function(e,t,a){e.exports={display:"CinemaDisplay_display__16u3t",displayheader:"CinemaDisplay_displayheader__2l5QW",dark:"CinemaDisplay_dark__1IlzE",screen:"CinemaDisplay_screen__LBQ-4",legends:"CinemaDisplay_legends__3wMnB",legend:"CinemaDisplay_legend__2FZJc"}},111:function(e,t,a){e.exports={seat:"Seat_seat__1-0DQ",reserved:"Seat_reserved__20wwh",selected:"Seat_selected__tENDK",close:"Seat_close__1JB4e"}},113:function(e,t,a){e.exports={seatsarea:"Seats_seatsarea__2_Ldo",seatsrow:"Seats_seatsrow__162Wr"}},115:function(e,t,a){e.exports={tknocontainer:"TicketNumberInput_tknocontainer__1PaB1",tknoheader:"TicketNumberInput_tknoheader__1qKMO",tknoinput:"TicketNumberInput_tknoinput__1ZA7q",tktag:"TicketNumberInput_tktag__1z8H3",inputgroup:"TicketNumberInput_inputgroup__dHtGj",tknobutton:"TicketNumberInput_tknobutton__PeDoF",tknodisplay:"TicketNumberInput_tknodisplay__1DbuZ"}},121:function(e,t,a){e.exports={bkcontainer:"BookingTicketPage_bkcontainer__byvnc"}},180:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(2),r=a(5),i=a(14),l=a(109),o=a.n(l),d=a(3),u=a(111),m=a.n(u),b=a(23),_=function(e){var t=e.isReserved,a=e.row,s=e.no,i=e.id,l=Object(r.b)(),o=Object(r.c)(function(e){return e.selectedseats.tickesNumber}),u=Object(r.c)(function(e){return e.selectedseats.selectedSeatsIndex}),_=Object(n.useState)(!1),k=Object(d.a)(_,2),p=k[0],v=k[1],f="".concat(a).concat(s);return Object(n.useEffect)(function(){t&&l(b.b.cancelSelected({id:i,seatNo:f}))},[t]),Object(n.useEffect)(function(){var t=u.find(function(t){return t==e.id});t&&v(!0),t||v(!1)},[u]),c.a.createElement("div",{className:"".concat(m.a.seat," \n                        ").concat(1==t?m.a.reserved:""," \n                        ").concat(1==p?m.a.selected:""," \n                        ").concat(e.selected?m.a.selected:""," \n                        ").concat(0==o?m.a.close:""),onClick:function(t){0!=o&&(0==e.isReserved&&0==p&&(v(function(e){return!e}),l(b.b.selectedSeats({id:i,seatNo:t.target.innerText}))),0==e.isReserved&&1==p&&(v(function(e){return!e}),l(b.b.cancelSelected({id:i,seatNo:t.target.innerText}))))},id:i},a,s)},k=a(113),p=a.n(k),v=function(e){var t,a=e.seatsData,s=Object(r.b)(),i=Object(r.c)(function(e){return e.selectedseats.tickesNumber}),l=Object(r.c)(function(e){return e.selectedseats.selectedSeatsIndex});return a&&(t=a.map(function(e,t){var a=String.fromCharCode(t+"A".charCodeAt(0));return c.a.createElement("div",{className:p.a.seatsrow,key:a},e.map(function(e){return c.a.createElement(_,{key:e.id,id:e.id,row:a,no:e.number,isReserved:e.isReserved})}))})),Object(n.useEffect)(function(){var e=l.length,t=l[0];i<e&&(document.getElementById(t).classList.remove("Seat_selected__FPj0G"),s(b.b.cancelFirstSelected()))},[i,l,s]),c.a.createElement("div",{className:p.a.seatsarea},t)},f=a(17),E=a(16),N=(a(25),function(e){var t,a=Object(r.c)(function(e){return e.selectedseats.tickesNumber}),s=Object(r.c)(function(e){return e.ui.seatsreload}),l=Object(r.b)(),d=e.movieId,u=e.sessionId,m=Object(f.a)(E.g,!0),b=m.sendRequest,k=m.status,p=m.data;m.error;return Object(n.useEffect)(function(){1==s&&(b(d,u),l(i.b.seatsReloadClear()))},[s,b,d,u]),Object(n.useEffect)(function(){b(d,u);var e=setInterval(function(){b(d,u),console.log("update")},5e4);return function(){clearInterval(e)}},[b,d,u]),"completed"===k&&p&&(t=p),c.a.createElement("div",{className:o.a.display},c.a.createElement("div",{className:"".concat(o.a.displayheader," ").concat(0==a?o.a.dark:"")},"Select Seats"),c.a.createElement("div",{className:"".concat(o.a.screen," ").concat(0==a?o.a.dark:"")}),c.a.createElement(v,{sessionId:e.sessionId,movieId:e.movieId,seatsData:t}),c.a.createElement("div",{className:o.a.legends},c.a.createElement("div",{className:o.a.legend},c.a.createElement(_,{selected:!0}),c.a.createElement("span",null,"Selected")),c.a.createElement("div",{className:o.a.legend},c.a.createElement(_,null),c.a.createElement("span",null,"Available")),c.a.createElement("div",{className:o.a.legend},c.a.createElement(_,{isReserved:!0}),c.a.createElement("span",null,"Taken"))))}),g=a(115),j=a.n(g),I=function(e){var t=Object(r.b)(),a=Object(r.c)(function(e){return e.selectedseats.normalTicket}),n=Object(r.c)(function(e){return e.selectedseats.concessionTicket});return c.a.createElement("div",{className:j.a.tknocontainer},c.a.createElement("div",{className:j.a.tknoheader}," Select Tickets"),c.a.createElement("div",{className:j.a.tknoinput},c.a.createElement("div",{className:j.a.tktag},"Adult:"),c.a.createElement("div",{className:j.a.inputgroup},c.a.createElement("div",{className:j.a.tknobutton},c.a.createElement("button",{onClick:function(){a>0&&t(b.b.decreasenormalTicket())}},"-")),c.a.createElement("div",{className:j.a.tknodisplay},a),c.a.createElement("div",{className:j.a.tknobutton},c.a.createElement("button",{onClick:function(){t(b.b.increasenormalTicket())}},"+")))),c.a.createElement("div",{className:j.a.tknoinput},c.a.createElement("div",{className:j.a.tktag},"Concession:"),c.a.createElement("div",{className:j.a.inputgroup},c.a.createElement("div",{className:j.a.tknobutton},c.a.createElement("button",{onClick:function(){n>0&&t(b.b.decreaseconcessionTicket())}},"-")),c.a.createElement("div",{className:j.a.tknodisplay},n),c.a.createElement("div",{className:j.a.tknobutton},c.a.createElement("button",{onClick:function(){t(b.b.increaseconcessionTicket())}},"+")))))},O=a(108),S=a(100),y=a(18),T=a(121),C=a.n(T);t.default=function(e){var t=Object(r.b)();Object(n.useEffect)(function(){t(i.b.startBookingStage())},[]);var a,l=Object(f.a)(E.d,!0),o=l.sendRequest,d=l.status,u=l.data,m=l.error,b=Object(s.e)(),_=new URLSearchParams(b.search),k=_.get("movieIndex"),p=_.get("sessionId"),v=_.get("time"),g=_.get("date"),j=p[0];return Object(n.useEffect)(function(){o(k)},[o]),"pending"===d&&(a=c.a.createElement(y.a,null)),m&&(a=c.a.createElement("p",null,m.message)),"completed"===d&&u&&(a=c.a.createElement(n.Fragment,null,c.a.createElement(S.a,{movieId:k,time:v,date:g,img:u.img,name:u.name}),c.a.createElement("div",{className:C.a.bkcontainer},c.a.createElement(I,null),c.a.createElement(N,{sessionId:p,movieId:j}),c.a.createElement(O.a,{movieIndex:k,sessionId:p,time:v,date:g,adprice:u.adprice,conprice:u.conprice,movieName:u.name})))),c.a.createElement(n.Fragment,null,a)}}}]);
//# sourceMappingURL=3.64ada8f2.chunk.js.map