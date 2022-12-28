const twice = ["nayeon", "sana", "jihyo", "dahyun"]


/*~twice.forEach(function(member) {
  const p = document.createElement('p')
  p.textContent = member
  document.body.appendChild(p)
})
*/

/*//forEach는 배열의 각각의 요소에 대해서 콜백을 호출
  twice.forEach(function(member, index) {
  const p = document.createElement('p')
  p.textContent = `${index + 1}번째 멤버 ${member}`
  document.body.appendChild(p)
})
*/

/*//각각의 요소에 대해 콜백을 호출한 결과를 새로운 배열로 반환
const result = twice.map(function(member, index) {
  return `아름다운 ${member}`
})
console.log(result);*/ //

/* //콜백을 호출한 결과  true를 반환하는 요소를 새로운 배열로 반환
const result = twice.filter(function(member, index) {
  return member === "sana"
})
console.log(result);*/ //