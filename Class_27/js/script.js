let btn = document.querySelector('#btn');

function display() {
    alert('It was clicked!');
}

btn.addEventListener('click',display);

// paraugs no MDN
function hide(e){
    e.currentTarget.style.visibility = 'hidden';
    console.log(e.currentTarget);
    // When this function is used as an event handler: this === e.currentTarget
  }
  
  const ps = document.getElementsByTagName('p');
  
  for (let i = 0; i < ps.length; i++){
    // console: print the clicked <p> element
    ps[i].addEventListener('click', hide, false);
  }
  // console: print <body>
  document.body.addEventListener('click', hide, false);
  
  // Click around and make paragraphs disappear