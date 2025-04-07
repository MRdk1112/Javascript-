function sub(){
    let inp = document.getElementById("inp")
    let inp1 = document.getElementById("inp1")
    let p = document.querySelector(".para")

    p.innerHTML = Number(inp.value) - Number(inp1.value)
    inp.value = ""
    inp1.value = ""
}