
let queryStr = {

    stringfly(obj){
        let str = '';
        for(let key in obj){
            str += key + '=' + obj[key] + '&'
        }
        return str.slice(0, -1)
    },
    parse(obj){
        let objs = {}
        let arr = obj.split('&')
        arr.map(res=>{
            objs[res.split('=')[0]] = res.split('=')[1]
        })
        return objs
    }
}
let Url = 'http://localhost:9000'
export default{
    get(url,params){
        console.log(url)
        let str = queryStr.stringfly(params)
        if(url.indexOf('?')>-1){
            url = url + '&' + str
        }else{
            url = url + '?' + str
        }
        return new Promise((resolve,reject)=>{
            fetch(Url+url,{
                headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(res => res.json())
            .then(res=>{
                resolve(res)
            })
            

        })
    },
    post(url,params){
        return new Promise((resolve,reject)=>{
            fetch(Url+url,{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(params)
            })
            .then(res=>res.json())
            .then(res=>{
                resolve(res)
            })
        })
    }
}