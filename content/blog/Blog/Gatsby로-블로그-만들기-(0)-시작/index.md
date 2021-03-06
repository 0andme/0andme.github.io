---
title: Gatsby로 블로그 만들기 - (0) 시작
date: 2022-03-10T10:03:05.971Z
description: Gatsby로 블로그 만들기에 앞서
categories: [blog]
---

#### 😥 Jekyll vs Gatsby

기존의 블로그는 jekyll로 만들었다. 디자인을 커스텀하는 건 css만 알면 되니 어렵지 않게 할 수 있었지만 개발용과 배포용 레포를 두 개나 가지고 있어야 했고 대부분의 파일이 `.html` 확장자였기 때문에 사용된 문법을 이해하며 기능을 확장하고 변경하는 것도 조금 어려웠다. **react**를 배우고 나니 이런 불편함들이 더 잘 보였던 것 같다. 그래서 무작정 시작한 리액트 기반의 블로그 프로젝트(리액트와 더 친해지기도 해야했다) <br> 정말 무작정 시작한 프로젝트였기에 Gatsby의 존재도 모르고 cra부터 시작하긴 했었지만 열심히 구글링을 한 덕에 시간을 줄이고 조금 더 완성도 있는 프로젝트를 시작할 수 있게 되었다.
<br>

#### 💡 배울 것 투성이

리액트만 알면 짜잔하고 블로그를 만들 수 있는 건 아니였다. `graphql`과 `TypeScript` `EmotionJS` 등등... 적용된 스킬들이 많았다. 언젠간 마주쳐야할 것이기에 맛 보기라도 하자는 마음으로 열심히 또 구글링을 시작했다. 정말 감사하게도 디테일하게 설명이 되어있는 [강의](https://www.inflearn.com/course/gatsby-%EA%B8%B0%EC%88%A0%EB%B8%94%EB%A1%9C%EA%B7%B8)를 발견했다. 강의라고는 하지만 텍스트 형태로 되어있어 자주 열람하기도 편하다. 물론 이것만 보고 원하는 기능을 다 만들 수 있는 건 아니지만 개츠비 블로그에 대한 전반적인 설명이 잘 되어 있어 초반 이해에 도움이 되었다.

#### 🚩 목표

블로그 유목민은 이제 그만하고 당분간 개츠비에 정착할 생각이다. 추후에 더 좋은 기술이 나온다면 당연히 맛보러 또 떠나보긴 하겠지만.
그래서 이번엔 블로그를 만드는 과정을 상세히 적어볼 생각이다. 깃헙에서는 만들 기능들을 이슈로 떠두려고 한다.(패스트캠퍼스에서 협업 프로젝트를 했을 때 깃헙의 이슈와 프로젝트를 야무지게 사용했던 좋은 경험이 있다)

#### 참고 사이트

- [인프런 강의 - React 기반 Gatsby로 기술 블로그 개발하기](https://www.inflearn.com/course/gatsby-%EA%B8%B0%EC%88%A0%EB%B8%94%EB%A1%9C%EA%B7%B8)
