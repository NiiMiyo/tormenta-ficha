function updateCa() {
  let halfLevel = parseInt(document.getElementById("metade-nivel").value)
  const desMod = parseInt(document.getElementById("mod-des").value)
  const armorBonus = parseInt(document.getElementById("bonus-armadura").value)
  const shieldBonus = parseInt(document.getElementById("bonus-escudo").value)
  const sizeMod = parseInt(document.getElementById("ca-mod-tamanho").value)
  const others1 = parseInt(document.getElementById("ca-outros1").value)
  const others2 = parseInt(document.getElementById("ca-outros2").value)

  if (halfLevel < 0) {
    document.getElementById("metade-nivel").value = 0
    halfLevel = 0
  }

  document.getElementById("ca-total").value = 10 + halfLevel + desMod + armorBonus + shieldBonus + sizeMod + others1 + others2

  document.getElementById("ca-mod-des").value = desMod
}
