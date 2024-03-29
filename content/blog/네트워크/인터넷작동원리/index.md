---
title: 인터넷 동작 원리
date: 2022-05-18T00:12:35.358Z
description: IP주소 / TCP/IP 프로토콜 / 네트워크 인프라
categories: [네크워크]
subCategories: [인터넷]
---

> 프론트엔드 로드맵을 보며 간략하게 내용을 정리하고자 함

[How does the internet work? 인터넷 작동원리](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)
[How does the internet work? 인터넷 작동원리 MDN](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work)

---

#### IP주소

인터넷에 연결된 컴퓨터는 각각의 고유한 주소가 있어야 하고 그러한 주소를 IP주소라고 한다. 두 컴퓨터에서 데이터를 주고 받을 때 메시지는 텍스트에서 0과 1의 데이터로 변환된 다음 다시 텍스트로 변환되어야 할 것이다. 이는 프로토콜 스택을 통해 가능하다.

#### TCP/IP 프로토콜 스택

클라이언트와 서버간에 데이터를 신뢰성있게 전달하기 위해 만들어진 프로토콜을 **TCP/IP 프로토콜 스택**이라고 부른다. TCP와 IP는 각각 다른 계층에서 동작하는 프로토콜이지만 TCP/IP 프로토콜 스택이라고 묶어 부른다. TCP/IP 프로토콜 스택은 다음 4개의 계층으로 이루어진다.

<div class="tab">
- 응용 계층 : WWW, 이메일, FTP 등과 같은 애플리케이션에 특정한 프로토콜
<br/>- 전송 계층 : TCP는 포트 번호를 사용하여 컴퓨터의 특정 응용 프로그램으로 패킷을 보냄
<br/>- 네트워크 인터넷 계층 : IP 주소를 사용하여 패킷을 특정 컴퓨터로 보냄.
<br/>- 물리하드웨어 계층 : 이진 패킷 데이터를 네트워크 신호로 변환하고 그 반대로 변환
</div>

<img alt="TCP/IP 프로토콜 스택을 이루는 4개의 계층" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FJzvpv%2Fbtrexdq9cte%2FoI5IYdzlwikDGMlifO4lo1%2Fimg.jpg" width="100%" />

<br/>

A컴퓨터에서 B컴퓨터로 문자메시지를 보낸다고 가정한다면.

<img src="https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper_files/ruswp_diag2.gif" alt="다이어그램" width="100%">

1. 메시지의 크기가 크면 각 계층에서 더 작은 데이터로 나누게 되는데 이러한 청크를 **패킷**이라고 부른다.
2. 패킷은 응용 계층을 통과하여 TCP 계층으로 이동하고 이때 각 패킷에는 **포트 번호가 할당**된다.
3. 패킷은 다음 계층인 IP계층으로 이동해서는 이동되어야하는 B컴퓨터의 **IP주소를 수신**한다. 포트번호와 IP주소가 있으니 전송 준비는 다 완료된 것이다.
4. 물리 계층으로 이동한 패킷은 **전자신호로 변환**되고 전화선을 통해 전송된다.
5. B컴퓨터쪽의 전화선 끝에는 ISP가 인터넷과 직접적으로 연결되어 있다. ISP 라우터는 각 패킷의 대상 주소를 검사하고 보낼 위치를 결정한다.
6. 결국 패킷은 B컴퓨터로 이동된다.
7. 물리계층에서 응용계층으로 이동하면서 패킷에 붙어있던 데이터들이(IP주소, 포트 번호) 제거된다.
8. 이로서 A 컴퓨터에서 보냈던 메시지 그대로 B 컴퓨터에 보여지게 된다.

간단하게 데이터가 전달되는 원리는 위와 같다.

위에서 언급되는 계층은 [OSI-7 계층](/네트워크/OSI-7계층)에 포함된다.

#### 인터넷 인프라

간단하게 컴퓨터 두대가 서로 데이터를 공유하기 위해서는 물리적인 케이블로 두 컴퓨터가 연결되어 있거나 무선으로 연결되어야한다. 만약 모든 컴퓨터와 모든 컴퓨터를 연결한다고 한다면 아래와 같이 연결해야 할 것이다.

<div width='100%' style='text-align:center'><img src="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work/internet-schema-2.png" alt="10대의 컴퓨터가 서로 연결되어 있는 이미지" width="50%" ></div>

위의 사진은 10대만 다루고 있지만, 만약 오천만 개의 컴퓨터를 연결하고자 한다면 굉장히 많은 선들이 얽힐 것이고 관리도 어렵고 선을 구분하기 도 어려울 것이다. 이러한 문제를 해결하기 위해 `라우터`가 등장했다.

<div width='100%' style='text-align:center'><img src="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work/internet-schema-3.png" alt="라우터를 이용한 네트워크" width="50%">
<div>라우터를 이용한 네트워크</div>
</div>

각 컴퓨터는 라우터에 연결되고 라우터가 데이터의 흐름을 관리하고 제어해주는 것이다. 하지만 이 역시도 단일 라우터가 여러 대의 컴퓨터를 담당하고 있는 만큼 과부하가 올 수 있으므로 그리 좋지 않은 모델인 것이다. **라우터 또한 하나의 컴퓨터**이므로 라우터 간의 연결도 아래와 같이 가능하다.

<div width='100%' style='text-align:center'><img src="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work/internet-schema-4.png" alt="라우터와 라우터연결을 통한 네트워크" width="50%">
<div>라우터와 라우터연결을 통한 네트워크</div>
</div>

그러나 위의 모델은 거리적인 제한이 있다. 하지만 이미 가능한 네트워크가 있고 그것은 바로 전화 인프라다. 컴퓨터 네트워크를 전화 시설과 연결하기 위해 `모뎀`이라는 장비가 필요하다. 모뎀은 컴퓨터 네트워크 정보를 전화시설에서 처리할 수 있는 정보로 바꾸고 그 반대의 경우도 처리한다.

<div width='100%' style='text-align:center'><img src="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work/internet-schema-6.png" alt="모뎀을 이용한 네트워크 연결" width="50%"><div> 모뎀을 이용한 네트워크 연결</div>

</div>

하지만 그 데이터를 주고 받기 위해서는 네트워크를 인터넷 서비스 제공업체 ISP에 연결해야한다. `ISP`는 함께 연결되어 있는 몇몇 특수한 라우터를 관리하고 다른 ISP의 라우터에도 엑세스를 할 수 있는 회사이다. SKT,KT,LG U+가 이에 해당된다. 인터넷은 이러한 인터넷 인프라로 구성된다.

<div width='100%' style=' text-align:center'><img src="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work/internet-schema-7.png" alt="전체 네트워크 인프라" width="30%">
<div>전체 네트워크 인프라</div>
</div>
