---
title: 소인수분해
date: 2022-05-18T00:12:35.358Z
description:
categories: [js]
subCategories: [알고리즘]
---

#### 코드 미리보기

```js
const arr = [] // arr : 소인수를 저장할 배열
while (n > 1) {
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      answer.push(i)
      n = n / i
      break
    }
  }
}
```

#### 소인수분해

소인수 분해는 1보다 큰 자연수를 **소인수들만의 곱**으로 나타내는 것 혹은 **합성수를 소수의 곱**으로 나타내는 방법을 말한다.

이때 소수는 1보다 큰 자연수 중 1과 자신만의 약수를 가지는 수다. (2부터)

입력값 n을 2부터 n의 값으로 나누었을 때 나머지가 0이 되는 값 i가 첫번째 소인수가 되며, 그 다음 n의 값을 n/i값으로 갱신하며 n의 값이 1이 될 때까지 이를 반복한다. 이를 코드로 나타내면 아래와 같다.

```js
const arr = [] // arr : 소인수를 저장할 배열
while (n > 1) {
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      answer.push(i)
      n = n / i
      break
    }
  }
}
```
