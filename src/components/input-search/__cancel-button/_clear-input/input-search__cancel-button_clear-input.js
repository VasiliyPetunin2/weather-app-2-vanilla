(function () {
    const searchInput = document.querySelector(".input-search__input");
    const cancelButton = document.querySelector(".input-search__cancel-button");

    cancelButton.addEventListener("click", (e) => {
        e.preventDefault();
        searchInput.value = "";
        searchInput.classList.remove("input-search_handle-icon");
        cancelButton.classList.remove("input-search__cancel-button_handle-appearance");
    });
})();
