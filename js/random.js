

function randomCalculate(){
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    return color;
}
function setRandom(id, color){
    const triangleRandom = document.getElementById(id);
    triangleRandom.style.backgroundColor = color;
}



document.getElementById('triangle-random').addEventListener('mouseover', function(){
   const calculate = randomCalculate();
   setRandom('triangle-random', calculate);
    
})

document.getElementById('rectangle-random').addEventListener('mouseover', function(){
   const calculate = randomCalculate();
   setRandom('rectangle-random', calculate);
    
})

document.getElementById('parallelogram-random').addEventListener('mouseover', function(){
   const calculate = randomCalculate();
   setRandom('parallelogram-random', calculate);
    
})

document.getElementById('rhombus-random').addEventListener('mouseover', function(){
   const calculate = randomCalculate();
   setRandom('rhombus-random', calculate);
    
})

document.getElementById('pentagon-random').addEventListener('mouseover', function(){
   const calculate = randomCalculate();
   setRandom('pentagon-random', calculate);
    
})

document.getElementById('ellipse-random').addEventListener('mouseover', function(){
   const calculate = randomCalculate();
   setRandom('ellipse-random', calculate);
    
})