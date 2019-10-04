console.warn("script.js reporting for duty!");


/*--------------------------------------------------------------
Return Arrow Button to help navigate back to top from bottom
--------------------------------------------------------------*/

/*

To make this work for you change:
 
 1) to change the element being called in the dom in movePageToTop with variable element
 2) Decide and change when arrow appears in scrollChangeArrow with variable scrollDistance

*/

// Button Actions to return to top of screen
let arrowUp = document.getElementById('page-up-nav');

const movePageToTop = ()=>{
	//this is the element that you will return to, the top of this element. 
  let element = document.getElementById('nav');
  element.scrollIntoView({behavior: 'smooth', block: 'start'});
  
  setTimeout(()=>{
    // arrowUp.style.display="none";
    arrowUp.style.opacity="0";
  }, 1500);
  // alert("movePageToTop with Arrow Button is here");
}

arrowUp.addEventListener('click', ()=>movePageToTop());


// scroll event to only have button after scrolling to certain depth
const scrollChangeArrow = (element) => {

  let elem = document.getElementById(element);

  // the position of the scroll bar on the y axis
  let scroll = window.scrollY;

  // math to find percentages to use for scroll check
  let totalHeight = document.body.clientHeight;
  // distance from top - change this to desired distance
  let scrollDistance = 700;
  // percent of total scroll distance
  let percent = scrollDistance / totalHeight;
  // this is the go number we have been looking for
  let goP = scroll * percent; 

  // check position
  const checkHeader = ()=>{

    if( scroll >= goP){
      // elem.style.display = "block";
      arrowUp.style.opacity="1";
    }

    if( scroll <= goP){
      // elem.style.display = "none";
      arrowUp.style.opacity="0";
    }
  } 

  // returns a new function, to set up create new variable with debounce
  const debounce = (func, wait = 250, immediate) => {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  let dbChecker = debounce(checkHeader);

  dbChecker();

}

//window.addEventListener("scroll", ()=>scrollChangeArrow('site-branding-id'));
window.addEventListener("scroll", ()=>scrollChangeArrow('page-up-nav'));