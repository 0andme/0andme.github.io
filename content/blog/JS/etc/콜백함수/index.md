---
title: 콜백 함수
date: 2022-05-09T19:24:38.470Z
description: Callback 함수에 대해
categories: [js]
subCategories: [etc]
---

#### 콜백 (Callback)

**함수의 인수로 사용되는 함수**, 어떤 이벤트에 의해 호출되는 함수를 말한다.
**called at the back** of the other function. <br> 어떤 함수의 실행 위치를 보장할 때 자주 사용된다.

##### ✤ 예제

```jsx
A(1, B)

function A(a, b) {
  console.log(a)
  b("end")
}
function B(str) {
  console.log(str)
}
```

```jsx
//출력결과
1
end
```

위는 A 함수를 실행하고 A 함수의 인자로 전달된 B 함수가 A 함수 안에서 실행되는 예제이다. <br> 여기서 B 함수를 콜백함수라고 부르며, A 함수가 실행된 후 B함수를 실행되는 것을 보장하고 있다.
