---
title: Math.max() Math.min()
date: 2022-04-13T19:17:23.642Z
description: 가장 큰 값 과  가장 작은 값 구하기
categories: [Js]
subCategories: [Math]
---

<h4 class="title">Math.max(x1, x2, xn...)</h4>

0개 이상의 입력값 중 가장 큰 숫자를 반환한다.

<h4 class="title">Math.min(x1, x2, xn...)</h4>

0개 이상의 입력값 중 가장 작은 숫자를 반환한다.

<h4 class="title">💡 배열의 가장 큰 값 || 작은 값 구하기</h4>

✤ Array.reduce()
<br>
`Array.reduce()`는 두 개의 값을 비교하여 최종적으로 하나의 값을 리턴한다는 것을 이용하면 배열의 가장 큰값 || 작은 값을 구할 수 있다.

```jsx
const arr = [1, 2, 3, 4]
const max = arr.reduce((a, b) => Math.max(a, b))
const min = arr.reduce((a, b) => Math.min(a, b))
```

✤ `...` 전개 연산자 이용하기
<br>
입력값으로 배열의 값을 전개연산자로 풀어 넣어주면 빠르게 가장 큰 값 || 작은 값을 구할 수 있다.

```jsx
const arr = [1, 2, 3, 4]
const max = Math.max(...arr)
```

<h5 class="title">공식 문서</h5>

- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max" target="_blank" >Math.max</a>
- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/min" target="_blank" >Math.min</a>
