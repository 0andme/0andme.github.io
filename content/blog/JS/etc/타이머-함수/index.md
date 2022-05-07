---
title: 타이머 함수
date: 2022-05-06T23:42:19.563Z
description: 일정 시간 지난 후 함수 실행 setTimeout / 일정 시간 마다 함수 실행 setInterval
categories: [js]
subCategories: [etc]
---

> 공부하며 정리한 내용입니다

#### setTimeout(함수,시간) - 일정 시간 후 함수 실행

시간단위는 1ms (1000ms = 1s)

```jsx
setTimeout(함수리터럴 혹은 화살표함수, interval)
```

#### clearTimeout() - setTimeout 함수 종료

```jsx
const timer = setTimeout(() => {}, 1000)
clearTimeout(timer)
```

#### setInterval(함수,시간) - 시간 간격마다 함수 실행

시간단위는 1ms (1000ms = 1s)

```jsx
setInterval(함수리터럴 혹은 화살표함수, interval)
```

#### clearInterval() - setInterval 함수 종료

```jsx
const timer = setInterval(() => {}, 1000)
clearInterval(timer)
```
