const deleteButton = document.querySelectorAll(".fa-trash");
const likeButton = document.querySelectorAll(".fa-thumbs-up");

Array.from(deleteButton).forEach((element) => {
  element.addEventListener("click", deleteBlog);
});

Array.from(likeButton).forEach((element) => {
  element.addEventListener("click", addLike);
});

async function deleteBlog() {
  const blogTitle = this.parentNode.childNodes[1].innerText;
  const blogContent = this.parentNode.childNodes[3].innerText;
  try {
    const response = await fetch("deleteBlog", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: blogTitle,
        blog: blogContent,
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
  const blogTitle = this.parentNode.childNodes[1].innerText;
  const blogContent = this.parentNode.childNodes[3].innerText;
  const likes = Number(this.parentNode.childNodes[7].innerText);
  try {
    const response = await fetch("addOneLike", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: blogTitle,
        blog: blogContent,
        likes: likes,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
