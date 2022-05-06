---
title: Gatsby로 블로그 만들기 - (4) 폰트 바꾸기
date: 2022-03-14T10:36:12.152Z
description: 구글 폰트 적용하기
categories: [blog]
---

#### 🚩 TODO

- 나눔고딕 폰트 적용하기

#### 💡 한글 폰트가 필요하다

내가 적용한 템플릿 `gatsby-starter-blog`는 국내에서 만들어졌기에 한글폰트가 적용되어 있지 않다. 그렇다고 영문 폰트가 예쁜가? 개인적으로는 아니였다.

#### 👩🏻‍💻 Fontsource를 이용하여 구글 폰트 적용하기

공식문서에서 font에 대한 글 중 <a  href="https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/#self-host-google-fonts-with-fontsource" target="_blank" rel="noopener noreferrer">web font파트</a>를 잘 읽어보면<br>
`Fontsource`는 구글 폰트를 NPM패키지로 제공해준다고 써있다. 예제를 들어 사용법도 친절히 알려주고 있다.

지원하는 폰트는 <a href="https://www.npmjs.com/search?q=fontsource" target="_blank" rel="noopener noreferrer">NPM사이트</a>나 <a href="https://fontsource.org/fonts" target="_blank" rel="noopener noreferrer">fontsource사이트</a>를 통해 고를 수 있다. 나는 나눔고딕을 택했다.

✤ 고른 폰트 적용하기

```jsx
// 1. 터미널에 아래 명령어를 입력하여 원하는 폰트를 설치한다
yarn add @fontsource/폰트명
//혹은
npm install @fontsource/폰트명

```

```jsx
// 2. 설치한 패키지를 가져온다.
// 공식문서에서는 gatsby-browser.js파일에서 가져오기를 권장
import "@fontsource/nanum-gothic"
```

```jsx
// 3. 폰트 적용
body {
  font-family: "nanum-gothic";
}
```

굉장히 쉬운 방법으로 폰트를 적용할 수 있다!

#### 참고한 사이트

- <a href="https://www.gatsbyjs.com/docs/how-to/styling/using-web-fonts/" target="_blank" rel="noopener noreferrer">공식문서 - web-fonts</a>
- <a href="https://soopdop.github.io/2020/11/25/change-font-in-gatsby/" target="_blank" rel="noopener noreferrer">블로그 글 </a>
