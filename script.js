// Your JS goes here
// loop through 

checkerboard()




function checkerboard() {
    let body = document.getElementsByTagName('body')[0]
    body.style.background = "linear-gradient(135deg, purple, yellow)"
    for (let e = 0; e < 153; e++) {
        let tempDiv = document.createElement('div');
        tempDiv.style.width = "11.1%"
        tempDiv.style.float = 'left'
        tempDiv.style.paddingBottom = '11.1%'

        if (e % 2 === 0) {
            tempDiv.style.backgroundColor = 'purple';

        }   
        body.appendChild(tempDiv)   
        
    }

    
}


 

  