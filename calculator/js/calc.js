const result = document.getElementById("answer");

function resultAssign() {
    num = 3 + 5 + 500 + 87 + 2;
    result.innerHTML = num;
    console.log("Variable num represents the number:" + num);
    
}

resultAssign()

function addTwoPlusTwo() {
    result.innerHTML = 2 + 2;

}

function minusThreePlusTwo() {
    result.innerHTML = 3 - 2;

}
function divideFourPlusTwo() {
    result.innerHTML = 4 / 2;

}
function multiplyFourPlusTwo() {
    result.innerHTML = 5* 2;

}

function addd(){
    var ra= document.getElementById('a').value;
    var rb=document.getElementById('b').value;
    var rab=ra+rb;
   Document.getElementById('res').value==rab;
        }

        function subb(){
    var ra= document.getElementById('a').value;
    var rb=document.getElementById('b').value;
    var rab=ra-rb;
   document.getElementById('res').value==rab;
        }
        