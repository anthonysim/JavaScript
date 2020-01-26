// grabs the class "control inputs" and places it in a const "inputs"
const inputs = document.querySelectorAll('.controls input');

// function to update spacing, blue, and base color
function handleUpdate() {
    // this grabs the dataset sizing of "px" if it exists, if it doesn't
    // it returns ''. base color doesn't have a "px" so it will have a ''
    const suffix = this.dataset.sizing || '';
    // document.documentElement returns the element that is the root element
    // of the document.
    // style.setProperty sets a new value for a property.
    // '--' + this.name grabs the name specified in the input.
    // this.value changes the value of the property.
    document.documentElement.style.setProperty('--' + this.name, this.value + suffix);
}

// iterates through spacing, blue, and base, color.
// a change, meaning if the toggle is clicked into a new place or a mouse
// moves into a new place, the handleUpdate function is initiated.
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));