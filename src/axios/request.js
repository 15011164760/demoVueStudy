import {httpCreate,httpCreateForm,httpCreateBlob} from './axios';
export const get=(url,params,headers)=>{
  return new Promise((resolve,reject)=>{
    httpCreate().get(url,params,headers).then((res)=>{
       resolve(res.data);
     }).catch((err)=>{
       reject(err);
     })
  })
}
export const post=(url,params,headers)=>{
  return new Promise((resolve,reject)=>{
    httpCreate().post(url,params,headers).then((res)=>{
       resolve(res.data);
     }).catch((err)=>{
       reject(err);
     })
  })
}
export const getForm=(url,params,headers)=>{
  return new Promise((resolve,reject)=>{
    httpCreateForm().get(url,params,headers).then((res)=>{
       resolve(res.data);
     }).catch((err)=>{
       reject(err);
     })
  })
}
export const postForm=(url,params,headers)=>{
  return new Promise((resolve,reject)=>{
    httpCreateForm().post(url,params,headers).then((res)=>{
       resolve(res.data);
     }).catch((err)=>{
       reject(err);
     })
  })
}
export const httpCreateBlobGet=(url,params,headers)=>{
  return new Promise((resolve,reject)=>{
    httpCreateBlob().get(url,params,headers).then((res)=>{
       resolve(res.data);
     }).catch((err)=>{
       reject(err);
     })
  })
}
export const httpCreateBlobPost=(url,params,headers)=>{
  return new Promise((resolve,reject)=>{
    httpCreateBlob().post(url,params,headers).then((res)=>{
       resolve(res.data);
     }).catch((err)=>{
       reject(err);
     })
  })
}
// export const hootCreateForm=(url,params,headers)=>{
//   return new Promise((resolve,reject)=>{
//      axios.post(url,params,headers).then((res)=>{
//        resolve(res.data);
//      }).catch((err)=>{
//        reject(err);
//      })
//   })
// }
// export default {get,post}
