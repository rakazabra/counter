let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");
let display = document.getElementById("output");
let PlusChange = document.getElementById("plus-change-btn");
let MinusChange = document.getElementById("minus-change-btn");
let output = 0;
let PlusChangeNumber = null;
let MinusChangeNumber = null;


PlusChange.addEventListener("click", function() {
    PlusChangeNumber = Number( prompt("What number you wont to change for plus?"));
    });

plus.addEventListener("click", function() {
    if(PlusChangeNumber === null) {
        PlusChangeNumber = 1;   
    }
    if(PlusChangeNumber != 0 && PlusChangeNumber != 1) {
        output += PlusChangeNumber;
        console.log(output);
        display.textContent = `counted: ${output}`;
    }
    else {
output++;
console.log(output);
display.textContent = `counted: ${output}`; 
}
});

MinusChange.addEventListener("click", function() {
    MinusChangeNumber = Number( prompt("What number you wont to change for minus?"));
    });


minus.addEventListener("click", function() {
    if(MinusChangeNumber === null) {
        MinusChangeNumber = 1;   
    }
    if(MinusChangeNumber != 0 && MinusChangeNumber != 1) {
        output -= MinusChangeNumber;
        console.log(output);
        display.textContent = `counted: ${output}`;
    }
    else {
        output--;
console.log(output);
display.textContent = `counted: ${output}`; 
}
});



reset.addEventListener("click", function() {
    const resetConfirm = document.createElement("p");
    resetConfirm.innerHTML = "<p>Are you really wont to reset counter?</p>";



    const btn1 = document.createElement("button");
    btn1.className = "yes";
    btn1.innerHTML = "Yes"
    btn1.addEventListener("click", function() {
        output = 0;
        console.log(output);
        display.textContent = `counted: ${output}`;
        resetConfirm.remove();
        btn1.remove();
        btn2.remove();
        });

        const btn2 = document.createElement("button");
        btn2.className = "no";
        btn2.innerHTML = "No";
        btn2.addEventListener("click", function() {
            resetConfirm.remove();
            btn1.remove();
            btn2.remove();
    });

    document.body.appendChild(resetConfirm);
    document.body.appendChild(btn1);
    document.body.appendChild(btn2);
});




