# News-Page App (Team4)

<img src="https://img.shields.io/badge/React-blue?style=for-the-badge&logo=React&logoColor=white"><img src="https://img.shields.io/badge/JS-yellow?style=for-the-badge&logo=javascript&logoColor=white"><img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white"><img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"><img src="https://img.shields.io/badge/CRA-09D3AC?style=for-the-badge&logo=Create React App&logoColor=white">

## 기획목표
- **NewYork Times API를 이용한 실시간 반응형 Web Page 만들기**

### 제작기간 : 220613 ~ 220622 

## Team 소개

- 오세준
- 최다현
- 조주선
- 유아름
- 김영희


## Stack

- CRA(Create-React-App)
- Git, GitLab
- Styled-Components
- Redux-toolkit, Redux-Persist
- Axios
- React-Router-Dom

--- 

## 요구사항

- Routing
  - "/" url에서는 기사 검색 페이지 렌더
  - "/clip" url에서는 내가 clip한 기사 페이지 렌더
  -  그 외 url은 "/"로 redirect

- Input
  - 마지막 타이핑 이후 0.5초동안 추가 입력이 없으며, input value가 있는 경우 검색 api 호출 
  - 최대 5개까지 search history 저장 (브라우저 종료해도 지속)
  - search history가 존재하고, input에 focus중이면 searchhistory 노출

- News list
  - "/" 과 "/clip"은 기사 리스트를 렌더한다
  - 기사 리스트는 다음 내용을 포함하는 기사 카드를 렌더한다
  - 타이틀 날짜, clip하기 버튼(누를 때마다 unclip하기 버튼과 toggle) 자세히보기 버튼(해당 기사 새탭으로 열기)
  - infinite scroll (스크롤이 마지막에 닿았을 때 다음 page 요청)
  - 첫 페이지가 화면의 높이를 모두 채우지 못한 경우에도 page 요청

- Clip
  - 기사 카드의 clip버튼을 클릭하여 해당 기사를 즐겨찾기한다
  - clip된 기사들은 "/clip"에서 확인할 수 있다
  - clip된 기사들은 브라우저를 재시작하여도 유지된다
  - 기사를 unclip하면 더이상 "/clip"에서 확인할 수 없다

- Etc
  - create-react-app 사용
  - react-router-dom 사용
  - redux 사용
  - 스타일링 및 방식은 자유 (css, styled-components 등)
  - nyt api token은 본인이 가입하여 발급

--- 

### Project Team 규칙

- Commit Messag 규칙 준수(feat, fix, docs...)
- 하루의 할 일 Issue 등록 후 작업 진행
- EsLint, Prettier 사용하기
- 기능 위에 주석으로 작성자, 함수 기능 설명 작성
- 함수 앞 func 키워드 사용
- PR 요청 시 팀장은 자다가 일어나서 받기..(Main으로 보내면 팀장으로 변경 ...)