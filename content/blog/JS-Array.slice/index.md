---
title: Array.slice()
date: 2022-04-14T11:56:36.705Z
description: 훼손 없이 배열 자르기
categories: [Js]
subCategories: [Array]
---

<h4 class="title">Array.slice()</h4>

```jsx
const newArr = Array.slice(start[, end])
```

start 인덱스부터 **end-1** 인덱스 까지의 값들을 모아 새로운 배열로 반환한다. end 인덱스가 없다면 start 인덱스 부터 배열의 끝까지.
<br>
새로운 배열을 반환하므로 원본 배열은 변하지 않는다.
<br>
인덱스가 음수면 뒤에서부터 n번째 인덱스를 의미한다.

<div class="tab bottom10">✤ 기본 예제</div>

```jsx
const arr = ["a", "b", "c", "d", "e"]
const newArr = arr.slice(1, 4) // ["b","c","d"]
const newArrB = arr.slice(-2) // ["d","e"]
```

<h5 class="title">공식 문서</h5>

- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" target='__blank'>Array.slice</a>
