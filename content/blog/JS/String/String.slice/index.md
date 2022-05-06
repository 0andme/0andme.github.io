---
title: String.slice()
date: 2022-04-19T21:55:11.297Z
description: 문자열 일부 추출하기
categories: [js]
subCategories: [string]
---

#### String.prototype.slice()

```jsx
const newStr = str.slice(start, end)
```

문자열의 **start**부터 **end-1**까지의 문자열을 반환한다. 원본 문자열은 훼손되지 않는다.

<div class="tab bottom10">✤ 기본 예제들</div>

```jsx
const str = "The quick brown fox jumps over the lazy dog."
console.log(str.slice(31)) //  "the lazy dog."
console.log(str.slice(4, 19)) // "quick brown fox"
console.log(str.slice(-4)) // "dog."
console.log(str.slice(-9, -5)) //  "lazy"
console.log(str) // "The quick brown fox jumps over the lazy dog."
```

#### 공식 문서

- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/slice" target="_blank" >String.prototype.slice</a>
