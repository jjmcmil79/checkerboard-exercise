// Your JS goes here
// loop through 

checkerboard()




function checkerboard() {
    for (let e = 0; e < 153; e++) {
        let tempDiv = document.createElement('div');
        tempDiv.style.width = "11.1%"
        tempDiv.style.float = 'left'
        tempDiv.style.paddingBottom = '11.1%'

        if (e % 2 === 0) {
            tempDiv.style.backgroundColor = 'red';

        }   else {
            tempDiv.style.backgroundColor = 'black';
        }
        document.body.appendChild(tempDiv)

    
    }
}

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  var randomColor=generateRandomColor();//"#F10531"

  console.log(randomColor)

  