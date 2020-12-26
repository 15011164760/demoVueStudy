import {get,post,postForm,getForm,httpCreateBlobPost} from '@/axios/request.js';
// let k='https://www.jianshu.com/';
let k='';
//页面appPage
    export const appPage ={
        journalismApi(params){
            return get(`${k}/journalismApi`,{params})
        },
        // journalismApi(){
        //     return get(`${k}/journalismApi`,{params})
        // },
        // journalismApi(){
        //     return get('/journalismApi',{params})
        // },
    }
    // export const journalismApi=function(params){
        
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
