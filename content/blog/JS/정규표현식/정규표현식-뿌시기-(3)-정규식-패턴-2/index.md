---
title: 정규 표현식 뿌시기 - (3) 정규식 패턴 - 2
date: 2022-04-19T15:47:20.935Z
description: 정규 표현식 패턴 공부하기
categories: [js]
subCategories: [정규표현식]
---

이 글은 패스트 캠퍼스 강의 일부를 듣고 정리한 내용을 담고 있습니다.

#### 정규 표현식 패턴

| 패턴    | 설명                                                        |
| ------- | ----------------------------------------------------------- |
| [abc]   | a 또는 b또는 c와 일치                                       |
| [a-z]   | a부터 z 사이의 문자 구간에 일치(영어 소문자)                |
| [A-Z]   | A부터 Z 사이의 문자 구간에 일치(영어 대문자)                |
| [0-9]   | 0부터 9 사이의 문자 구간에 일치(숫자)                       |
| [가-힣] | 가부터 힣 사이의 문자 구간에 일치(한글)                     |
| [^abc]  | a 또는 b또는 c가 아닌 나머지 문자와 일치                    |
| `\w`    | 63개 문자(Word, 영문 대소문자 52개 + 숫자 10개 + \_)에 일치 |
| `\b`    | 63개 문자가 아닌 나머지 문자에 일치하는 경계(boundary)      |
| `\d`    | 숫자(Digit)에 일치                                          |
| `\s`    | 공백(Space, Tab 등)에 일치                                  |
| (?=)    | 앞쪽 일치                                                   |
| (?<=)   | 뒤쪽 일치                                                   |

#### [abc] a 또는 b또는 c와 일치 ( a | b | c와 동일)

<div class="tab bottom10">✤ 문자열에서 A 또는 B가 있는 부분 모두 (g) 출력</div>

```jsx
const str = `abcABCaBcAbc`
console.log(str.match(/[AB]/g)) // [ 'A', 'B', 'B', 'A' ]
```

#### [a-b] a부터 b까지 범위 지정

<div class="tab bottom10">✤ 문자열에서 a에서 z사이의 영어 소문자 부분 모두 (g) 출력</div>

```jsx
const str = `a1c2B3a4c5b6`
console.log(str.match(/[a-z]/g)) // [ 'a', 'c', 'a', 'c', 'b' ]
```

<div class="tab bottom10">✤ 문자열에서 a에서 c 사이의 영어 소문자 또는 1부터 3까지의 숫자 모두 (g) 출력</div>

```jsx
const str = `a1b2c3d4e5f6`
console.log(str.match(/[a-c1-3]/g)) //[ 'a', '1', 'b', '2', 'c', '3' ]
```

#### `\w` 영어 대소문자 + 숫자 + \_ 와 일치하는 문자 찾기

<div class="tab bottom10">✤ 문자열에서 영어 대소문자, 숫자, 언더바 모두 (g) 출력</div>

```jsx
const str = `a 1&2B_`
console.log(str.match(/\w/g)) // [ 'a', '1', '2', 'B', '_' ]
```

##### `\W`는 `\w`의 반대

<div class="tab bottom10">✤ 문자열에서 영어 대소문자, 숫자, 언더바가 아닌 다른 문자 모두 (g) 출력</div>

```jsx
const str = `a 1&2B_`
console.log(str.match(/\W/g)) // [ ' ', '&' ]
```

#### `\b` 영어 대소문자 + 숫자 + \_ 가 아닌 모든 문자 의 경계

<div class="tab bottom10">✤ 양쪽 끝에 _가 아닌 특수 문자가 있고 문자열에서 f로 시작하는 한 단어 이상의 문자 모두 (g) 출력</div>

```jsx
const str = `a 1 fox&2ffB_`
console.log(str.match(/\bf\w{1,}\b/g)) // ['fox']
```

<div class="tab bottom10">✤ 앞쪽에 _가 아닌 특수 문자가 있고(\b) 문자열에서 f로 시작하고 (f), 영어대소문자+숫자+언더바로(\w) 이루어진 한 단어 이상의({1,}) 문자 모두(g) 출력</div>

```jsx
const str = `a 1 fox&2 ff B_`
console.log(str.match(/\bf\w{1,}/g)) //['fox','ff']
```

```jsx
const str = `a 1 fox&2 ffB_`
console.log(str.match(/\bf\w{1,}/g)) //['fox','ffB_']
```

##### `\B`는 `\b`의 반대

<div class="tab bottom10">✤ 양쪽 끝에 영어 대소문자 + 숫자 + 언더바가 있고 문자열에서 f로 시작하는 한 단어 이상의 문자 모두 (g) 출력</div>

```jsx
const str = `a 1 fox&2ffB_`
console.log(str.match(/\Bf\w{1,}\B/g)) // ['ffB']
```

<div class="tab bottom10">✤ 앞쪽에 영어대소문자 + 숫자 + 언더바가 있고 f로 시작하는 한 단어 이상의({1,}) 문자 모두(g) 출력</div>

```jsx
const str = `a 1 fox&2ffB_`
console.log(str.match(/\Bf\w{1,}/g)) //[ 'ffB_' ]
```

#### a( ?= b ) 앞쪽 일치 = b 앞에 있는 a 문자

<div class="tab bottom10">✤ @ 앞에 있는 fox 문자 모두 출력</div>

```jsx
const str = `foxaa@fox@`
console.log(str.match(/fox(?=@)/g)) // ['fox']
```

<div class="tab bottom10">✤ @앞에 있고 fox가 들어가는 문자 모두 출력</div>

```jsx
const str = `foxasdsd@fox@`
console.log(str.match(/fox\w{0,}(?=@)/g)) // ['foxasdsd','fox']
```

#### ( ? <= b ) a 뒤쪽 일치 = b 뒤에 있는 a 문자

<div class="tab bottom10">✤ @ 뒤에 있는 fox 문자 모두 출력</div>

```jsx
const str = `foxaa@fox@`
console.log(str.match(/(?<=@)fox/g)) // ['fox']
```

<div class="tab bottom10">✤ @ 뒤에 있고 fox가 들어가는 문자 모두 출력</div>

```jsx
const str = `foxasdsd@foxasd@fox`
console.log(str.match(/(?<=@)fox\w{0,}/g)) // ['foxasd','fox']
```

#### 참고 사이트

- <a href="https://fastcampus.co.kr/dev_online_frontend" target="_blank">패스트 캠퍼스 강의</a>
- <a href="https://heropy.blog/2018/10/28/regexp/" target="_blank">강사님 블로그 | 정규표현식, 이렇게 시작하자!</a>
