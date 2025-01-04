const input = document.getElementById("example1");
input.addEventListener("keyup", (e) => {
    if (e.keycode === 13) {
        alert("ok");
        e.preventDefault();
        // sendMessage();
        $(".message-form").trigger("submit");
    }
});
