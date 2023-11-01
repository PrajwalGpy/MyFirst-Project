
let count = document.getElementById("count-val")
let val=0;
let svae =document.getElementById("btn-save")
let btnre = document.getElementById("btn-re")
function increment(){
    val+=1;
    count.textContent=val;

}

function save(){

    saves.textContent+=val+ " - ";
    val=0;
    count.textContent=val;
}

function reset(){
    val=0;
    count.textContent=val;
    saves.textContent= "svaes: ";
        

}
