function outer(){
    var counter = 0;
    return (num) => {
        counter += num;
        console.log(counter);
    };
}

var count = outer();
count(3);
count(5);
count(228);