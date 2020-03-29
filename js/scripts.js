const navButton = document.querySelector('.nav-button');
const navOpen = document.querySelector('.nav-open');

// const tween = Tweenlite.to(object, time, {animate})
// const tween = TweenLite.to('.cover', 1, {width: '40%'});

// timeline

const tl = new TimelineLite({ paused: true, reversed: true });

    // first property animation
        // cover image moves in(width) to 60% from 100% for 1s
tl.to('.cover', 1, {
    width: '60%',
    ease: Power2.easeOut
    })
    // second property animation
        // nav box moves down(height) 100% from 20% for 1s will a .5s delay - moving at the same time as the cover image.
    .to('nav', 1, {
        height: '100%',
        ease: Power2.easOut
      }, '-= 0.5'
      )
    //   third property animation
        // .nav-open(clothes/other menu) moves from closed or transparent to open or opaque in .5s, coming from the x-axis or translateX. On complete of the animation change pointer back so that menu items can be clicked on.
      .fromTo('.nav-open', 0.5, {
          opacity: 0,
          x: 50,
          ease: Power2.easeOut
      }, {
          opacity: 1,
          x: 0,
          onComplete: function() {
              navOpen.style.pointerEvents = 'auto';
              console.log('done');
          }
      }
      );
      

    // why did he use an arrow function?

    // navButton.addEventListener('click', () => {
    //     tl.play();
    // });
    // after creating toggleTween function, change above function to
    
    navButton.addEventListener('click', () => {

        if(tl.isActive()) {
            e.preventDefault(); 
            e.stopImmediatePropogation(); 
            return false;
            } 

        toggleTween(tl);
    });


    function toggleTween(tween) {
        tween.reversed() ? tween.play() : tween.reverse();
    }

    // 1. to get the animation to move on the first click add reversed:true to timelineLite const 
    // 2. to stop animation from jumping if it's already in motion, or restarting once it's already in motion add: if(ti.isActive()){e.preventDefault(); e.stopImmediatePropogation(); return false;} to navButton event listener.
   