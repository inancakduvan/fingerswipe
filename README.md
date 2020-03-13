# Fingerswipe JS
<p>Run any function on swipe!</p>
<p>Fingerswipe is a very small-size library which you can initialize with one function easily and trigger any function on swipe!
<p> Works only mobile devices. </p>
<p>Demo: https://inancakduvan.github.io/fingerswipe/ </p>

# How to use

import Fingerswipe JS at end of your body tag.

<h3>CDN</h3>
<pre>
  <script src='https://res.cloudinary.com/dd2ownqt9/raw/upload/v1583681710/fingerswipe_qhcnq7.js'></script>
</pre>

<h3>Parameters</h3>
<table>
  <tr>
    <td>direction</td>
    <td>target</td>
    <td>functions object</td>
  </tr>
  
  <tr>
    <td>horizontal / vertical</td>
    <td>targetted div you will swipe on</td>
    <td>Object including your functions which will be triggered</td>
  </tr>
</table>

<h3>Initialize</h3>
<pre>
  <script>
       // Target areas you want to run function.
        
        const targetHorizontalArea = document.getElementById("horizontal-area");
        const targetVerticalArea = document.getElementById("vertical-area");


        // Code your functions you will run on swipe!
        
        function swipeLeft() {
           alert("Swiped Left")
        }

        function swipeRight() {
            alert("Swiped Right")
        }

        function swipeUp() {
            alert("Swiped Up")
        }

        function swipeDown() {
            alert("Swiped Down")
        }
        

        // Initialize fingerswipe function with 3 parameters: (direction, target, functions object)
        
        fingerswipe("horizontal", targetHorizontalArea, {
            left: swipeLeft,
            right: swipeRight
        });

        fingerswipe("vertical", targetVerticalArea, {
            up: swipeUp,
            down: swipeDown
        });
    </script>
</pre>

<h2>Done!!</h2>
