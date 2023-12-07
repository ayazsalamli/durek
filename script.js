let num = Math.floor(Math.random() * 13) + 2;
let baLES = Math.floor(Math.random() * 4) + 1;

let kart = num;




if (baLES == 1) {
    baLES ='Mika'
} else if (baLES == 2){
    baLES = 'ayaz'
} else if (baLES == 3){
    baLES = 'murad'
}else if (baLES == 4){
    baLES = 'elmeddin'
}


console.log(kart);

document.getElementById('kart').innerHTML = `${kart} ${baLES}`;