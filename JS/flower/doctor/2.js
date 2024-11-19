function getPhoneNum(arry){
    let format="(xxx) xxx-xxxx"
    for(let i=0;i<arry.length;i++){
        format=format.replace("x",arry[i])
    }
    return format
    
}
console.log(getPhoneNum([1,2,3,4,5,6,7,8,9,0]))
