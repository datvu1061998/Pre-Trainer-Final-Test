var myButton = document.querySelectorAll('.um');
var win = document.querySelector('.win');
numberClick = 0;
function toggleClick(){
    if(this.textContent !== "") return;
    var icon ="";
    numberClick %2 === 0 ?icon ="✘": icon ="O";
    this.textContent =icon;
    numberClick++;
    // if(checkWin() === true){
    //     win.classList.add('won');
    // }

    if(checkWinX(this) || checkWinY(this) || checkWinZ1(this) || checkWinZ2(this)){
        win.classList.add('won');
        win.innerHTML = "WIN" + icon; 
    } 
    
}

function checkWinX(a){
    var index = parseInt(parseInt(a.dataset.index) / 3);
    for(let i = 0;i<2;i++){
        let x = myButton[i+index*3].textContent;
        let y = myButton[i+index*3+1].textContent;
        if(x !=="" || y!== ""){
            if(x !== y){
                return false;
            }
        }
    }
    return true;
}
function checkWinY(a){
    var index = parseInt(a.dataset.index) % 3;
    for(let i = 0;i<2;i++){
        let x = myButton[i*3+index].textContent;
        let y = myButton[(i+1)*3+index].textContent;
        if(x !=="" || y!== ""){
            if(x !== y){; 
                return false;
            }
        }
    }
    return true;
}
function checkWinZ1(a){
    var index = parseInt(a.dataset.index) % 3 - parseInt(parseInt(a.dataset.index) / 3);
    if(index <0){
        return false;
    }
    for(let i = 0;i<2;i++){
        let x = myButton[i*3+index+i].textContent;
        let y = myButton[(i+1)*3+index+(i+1)].textContent;
        if(x !=="" || y!== ""){
            if(x !== y){
                return false;
            }
        }
    }
    return true;
}
function checkWinZ2(a){
    var index = parseInt(a.dataset.index) % 3 + parseInt(parseInt(a.dataset.index) / 3);
    console.log(index);
    if(index >2){
        return false;
    }
    for(let i = 0;i<2;i++){
        let x = myButton[i*3+index-i].textContent;
        let y = myButton[(i+1)*3+index-(i+1)].textContent;
        if(x !=="" || y!== ""){
            if(x !== y){
                return false;
            }
        }
    }
    return true;
}

myButton.forEach(x =>x.addEventListener('click',toggleClick));

var form = document.querySelector('.setForm');
var n = form.querySelector('[name="n"]').value;
var m = form.querySelector('[name="m"]').value;
console.log(n,m);