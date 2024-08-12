const priorityLabel = document.querySelector(".data-priority-label");

sortByPriority();

priorityLabel.addEventListener("click", (e) => {
  if (
    e.currentTarget.classList.value
      .split(" ")
      .includes("data-priority-label--reverse") ||
    e.currentTarget.classList.value
      .split(" ")
      .includes("data-priority-label--nofilter")
  ) {
    e.currentTarget.classList = "data-priority-label";
    e.currentTarget.innerHTML = "По пріоритету &#8595;";
    sortByPriority();
  } else {
    e.currentTarget.classList =
      "data-priority-label data-priority-label--reverse";
    e.currentTarget.innerHTML = "По пріоритету &#8593;";
    sortByPriority(true);
  }
});

function sortByPriority(isReverse) {
  const selectList = document.querySelectorAll(".data-priority");
  const selectListPriority = [];

  selectList.forEach((element) => {
    selectListPriority.push({ priority: element.textContent, element });
  });
  selectListPriority.sort((a, b) =>
    isReverse ? b.priority - a.priority : a.priority - b.priority
  );

  const wrapper = document.querySelector(".wonder_apps_cards");
  wrapper.innerHTML = "";
  selectListPriority.forEach((item) => {
    wrapper.append(item.element.parentElement.parentElement.parentElement);
  });
  resetPrice();
}
function resetPriority() {
  const selectList = document.querySelector(".data-priority-label");

  selectList.classList = "data-priority-label data-priority-label--nofilter";
  selectList.innerHTML = "По пріоритету";
}

const priceLabel = document.querySelector(".data-price-label");

priceLabel.addEventListener("click", (e) => {
  if (
    e.currentTarget.classList.value
      .split(" ")
      .includes("data-price-label--reverse") ||
    e.currentTarget.classList.value
      .split(" ")
      .includes("data-price-label--nofilter")
  ) {
    e.currentTarget.classList = "data-price-label";
    e.currentTarget.innerHTML = "По ціні &#8595;";
    sortByPrice();
  } else {
    e.currentTarget.classList = "data-price-label data-price-label--reverse";
    e.currentTarget.innerHTML = "По ціні &#8593;";
    sortByPrice(true);
  }
});

function sortByPrice(isReverse) {
  const selectList = document.querySelectorAll(".data-price");
  const selectListPriority = [];

  selectList.forEach((element, index) => {
    selectListPriority.push({ priority: element.textContent, element });
  });
  selectListPriority.sort((a, b) =>
    isReverse ? b.priority - a.priority : a.priority - b.priority
  );

  const wrapper = document.querySelector(".wonder_apps_cards");
  wrapper.innerHTML = "";
  selectListPriority.forEach((item) => {
    wrapper.append(item.element.parentElement.parentElement.parentElement);
  });
  resetPriority();
}

function resetPrice() {
  const selectList = document.querySelector(".data-price-label");

  selectList.classList = "data-price-label data-price-label--nofilter";
  selectList.innerHTML = "По ціні";
}
