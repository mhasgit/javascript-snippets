function greet(name = "Ali") {
    console.log("Hello " + name);
}

// sleepIn
function sleepIn(weekday, vacation) {
    // if (weekday == true && vacation == false) {
    //     return false;
    // }else if (weekday == false && vacation == false) {
    //     return true;
    // }
    // else if (weekday == false && vacation == true) {
    //     return true;
    // }else{
    //     return false;
    // } //by me

    return (!weekday || vacation)
}

// monkeyTrouble
function monkeyTrouble(aSmile, bSmile) {
    // if (aSmile == true && bSmile == true) {
    //     return true;
    // }
    // else if (aSmile == false && bSmile == false) {
    //     return true;
    // }else{
    //     return false;
    // } // by me

    return (aSmile && bSmile) || (!aSmile && !bSmile)
}

//stringTime
function stringTimes(str, n) {
    for(var i = 0; i < n; i++){
        console.log(str)
    }
}

//luckySum
function luckySum(a, b, c) {
    if (a == 13) {
        return 0;
    }
    else if(b == 13){
        return a;
    }
    else if(c == 13){
        return a + b;
    }
    else{
        return a + b + c;
    }
}

function caught_speeding(speed, is_birthday) {
    // if (speed <= 60 && is_birthday == false) {
    //     return 0
    // }else if(speed <= 65 && is_birthday == true){
    //     return 0
    // }
    // else if(speed > 60 && speed <= 80 && is_birthday == false){
    //     return 1
    // }
    // else if(speed > 65 && speed <= 85 && is_birthday == true){
    //     return 1
    // }
    // else{
    //     return 2
    // } // by me

    if (is_birthday) {
        speed -= 5
    }
    if (speed <= 60) {
        return 0
    }
    if (60 < speed <= 80) {
        return 1
    }
    return 2;
}

smallBrickSize = 1, bigBrickSize = 5
function makeBricks(small, big, goal) {
    // by me with a small bug
    // return smallBrickSize * small + bigBrickSize * big == goal ? true : false

    return goal % 5 >= 0 && goal % 5 - small <= 0 && small + 5 * big >= goal; 
}