var skull = document.getElementById('skull1');
var astronaut = document.getElementById('astronaut');
var emogi = document.getElementById('emogi');
var volume = document.getElementById('volume');

function changeColor(){
    setTimeout(function(){
        skull.style.color = '#ff6b6b';
        astronaut.style.color = '#ff6b6b';

    }, 1000);
    setTimeout(function(){
        skull.style.color = '#f06595';astronaut.style.color = '#ff922b';

    }, 2000);
    setTimeout(function(){
        skull.style.color = '#ff922b';astronaut.style.color = '#f06595';

    }, 3000);
    setTimeout(function(){
        skull.style.color = '#51cf66';astronaut.style.color = '#20c997';

    }, 4000);
    setTimeout(function(){
        skull.style.color = '#20c997';astronaut.style.color = '#51cf66';

    }, 5000);
    setTimeout(function(){
        skull.style.color = '#339af0';astronaut.style.color = '#845ef7';

    }, 6000);
    setTimeout(function(){
        skull.style.color = "#845ef7";astronaut.style.color = '#339af0';

    }, 7000);
  }

  changeColor();

  setInterval(changeColor, 8000);

  function changeEmogi(){
    setTimeout(function(){
        emogi.className = "far fa-grin-hearts";
    }, 500);
    setTimeout(function(){
        emogi.className = "far fa-grin-squint";
    }, 1500);
    setTimeout(function(){
        emogi.className = "far fa-grin-squint-tears";
    }, 2000);
    setTimeout(function(){
        emogi.className = "far fa-grin-stars";
    }, 3500);
    
  }
  changeEmogi();
  setInterval(changeEmogi, 4000);

  function changeVolume(){
    setTimeout(function(){
        volume.className = "fa fa-volume-down";
    }, 1000);
    setTimeout(function(){
        volume.className = "fa fa-volume-up";
    }, 2000);
    setTimeout(function(){
        volume.className = "fa fa-volume-off";
    }, 3000);
  }

  changeVolume();
  setInterval(changeVolume, 4000);