const callbackFunction = () => console.log('hi');

function receivesAFunction (callbackFunction) {
    callbackFunction();
}

function returnsANamedFunction(){
    return callbackFunction;
}

function returnsAnAnonymousFunction(){
    return function() {return 3};
}