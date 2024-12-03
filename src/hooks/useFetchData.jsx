export const useFetchData = (method, url, jsonData, callback) => {
     let params = {
        method: method,
        headers: {
            Accept: 'application/json'
        }
     };

     if (method === 'POST' || method === 'PUT') {
        params.body = jsonData ? JSON.stringify(jsonData) : '';

        fetch(url, params)
         .catch(()=> {
            console.log("error:");
         });


         if (callback)
            callback();
     } else if (method === "GET") {
        fetch(url, params)
        .then((r)=>r.json())
        .then(js => {
            if (callback)
                callback(js);
        })
        .catch(() => {
            console.log("error:");
        })
     } else if (method === "DELETE") {
        params.body = jsonData ? JSON.stringify(jsonData) : '';

        fetch(url, params)
        .then((res=> res.text()))
        .then(text => {
            if (callback)
                callback([]);
        })
        .catch(() => {
            console.log("error:");
        })
     }
}