(function () {
    const searchInput = document.querySelector(".input-search__input");

    searchInput.addEventListener("input", (e) => {
        e.target.value
            ? searchInput.classList.add("input-search__input_handle-icon")
            : searchInput.classList.remove("input-search__input_handle-icon");
    });
})();
