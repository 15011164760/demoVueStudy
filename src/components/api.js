import {get,post,postForm,getForm,httpCreateBlobPost} from '@/axios/request.js';
let k='http://7q33tz.natappfree.cc/libraryroom';//
function getParamsFn(params){
    let url='?'
    for(let item in params){
        url+=`${item}=${params[item]}&`
    }
    return url
}
//页面appPage
    export const appPage ={
        //我是公告管理
        findNoticenotice(params){
            return post(`/rest/userOpt/findNoticenotice/`)
        },
        //注册
        userRegister(params){
           
            return post(`/rest/userOpt/userRegister/${getParamsFn(params)}`)
        },
        //登陆
        userLogin(params){
            return post(`/rest/userOpt/userLogin/${getParamsFn(params)}`)
        },
        //教师列表
        findStudyroom(params){
            return post(`/rest/userOpt/findStudyroom/${getParamsFn(params)}`)
        },
        //自习室
        selSeatList(params){
            return post(`/rest/userOpt/selSeatList/${getParamsFn(params)}`)
        },
        //选座
        seatSelection(params){
            return post(`/rest/userOpt/seatSelection/${getParamsFn(params)}`)
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
