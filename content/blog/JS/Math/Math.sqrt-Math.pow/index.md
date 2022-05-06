---
title: Math.sqrt() Math.pow()
date: 2022-04-13T19:47:50.931Z
description: 입력값의 제곱근과 n승
categories: [js]
subCategories: [math]
---

#### Math.sqrt(x)

입력된 숫자 **x의 제곱근**을 리턴한다. x가 음수면 `NaN`을 리턴

```jsx
Math.sqrt(9) // 3
Math.sqrt(2) // 1.414213562373095
Math.sqrt(1) // 1
Math.sqrt(0) // 0
Math.sqrt(-1) // NaN
```

#### Math.pow(x,n)

입력값 **x의 n승**을 반환한다. x가 음수면 `NaN`을 리턴

```jsx
Math.pow(7, 3) // 343 = 7의 3승
Math.pow(4, 0.5) // 2 = 4의 0.5승
Math.pow(7, -2) // 1/49
Math.pow(-7, 0.5) //NaN
```

#### 공식 문서

- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt" target="_blank" >Math.sqrt</a>
- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/pow" target="_blank" >Math.pow</a>
