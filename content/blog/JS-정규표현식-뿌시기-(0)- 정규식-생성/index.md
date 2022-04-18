---
title: 정규 표현식 뿌시기 - (0) 정규식 생성
date: 2022-04-18T00:12:35.358Z
description: 정규 표현식에 익숙해지기
categories: [Js]
subCategories: [정규표현식]
---

<h4 class="title"></h4>
<div class="tab bottom10"></div>
<h5 class="title"></h5>

이 글은 패스트 캠퍼스 강의 일부를 듣고 정리한 내용을 담고 있습니다.

<h4 class="title">🔨 정규 표현식 뿌시기</h4>

**정규표현식**은 **문자열을 검색하고 추출, 대체하는데 사용하는 일종의 패턴**이다.<br>코딩테스트 공부를 하면서 문자열을 다룰 때 정규표현식을 이용하면 매우 쉽게 풀리는 문제들을 접하게 됐고, 나를 위해 정리하자는 마음으로 강의를 듣고 정리해볼 생각이다. 매번, "이거 정규표현식을 쓰면 될 것 같은데?" 라고 생각만 하고 정작 정확한 패턴을 쓸 줄 몰라 너무 힘들었다.

<h4 class="title">정규식 생성방식</h4>

1. 생성자 방식 : new RegExp('표현','옵션')
2. 리터럴 방식 : /표현/옵션

리터럴 방식이 더 간단하지만 생성자 함수를 사용해야만 하는 경우도 있을 수 있음을 기억하자

<h4 class="title">정규식의 역할</h4>

- 문자 검색
- 문자 대체
- 문자 추출

<h4 class="title">정규식 연습</h4>

<div class="tab bottom10">✤ 정규표현식 테스트 사이트</div>

<a href="https://regex101.com/" target="_blank">regex101.com/</a>
<br>
<a href="https://regexr.com/" target="_blank">regexr.com/</a>
<br>
<a href="https://regexper.com/" target="_blank">regexper.com/</a>

<div class="tab bottom10">✤ 특정 단어 모두 찾기 <span class='bold'>g</span> 옵션</div>

```jsx
const str = `
010-1234-5678
theEmail@gmail.com
look at the sky
The quick brown fox
abbcccddd
`
// 1. 생성자 방식
let regexp = new RegExp("the", "")
console.log(str.match(regexp)) // ['the',...중략] // 결과 : 문자열 중 하나의 the에 대해서만 나온다

regexp = new RegExp("the", "g")
console.log(str.match(regexp)) // ['the','the'] // 결과 : 문자열의 모든  the를 가져온다.

// 2. 리터럴 방식
let regexp2 = /the/
console.log(str.match(regexp))

regexp2 = /the/g
console.log(str.match(regexp))
```

<div class="tab bottom10">✤ 생성자 방식 | 특정 단어 대소문자 가리지 않고 모두 찾기  <span class='bold'>i</span> 옵션</div>

```jsx
const str = `
010-1234-5678
theEmail@gmail.com
look at the sky
The quick brown fox
abbcccddd
`
// 1. 생성자 방식
let regexp = new RegExp("the", "gi")
console.log(str.match(regexp)) // ['the','the','The'] // 결과 : 대소문자 구분없이 모든 the에 대해서만 나온다

// 2. 리터럴 방식
let regexp2 = /the/gi
console.log(str.match(regexp))
```

<h5 class="title">참고 사이트</h5>

- <a href="https://fastcampus.co.kr/dev_online_frontend" target="_blank">패스트 캠퍼스 강의</a>
- <a href="https://heropy.blog/2018/10/28/regexp/" target="_blank">강사님 블로그 | 정규표현식, 이렇게 시작하자!</a>
