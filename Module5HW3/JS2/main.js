function outer(){
    var array = [];
    return (item) => {
        if (item){
            array.push(item);
        }
        else{
            array = [];
        }
        return array;
    };
}

var getUpdatedArr = outer();

console.log(getUpdatedArr(3));
console.log(getUpdatedArr(5));
console.log({name: 'Vasya'});
console.log(getUpdatedArr());
console.log(getUpdatedArr(4));