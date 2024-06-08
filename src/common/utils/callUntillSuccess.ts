export default async function fabric<T> (func: ()=>Promise<T>, maxAttemts = 20, timeout= 1500){

  async function callUntillSuccess<T> (func: ()=>Promise<T>, attempt=0){

    try {
      return await func()
    }
  
    catch(e){
      if (attempt >= maxAttemts) {
        throw e;
      }
        
      await new Promise(resolve => setTimeout(resolve, timeout));
  
      return callUntillSuccess(func, attempt+1)
    }
  }

  return callUntillSuccess<T>(func)

}
