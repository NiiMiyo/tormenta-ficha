const pageTitle = document.getElementById("page-title").textContent

function updateTitle() {
  const name = document.getElementById("nome").value

  const prefix = name.length === 0 ? "" : " - "
  document.getElementById("page-title").textContent = pageTitle + prefix + name
}
