"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appPage = void 0;

var _request = require("@/axios/request.js");

// let k='http://7q33tz.natappfree.cc/libraryroom/';//baseUrl 域名地址
//页面appPage
var appPage = {
  userRegister: function userRegister(params) {
    return (0, _request.post)("".concat(k, "/rest/userOpt/userRegister"), {
      params: params
    });
  } // journalismApi(){
  //     return get(`${k}/journalismApi`,{params})
  // },
  // journalismApi(){
  //     return get('/journalismApi',{params})
  // },

}; // export const journalismApi=function(params){
//     return get('/journalismApi',{params})
// }
// export const journalismApi1=function(){
//     debugger;
//     return get('/journalismApi',{aaa:'cao'},{
//         headers:{
//         }
//     })
// }
// export const go=function(){
//     return getForm('/go',{aaa:'cao'})
// }
// export const go1=function(){
//     return postForm('/go1',{aaa:'cao'},{
//         headers:{
//         }
//     })
// }
// export const wordDown=function(params){
//     return httpCreateBlobPost('/wordDown',params,{
//         headers:{
//         }
//     })
// }
// export default journalismApi;

exports.appPage = appPage;