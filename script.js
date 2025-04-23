console.log("making calculator");
function calculateSum(){
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const result = parseInt(a) + parseInt(b);
    document.getElementById("sum").value = result;
};

function calculateSub(){
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const result = parseInt(a) - parseInt(b);
    document.getElementById("sub").value = result;
};

function calculateMultiple(){
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const result = parseInt(a) * parseInt(b);
    document.getElementById("Multiple").value = result;

};

function calculateDivision(){
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const result = parseInt(a) / parseInt(b);
    document.getElementById("Division").value = result;

}