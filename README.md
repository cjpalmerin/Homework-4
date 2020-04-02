Created a Coding quiz game that utilizes html, css, and javascript. The questions are all laid out in separate containers inside the index.html file. These contianers all have css styling attached to the hidden and shown classes that are passed to them via javascript.

Once the start button is pressed, a timer begins to count down from 75 at the top right corner of the screen. If the user selects the correcct answer to the question, a button will appear to show the next question. This triggers the change in the css id for the container. If the user chooses an incorrect answer, 10 seconds will be removed from the counter in the corner.

If the timer runs out of time, the href value of the location is set to a game over page where the user can go back and retry the quiz. I couldn't get the timer to stop once the quiz is over in time. I was able to make it so the timer will not force the user to leave the finished quiz screen once time runs out.

If the user inputs their score, the score will appear under the high score section in the end page the next time that they finish the quiz.