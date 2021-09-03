/*  Troll Game Project 8-23-21 */

//definition of the trollBattle() function which runs the game.
function trollBattle() {
	// initial prompt for the user which gets stored in a variable - use var or let
	let action = window.prompt("You're walking through the forest minding your own business and a troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you BRIBE the troll?").toUpperCase();
	//switch statement to handle the players initial choice
	switch(action){
		case "FIGHT": {
			let skill = window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
			let strong = window.prompt("Are you stronger than a troll? (YES or NO)").toUpperCase();
		//if statement that analizes the user responses
		if(skill === "YES" || strong === "YES"){
			// the user responded "YES" to at least one of the prompts
			// write winning results to the document.
			document.getElementById("result").innerHTML = "You can be either stronger or more skilled than the troll to survive!<br/>You live another day!";
			// clear any losing messages from the document
			document.getElementById("death").innerHTML = "";
			// play the winning audio file
			document.getElementById("win").play();
		} else {
			// The user answered NO to both prompts
			// write the negative result to the document
			document.getElementById("death").innerHTML = "You are not skilled or strong. Why did you fight a troll?<br/>You have died!";
			// clear any messages from the document
			document.getElementById("result").innerHTML = "";
			// play the losing message
			document.getElementById("lose").play();
	}
	break;
  }//end of fight
 		case "RUN": {
            let fast = window.prompt("Are you fast? (YES or NO)").toUpperCase();
            if(fast === "YES"){
 				// write a positive result to the document
 				document.getElementById("result").innerHTML = "Your speed has saved you!<br/>But can you live with your cowardice?";
 				//clear any losing messages from doc
 				document.getElementById("death").innerHTML = "";
 				//play winning audio file
 				document.getElementById("win").play();
 			} else {
 				//write the negative result to the document
 				document.getElementById("death").innerHTML = "You coward if you are going to run, at least be fast!<br/>You have died...";
 				//clear positive result from document
 				document.getElementById("result").innerHTML = "";
 			   //play losing audio file
 			   document.getElementById("lose").play();
 		}
 		break;
  		}//end of case "RUN"
		case "BRIBE": {
			let money = window.prompt("You have to pay the troll toll.\nDo you have any money? (YES or NO)").toUpperCase();
	    		if(money === "YES"){
	    	let amount = window.prompt("How much money do you have?\nPlease enter a NUMERIC VALUE");
	    	//convert the string to an integer
	    	amount = parseInt(amount);
	    	if(amount > 50){
	    			// write a positive result to the document
	    			document.getElementById("result").innerHTML = "Great Job! The troll is happy<br/>You may pass!";
	    			//clear any losing messages from doc
	    			document.getElementById("death").innerHTML = "";
	    			//play winning audio file
	    			document.getElementById("win").play();
	    		} else {
	    			//write the negative result to the document
	    			document.getElementById("death").innerHTML = "The troll needs more money than that to let you pass<br/>You have died...";
	    			//clear positive result from document
	    			document.getElementById("result").innerHTML = "";
	    			//play losing audio file
	    			document.getElementById("lose").play();
	    		}
	    	} else {
	    		// user said NO to having money
	    		//write a negative result 
 		            document.getElementById("death").innerHTML = "What were you planning to bribe the troll with?<br/>You have died...";
 		             //clear positive
 		             document.getElementById("result").innerHTML = "";
 		             //play lose
 		             document.getElementById("lose").play();
 	                }
 	                break;
            }///end of bribe
 		default: {
 			// the user has not entered a valid choice in the original prompt
             window.alert("You entered: " + action + ". That is not a valid choice, please try again!");
 			//run the trollBattle() function again
 			trollBattle();
 			break;
 		}
	} //end of switch
} //end of function
