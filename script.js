let circle = document.querySelector("#circle");
let frames = document.querySelectorAll(".frame");

const lerp = (x, y, a) => x * (1 - a) + y * a;

//if the frames are more than one than we will use forEach Method
frames.forEach(frame => {
    // when mouse/cursor moveON frame element than make the circle large
// and change the text to White.
// we also want to to show the hidden span when the mouseMOve over the existing span
//ASlo make the text moveAble along with Cursor when we move it.

frame.addEventListener("mousemove", function (dets) {
    //findingout the x-axis width ,span width and total width
    let dim = frame.getBoundingClientRect();
    console.log(dim);
    let xstart = dim.x;
    let spanwidth = dim.width;
    let totalWidth = xstart + spanwidth;
    let zeroOneVal = gsap.utils.mapRange(xstart, totalWidth, 0, 1, dets.clientX);
  
    //making circle large
    gsap.to(circle, {
      scale: 5,
    });
    // show the other span
    gsap.to(frame.children, {
      color: "#fff",
      duration: .4,
      y: "-5vw",
    });
  
      // moving text with Cursor
       gsap.to(frame.children, {
      x: lerp(-50, 50, zeroOneVal),
      duration: .3
    });
  });
  
  // when mouse/cursor moveOut from the  frame element than make the circle small
  // and also change the text color to black
  // we also want to to show the previous  span when the mouseLeave  the  span
  
  frame.addEventListener("mouseleave", function (dets) {
      /// making circle element small
    gsap.to(circle, {
      scale: 1,
    });
    // making text black and bring back the prevesious span
    gsap.to(frame.children, {
      color: "#000",
      duration: 0.4,
      y: 0,
    });
  // bring back the text on its old position
    gsap.to(frame.children, {
      x: 0,
      duration: .3
    });
  });

})

//code for Moving Cricle(element) along with Cursor
window.addEventListener("mousemove", function (dets) {
  // circle.style.transform = `translate(${dets.clientX}px,${dets.clientY}px)` //moveing circle with vanilla js
  // Now doing same thing with gsap
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.5,
    ease: Expo,
  });
});


