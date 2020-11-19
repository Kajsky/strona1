

window.onload = function() {
    document.getElementById("buttonconvert1").onclick = function() {
        var h_ex = document.getElementById("hexvar")

        if (h_ex.value.length > 0 && h_ex.value.length < 7) {

            var changeColor = document.getElementById("colorReview")

            changeColor.style.backgroundColor = "#" + h_ex.value;

            convert()
        }  
        
    }

    function convert(){
        const obj = {
            "0": "0",        
            "1": "1",        
            "2": "2",        
            "3": "3",        
            "4": "4",        
            "5": "5",      
            "6": "6",        
            "7": "7",        
            "8": "8",        
            "9": "9",      
            "A": "10", 
            "B": "11", 
            "C": "12", 
            "D": "13", 
            "E": "14",
            "F": "15"      
        }

        var h_ex = document.getElementById("hexvar")
        h_ex = h_ex.value

        h_ex = h_ex.toUpperCase()

        var h1 = h_ex.substring(0, 1)
        var h2 = h_ex.substring(1, 2)
        var h3 = h_ex.substring(2, 3)
        var h4 = h_ex.substring(3, 4)
        var h5 = h_ex.substring(4, 5)
        var h6 = h_ex.substring(5, 6)

        h1 = obj[h1]
        h2 = obj[h2]
        h3 = obj[h3]
        h4 = obj[h4]
        h5 = obj[h5]
        h6 = obj[h6]

        var a = 0
        var b = 0
        var c = 0

        h1 = parseInt(h1, 10)
        h2 = parseInt(h2, 10)
        h3 = parseInt(h3, 10)
        h4 = parseInt(h4, 10)
        h5 = parseInt(h5, 10)
        h6 = parseInt(h6, 10)

        h1 = h1*16
        a = h1 + h2 
        h3 = h3*16
        b = h3 + h4
        h5 = h5*16
        c = h5 + h6



        document.getElementById("wynikes").innerHTML = (a + " " + b + " " + c)
    }

    document.getElementById("closebutton1").onclick = function() {
        location.href = "index.html"
    }
}
    