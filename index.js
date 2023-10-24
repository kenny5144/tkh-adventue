// Start.onclick= Start
let lastTurn;
let powerUp
let maintainSpeed;
// this is for the tesla
function turnning(){
  if (powerUp.toLowerCase() === "a") {
    alert("you got an handling upgrade ");
     lastTurn = prompt("you are at the last turn do you A. maintain your speed B. speed up C. slow down  ")
    if (lastTurn.toLowerCase() === "a") {
      alert("you passed everyone and you won the race")
    } else if (lastTurn.toLowerCase() === "b") {
      alert("you crashed lost the game ")
    } else if (lastTurn.toLowerCase() === "c") {
      alert("unfortunately you lost some speed and finshed the game last ")

  }
  }else if (powerUp.toLowerCase()==="b"){
    alert("you have crashed please try again ")
  }
}
function sameSpeed (){
  if (maintainSpeed.toLowerCase()==="a"){
    alert("your are going too fast and you crash ")

  }else if (maintainSpeed.toLowerCase()==="b"){
    alert("you got through the turn and you are first place and you won the race  ")

  }else if (maintainSpeed.toLowerCase() ==="c")
  {

    alert("you made through the turn and you won the race ")
  }
  

}
// this is fot the toyota\
function toyotaturnning(){
  if (powerUp.toLowercase() === "a") {
    alert("you got an handling upgrade ");
     lastTurn = prompt("you are at the last turn do you A. maintain your speed B. speed up C. slow down  ")
    if (lastTurn.toLowerCase() === "a") {
      alert("you completed the turning but unfortunatly you ended the game at 4th because you are too slow")
    } else if (lastTurn.toLowerCase() === "b") {
      alert("you completed the turning and won the game")
    } else if (lastTurn.toLowerCase() === "c") {
      alert("  you completed the turning but unfortunatly you ended the game at 3rd")
  
  
  }
}else if (powerUp.toLowerCase()==="b"){
  alert("you landed in front of the turning and won the game  ")
}
}
function ToyotasameSpeed (){
  if (maintainSpeed.toLowerCase()==="a"){
    alert("you made it throught the turn and won the game  ")

  }else if (maintainSpeed.toLowerCase()==="b"){
    alert("you got through the turn but you finished the race at 4th  ")

  }else if (maintainSpeed.toLowerCase() ==="c"){

    alert("you made through the turn  but you finshed the race as 2nd  ")
  }

  

}

function Start() {
  const gameSelection = prompt(
    "welcome curious one i have two game in store for you which one would you like to play A or B"
  );
  if (gameSelection.toLowerCase() === "a") {
    const bikeSelection = prompt(
      "Nice pick. you are in a mortocycle race with 5 people. your bike options is tesla or toyota"
    );
    if (bikeSelection.toLowerCase() === "tesla") {
      // let output = document.getElementById("output");

      // console.log(output);
      // output.innerHTML= "the tesla is a very fast bike but has a bad handling goodluck. the match starts in 3 2 1"
      alert("the tesla is a very fast bike but has a bad handling goodluck. the match starts in 3 2 1 ");

      let line;
      line = setTimeout(prompt("the race started and you are 2rd place. There is a  turning coming up, do you want to a. reduce speed b. keep the same speed c. speed up  "),5000);

      if (line.toLowerCase() === "a") {
        alert(
          "Your speed drop you are now in 4th place but you can still win this "
        )
         powerUp = prompt("wow there is a power up on the road do you a. pick it up b. miss it to get on a ramp ")
          if (powerUp.toLowerCase()=== "a"|| "b"){
            turnning()
          }else{
            turnning()
          }

      }else if (line.toLowerCase() ==="b"){
        alert("your bike was a little wobly but u manage to get it on track and mantain the 2nd place ")
       let  maintainSpeedPowerups =prompt("there is a power up on the road do you A. pick it up B. miss it and go on a ramp")
       if (maintainSpeedPowerups.toLowerCase()==="a"){
        alert("your bike get more speed and better handling ")
        maintainSpeed= prompt("you are ariving at a turn what do you do A. speed up b. slow down C maintain speed  ")
        if (maintainSpeed.toLowerCase()=== "a"|| "b" ||"c"){

            sameSpeed();

        }else{
          sameSpeed();
        }
       }
      
      }else if (line.toLowerCase() ==="c"){
        alert("you crashed the bike .Please try again ")

      }

    }else if (bikeSelection.toLowerCase()==="toyota"){
      alert("the mortocycle is a slow  bike but has a great handling goodluck. the match starts in 3 2 1 ");

      let mortocycleline;
      mortocycleline = prompt("the race started and you are 4th place. There is a  turning coming up, do you want to a. reduce speed b. keep the same speed c. speed up  ");

      if (mortocycleline.toLowerCase() === "a") {
        alert(
          "Your speed drop you are now in 5th place but you can still win this "
        )
         powerUp = prompt("wow there is a power up on the road do you a. pick it up b. miss it to get on a ramp ")
          if (powerUp.toLowerCase()=== "a"|| "b"){
            toyotaturnning();
          }else{
            toyotaturnning();
          }

      }else if (mortocycleline ==="b"){
        alert("youmade it through the turn and u are at 3rd place ")
       powerUp =prompt("there is a power up on the road do you A. pick it up B. miss it and go on a ramp")
       if (powerUp.toLowerCase()==="a"){
        alert("your bike get more speed and more handling ")
        maintainSpeed= prompt("you are ariving at a turn what do you do A. speed up b. slow down C maintain speed  ")
        if (maintainSpeed=== "a"|| "b"){

            ToyotasameSpeed();

        }else{
          ToyotasameSpeed();
        }
       
      
      }else if (mortocycleline.toLowerCase() ==="c"){
        alert("you passed everyone and won the game ")

      }
    }
  } 
  }else if (gameSelection.toLowerCase()==="b"){
    
 
}
}
