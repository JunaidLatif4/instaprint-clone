const add = (data)=>{
    return{
        type: "ADD" ,
        data : data
    }
}
const remove = (data)=>{
    return{
        type: "REMOVE" ,
        data : data
    }
}




export {add , remove};