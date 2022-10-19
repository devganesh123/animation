const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const svgCircles = document.querySelectorAll(".circle-round");
console.log(svgCircle);

tabs.forEach((tab) => {
  svgCircles.forEach((svgCircle) => {
    if (tab.classList.contains("active")) {
      svgCircle.style = "animation: animRotate 2s linear forwards;";
    }
  });

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
});
