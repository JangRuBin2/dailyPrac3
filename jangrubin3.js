// 정적인 객체 리터럴, 데이터를 넣을 자리를 마련했다.
let basicData = {
  header : {},
  main : {},
  footer : {}
}
// fromJsonData 변수는 
// json.parse()를 통해 받아온 데이터라고 가정한다.
let fromJsonData = {
  header : {
    content : "header 부분입니다",
    style : {
      width : "100vw",
      height : "100px",
      backgroundColor : "#ccc"
    }
  },
  main : {
    content : "main 부분입니다",
    style : {
      width : "100vw",
      height : "100px",
      backgroundColor : "#333"
    }
  },
  footer : {
    content : "footer 부분입니다",
    style : {
      width : "100vw",
      height : "100px",
      backgroundColor : "#666"
    }
  }
}
// 문자열 가공 함수
function exampleOne(basicData, fromJsonData) {
  let value = "";
  // 헤더에 클래스 
  basicData.header = new ExampleTwo(fromJsonData.header.content,
    fromJsonData.header.style.width,
    fromJsonData.header.style.height,
    fromJsonData.header.style.backgroundColor)
  // basicData.main = new ExampleTwo()
  // basicData.footer = new ExampleTwo()
  // 아래의 호출부를 참고하여, 지연변수 value에
  // 적정한 문자열 데이터로 객체를 가공하는 코드를 작성한다
  return value;
}

// 특정 HTML 요소에 값을 넣는 것을 가정한다.
const element = "";
element.innerHTML = exampleOne(basicData, fromJsonData);

// 위의 fromJsonData와 같은 객체나 JSON 데이터를 생성하기 위한
// 생성자함수, 클래스를 작성한다
// setter 기능을 활용하여 인스턴스의 값들은 모두 "문자열"만 들어가도록 안정성을 확보한다
class ExampleTwo {
  constructor(content, style, width, height, backgroundColor) {
this.content = content;
this.content = style;
this.content = width;
this.content = height;
this.content = backgroundColor;
  }
 set content(classValue) {
  if(typeof value === "string") {
    this.content = classValue;
    console.log(this.content)
  } else {
    console.log("문자열만 받습니다")
  }
 }
 set style(classValue) {
  if(typeof value === "string") {
    this.style = classValue;
    console.log(this.style)
  } else {
    console.log("문자열만 받습니다")
  }
 }
 set width(classValue) {
  if(typeof value === "string") {
    this.width = classValue;
    console.log(this.width)
  } else {
    console.log("문자열만 받습니다")
  }
 }
 set height(classValue) {
  if(typeof value === "string") {
    this.height = classValue;
    console.log(this.height)
  } else {
    console.log("문자열만 받습니다")
  }
 }
 set backgroundColor(classValue) {
  if(typeof value === "string") {
    this.backgroundColor = classValue;
    console.log(this.backgroundColor)
  } else {
    console.log("문자열만 받습니다")
  }
 }
}

