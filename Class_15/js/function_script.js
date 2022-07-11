// Function
function count(str, find) {
    return (str.split(find)).length - 1;
}


document.getElementById("demo").innerHTML = count("Good", "o");
