const FakePic = "https://thispersondoesnotexist.com/";

function realPic() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}


let streak = 0;

function game() {
  function draw() {
    const imageCon = document.getElementById("images");
    const resultCon = document.getElementById("result");
    const streakCon = document.getElementById("streak");

    imageCon.innerHTML = "";
    resultCon.innerHTML = "";

    const again = document.createElement("button");
    again.textContent = "Play Again";
    again.onclick = () => {
      streak = 0; 
      streakCon.textContent = `Streak: ${streak}`;
      draw();
    };
    
    const rand = Math.random() > 0.5;
    const arr = [rand, !rand];
    for (const isReal of arr) {
      const img = document.createElement("img");
      img.src = isReal ? realPic() : FakePic;
      imageCon.appendChild(img);
      img.onclick = function () {
        if (isReal) {
          resultCon.textContent = "You Are Correct";
          streak++; 
        } else {
          resultCon.textContent = "You Are Incorrect";
          streak=0;
        }
        streakCon.textContent = `Streak: ${streak}`;
        resultCon.appendChild(again); 
        draw(); 
      };
    }
  }
  draw();
}

game();
