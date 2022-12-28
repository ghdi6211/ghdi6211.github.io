const person = {
  name : "유노",
  job : "이것저것",
  eat : function() {
    console.log("밥을 먹습니다 냠냠");
  }
}

const teacher = { 
  ...person,
  job:"선생님"
}

console.log(person);
console.log(teacher);

//spread는 즉 복사 