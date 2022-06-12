

export const GetCall = (url,cb) =>{
    fetch('http://localhost:8000/api/'+url,{
        method:'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept": 'application/json'
        }
    })
    .then(resp => resp.json())
    .then((result)=>{
        console.log(result);
        cb(result);
    })
}