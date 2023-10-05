let music = new Audio("music.mp3");
let victory = new Audio("dom-dom.mp3");
let gameover = false;
let turn = "X";

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  if (!gameover) {
    wins.forEach((e) => {
      if (
        boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
        boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
        boxtext[e[0]].innerText !== ""
      ) {
        document.querySelector(".info").innerText =
          " Hurrah " + boxtext[e[0]].innerText + "  WON";
        document.querySelector(".info").style.color = "red";
        boxtext[e[0]].style.color = "#2EE59D";
        boxtext[e[1]].style.color = "#2EE59D";
        boxtext[e[2]].style.color = "#2EE59D";
        

        gameover = true;
        victory.play();

        (document
          .querySelector(".imgbox")
          .getElementsByTagName("img")[0].style.width = "400px"),
          (height = "300px");

       
      }
    });
  }
};

//logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    music.play();
    if (boxtext.innerText === "" && gameover===false) {
      boxtext.innerText = turn;
      turn = changeTurn();

      checkWin();

      if (!gameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn For " + turn;
      }
    }
  });
});
// reset

reset.addEventListener("click", () => {
  victory.pause();
  victory.currentTime = 0;
  let boxtexts = document.querySelectorAll(".boxtext");

  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
    element.style.color = 'rgb(241, 34, 34)'
  });
  turn = "X";
  gameover = false;
  document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
  document.querySelector(".info").style.color = "#2EE59D";
  console.log(boxtexts[0])



  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px",height = "0px";
});
