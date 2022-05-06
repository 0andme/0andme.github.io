---
title: Array.splice()
date: 2022-04-15T16:23:14.968Z
description: 원본 배열 자르기
categories: [js]
subCategories: [array]
---

#### Array.prototype.splice()

```jsx
const piece = Array.splice(start[, cnt[, newEls]])
```

start 인덱스 부터 **cnt 개**의 요소를 **원본 배열에서 삭제**한다. cnt값을 지정하지 않으면 start부터 배열의 끝까지를 제거한다.

원본 배열을 변경하므로 **반환 값**은 **제거 된 배열**이다. 삭제된 요소가 없으면 빈 배열을 반환한다.

제거될 요소 자리에 **새로운 값** newEls을 넣을 수 있다.

<div class="bottom10 tab">✤ 제거 없이 새로운 값 넣기</div>

```jsx
const arr = [1, 2, 3, 4, 5]
arr.splice(2, 0, "6") // [1,2,6,3,4,5]
```

#### 공식 문서

- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice" target="_blank">Array.prototype.splice</a>
