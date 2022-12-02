
//remove quantity
var mines_btns = document.getElementsByClassName("minus-items");
for (let el of mines_btns) {

    el.addEventListener("click" , function () {
        if (el.nextElementSibling.value > 0 ) { el.nextElementSibling.value--; total ()}
        else {
            alert ("opps")
        }
    })
}
//add quality
var plus_btns = document.getElementsByClassName("plus-items");
for (let el of plus_btns) {
    el.addEventListener("click", function (){ el.previousElementSibling.value++; total();
    })
}

//remove
var rems = document.getElementsByClassName("delete-item")
for (let el of rems) {
    el.addEventListener("click", function () { console.log(el.parentNode.parentNode.parentNode.remove())})
}




function total () {
    var prix = document.getElementsByClassName("price");
    var qts = document.getElementsByClassName("qte");
    var sum = 0;
    sum+=(parseInt(prix[0].innerHTML.substring(0,prix[0].innerHTML.length-2)) * qts[0].value)
    console.log(sum)
    document.getElementsByClassName("total")[0].innerHTML=sum+"$";
}