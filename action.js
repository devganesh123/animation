const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");

  });
  // if(tab.classList.contains("active")){
  //   setTimeout(circle,2000);
  // }

});

function circle(){
  const outerCircleContent=document.querySelector(".outer-circle-content");
  outerCircleContent.textContent=getComputedStyle(document.documentElement)
  .getPropertyValue('--dose-percent-outer-one') + "%" ;

  const innerCircleContent=document.querySelector(".inner-circle-content");
  innerCircleContent.textContent=getComputedStyle(document.documentElement)
  .getPropertyValue('--dose-percent-inner-one') + "%" ;

  const outerCircleContentTwo=document.querySelector(".outer-circle-content-two");
  outerCircleContentTwo.textContent=getComputedStyle(document.documentElement)
  .getPropertyValue('--dose-percent-outer-two') + "%" ;

  const secondOuterCircleContent=document.querySelector(".second-outer-circle-content");
  secondOuterCircleContent.textContent=getComputedStyle(document.documentElement)
  .getPropertyValue('--dose-percent-second-outer') + "%" ;

  const secondInnerCircleContent=document.querySelector(".second-inner-circle-content");
  secondInnerCircleContent.textContent=getComputedStyle(document.documentElement)
  .getPropertyValue('--dose-percent-second-inner') + "%" ;

  const secondOuterCircleContentTwo=document.querySelector(".second-outer-circle-content-two");
  secondOuterCircleContentTwo.textContent=getComputedStyle(document.documentElement)
  .getPropertyValue('--dose-percent-second-outer-two') + "%" ;

}

setTimeout(circle,2000);