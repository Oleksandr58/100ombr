const selectList = document.querySelectorAll(".wonder_apps__input_select");

selectList.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle(
      "wonder_apps__input_select--active"
    );
  });
});

const optionList = document.querySelectorAll(".wonder_apps__input_select_item");

optionList.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.currentTarget.parentElement.parentElement.querySelector(
      ".wonder_apps__input_select"
    ).textContent = e.currentTarget.textContent;
    e.currentTarget.parentElement.parentElement.setAttribute(
      "data-value",
      e.currentTarget.textContent
    );
    e.currentTarget.parentElement.parentElement.classList.toggle(
      "wonder_apps__input_select--active"
    );
  });
});

const menu = document.querySelectorAll(".wonder_apps_header_menu");

menu.forEach((element) => {
  element.addEventListener("click", () => {
    console.log("click");
    document
      .querySelector(".wonder_apps__header_nav")
      .classList.toggle("wonder_apps__header_nav--active");
  });
});

const menuItems = document.querySelectorAll(".wonder_apps__header_nav ul li");

menuItems.forEach((element) => {
  element.addEventListener("click", (e) => {
    console.log(e.currentTarget.parentElement);
    e.currentTarget.parentElement.parentElement.classList.toggle(
      "wonder_apps__header_nav--active"
    );
  });
});
