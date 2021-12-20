function sumNum(n){
  if(n==1||n==2){
      return 1
  }else{
    return sumNum(n-1)+sumNum(n-2)
  }
}
let res=sumNum(10);
self.postMessage(res);
// Worker 线程
self.onmessage=(e)=>{
    console.log(e.data);
self.close();

}
