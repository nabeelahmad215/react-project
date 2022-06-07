export const PostCall = (url,data,cb) => {
    fetch('http://localhost:8000/api/'+url, {
        method: 'POST',
        headers:{
            "Content-Type": "application/json",
                "Accept": 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(resp=> resp.json())
    .then((result)=>{
        cb(result);
    })
}

 