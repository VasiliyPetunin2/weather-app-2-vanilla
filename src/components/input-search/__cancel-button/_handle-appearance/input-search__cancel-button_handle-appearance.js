(function () {
    const searchInput = document.querySelector(".input-search");
    const cancelButton = document.querySelector(".input-search__cancel-button");

    searchInput.addEventListener("input", (e) => {
        e.target.value
            ? cancelButton.classList.add("input-search__cancel-button_handle-appearance")
            : cancelButton.classList.remove("input-search__cancel-button_handle-appearance");
    });
})();
