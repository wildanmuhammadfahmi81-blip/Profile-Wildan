// PAGE TRANSITION GLOBAL
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-enter");
});

document.querySelectorAll("a").forEach(link => {
  const isInternal =
    link.hostname === window.location.hostname &&
    !link.hasAttribute("target") &&
    !link.href.includes("#");

  if (isInternal) {
    link.addEventListener("click", e => {
      e.preventDefault();

      const transition = document.getElementById("page-transition");
      transition.classList.add("active");

      setTimeout(() => {
        window.location.href = link.href;
      }, 500);
    });
  }
});
