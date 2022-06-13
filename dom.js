const headingElement = document.getElementById("main-heading");
        console.log(headingElement.innerHTML);
        const newHeadingText = prompt("Please provide a new heading:");
        headingElement.innerHTML = newHeadingText;
        console.log(newHeadingText);