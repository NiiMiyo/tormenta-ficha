function updateHabilidades(hab) {
  const value = parseInt(document.getElementById("hab-"+hab).value)
  let modNum = parseInt(value / 2) - 5

  let mod = modNum > 0 ? "+" + modNum : modNum

  document.getElementById("mod-"+hab).value = mod
}
