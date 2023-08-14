const weightInput = document.getElementById("weight-input")
const heightInput = document.getElementById("height-input")
const bmiBtn = document.getElementById("bmi-btn")
const bmiResult = document.getElementById("bmi-result")
const bmiClass = document.getElementById("bmi-class")
let numberW = 0
let numberH = 0


 bmiBtn.addEventListener("click", function(){
   numberW = weightInput.value
    numberH = heightInput.value
   calculateBmi()
   weightInput.value = ""
   heightInput.value = ""
 })



function calculateBmi(){ 
   if(weightInput.value ==="" && heightInput.value===""){
    bmiResult.textContent = ""
   }else if(weightInput.value === "" || heightInput.value ==="" ){
    bmiResult.textContent = ""
   }else{
   
   
    let bmi =  Math.round((numberW/(numberH*numberH) + Number.EPSILON) * 100) / 100
    
    bmiResult.textContent = bmi

    if(bmi<18.5){
        bmiClass.textContent = `You are Underweight`
    }else if (bmi >= 18.5 && bmi <= 25){
        bmiClass.textContent = `You are Healthy`
    }else if (bmi >= 25 && bmi <= 30){
        bmiClass.textContent =`You are Overweight`
    }else if (bmi > 30){
        bmiClass.textContent = `You are Obese`
    }
}
}

