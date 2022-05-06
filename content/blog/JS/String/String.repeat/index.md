---
title: String.repeat()
date: 2022-04-17T21:38:56.357Z
description: 주어진 문자열을 반복 횟수만큼 반복하기
categories: [js]
subCategories: [string]
---

#### String.prototype.repeat(cnt)

주어진 문자열을 **cnt번 반복한 문자열을 반환**한다. cnt값은 0이상의 무한대 사이의 **양의 정수**여야한다. [0,+∞)

<div class="tab bottom10">✤ 기본 예제</div>

```jsx
"ABC".repeat(-1) // RangeError
"ABC".repeat(0) // ''
"ABC".repeat(1) // "ABC"
"ABC".repeat(3.5) // "ABCABCABC"
```

#### 공식 문서

- <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/repeat" target="_blank" >String.prototype.repeat</a>
