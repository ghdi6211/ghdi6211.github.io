const btnPick = document.getElementById("btnpick");
const btnReset = document.getElementById('btnreset');
const btnmyNum = document.querySelectorAll('#select #btnset .btnNum');
let lotto = [0, 0, 0, 0, 0, 0, 0];
btnPick.onclick = function() {
  const txt = document.getElementById("tarNum");
  //var lotto = [0, 0, 0, 0, 0, 0, 0];
  for(var i = 0; i < 7; i++) {
    var tar = parseInt(Math.random()*45+1);
    var x  = false;
    for(var j = 0; j < 7; j++) {
      if(lotto[j] == tar) {
        x = true;
        break;
      }
    }
    if(x == false || i == 0) {
      lotto[i] = tar;
    } else {
      x = false;
      i--;
    }
    
  }
  lotto.sort((a,b)=> a-b);
  txt.value = lotto;
}

btnReset.onclick = function () {
  const txt = document.getElementById('tarNum');
  txt.value = "";
}
btnmyNum.forEach.call(btnmyNum, function(col){
  col.addEventListener("click" , click , false );
});
let myPick = [];
var t = false;
function click(e) {
  const txt2 = document.getElementById('myNum');
  if ( myPick.length < 7) {
    if(myPick.length == 0) {
      myPick.push(parseInt(this.value));
    }else {
      console.log(myPick[0]);
      for(let i = 0; i < myPick.length; i++) {
        if(myPick[i] == parseInt(this.value)) {
          window.alert("이미 입력한 번호 입니다.");
          t = true;
          break;
        }
      }
      if(t == false) {
        myPick.push(parseInt(this.value));
      }else {
        t = false;
      }
    }
    myPick.sort((a,b)=> a-b);
    txt2.value = myPick;
  }else {
    window.alert("7자리 이상입니다 다시 시도해주세요.");
    txt2.value = "";
    myPick = [];
  }
}
function mynumchk() {
  const tarck = document.getElementById("tarNum");
  const myck = document.getElementById("myNum");
  var cnt = 0;
  if(tarck.value == "") {
    window.alert("뽑기를 눌러주세요");
  }else if(myck.value == "" || myPick.length < 7) {
    window.alert("내 번호를 확인 해주세요");
  } else {
    for(var i = 0; i < myPick.length; i++) {
      for(var j = 0; j < lotto.length; j++) {
          if(myPick[i] == lotto[j]) {
            cnt++;
            break;
          }
        }
      }
    if(cnt == 7) {
      window.alert("모든 숫자가 일치해요!");
    }else if (cnt > 0) {
      window.alert(cnt+"개의 숫자가 일치해요!");
    }else {
      window.alert("아쉽지만 꽝입니다.");
    }
  }
}
function mynumre() {
  const myck = document.getElementById("myNum");
  myck.value = "";
  myPick = [];
}