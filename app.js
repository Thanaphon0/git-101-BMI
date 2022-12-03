window.onload = () => {
    let button = document.getElementById("btn");
    button.addEventListener("click", calbmi);
  };
  
  function calbmi() {
    let h = parseInt(document.getElementById("height").value);
    let w = parseInt(document.getElementById("weight").value);
    let conditionH = false, conditionW = false
  
    if (h === " " || isNaN(h)) {
      document.getElementById("heightEor").innerHTML = "คุณกรอกผิด กรุณากรอกใหม่"
    }
    else {
      document.getElementById("heightEor").innerHTML = " "
      conditionH = true
    }
    if (w === " " || isNaN(w)) {
      document.getElementById("weightEor").innerHTML = "คุณกรอกผิด กรุณากรอกใหม่"
    }
    else {
      document.getElementById("weightEor").innerHTML = " "
      conditionW = true
    }
    if (conditionH && conditionW) {
      let bmi = (w / ((h * h) / 10000)).toFixed(2);
        document.getElementById("Result").innerHTML = bmi
    
    }
  
  }
  