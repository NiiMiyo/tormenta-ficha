function updateResistencias() {
  const desMod = parseInt(document.getElementById("mod-des").value)
  const conMod = parseInt(document.getElementById("mod-con").value)
  const sabMod = parseInt(document.getElementById("mod-sab").value)

  document.getElementById("res-fort-mod").value = conMod
  document.getElementById("res-ref-mod").value = desMod
  document.getElementById("res-von-mod").value = sabMod;

  ["fort", "ref", "von"].forEach(r => {
    const halfLevel = parseInt(document.getElementById(`res-${r}-metade-nivel`).value)
    const mod       = parseInt(document.getElementById(`res-${r}-mod`).value)
    const outros    = parseInt(document.getElementById(`res-${r}-outros`).value)

    const total = halfLevel + mod + outros
    document.getElementById(`res-${r}-total`).value = total
  })
}
