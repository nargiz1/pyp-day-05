"use strict"

Array.prototype.customSome = function(callBack) {
    let result = false;
    for(let i = 0; i< this.length; i++){
        if(callBack(this[i], i, this) == true){
            result = true;
        }
    }
    return result;
};

Array.prototype.customEvery = function(callBack) {
    let result = true;
    for(let i = 0; i< this.length; i++){
        if(callBack(this[i], i, this) == false){
            result = false;
        }
    }
    return result;
};

Array.prototype.customFilter = function(callBack) {
    let result = [];
    for(let i = 0; i< this.length; i++){
        if(callBack(this[i], i, this) == true){
            result.push(this[i])
        }
    }
    return result;
};

Array.prototype.customForEach = function(callBack) {
    for(let i = 0; i< this.length; i++){
        this[i]=callBack(this[i], i, this);
    }
    return undefined;
};

Array.prototype.customReverse = function() {
    for(let i = 0; i< this.length; i++){
        if(((this.length-1)-i)-i >=0){
            let vr = this[i];
            this[i] = this[(this.length-1)-i];
            this[(this.length-1)-i] = vr;
        }
    }
    return undefined;
};

Array.prototype.customJoin = function(seperator) {
    if(this.length > 1 && seperator == undefined){
        seperator = ',';
    }
    let result = '';
    for(let i = 0; i< this.length; i++){
        if(i!=this.length -1){
            result+=(this[i]+seperator);
        }else{
            result+=this[i];
        }
    }
    return result;
};

Array.prototype.customIncludes = function(value) {
    let result = false;
    for(let i = 0; i< this.length; i++){
        if(this[i]===value){
            result = true;
        }
    }
    return result;
};

Array.prototype.customReduce = function(callBack, initialValue) {
    let previousValue = initialValue ?? this[0];
    let start = initialValue != undefined ? 0 : 1
    for(let i = start; i < this.length; i++){
        previousValue = callBack(previousValue, this[i], i, this);
        console.log(previousValue)
    }
    return previousValue;
};

Array.prototype.customFlat = function(val) {
    let result =[];
    for(let i = 0; i< this.length; i++){
        if(Array.isArray(this[i])){
            for(let k = 0; k < this[i].length; k++){
                result.push(this[i][k]) 
            }
        }
        else{
            result.push(this[i])
        }
    }
    return result;

    // let result =[];
    // for (let item of this){
    //     if(Array.isArray(item)){
    //         result = result.concat(result.customFlat());
    //     }
    //     else{
    //         result.push(item)
    //     }
    // }
    // return result

};


const mappedNumbers = [6,2,3,[2,[15,18]],45, [4,5]];
console.log("original",mappedNumbers);

console.log(mappedNumbers.customFlat());


