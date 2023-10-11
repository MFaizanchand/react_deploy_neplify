const API_REQUEST = async(url = '' , optionsObj = null , errMsg = null )=>{
    try{
      const response = await fetch(url , optionsObj);
      if(!response.ok) throw Error('Please reload the app');
    }
    catch(err){
       errMsg = err.massege;
    } finally{
        return errMsg;
    }
}
export default API_REQUEST