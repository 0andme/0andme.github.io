---
title: Array.reduce()
date: 2022-04-13T23:52:47.584Z
description: 배열의 각 요소에 대해 리듀서 함수를 실행하고 하나의 결과를 반환
categories: [Js]
subCategories: [Array]
---

<h4 class="title">Array.prototype.reduce()</h4>

```jsx
Array.reduce((acc, cur, index, arr) => (), initialValue)
```

배열의 각 요소에 대해 **리듀서 함수**를 실행하고, **하나의 결과값**을 반환한다.

리듀서 함수는 네개의 매개변수를 가질 수 있다.

1. acc : 값이 누적되는 변수. 최종적으로 리턴되는 값
2. cur : 배열의 현재 요소
3. index : 현재 요소의 인덱스
4. arr : 원본 배열

`initialValue`를 지정하면 acc의 초기값을 정할 수 있다.
<br>
만약 `initialValue`가 없다면 초기값은 배열의 0번째 값이다.

<div class="tab bottom10">✤ 배열의 모든 값 더하기</div>

```jsx
const arr = [1, 2, 3, 4, 5]
const sum = arr.reduce((a, b) => a + b)
```

<div class="tab bottom10">✤ 두 배열의 곱 모두 더하기</div>

```jsx
const arrA = [1, 2, 3, 4, 5]
const arrB = [6, 7, 8, 9, 10]

const sum = arr.reduce((a, b, i) => (a += b * arrB[i]), 0)
```

<h5 class="title">공식 문서</h5>

- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce" target="_blank">Array.prototype.reduce</a>
