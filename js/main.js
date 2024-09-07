let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");
let display = document.getElementById("output");
let PlusChange = document.getElementById("plus-change-btn");
let MinusChange = document.getElementById("minus-change-btn");
let PlusReset = document.getElementById("reset-plus-btn");
let MinusReset = document.getElementById("reset-minus-btn");
let allreset = document.getElementById("all-number-reset");
let output = 0;
let PlusChangeNumber = null;
let MinusChangeNumber = null;


            PlusChange.addEventListener("click", function() {
            const plchange = document.createElement("input");
            const plChangeConfirm = document.createElement("button");
            const PlChangeDenide = document.createElement("button");

            plchange.type = "number";
            plchange.placeholder = "Give the number";   

            PlChangeDenide.innerHTML = "Denide";
            plChangeConfirm.innerHTML = "Aplly";


            plChangeConfirm.addEventListener("click", function() {
            const PlusValue = parseInt(plchange.value, 10);
                    if(!isNaN(PlusValue)) {
                        PlusChangeNumber = PlusValue;
                    }

            plchange.remove();
            plChangeConfirm.remove();
            PlChangeDenide.remove(); 
           });

           PlChangeDenide.addEventListener("click", function() {
            plchange.remove();
            plChangeConfirm.remove();
            PlChangeDenide.remove();
           });
          
          

            document.body.appendChild(plchange);
            document.body.appendChild(plChangeConfirm);
            document.body.appendChild(PlChangeDenide);
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
    const Mnchange = document.createElement("input");
    const MnChangeConfirm = document.createElement("button");
    const MnChangeDenide = document.createElement("button");

    Mnchange.type = "number";
    Mnchange.placeholder = "Give the number";   

    MnChangeDenide.innerHTML = "Denide";
    MnChangeConfirm.innerHTML = "Aplly";


 

    MnChangeConfirm.addEventListener("click", function() {
    const MinusValue = parseInt(Mnchange.value, 10);
            if(!isNaN(MinusValue)) {
                MinusChangeNumber = MinusValue;
                Mnchange.remove();
                MnChangeConfirm.remove();
                MnChangeDenide.remove();
            }

   });

   MnChangeDenide.addEventListener("click", function() {
    Mnchange.remove();
    MnChangeConfirm.remove();
    MnChangeDenide.remove();
   });
  
   document.body.appendChild(Mnchange);
   document.body.appendChild(MnChangeConfirm);
   document.body.appendChild(MnChangeDenide);   
  

   
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

PlusReset.addEventListener("click", function() {
const resetPlusConfirm = document.createElement("p");
resetPlusConfirm.innerHTML = "<p>Are you really wont to reset the plus number?</p>"


const ResetPlusBtn = document.createElement("button");
ResetPlusBtn.className = "yes";
ResetPlusBtn.innerHTML = "Yes"
ResetPlusBtn.addEventListener("click", function() {
    PlusChangeNumber = 1;
    console.log(PlusChangeNumber);PlusReset.addEventListener("click", function() {
        const resetPlusConfirm = document.createElement("p");
        resetPlusConfirm.innerHTML = "<p>Are you really wont to reset the plus number?</p>"
        
        
        const ResetPlusBtn = document.createElement("button");
        ResetPlusBtn.className = "yes";
        ResetPlusBtn.innerHTML = "Yes"
        ResetPlusBtn.addEventListener("click", function() {
            PlusChangeNumber = 1;
            console.log(PlusChangeNumber);
            resetPlusConfirm.remove();
            ResetPlusBtn.remove();
            btn2.remove();
            });
        
            const btn2 = document.createElement("button");
            btn2.className = "no";
            btn2.innerHTML = "No";
            btn2.addEventListener("click", function() {
                resetPlusConfirm.remove();
                ResetPlusBtn.remove();
                btn2.remove();
        });
        
        document.body.appendChild(resetPlusConfirm);
        document.body.appendChild(ResetPlusBtn);
        document.body.appendChild(btn2);
        });
    resetPlusConfirm.remove();
    ResetPlusBtn.remove();
    btn2.remove();
    });

    const btn2 = document.createElement("button");
    btn2.className = "no";
    btn2.innerHTML = "No";
    btn2.addEventListener("click", function() {
        resetPlusConfirm.remove();
        ResetPlusBtn.remove();
        btn2.remove();
});



document.body.appendChild(resetPlusConfirm);
document.body.appendChild(ResetPlusBtn);
document.body.appendChild(btn2);
});





MinusReset.addEventListener("click", function() {
    const resetMinusConfirm = document.createElement("p");
    resetMinusConfirm.innerHTML = "<p>Are you really wont to reset the minus number?</p>"
    
    
    const ResetMinusBtn = document.createElement("button");
    ResetMinusBtn.className = "yes";
    ResetMinusBtn.innerHTML = "Yes"
    ResetMinusBtn.addEventListener("click", function() {
        MinusChangeNumber = 1;
        console.log(MinusChangeNumber);
        resetMinusConfirm.remove();
        ResetMinusBtn.remove();
        btn2.remove();
        });
    
        const btn2 = document.createElement("button");
        btn2.className = "no";
        btn2.innerHTML = "No";
        btn2.addEventListener("click", function() {
            resetPlusConfirm.remove();
            ResetPlusBtn.remove();
            btn2.remove();
    });
    
    document.body.appendChild(resetMinusConfirm);
    document.body.appendChild(ResetMinusBtn);
    document.body.appendChild(btn2);
    });



    allreset.addEventListener("click", function() {
const alert = document.createElement("p");
alert.className = "reset-alert";
alert.innerHTML = "Are you really wont to reset The all of Plus and Minus Numbers";


        const ResetAllBtn = document.createElement("button");
        ResetAllBtn.className = "allreset";
        ResetAllBtn.innerHTML = "Yes";
        ResetAllBtn.addEventListener("click", function() {
            PlusChangeNumber = 1;
            MinusChangeNumber = 1;
            alert.remove();
                DenideResetAll.remove();
                ResetAllBtn.remove();
            });

            const DenideResetAll = document.createElement("button");
            DenideResetAll.className = "reset-denide";
            DenideResetAll.innerHTML = "No";
            DenideResetAll.addEventListener("click", function() {
                alert.remove();
                DenideResetAll.remove();
                ResetAllBtn.remove();
        });
        document.body.appendChild(alert);
    document.body.appendChild(ResetAllBtn);
    document.body.appendChild(DenideResetAll);
    });






