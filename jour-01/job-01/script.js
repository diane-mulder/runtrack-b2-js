let nom = document.getElementById("nom")
console.log (nom.value)

let conditions = document.getElementById("conditions")
console.log (conditions.checked)

let listebtnradio = document.querySelectorAll("input[type=radio]")
for (let i=0; i<listebtnradio.length; i++){
    if (listebtnradio[i].checked){
        console.log(listebtnradio[i].value)
    }
}

nom.addEventListener("change", () => {
    console.log(nom.value)
})