const slider=document.getElementById("slider");
const sliderValue=document.getElementById("sliderValue");
const container=document.getElementById("container");
let baseDiv;
let newGrid;

//function to show the grid value selected via the slider
sliderValue.textContent="2x2";
slider.onchange=function(){
    container.style.setProperty('grid-template-columns', 'repeat(' + slider.value + ', 1fr)');
    sliderValue.textContent=this.value + 'x' + this.value;
    document.querySelectorAll('.baseElements').forEach(f => f.remove());
    document.querySelectorAll('.newElements').forEach(e => e.remove());
    addGrid();
}

container.style.setProperty('grid-template-columns', 'repeat(2, 1fr)');
for(i=1;i<=2;i++){
    for(j=1;j<=2;j++){
        baseDiv=document.createElement("div");
        baseDiv.className="baseElements";
        container.appendChild(baseDiv);

    }
}

//function to create grid

function addGrid() {
    for(let i=1;i<=slider.value;i++){
        for(let j=1;j<=slider.value;j++){
            newGrid=document.createElement("div");
            newGrid.className="newElements";
            container.appendChild(newGrid);
        }
    }
}