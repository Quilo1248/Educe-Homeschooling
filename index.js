var navlinks = document.getElementById("navLinks");

      function ShowMenu() {
        navlinks.style.right = "0";
      }
      function HideMenu() {
        navlinks.style.right = "-200px";
      }

document.body.addEventListener("click", (ev)=>{
const IsExpandableTitle = !!ev.target.closest(".expandable-bar");
const expandable = ev.target.closest(".expandable");

if (!IsExpandableTitle) {
    return;
}
expandable.classList.toggle("expandable-open");
})