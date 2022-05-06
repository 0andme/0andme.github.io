---
title: Array.fill()
date: 2022-04-13T20:43:04.472Z
description: 입력 값으로 배열 요소 채우기
categories: [js]
subCategories: [array]
---

#### Array.prototype.fill()

```jsx
const arr=arr.fill(value,[start[,end]])
```

배열의 값을 value로 바꾼다. 시작과 끝 인덱스는 옵션.

start 인덱스만 있다면 start부터 배열 끝까지, start와 end 인덱스 모두 있다면 **start**부터 **end-1**까지의 값을 value로 바꾼다.

만약, start 값이 **음수면 start는 length+start** | 배열 맨 뒤에서부터 n번째 인덱스를 의미한다.<br>
만약, end 값이 **음수면 end는 length+start** | 배열 맨 뒤에서부터 n번째 인덱스를 의미한다.

반환값은 **변형된 배열** fill 메서드를 부른 배열 그 자체이다.

<div class="tab bottom10">✤ 배열 전부를 0으로 바꾸기</div>

```jsx
const arr = [1, 2, 3, 4, 5]
console.log(arr.fill(0)) //[0,0,0,0,0]
console.log(arr) //[0,0,0,0,0]
```

<div class="tab bottom10">✤ 배열 일부를 0으로 바꾸기</div>

```jsx
const arr = [1, 2, 3, 4, 5]
console.log(arr.fill(true, 1, 4)) // [1,0,0,0,5]
console.log(arr) //[1,0,0,0,5]
```

#### 공식 문서

- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" target="_blank" >Array.prototype.fill</a>
