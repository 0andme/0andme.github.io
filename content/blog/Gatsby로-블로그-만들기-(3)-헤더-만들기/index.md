---
title: Gatsby로 블로그 만들기 - (3) 헤더 만들기
date: 2022-03-13T04:18:57.449Z
description: 헤더 만들기
categories: [Blog]
---

<h4 class="title">🚩 TODO</h4>

- 블로그 헤더 만들기
  - 블로그 타이틀 데이터 가져오기
  - 블로그 소셜 데이터 가져오기

<h4 class="title">💡 헤더가 필요해</h4>
<img src="https://www.gatsbyjs.com/_gatsby/image/aHR0cHM6Ly9nYXRzYnljb250ZW50LndwZW5naW5lLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNy8zNTc2YjkxN2M0MTExNTE2YmRmYzA0NGVjNzQ2NWQwOS5wbmc=/dz03NTAmaD01NjMmZm09YXZpZiZxPTc1/3576b917c4111516bdfc044ec7465d09.avif" alt="초기 블로그 형태">

기본 블로그에는 헤더가 없었다. 각 포스트에서 홈 화면으로 돌아가기 위해서는 제일 상단에 있는 블로그 타이틀을 클릭해야했는데 디자인적으로도 기능적으로도 좋지 않았다. <span class="light">(눌러보기 전까진 홈으로 가는 링크인지 전혀 알기 어려웠다는 점에서)</span>

그래서 네비게이션 역할을 할 헤더를 만들기로 결심했다.

<h4 class="title">❓ 기능은?</h4>

만들고자 하는 헤더의 기능을 아래와 같이 추려보고 깃헙 이슈에 해당 내용을 기록해두었다.

- 블로그 타이틀 표시 및 클릭 시 홈으로 이동
- About 페이지로의 이동
- Github 로고 표시 및 클릭 시 Github으로 이동

<h4 class="title">👩🏻‍💻 만들어보자</h4>
<h5 class="title">1️⃣ 블로그 타이틀 표시 및 홈으로 이동 기능</h5>
<h6>◦ 블로그 타이틀 가져오기<span class="light"> - 기존 파일에서는 어떻게 가져왔을까</span></h6>

컴포넌트 폴더에 Header 폴더를 만들고 `Header.js` 파일을 만들었다.

먼저, 타이틀을 표시하기 위해서는 graphql을 이용하여 블로그 메타 데이터를 가져와야했다. 다행히도 `pages/index.js`의 `pageQuery`변수를 통해 블로그 메타 데이터를 어떻게 가져왔는지 알 수 있었다.

✤ pages/index.js의 pageQuery변수

```jsx
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    ...중략
  }
`
```

graphql로 긁어온 데이터는 data라는 이름의 props로 받아지고 `.`을 이용하여 data에 접근할 수 있다. 아래는 title에 접근한 방법이다.

✤ 긁어온 데이터에 접근하는 방법

```jsx
const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  ...중략
}

