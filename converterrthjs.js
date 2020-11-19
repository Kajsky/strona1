

window.onload = function() {
    document.getElementById("buttonconvert1").onclick = function() {
        var inputR = document.getElementById("inputR")
        var inputG = document.getElementById("inputG")
        var inputB = document.getElementById("inputB")

        if (inputR.value.length > 0 && inputG.value.length > 0 && inputB.value.length > 0) {
            inputR = parseInt(inputR.value, 10)
            inputG = parseInt(inputG.value, 10)
            inputB = parseInt(inputB.value, 10)

            var changeColor = document.getElementById("colorReview")

            changeColor.style.backgroundColor = "rgb(" + inputR + "," + inputG + "," + inputB + ")";

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
            "10": "A", 
            "11": "B", 
            "12": "C", 
            "13": "D", 
            "14": "E",
            "15": "F"      
        }

        
        inputR = inputR.value
        inputG = inputG.value
        inputB = inputB.value

        console.log(inputR, inputG, inputB)

        var d=0
        var e=0
        var f=0
        
        var g,h,i=0
        
        var j,k,l=0
        
        d=inputR/16;
        g=Math.floor(d)
        j=inputR%16
    
        g=obj[g]
        j=obj[j]

    
        e=inputG/16;
        h=Math.floor(e)
        k=inputG%16
        h=obj[h]
        k=obj[k]
        
        f=inputB/16;
        i=Math.floor(f)
        l=inputB%16
        i=obj[i]
        l=obj[l]


        document.getElementById("wynikes").innerHTML = ("#" +g+j+h+k+i+l)
    }

    document.getElementById("closebutton1").onclick = function() {
        location.href = "index.html"
    }
}
    