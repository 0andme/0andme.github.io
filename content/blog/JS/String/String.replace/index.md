---
title: String.replace()
date: 2022-04-19T21:40:35.986Z
description: 문자열 바꾸기
categories: [Js]
subCategories: [String]
---

#### String.prototype.replace()

```jsx
const newStr=str.replace(정규식 or 문자열 , 대체 문자)

```

**반환값**은 입력값에 의해 변경된 **새로운 문자열**이다. 원본 문자열은 **훼손되지 않는다.**

<div class="tab bottom10">✤ a를 DD로 변경하기</div>

```jsx
const str = "abc"
console.log(str.replace(/a/, "DD")) //DDbc
```

#### 공식 문서

- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank" >String.prototype.replace</a>
