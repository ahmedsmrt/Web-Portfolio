var powerBtn = document.querySelector('#power-button');
var imgContent = document.querySelector('#img-text');
var pgContent = document.querySelector('.img-layer');
var pwrBtnBrder = document.querySelector('#pwrbtnbrder');
var btncount = 0;
var pageTwoCnt;
var creepText = document.querySelector('#creep-text');
var pwrText = document.querySelector('#pwrText'); 
    powerBtn.addEventListener('click', function() {
        
        if(btncount == 0) {
            imgContent.style.display =  'inline-block';
            btncount++;
            pwrBtnBrder.style.border = '2px solid #A93226';
            creepText.style.display = "none";
            pwrText.innerHTML = "Off";
            pwrText.style.color = '#A93226';
        } else {
            imgContent.style.display =  'none';
            btncount = 0;
            pwrBtnBrder.style.border = '2px solid #1E8449';
            creepText.style.transition = '1s';
            creepText.style.display = "inline-block";
            pwrText.innerHTML = "On";
            pwrText.style.color = '#1E8449';

        }

        pgContent.style.display = 'inline-block';

    });

  


// Function For Smooth Scrolling

$('.anchor').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
    }
  });


// Nav Scroll Hide 

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav-contain").style.transition = ".5s";
    document.getElementById("nav-contain").style.top = "0";
  } else {
    document.getElementById("nav-contain").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

// Project Side Panel 
var projects = document.querySelectorAll('.proj-info');
var sqr1 = document.querySelector('.sqr1');
var sqr2 = document.querySelector('.sqr2');
var sqr3 = document.querySelector('.sqr3');
var sqr4 = document.querySelector('.sqr4');
var sqr5 = document.querySelector('.sqr5');
var sqr6 = document.querySelector('.sqr6');
var back = document.querySelector('.fa-angle-double-left');
var view = document.querySelector('.skz1');
var view2 = document.querySelector('.skz2');
var view3 = document.querySelector('.skz3');
var view4 = document.querySelector('.skz4');
var view5 = document.querySelector('.skz5');
var view6 = document.querySelector('.skz6');
var navMenu = document.querySelector('#mobileMenu');
var navUl = document.querySelector('#mobileUl');
var navList1 = document.querySelector(".smooth1");
var navList2 = document.querySelector(".smooth2");
var navList4 = document.querySelector(".smooth4");
var navList5 = document.querySelector(".smooth5");


// Mobile Nav Bar

navMenu.addEventListener('click', function() {
  var clicked = 0;
  if(navUl.style.display === 'none' && clicked == 0) {
    navUl.style.display = 'block';

  } else {
    navUl.style.display = 'none';
    resetNav();
  }


});

navList1.addEventListener('click', resetNav);
navList2.addEventListener('click', resetNav);
navList4.addEventListener('click', resetNav);
navList5.addEventListener('click', resetNav);

function resetNav() {
  navUl.style.display = 'none';
}
var prevScrollpos2 = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos2 > currentScrollPos) {
    navUl.style.transition = ".5s";
    navUl.style.top = "0";
  } else {
    navUl.style.top = "-50px";
  }
  prevScrollpos2 = currentScrollPos;
}


var p1 = document.querySelector('.p-1');
p1.addEventListener('click', function() {
  // View Content 
    view.style.visibility = 'visible';

  // Panel Adjustments
  p1.style.transition = '1.4s';
  sqr1.style.transition = '1.5s';
    for(var i = 2; i < projects.length; i++ ) {
      tmp = document.querySelector('.p-' + i);
      tmp2 = document.querySelector('.sqr' + i);
      tmp2.style.display = 'none';
      tmp.style.zIndex = '-1';
      tmp.style.display = 'none';
    }
    p1.classList.remove('active');
    p1.style.height = '550%';
    sqr1.style.transform = 'translateY(40%)';
    sqr1.style.marginTop = '-210px';
    sqr1.style.height = '150%';
    sqr1.style.fontSize = '2rem';
    // Back Button Adjustments
    back.style.display = "inline-block";
    if (back.style.display === 'none') {
      back.style.display = "inline-block";
    }
    back.addEventListener('click', function() {
      p1.style.transition = '0s';
      sqr1.style.transition = '0s';
      back.style.display = "none";
      view.style.visibility = 'hidden';
      for(var i = 2; i < projects.length; i++ ) {
        tmp = document.querySelector('.p-' + i);
        tmp2 = document.querySelector('.sqr' + i);
        tmp2.style.display = 'inline-block';
        tmp.style.zIndex = '1';
        tmp.style.display = 'inline-block';
      }
        p1.classList.add('active');
        p1.style.height = '100%';
        sqr1.style.transform = 'translateY(5.3%)';
        sqr1.style.marginTop = '0';
        sqr1.style.height = '64.5%';
        sqr1.style.fontSize = '1rem';
    });
});

