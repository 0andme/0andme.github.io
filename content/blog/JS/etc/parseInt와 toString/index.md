---
title: parseInt와 toString
date: 2022-07-09T18:39:39.133Z
description: 여러 진수로 표현하고 10진수로 바꾸기  parseInt와 toString
categories: [js]
subCategories: [etc]
---

#### Object.prototype.toString()

toString()은 객체를 `문자열로 변환`한다.
toString의 프로토타입이 **숫자거나 BigInt일 때** 매개변수로 선택적 기수(**radix**)를 넣을 수 있다. 그러면 10진수에 해당되는 값의 2진수, 8진수 값을 문자열의 형태로 얻을 수 있다.

<div class="tab bottom10">예제</div>
  
```js
// 숫자
let baseTenInt = 10;
console.log(baseTenInt.toString(2)); // "1010"
// BigInt
let bigNum = BigInt(20);
console.log(bigNum.toString(2)); // "10100"
```

반대로 n진수의 값을 10진수로 변환할 때는 parseInt메서드를 사용하는데 이때 default로 10진수로 변환하는 것이 아니라는 것을 명심해야한다.

#### parseInt(x,[base])

parseInt()는 `문자열을 파싱`하여 `특정 진수의 정수`를 반환한다.
문자열 x를 base(기수) 표현한 정수를 반환한다.

문자열을 훑다가 해당 진수법에 어긋나는 부분이 발견되면 해당 부분 전까지의 값을 변환하게 된다.

<div class="tab bottom10">예제</div>

```js
console.log(parseInt("0xF", 16))
// expected output: 15
// 문자열 0xF를 16진수로 인식하고 이를 10진수로 변환한 값 15을 리턴

console.log(parseInt("1111", 2))
// expected output: 15
// 문자열10을 2진수로 인식하여 변환한 값 2를 리턴
console.log(parseInt("FXX123", 16))
// expected output: 15
// 문자열 FXX123 중 16진수에서 유효한 F까지 변환
console.log(parseInt("15 * 3", 10))
// expected output: 15
// 문자열 15 * 3 중 10진수에서 유효한 값인 15까지 변환
```

#### 공식 문서

- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/parseInt" target='__blank'>parseInt()</a>
- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString" target='__blank'>Object.prototype.toString()</a>
