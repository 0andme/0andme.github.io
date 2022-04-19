---
title: 정규 표현식 뿌시기 - (1)
  정규식 메소드
date: 2022-04-18T01:00:58.379Z
description: 정규 표현식을 사용하는 메소드들 알아보기
categories: [Js]
subCategories: [정규표현식]
---

이 글은 패스트 캠퍼스 강의 일부를 듣고 정리한 내용을 담고 있습니다.

#### 정규 표현식 메소드

| 메소드  | 문법                            | 설명                                                  |
| ------- | ------------------------------- | ----------------------------------------------------- |
| test    | 정규식.test(문자열)             | 일치여부(Boolean) 반환                                |
| match   | 문자열.match(정규식)            | 일치하는 문자열의 배열(Array) 반환                    |
| search  | 문자열.search(정규식)           | 일치하는 문자열의 인덱스(Number) 반환                 |
| replace | 문자열.replace(정규식,대체문자) | 일치하는 문자열을 대체하고 대체된 문자열(String) 반환 |
| split   | 문자열.split(정규식)            | 일치하는 문자열을 분할하여 배열(Array)로 반환         |

✤ test를 제외한 메소드는 `문자열.메소드`임을 기억하자

#### 정규식.test(문자열)

<div class="tab bottom10">✤ 정규식을 만족하는 문자가 있는지 확인하기</div>

```jsx
const str = `
010-1234-5678
theEmail@gmail.com
look at the sky
The quick brown fox
abbcccddd
`
console.log(/the/gi.test(str)) // true
console.log(/red/gi.test(str)) // false
```

#### 문자열.match(정규식)

<div class="tab bottom10">✤ 문자열에서 정규식을 만족하는 문자배열 가져오기</div>

```jsx
const str = `
010-1234-5678
theEmail@gmail.com
look at the sky
The quick brown fox
abbcccddd
`
console.log(str.match(/the/gi)) // [ 'the', 'the', 'The' ]
```

#### 문자열.search(정규식)

<div class="tab bottom10">✤ 문자열에서 정규식을 만족하는 문자배열의 위치 찾기</div>

```jsx
const str = `
theEmail@gmail.com
look at the sky
The quick brown fox
`
console.log(str.search(/the/gi)) // 1
```

#### 문자열.replace(정규식,대체문자)

<div class="tab bottom10">✤ 문자열에서 정규식을 만족하는 문자를 대체문자로 바꾸기</div>

```jsx
const str = `
theEmail@gmail.com
look at the sky
The quick brown fox
`
console.log(str.replace(/the/gi, "A"))
//AEmail@gmail.com
// look at A sky
// A quick brown fox
console.log(str)
// theEmail@gmail.com
// look at the sky
// The quick brown fox
```

위의 결과를 통해 `replace()`는 **원본 문자열을 변형하지 않는다**는 것을 알 수 있다.

#### 문자열.split(정규식)

<div class="tab bottom10">✤ 정규식 기준으로 문자열 나누기</div>

```jsx
const str = `
010-1234-5678
theEmail@gmail.com
look at the sky
The quick brown fox
abbcccddd
`
console.log(str.split(/the/gi))
// [
//   '\n010-1234-5678\n',
//   'Email@gmail.com\nlook at ',
//   ' sky\n',
//   ' quick brown fox\nabbcccddd\n'
// ]
```

#### 참고 사이트

- <a href="https://fastcampus.co.kr/dev_online_frontend" target="_blank">패스트 캠퍼스 강의</a>
- <a href="https://heropy.blog/2018/10/28/regexp/" target="_blank">강사님 블로그 | 정규표현식, 이렇게 시작하자!</a>