```

index.js의 `siteTitle`로 저장된 블로그 타이틀 데이터를 props로 헤더에 내려주면 되었지만 난 **헤더 컴포넌트 내에서 타이틀 데이터를 가져오기로 하였다.** props로 타이틀 표시 여부(Boolean 값)를 받아올 예정이였기에 최대한 props로 받아올 데이터를 적게 하고 싶었다.

---

<h6>◦ 블로그 타이틀 가져오기<span class="light"> - 내가 만든 컴포넌트에서는 어떻게 가져올까</span></h6>

gatsby에서는 pages폴더가 아닌 폴더의 파일에서 메타 데이터를 가져오기 위해서는 `useStaticQuery`을 사용해야했다.
<a href="https://velog.io/@guri_coding/React-Gatsby-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-3-Data" target="_blank" rel="noopener noreferrer">> 참고한 블로그</a> 아래의 순서대로 작성하면 된다.

✤ import useStaticQuery

```jsx
import { useStaticQuery, graphql } from "gatsby"
```

✤ graphql 쿼리 작성

```jsx
const data = useStaticQuery(graphql`
  // 여기에 쿼리 작성
  query {
    site {
      siteMetadata {
        subTitle
      }
    }
  }
`)
```

✤ 데이터에 `.`으로 접근하기

```jsx
<Link to={"/"}>{data.site.siteMetadata.subTitle}</Link>
```

useStaticQuery를 사용한다는 점만 빼고는 사용방법이 기존 파일에서 데이터를 가져오는 방법과 별반 다르지 않다는 것을 알 수 있었다. 매우 간단하게 블로그 타이틀을 가져올 수 있었다!

---

<h6>◦ 메인 페이지일 때는 타이틀 명 숨기기</h6>

메인 페이지일 때는 헤더의 블로그 타이틀을 숨기려고 했다.
현재 url이 `/` 루트 path가 아닐 때만 타이틀을 숨기면 되는데 여러 방법이 가능했다. 내가 익숙한 방법은 아래와 같았다.

- 현재 path를 검사하는 로직 추가
  - `index.js`의 `location` 을 props로 받아와 현재 pathname 확인
  - `react-router-dom`의 useLocation hook 사용해서 pathname 확인
- 프롭스로 직접 불린 값 받기

내가 택한 방법은 **직접 불린 값 받기**였다.

먼저, 페이지는 메인/about/각 포스트 페이지 세 종류 뿐이라는 이유가 가장 컸고, 새로운 패키지를 깔지 않아도 된다는 점, 새로운 페이지가 늘어날 때마다 path검사 로직을 넣지 않아도 된다는 점이였다.

그래서 isMain이라는 props를 받아 타이틀 표시 여부를 받아오도록 하였다! props 값을 잘못 넣거나 안 넣을 경우를 대비해 type과 dafault 값도 지정해주었다.

✤ props 타입과 dafault 값 지정

```jsx
// props type
Header.propTypes = {
  isMain: PropTypes.bool,
}
// defatul props
Header.defaultProps = {
  isMain: false,
}
```

<h5 class="title">2️⃣ About 페이지로의 이동 기능 </h5>

Gatsby는 React의 Link 컴포넌트를 제공하고 있다. a 태그 대신 Link 컴포넌트를 이용하여 블로그 내부 링크를 만들면 된다.
<br>
<a href="https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/" target="_blank" rel="noopener noreferrer">공식 문서 - Gatsby Link API</a>

✤ 예시

```jsx
import { Link } from "gatsby"
```

```jsx
<Link to={"/"}>{data.site.siteMetadata.subTitle}</Link>
```

<h5 class="title">3️⃣ Github 주소로 이동 기능 </h5>

a 태그에 직접 github 주소를 넣어도 되지만, 블로그 메타 데이터에 github 주소를 넣고 `useStaticQuery`를 통해 데이터를 빼왔다.

먼저, 블로그 메타 데이터에 github을 넣어야 한다. 블로그 메타 데이터를 수정하고자 한다면 `gatsby-config.js`를 수정하면 된다.

✤ gatsby-config.js에 github 주소 넣기

```jsx
module.exports = {
  siteMetadata: {
    //...중략
    social: {
      github: `https://github.com/0andme`,
    },
  },
}
```

나는 깃헙 주소 자체를 전부 다 넣어줬다. 이곳에 깃헙 아이디만 넣고 나중에 가공해도 된다.

✤ 쿼리문 작성

```jsx
const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        subTitle
        // 아래 코드 추가
        social {
          github
        }
      }
    }
  }
`)
```

✤ a 태그 herf 속성 값으로 github주소 넣기

```jsx
<a href={data.site.siteMetadata.social.github}>이미지나 텍스트</a>
```

<h4 class="title">🎉 완성 <span class="light">그러나 추가하고 싶은게 많다</span></h4>

![완성된 헤더]('./완성된헤더.jpeg')

위와 같이 헤더를 완성했다! 그러나 추가 하고 싶은 게 남았다. 바로 **검색입력창**이다. 추후에 블로그 내 포스트 검색 기능을 추가한 후 검색 입력창을 추가할 것이다.

<a href="https://github.com/0andme/0andme.github.io/blob/main/src/components/Header/Header.js" target="_blank" rel="noopener noreferrer">Header.js 전체 코드</a>

##### 참고한 사이트

- <a href="https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/" target="_blank" rel="noopener noreferrer">공식 문서 - Gatsby Link API</a>
- <a href="https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/" target="_blank" rel="noopener noreferrer">공식 문서 - Gatsby Image plugin</a>
