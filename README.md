# GiphyNameIs 1.0 (토이프로젝트)
![GniLogo](https://github.com/user-attachments/assets/67ba2799-b986-46c0-9bf0-752ad65b250c)
</br>

## 🧩프로젝트 소개
'GiphyNameIs'는 인스타그램에서 사용된 **Giphy 이미지의 이름을 알려주는 크롬 확장 프로그램**입니다. </br>
사용자가 **마우스 커서를 Giphy 이미지 위에 올리면, 해당 이미지의 이름을 화면에 표시**해줍니다. 이를 통해 사용자는 자신이 사용하고 싶은 Giphy 이미지의 이름을 간편하게 얻어 사용할 수 있습니다.
<br/></br>
<img width="325" alt="스크린샷 2024-12-25 225950" src="https://github.com/user-attachments/assets/c55a9e38-0e4d-4067-bd87-507c450a4cee" />

</br>

## 🛠️기술 스택
### 🚀프론트엔드 (Frontend)
<p>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
</p>

| 기술              | 설명                                    |
|-------------------|---------------------------------------|
| HTML              | 확장 프로그램의 기본 구조 제공.        |
| CSS               | JavaScript를 통해 요소 스타일링.       |
| JavaScript | 사용자 이벤트(마우스 이동 등) 처리 및 Instagram 페이지의 DOM과 상호작용.       |

</br>

### 🚀백엔드 (Backend)
| 기술              | 설명                                    |
|-------------------|---------------------------------------|
| GIPHY API              | GIPHY 이름을 비롯한 정보를 가져오기 위한 API.        |
| Chrome Extensions Storage API & Background Script               | 확장 도구 설치 시 GIPHY API 키를 Chrome의 sync 스토리지에 저장하고 관리.       |

* 참조: 추출한 GIPHY 이미지의 ID와 API KEY를 사용해 GIPHY 서버에 정보를 요청하고, 반환된 JSON 데이터를 처리합니다.

<br/>

### 🚀개발 도구 (Development Tools)
<p>
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
</p>

| 도구              | 설명                                    |
|-------------------|---------------------------------------|
| Git              | 프로젝트 버전 관리를 위한 Git 사용.        |
| GitHub               | 원격 저장소에 코드를 저장.       |
| JSON               | Chrome 확장 프로그램의 설정 파일, Giphy 서버에서 받는 데이터 형식       |


</br>

## 🖥️실행 화면
![제목 없는 동영상 - Clipchamp로 제작 (4)](https://github.com/user-attachments/assets/04e03d52-b87c-4341-9afd-407aa6ea5975)

</br> 

## 📝프로젝트를 통해 배운 것
* 크롬 확장 프로그램
* Giphy API
* DOM
* Local Storage
* gitignore
* README 파일 작성법
