// Start.onclick= Start
function Start() {
  const gameSelection = prompt(
    "welcome curious one i have two game in store for you which one would you like to play A or B"
  );
  if (gameSelection.toLowerCase() === "a") {
    const bikeSelection = prompt(
      "Nice pick. you are in a mortocycle race with 4 people. your bike options is tesla or toyota"
    );
    if (bikeSelection.toLowerCase() === "tesla") {
      let output = document.getElementById("output");
        
        console.log(output);
        output.innerHTML="the tesla is a very fast bike but has a bad handling goodluck. the match starts in 3 2 1 ";
        const line = prompt("the race started and you are 2nd place ")
    }
  }else{
    alert("fuck you")
  }
}
