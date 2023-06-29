let menuObj = {
    "Breakfast": {
        "scottish breakfast": "",
        "stuffed begels": "",
        "croissents": "",
        "egg benedict": ""
    },
    "Lunch": {
        "group of friends": "",
        "family fest": "",
        "basic lunch": "",
        "roti whatnot": ""
    },

    "dessert":
    {
        "cherrie on top": "",
        "layers of something": "",
        "chocolate cake": "",
        "Jelloe and cream": "",
    }

}
const records =[];

window.onload = function () {
    var menuSel = document.getElementById("menu");
    var theFoodSel = document.getElementById("thefood");
    
    for (var x in menuObj) {
        menuSel.options[menuSel.options.length] = new Option(x, x);
    }
    menuSel.onchange = function () {

        theFoodSel.length = 1;

        for (var y in menuObj[this.value]) {
            theFoodSel.options[theFoodSel.options.length] = new Option(y, y);

        }
    }

    theFoodSel.onchange = function () {

        var z = menuObj[menuSel.value][this.value];

        for (var i = 0; i < z.length; i++) {
            theFoodSel.options[theFoodSel.options.length] = new Option(z[i], z[i]);
        }
    }
}

function displayInPuts() {
    var manu = document.getElementById("menu").value;
    var thefood = document.getElementById("thefood").value;

    var sides = document.querySelectorAll("input[name='sides']");
    let sideVal = sides[0].checked ? sides[0].value : sides[1].value;

    
    var listArray = [];

    var checkboxes = document.getElementsByName('sauce');
    for (var checkbox of checkboxes) {
        if (checkbox.checked) {
            listArray.push(checkbox.value)
        }



        var quantity = document.getElementById("quantity").value
        console.log(listArray);
        var display = " " + manu + " " + " " + thefood + " " + "" + sideVal + " " +
            " " + listArray + " " + " " + quantity;

        document.getElementById("displayText").innerHTML = display;
        records.push(display);
        console.log(records);
        alert(display)
        ;
    };
 

};
