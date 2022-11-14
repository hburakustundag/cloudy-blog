const deleteButton = document.querySelectorAll(".fa-trash");

Array.from(deleteButton).forEach((element) => {
  element.addEventListener("click", deleteBlog);
});

async function deleteBlog() {
  const blogTitle = this.parentNode.childNodes[1].innerText;
  const blogContent = this.parentNode.childNodes[2].innerText;
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
