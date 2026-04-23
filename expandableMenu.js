const expandableMenu = () => {
  // Hämta in element från DOM
  const menuButton = document.querySelector(".hamburger-menu")
  const expandedMenu = document.querySelector(".hamburgermenu-expanded")
  const listElementPaGang = document.querySelector(
    ".hamburgermenu-expanded__listitem--with-sub-menu",
  )

  //Funktioner
  //   Funktion för att toggla utfälld meny
  const toggleExpandableMenu = () => {
    console.log("Klickat på knappen...")
    expandedMenu.classList.toggle("visible")
  }

  //   Funktion för att toggla utfälld submeny vid på gång
  const toggleSubMenu = () => {}

  // Eventlyssnare
  menuButton.addEventListener("click", toggleExpandableMenu)
  listElementPaGang.addEventListener("click", toggleSubMenu)
}

expandableMenu()
