const deleteBlog = document.querySelector(".delete-button");

deleteBlog.addEventListener("click", (_) => {
  fetch("/blogs", {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "Hello World!",
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      window.location.reload(true);
    });
});
