const deleteButton = document.querySelectorAll(".fa-trash");
const likeButton = document.querySelectorAll(".fa-thumbs-up");

Array.from(deleteButton).forEach((element) => {
  element.addEventListener("click", deleteBlog);
});

Array.from(likeButton).forEach((element) => {
  element.addEventListener("click", addLike);
});

async function deleteBlog() {
  const blogId = this.parentNode.dataset.id;
  try {
    const response = await fetch("blogs", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        blogIdFromJSFile: blogId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (error) {
    console.log(error);
  }
}

async function addLike() {
  const blogId = this.parentNode.dataset.id;
  try {
    const response = await fetch("blogs", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        blogIdFromJSFile: blogId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
