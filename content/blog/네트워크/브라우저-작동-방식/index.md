---
title: 브라우저 작동 방식
date: 2022-05-21T00:12:35.358Z
description:
categories: [네크워크]
subCategories: [인터넷]
---

[doc | How browsers work](https://web.dev/howbrowserswork/)

[doc | Understanding the Role of Rendering Engine in Browsers](https://www.browserstack.com/guide/browser-rendering-engine)

[doc | 위의 글 번역글(네이버) ](https://d2.naver.com/helloworld/59361)

[vid | How Do Web Browsers Work?](https://youtu.be/WjDrMKZWCt0)

---

#### 웹 브라우저

웹 브라우저는 사용자가 사용자 인터페이스를 통해 웹 페이지 또는 기타 온라인 컨텐츠에 액세스하고 표시할 수 있도록 하는 SW응용 프로그램이다.

동기적으로 html css js를 해석하여 화면에 보여주는 응용 소프트웨어.
크롬, 네이버 웨일, 파이어폭스, 사파리 등이 대표적인 예이다.

##### 브라우저의 주요 기능

브라우저의 주요 기능은 사용자가 선택한 웹 리소스를 서버에 요청하고 브라우저에 표시하는 것이다.

브라우저가 HTML 및 CSS 명세에 따라 html 파일을 해석하고 표시하는데 이러한 사양은 웹 표준화 기구 W3C(World Wide Web Consortium)에서 유지 관리한다.

일반적인 브라우저 사용자 인터페이스에는 다음이 있다.

- URI를 입력할 수 있는 주소 표시줄
- 이전 버튼과 다음 버튼
- 북마크
- 새로고침 및 문서 로드 중지 버튼
- 홈 버튼

##### 웹 브라우저 아키텍처

브라우저의 주요 구성요소는 다음과 같다.

<div class="imgCenter"><img src="https://browserstack.wpenginepowered.com/wp-content/uploads/2019/11/BrowserEngine.png" alt="웹 브라우저 아키텍처" width="80%">
<div>웹 브라우저 아키텍처</div></div>

<div class="tab bottom10 bold">1. 사용자 인터페이스(The user interface)</div>

표시되는 화면을 제외한 브라우저의 모든 부분. 사용자가 접근할 수 있는 영역.

<div class="tab bottom10 bold">2. 브라우저 엔진(The browser engine) </div>

UI와 렌더링 엔진 사이의 동작을 제어.

<div class="tab bottom10 bold">3. 렌더링 엔진(The rendering engine)</div>

클라이언트에서 요청한 데이터를 표시. html,css구문을 분석하고 이를 화면에 표시.

브라우저가 서버로부터 html문서를 받으면 렌더링 엔진의 html파서와 css파서를 이용하여 파싱하고, DOM,CSSOM 트리로 변환하고 렌더 트리로 결합.렌더 트리를 기반으로 웹페이지를 표시.

<div class="tab bottom10 bold">4. 네트워킹(Networking)</div>

HTTP요청과 같은, 서버와 통신이 가능하게 하는 프로토콜 호출에 사용

<div class="tab bottom10 bold">5. UI 백엔드(UI backend)</div>

input,select 등의 기본 위젯을 그리는 인터페이스

<div class="tab bottom10 bold">6. 자바스크립트 인터프리터(JavaScript interpreter)</div>

자바스크립 파일을 분석하고 실행

<div class="tab bottom10 bold">7. 데이터저장소(Data storage)</div>

Cookie, Local Storage, Indexed DB 등 브라우저 메모리를 활용하여 저장하는 영역

#### 랜더링 엔진의 역할

렌더링 엔진의 주된 역할은 서버로부터 받은 내용을 브라우저 화면에 표시하는 것이다. 모든 브라우저는 고유한 렌더링 엔진을 가지고 있다.

- Google Chrome and Opera v.15+: Blink
- Internet Explorer: Trident
- Mozilla Firefox: Gecko
- Chrome for iOS and Safari: WebKit

<!-- 렌더링 엔진은 더 나은 사용자 경험을 위해 빠르게 내용을 표시한다. 즉html을 전부 파싱할 때까지 기다리지 않는다. -->

##### 렌더링 엔진 동작 흐름

<div class="imgCenter"><img src="https://browserstack.wpenginepowered.com/wp-content/uploads/2019/11/Screenshot-2019-11-12-at-3.26.19-PM.png" alt="렌더링 엔진 동작 흐름" width="80%">
<div>렌더링 엔진 동작 흐름</div></div>

렌더링 엔진은 html문서의 구문 분석을 시작하여 **DOM트리**를 구축한다.
외부 CSS 파일과 내부 스타일 요소들을 함께 구문 분석하고 이러한 스타일 정보와 DOM트리를 합쳐 **렌더 트리**를 만든다.

렌더 트리를 구성한 후에는 화면에 그려질 각 요소들의 정확한 위치를 결정하고 UI 백엔드를 이용하여 이를 화면에 그리는 작업을 한다.

그러나 더 나은 사용자 경험을 위해(최대한 빨리 화면에 무언가라도 그리기 위해) 렌더링 엔진은 모든 html구문이 분석되는 것을 기다리지 않고 렌더트리 배치와 페인팅을 동시에 진행한다. 서버로부터 화면에 표시할 데이터를 전달받으면서도 동시에 받은 내용의 일부를 먼저 화면에 그리는 것이다.

#### 자바스크립트 파일 처리

자바스크립트는 `자바스크립트 엔진이 처리`한다. html 파서는 `<script>`태그를 만나면 자바스크립트 코드를 실행하기 위해 dom 생성 프로세스를 중단하고 자바스크립트 엔진에게 권한을 넘긴다. 권한을 넘겨받은 엔진은 script 태그 내의 코드나 src 속성에 정의된 파일을 로드하고 파싱하여 실행한다.

자바스크립트 코드에는 html 요소를 조작하는 코드가 들어있을 수 있다.(대부분 그렇다) 이때 완성되지 않은 DOM을 조작하게 되면 에러가 발생할 것이다. 만약, head 태그가 아닌 body 태그 맨 하단에 script코드를 넣거나 script의 defer속성을 추가하면 페이지가 모두 로드된 이후에 스크립트를 실행할수 있다.
