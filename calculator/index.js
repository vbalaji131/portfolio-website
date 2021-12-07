window.onload = function () {
    document.querySelector(".display-one").value = "";
    document.querySelector(".display-two").value = "";
}

let values = {
    num1: '',
    num2: '',
};

let dlt = document.querySelector(".delete");
dlt.addEventListener('click', clickedDelete);
dlt.addEventListener('dblclick', clickedDeleteAll);

function clicked(arg) {
    values.num1 += arg;
    document.querySelector(".display-one").value = values.num1;
}

function clickedEqual(arg) {
    try {
        values.num2 = eval(values.num1);
        document.querySelector(".display-two").value = values.num2;
        values.num1 = values.num2;
    } catch (error) {
        document.querySelector(".display-two").value = "ERROR";
        values.num1 = "";
        document.querySelector(".display-one").value = "";
    }
}
function clickedDeleteAll() {
    document.querySelector(".display-one").value = '';
    document.querySelector(".display-two").value = '';
    values.num1 = '';
}
function clickedDelete() {
    let lastChar = (values.num1).length - 1;
    values.num1 = (values.num1).substring(0, (lastChar));
    document.querySelector(".display-one").value = values.num1;
}