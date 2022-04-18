---
title: Array.filter()
date: 2022-04-13T20:17:40.017Z
description: 특정 조건을 만족하는 배열의 값만 모아 새로운 배열로 반환
categories: [Js]
subCategories: [Array]
---

#### Array.prototype.filter(( ) => ())

```jsx
const newArr = Array.filter((el, i, arr) => {})
```

특정 조건을 만족하는 배열 값들만 모아 새로운 배열을 리턴한다.
각 요소를 시험하는 함수에는 세가지 매개변수를 받을 수 있다.

1. element : 특정 조건을 만족하는지 확인할 현재 요소
2. index : 현재 요소의 인덱스
3. array : 원본 배열

새로운 배열을 리턴하므로 원본 배열은 보존된다.

<div class="tab bottom10">✤ 짝수인 수만 뽑아내기</div>

```jsx
const arr = [1, 2, 3, 4, 5]
const newArr = arr.filter(num => num % 2 === 0)
```

#### 공식 문서

- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">Array.prototype.filter</a>
