



function field(elementId) {
    const baseFieldElement = document.getElementById(elementId);
    const baseFieldElementString = baseFieldElement.value;
    const baseFieldFixed = parseFloat(baseFieldElementString);
    if (isNaN(baseFieldFixed)) {
        alert('Please Provide a Correct value??');
       return;
    }
     
    else {
        const baseField = baseFieldFixed.toFixed(2)
        return baseField;
    }
}
function setField(id1, id2, value) {
        
    const triangleResultElement = document.getElementById(id1);
    const triangleText = document.getElementById(id2);
    
    if(isNaN(value)){
        triangleText.style.display = 'none';
    }
    
    else{
        triangleResultElement.innerText = value;
        triangleText.style.display = 'block';
    }
}


// function getText(id) {
//     const triangleText = document.getElementById(id);
//     triangleText.style.display = 'block';
// }



document.getElementById('btn-triangle').addEventListener('click', function () {

    const baseField = field('base-field');

    const heightField = field('height-field');

    const triangleTheory = 0.5 * baseField * heightField;
    setField('triangle-result','triangle-text', triangleTheory)

    // getText('triangle-text')

})

document.getElementById('btn-rectangle').addEventListener('click', function () {
    const weightField = field('weight-field');

    const lengthField = field('length-field');

    const rectangleTheory = weightField * lengthField;
    setField('rectangle-result','rectangle-text', rectangleTheory)

    // getText('rectangle-text')
})

document.getElementById('btn-parallelogram').addEventListener('click', function () {
    const baseField = field('base-field-parallelogram');

    const heightField = field('height-field-parallelogram');

    const parallelogramTheory = baseField * heightField;

    setField('parallelogram-result','parallelogram-text', parallelogramTheory)

    // getText('parallelogram-text')

})

document.getElementById('btn-rhombus').addEventListener('click', function () {
    const firstDistance = field('first-distance-field');
    const secondDistance = field('second-distance-field');
    const rhombusTheory = firstDistance * secondDistance;
    setField('rhombus-result', 'rhombus-text', rhombusTheory)
    // getText('rhombus-text');
})

document.getElementById('btn-pentagon').addEventListener('click', function () {
    const pentagonDistance = field('pentagon-field');
    const pentagonBase = field('pentagon-base-field');
    const pentagonTheory = 0.5 * pentagonDistance * pentagonBase;
    setField('pentagon-result', 'pentagon-text', pentagonTheory)
    // getText('pentagon-text');
})

document.getElementById('btn-ellipse').addEventListener('click', function () {
    const ellipseAreaField = field('ellipse-area-field');
    const ellipseBaseField = field('ellipse-base-field')
    const ellipseTheory = 3.14 * ellipseAreaField * ellipseBaseField;
    setField('ellipse-result', 'ellipse-text', ellipseTheory)
    // getText('ellipse-text')
})