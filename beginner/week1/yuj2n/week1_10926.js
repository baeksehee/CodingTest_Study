// 준하는 사이트에 회원가입을 하다가 joonas라는 아이디가 이미 존재하는 것을 보고 놀랐다. 준하는 놀람을 ??!로 표현한다. 준하가 가입하려고 하는 사이트에 이미 존재하는 아이디가 주어졌을 때, 놀람을 표현하는 프로그램
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();
// input[0]인 줄 알았는데 split()으로 여러 입력받을 때만 input[]를 사용하는 것 같다.
console.log(input + "??!");