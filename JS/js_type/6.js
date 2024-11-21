function greet(name){
    return 'hello,${name}!';
}

greet('维欧')
greet.language = 'English'
greet.greetInSpanish=function(name){
    return 'hola,${name}!'
}
function invokeGreeting(greetingFunction,name){
    return greetingFunction(name);
}

console.log(invokeGreeting(greet,'维欧'));