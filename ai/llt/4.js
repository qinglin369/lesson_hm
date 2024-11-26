function generateRandomTime(){
    const data=new Date();
    data.setHours(Math.floor(Math.random() * 24));
    data.setMinutes(Math.floor(Math.random() * 60));
    data.setSeconds(Math.floor(Math.random() * 60));
    return data.toISOString();
}
console.log(generateRandomTime());