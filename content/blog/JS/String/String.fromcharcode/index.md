---
title: String.fromCharCode()
date: 2022-04-25T07:38:52.558Z
description: UTF-16 코드를 문자열로 바꾸기
categories: [js]
subCategories: [string]
---

#### String.fromCharCode(num1[, ...[, numN ]]])

입력값으로 들어온 n개의 UTF-16 코드 숫자들을 문자열로 바꾸고 합쳐 **하나의 문자열**로 반환해준다.

16bit = 4Byte 이므로 0 ~ 0xFFFF까지의 숫자만 넣을 수 있다.

```jsx
console.log(String.fromCharCode("A".charCodeAt(0), "B".charCodeAt(0))) // 'AB'
```

#### 공식 문서

- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode" target="_blank">String.fromCharCode</a>