var p2 = document.querySelector('.p-2');
p2.addEventListener('click', function() {
  view2.style.visibility = 'visible';
  p2.style.transition = '1.4s';
  sqr2.style.transition = '1.4s';
    for(var i = 1; i < projects.length; i++ ) {
      if(i != 2) {
        tmp = document.querySelector('.p-' + i);
        tmp2 = document.querySelector('.sqr' + i);
        tmp2.style.display = 'none';  
        tmp.style.zIndex = '-1';
        tmp.style.display = 'none';
      }
    }
    p2.classList.remove('active');
    p2.style.height = '550%';
    sqr2.style.transform = 'translateY(40%)';
    sqr2.style.marginTop = '-210px';
    sqr2.style.height = '150%';
    sqr2.style.fontSize = '2rem';
    // Back Button Transition
    back.style.display = "inline-block";
    if (back.style.display === 'none') {
      back.style.display = "inline-block";
    }
    back.addEventListener('click', function() {
      p2.style.transition = '0s';
      sqr2.style.transition = '0s';
      back.style.display = "none";
      view2.style.visibility = 'hidden';
      for(var i = 1; i < projects.length; i++ ) {
        if(i != 2) {
          tmp = document.querySelector('.p-' + i);
          tmp2 = document.querySelector('.sqr' + i);
          tmp2.style.display = 'inline-block';
          tmp.style.zIndex = '1';
          tmp.style.display = 'inline-block';
        }
      }
        p2.classList.add('active');
        p2.style.height = '100%';
        sqr2.style.transform = 'translateY(5.3%)';
        sqr2.style.marginTop = '0';
        sqr2.style.height = '64.5%';
        sqr2.style.fontSize = '1rem';
    });
    

});

var p3 = document.querySelector('.p-3');
p3.addEventListener('click', function() {
  view3.style.visibility = 'visible';
  p3.style.transition = '1.4s';
  sqr3.style.transition = '1.4s';
    for(var i = 1; i < projects.length; i++ ) {
      if(i != 3) {
        tmp = document.querySelector('.p-' + i);
        tmp2 = document.querySelector('.sqr' + i);
        tmp2.style.display = 'none';
        tmp.style.zIndex = '-1';
        tmp.style.display = 'none';
      }
    }
    p3.classList.remove('active');
    p3.style.height = '550%';
    sqr3.style.transform = 'translateY(40%)';
    sqr3.style.marginTop = '-210px';
    sqr3.style.height = '150%';
    sqr3.style.fontSize = '2rem';
    // Back Button Transition
    back.style.display = "inline-block";
    if (back.style.display === 'none') {
      back.style.display = "inline-block";
    }
    back.addEventListener('click', function() {
      p3.style.transition = '0s';
      sqr3.style.transition = '0s';
      back.style.display = "none";
      view3.style.visibility = 'hidden';
      for(var i = 1; i < projects.length; i++ ) {
        if(i != 3) {
          tmp = document.querySelector('.p-' + i);
          tmp2 = document.querySelector('.sqr' + i);
          tmp2.style.display = 'inline-block';
          tmp.style.zIndex = '1';
          tmp.style.display = 'inline-block';
        }
      }
        p3.classList.add('active');
        p3.style.height = '100%';
        sqr3.style.marginTop = '0';
        sqr3.style.transform = 'translateY(5.3%)';
        sqr3.style.height = '64.5%';
        sqr3.style.fontSize = '1rem';
    });

});

var p4 = document.querySelector('.p-4');
p4.addEventListener('click', function() {
  view4.style.visibility = 'visible';
  p4.style.transition = '1.4s';
  sqr4.style.transition = '1.4s';
    for(var i = 1; i < projects.length; i++ ) {
      if(i != 4) {
        tmp = document.querySelector('.p-' + i);
        tmp2 = document.querySelector('.sqr' + i);
        tmp2.style.display = 'none';
        tmp.style.zIndex = '-1';
        tmp.style.display = 'none';
      }
    }
    p4.classList.remove('active');
    p4.style.height = '550%';
    sqr4.style.transform = 'translateY(-20%)';
    sqr4.style.marginTop = '-250px';
    sqr4.style.height = '170%';
    sqr4.style.width = '100%';
    sqr4.style.fontSize = '2rem';
    // Back Button Transition
    back.style.display = "inline-block";
    if (back.style.display === 'none') {
      back.style.display = "inline-block";
    }
    back.addEventListener('click', function() {
      p4.style.transition = '0s';
      sqr4.style.transition = '0s';
      back.style.display = "none";
      view4.style.visibility = 'hidden';
      for(var i = 1; i < projects.length; i++ ) {
        if(i != 4) {
          tmp = document.querySelector('.p-' + i);
          tmp2 = document.querySelector('.sqr' + i);
          tmp2.style.display = 'inline-block';
          tmp.style.zIndex = '1';
          tmp.style.display = 'inline-block';
        }
      }
        p4.classList.add('active');
        p4.style.height = '100%';
        sqr4.style.transform = 'translateY(0%)';
        sqr4.style.marginTop = '1%';
        sqr4.style.height = '65%';
        sqr4.style.fontSize = '1rem';
    });
});

