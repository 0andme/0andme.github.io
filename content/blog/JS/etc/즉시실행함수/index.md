---
title: IIFE 즉시 실행 함수
date: 2022-05-06T22:27:51.304Z
description: Immediately Invoked Function Expression 즉시 실행 함수
categories: [js]
subCategories: [etc]
---

> 공부하며 정리한 내용입니다

#### IIFE 즉시 실행 함수

**I**mmediately **I**nvoked **F**unction **E**xpression
직역하면, 즉시 호출 함수 표현.
<br>즉, 함수를 정의한 자리에서 바로 실행하는 표현을 말한다.

##### ✤ 작성 법 - 괄호 괄호 혹은 괄호 안의 괄호

```jsx
;(function () {
  console.log("a")
})()
```

괄호와 괄호`(함수 리터럴)()` 혹은 괄호 안의 괄호로 이루어진 `(함수 리터럴())` 의 형태로 작성한다. 화살표 함수의 경우 `(( ) => { })()`의 형태처럼 화살표 함수를 괄호로 묶어 뒤쪽 괄호와 구분해줘야 에러가 없다.(괄호 안의 괄호 형태 불가)

여기서 **함수 리터럴**이란, js에서의 함수 표현식을 말한다.

1. 예약어 function
2. 함수명 `선택`
3. 매개변수
4. 실행문

으로 이루어진다. 함수명은 선택적인데 아래와 같이 함수를 변수로 지정하거나, 즉시 실행 함수 일 때 생략 가능하다.

```jsx
const func = function (a) {
  console.log(a)
}
;(function (a) {
  console.log(a)
})(1)
```

##### ✤ 유의사항 - 세미콜론으로 윗 코드와 구분을 하자

자바스크립트에서는 세미콜론을 적지 않아도 코드가 잘 실행되는데 자동 처리가 되지 않을 경우를 방지하기 위해, 윗 문장과의 구분을 위해서 **즉시실행 함수 맨 앞에 세미콜론을 꼭 붙이자** <span class="light">바로 앞 코드 뒤에 붙이거나</span>
