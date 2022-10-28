---
title: 최대공약수 최소공배수
date: 2022-04-18T00:12:35.358Z
description:
categories: [js]
subCategories: [알고리즘]
---

#### 코드 미리보기

```js
//최대 공약수
const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b))
// 최소 공배수
const lcm = (a, b) => (a * b) / gcd(a, b)
```

#### 최대 공약수 GCD (Greatest Common Divisor)

최대 공약수를 구하는 방법은 두 수를 a,b라고 할 때, 2부터 min(a,b)까지의 수로 두 수를 나누었을 때 동시에 나머지를 0으로 만드는 수를 찾으면 된다.

##### 코드

```js
let getGCD = (a, b) => {
  let gcd = 1

  for (let i = 2; i <= Math.min(a, b); i++) {
    // i값으로 두 수를 나눴을 때 나머지가 모두 0이면 최대공약수
    if (a % i === 0 && b % i === 0) {
      gcd = i
    }
  }

  return gcd
}
```

for문을 끝까지 돌며 조건에 맞는 i값을 갱신하고 결과적으로 a,b의 약수 중에 가장 큰 약수 = 최대 공약수가 변수 i에 저장된다.

#### 최소공배수 LCM (Least Common Multiple)

최소공배수를 구하는 가장 쉬운 방법은 두 수를 a,b라고 할 때, **1**부터 시작하여 두 수로 나누었을 때 나머지가 0 이 되는 값을 찾으면 된다.

##### 코드

```js
let getLCM = (a, b) => {
  let lcm = 1

  while (1) {
    // lcm값을 두 수로 나눴을 때 나머지가 모두 0이면 최소공배수
    if (lcm % a === 0 && lcm % b === 0) {
      lcm = i
      break
    }
    lcm++
  }

  return lcm
}
```

#### 유클리드 호제법을 이용

유클리드 호제법의 기본 원리는 두 수를 a, b라고 할 때 `GCD(a, b) = GCD(b, a%b)`라는 점이다.

**재귀**함수인 GCD를 돌다가 GCD(a, b)에서 **b자리의 값이 0이 되면 그때의 a 값이 최대 공약수**가 되는 것이다. 코드로 나타내면 아래와 같다.

##### 코드

```js
let getGCD = (a, b) => (b > 0 ? getGCD(b, a % b) : a)
```

처음 호출할 때 a와 b 값의 크기는 고려하지 않아도 된다. a가 b보다 작아도 알아서 스왑되기 때문이다. 아래는 예시이다.

<div class="tab bottom10">ex)</div>

```
getGCD(16,24) -> getGCD(24,16%24) = getGCD(24,16)

getGCD(24,16) -> getGCD(16,8)

```

**최소공배수**는 최대공약수를 이용하여 구할 수 있다.

```
lcm= a \* b / gcd

```
