background.js
/**
 * 2023.11.23 시나버스 shinahverse.kr
 * 화면에 배경 랜덤으로 출력하기
 */

//이미지 저장하는 배열
const images = ["동기부여 이미지 1.png", "동기부여 이미지 2.jpg", "동기부여 이미지 3.jpg", "동기부여 이미지 4.gif", "동기부여 이미지 5.jpg"];
//위의 코드에서 파일명은 자신이 갖고 있는 파일의 이름을 적는다.

//화면에 출력할 이미지를 랜덤으로 선택한다.
const selectedImage = images[Math.floor(Math.random() * images.length)];

//html문서에 img요소를 만든다.
const bgImage = document.createElement("img");

//만든 img요소의 경로를 지정한다.
bgImage.src = `img/${selectedImage}`;

//Image 라는 클래스 생성
bgImage.classList.add("Image");

//만든 요소를 문서에 붙인다.
document.body.appendChild(bgImage);