const houseArr = ['2a',4,7,'8b',12,15,'0c',0,6,12];


function houseNumber(){
    for (var i = 0; i<houseArr.length; i++){
        if (houseArr[i].value instanceof Number) {
            let num =+ houseArr[i];
            console.log(num);
        } else {
            let s = parseInt(houseArr[i]);
            console.log(s);
        }
    }

}









console.log(houseNumber());
// console.log(filtered);