var p5 = document.querySelector('.p-5');
p5.addEventListener('click', function() {
  view5.style.visibility = 'visible';
  p5.style.transition = '1.4s';
  sqr5.style.transition = '1.4s';
    for(var i = 1; i < projects.length; i++ ) {
      if(i != 5) {
        tmp = document.querySelector('.p-' + i);
        tmp2 = document.querySelector('.sqr' + i);
        tmp2.style.display = 'none';
        tmp.style.zIndex = '-1';
        tmp.style.display = 'none';
      }
    }
    p5.classList.remove('active');
    p5.style.height = '550%';
    sqr5.style.transform = 'translateY(-20%)';
    sqr5.style.marginTop = '-250px';
    sqr5.style.height = '170%';
    sqr5.style.width = '100%';
    sqr5.style.fontSize = '2rem';
    // Back Button Transition
    back.style.display = "inline-block";
    if (back.style.display === 'none') {
      back.style.display = "inline-block";
    }
    back.addEventListener('click', function() {
      p5.style.transition = '0s';
      sqr5.style.transition = '0s';
      back.style.display = "none";
      view5.style.visibility = 'hidden';
      for(var i = 1; i < projects.length; i++ ) {
        if(i != 5) {
          tmp = document.querySelector('.p-' + i);
          tmp2 = document.querySelector('.sqr' + i);
          tmp2.style.display = 'inline-block';
          tmp.style.zIndex = '1';
          tmp.style.display = 'inline-block';
        }
      }
        p5.classList.add('active');
        p5.style.height = '100%';
        sqr5.style.transform = 'translateY(0%)';
        sqr5.style.marginTop = '1%';
        sqr5.style.height = '65%';
        sqr5.style.fontSize = '1rem';
    });

});

var p6 = document.querySelector('.p-6');
p6.addEventListener('click', function() {
  view6.style.visibility = 'visible';
  p6.style.transition = '1.4s';
  sqr6.style.transition = '1.4s';
    for(var i = 1; i < projects.length; i++ ) {
      if(i != 6) {
        tmp = document.querySelector('.p-' + i);
        tmp2 = document.querySelector('.sqr' + i);
        tmp2.style.display = 'none';
        tmp.style.zIndex = '-1';
        tmp.style.display = 'none';
      }
    }
    p6.classList.remove('active');
    p6.style.height = '550%';
    sqr6.style.transform = 'translateY(-20%)';
    sqr6.style.marginTop = '-250px';
    sqr6.style.height = '170%';
    sqr6.style.width = '100%';
    sqr6.style.fontSize = '2rem';
    // Back Button Transition
    back.style.display = "inline-block";
    if (back.style.display === 'none') {
      back.style.display = "inline-block";
    }
    back.addEventListener('click', function() {
      p6.style.transition = '0s';
      sqr6.style.transition = '0s';
      back.style.display = "none";
      view6.style.visibility = 'hidden';
      for(var i = 1; i < projects.length; i++ ) {
        if(i != 6) {
          tmp = document.querySelector('.p-' + i);
          tmp2 = document.querySelector('.sqr' + i);
          tmp2.style.display = 'inline-block';
          tmp.style.zIndex = '1';
          tmp.style.display = 'inline-block';
        }
      }
        p6.classList.add('active');
        p6.style.height = '100%';
        sqr6.style.transform = 'translateY(0%)';
        sqr6.style.marginTop = '1%';
        sqr6.style.height = '64.5%';
        sqr6.style.fontSize = '1rem';
    });

});

// Contact Page Stick 

var formContainer = document.querySelector('.form-container');
var upArrow = document.querySelector('#up-arrow');

formContainer.addEventListener('click', function() {
    formContainer.style.visibility = 'visible';
    formContainer.classList.remove('animate');
    upArrow.style.transition = '1s';
    upArrow.style.display = 'inline-block';
  
});

upArrow.addEventListener('click', function() {
  upArrow.style.display = 'none';
});


var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);