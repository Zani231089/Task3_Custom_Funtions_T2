calculate = () => {
    var valueOne = document.getElementById("one").value;
    var select = document.getElementById("select").value;
    var valueTwo = document.getElementById("two").value;
    var result;

    if(select === "plus"){
        result = valueOne + valueTwo;
    } else if(select === "minus"){
        result = valueOne - valueTwo;
    } else if(select === "times"){
        result = valueOne * valueTwo;
    } else if(select === "divide"){
        result = valueOne/valueTwo;
    }

    alert("Calculation: " + result);

    console.log(select)

}