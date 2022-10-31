---
title: 인터넷 동작 원리
date: 2022-05-18T00:12:35.358Z
description:
categories: [인터넷]
subCategories: []
---

> 프론트엔드 로드맵을 보며 간략하게 내용을 정리하고자 함

[How does the internet work? 인터넷 작동원리](https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm)

---

#### IP주소

인터넷에 연결된 컴퓨터는 각각의 고유한 주소가 있어야 하고 그러한 주소를 IP주소라고 한다. 두 컴퓨터에서 데이터를 주고 받을 때 메시지는 텍스트에서 0과 1의 데이터로 변환된 다음 다시 텍스트로 변환되어야 할 것이다. 이는 프로토콜 스택을 통해 가능하다.

#### 프로토콜 스택

주요 프로토콜을 묶어 **TCP/IP 프로토콜 스택**이라고 부른다. TCP와 IP는 각각 다른 계층에서 동작하는 프로토콜이지만 한데 TCP/IP 프로토콜 스택이라고 묶어 부른다. TCP/IP 프로토콜 스택은 다음 4개의 계층으로 이루어진다.

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
