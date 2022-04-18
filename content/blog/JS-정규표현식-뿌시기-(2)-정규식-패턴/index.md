---
title: 정규 표현식 뿌시기 - (2) 정규식 패턴
date: 2022-04-18T01:01:58.379Z
description: 정규 표현식 패턴 공부하기
categories: [Js]
subCategories: [정규표현식]
---

<h4 class="title"></h4>
<div class="tab bottom10"></div>
<h5 class="title"></h5>

이 글은 패스트 캠퍼스 강의 일부를 듣고 정리한 내용을 담고 있습니다.

<h4 class="title">정규 표현식 패턴 </h4>

| 패턴         | 설명                           |
| ------------ | ------------------------------ |
| ^ab          | 라인의 시작이 ab인 문자와 일치 |
| ab$          | 라인의 끝이 ab인 문자와 일치   |
| .            | 임의의 한 문자와 일치          |
| a &verbar; b | a 또는 b와 일치                |
| ab?          | b가 없거나 b와 일치            |
| {n}          | n개 일치                       |
| {n,}         | n개 이상 일치                  |
| {n,m}        | n개 이상 m개 이하 일치         |

<h4 class="title">문자열이 특정 패턴으로 시작되는지 확인하기 <span class="bold">^</span></h4>

<div class="tab bottim10">✤ 문자열이 ab로 시작하므로 ab 출력</div>

```jsx
const str = `abcdefg`
console.log(str.match(/^ab/)) //['ab',...중략]
```

<div class="tab bottim10">✤ '문자열이 \n'으로 시작하므로 null 리턴</div>

```jsx
const str = `
abcdefg
`
console.log(str.match(/^ab/)) // null
```

<div class="tab bottim10">✤ m 옵션을 넣으면 '\n'을 기준으로 하나의 라인별로 패턴을 검색함</div>

```jsx
const str = `
abcdefg
ABCDEFG
`
console.log(str.match(/^ab/gim)) // ['ab', 'AB' ]
```

<h4 class="title">문자열이 특정 패턴으로 끝나는지 확인하기 <span class="bold">$</span></h4>

<div class="tab bottim10">✤ 문자열이 fg.으로 끝나므로 fg.출력</div>

```jsx
const str = `abcdefg.`
console.log(str.match(/fg\.$/)) //['fg.',...중략]
```

<div class="tab bottim10">✤ 문자열이 '\n'으로 끝나므로 null 출력</div>

```jsx
const str = `
abcdeFg.
abcdefG.
`
console.log(str.match(/fg\.$/)) //null
```

<div class="tab bottim10">✤ \n을 기준으로 각 문자열의 라인이(m) 대소문자 상관없이(i) fg.으로 끝나는 모든 (g) fg.출력</div>

```jsx
const str = `
abcdeFg.
abcdefG.
`
console.log(str.match(/fg\.$/gim)) //[ 'Fg.', 'fG.' ]
```

- <a href="https://fastcampus.co.kr/dev_online_frontend" target="_blank">패스트 캠퍼스 강의</a>
- <a href="https://heropy.blog/2018/10/28/regexp/" target="_blank">강사님 블로그 | 정규표현식, 이렇게 시작하자!</a>
