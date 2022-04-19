---
title: Array.forEach()
date: 2022-04-15T20:19:26.788Z
description: 주어진 함수를 배열 각 요소에 대해 실행
categories: [Js]
subCategories: [Array]
---

#### Array.prototype.forEach()

```jsx
arr.forEach((el, index, arr) => {})
```

배열의 **각 요소에 대해 하나의 함수를 실행**한다

콜백 함수의 매개변수로 세가지 변수가 올 수 있다.

<div class="tab">
1. element : 처리할 현재 요소<br>
2. index : 현재 요소의 인덱스<br>
3. arr : forEach문을 호출한 원본 배열</div>

<br>

반환값은 **undefined**이다. 따라서 **메소드 체인 중간에 넣으면 안된다**. <br>forEach 문 자체는 배열을 변경하지 않지만 콜백함수가 배열을 변경할 수 있다.

<div class="tab bottom10">✤ 기본 예제 - 배열 값 출력</div>

```jsx
const arr = [1, 2, 3, 4, 5]
arr.forEach(num => {
  console.log(num)
})
```

#### 공식 문서

- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" target="_blank" >Array.prototype.forEach</a>
