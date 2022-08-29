function myFunction() {
    document.getElementById('demo').innerText = document.querySelector('input[name="rate"]:checked').id;

    /* zvaigznes */
    var stars_count = Number(document.querySelector('input[name="rate"]:checked').value);
    var stars='';
    for (let i = 1; i < 6; i++) {
        if (i <= stars_count) {stars += '<span class="fa fa-star checked"></span>'} 
        else {stars += '<span class="fa fa-star"></span>'};
    }
    document.getElementById('Stars').innerHTML=stars;
}