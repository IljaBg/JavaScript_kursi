function myFunction() {
    location.replace("https://www.w3schools.com")
  }

// Paff daļa
// location.href = 'about.html' nomaina tikai beigās daļu no index (piem, www.google.com/indext.html)
// location.href = '/contact.html' nomaina www.google.com/js/index.html - nomaina no /js -> )

/* function showActive() {
    const displays = navigator.activeVRDisplays;
    for (const display of displays) {
      console.log(`Display ${display.displayId} is active.`);
    }
  }; */

  document.getElementById("demo").innerHTML = 
  "navigator.appCodeName is " + navigator.appCodeName; 
  
  document.getElementById("demo2").innerHTML = 
  "navigator.appName is " + navigator.appName;  

  document.getElementById("demo3").innerHTML = 'Jūs esat tiešsaiste, ja atbilde ir "true" - ' + navigator.onLine + ' un Jūsu brauzera versija ir - ' + navigator.appVersion;

    
  alert(`Your browser version is reported as ${navigator.appVersion}`);
  /* the same userAgent
document.getElementById("demo4").innerHTML =
navigator.userAgent; */

function batttick() {
    navigator.getBattery().then(battery => {
      let m = ""
      let c = ""
      m = battery.level * 100 + "%"
  
      if (battery.charging) {
        m += " ⚡ (notiek uzlāde)";
        c = "green";
      }
      console.log(c, m);
      document.getElementById("batt").innerHTML = 'Baterijas uzlādes līmenis ' + m;
      document.getElementById("batt").style.color = c;
    })
  }
  batttick()

//  console.log(navigator.geolocation);


