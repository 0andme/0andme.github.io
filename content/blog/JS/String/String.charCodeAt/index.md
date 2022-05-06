---
title: String.charCodeAt()
date: 2022-04-25T09:22:12.837Z
description: 문자열의 특정 문자의  UTF-16 코드 찾기
categories: [js]
subCategories: [string]
---

#### String.prototype.charCodeAt(index)

문자열의 **index 자리의 문자**의 UTF-16 코드를 반환한다.
0 부터 0xffff 까지의 정수가 반환된다.

index값의 default 값은 **0** 이고 index 값이 범위 밖이면 **NaN**을 반환한다.

```jsx
console.log("ABC".charCodeAt(0)) // 65
console.log("ABC".charCodeAt(1)) // 66
console.log("ABC".charCodeAt(2)) // 67
```

#### 공식 문서

- <a href="" target="_blank" >String.prototype.charCodeAt</a>
