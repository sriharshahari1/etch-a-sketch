const slider=document.getElementById("slider");
const sliderValue=document.getElementById("sliderValue");
const container=document.getElementById("container");
const black=document.getElementById("black");
const warm=document.getElementById("warm");
const cold=document.getElementById("cold");
const rgb=document.getElementById("rgb");
const eraser=document.getElementById("eraser");
let baseDiv;
let newGrid;

//function to show the grid value selected via the slider
sliderValue.textContent="5x5";
slider.onchange=function(){
    container.style.setProperty('grid-template-columns', 'repeat(' + slider.value + ', 1fr)');
    sliderValue.textContent=this.value + 'x' + this.value;
    document.querySelectorAll('.baseElements').forEach(f => f.remove());
    document.querySelectorAll('.newElements').forEach(e => e.remove());
    addGrid();
    let colorBtn=document.querySelectorAll(".btn");
    colorBtn.forEach(button => {
            removeActiveStyle(colorBtn);
    });
}

//code to create the default 5x5 grid
container.style.setProperty('grid-template-columns', 'repeat(5, 1fr)');
for(i=1;i<=5;i++){
    for(j=1;j<=5;j++){
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

//function to link color buttons to js and giving each button their values
function chooseColor(){
    let colorBtn=document.querySelectorAll(".btn");
    colorBtn.forEach(button => {
        button.addEventListener('click',()=>{
            removeActiveStyle(colorBtn);
            if(button.classList.contains('black')){
                colorBtn[0].classList.add('active');
                generateColors('black','#000000');
            }
            else if(button.classList.contains('warm')){
                colorBtn[1].classList.add('active');
                generateColors('warm',['#470D21','#9C0F48','#D67D3E','#F9E4D4']);
            }
            else if(button.classList.contains('cold')){
                colorBtn[2].classList.add('active');
                generateColors('cold',['#B3E8E5','#82DBD8','#3BACB6','#2F8F9D']);
            }
            else if(button.classList.contains('rgb')){
                colorBtn[3].classList.add('active');
                generateColors('rgb',['#187498', '#36AE7C','#F9D923', '#EB5353', '#FF6FB5']);
            }
            else if(button.classList.contains('eraser')){
                colorBtn[4].classList.add('active');
                generateColors('eraser','#ffffff');
            }
        });
    });
}

chooseColor();

//function from removing style on clicking other button
function removeActiveStyle(buttons) {
    buttons.forEach((button)=>{
        button.classList.remove('active');
    })
}


//function to generate the colors when you hover
function generateColors(name,color){
    const gridItem = document.querySelectorAll("#container > div")
    gridItem.forEach(element => {
        if(name==="black" || name==="eraser"){
            element.addEventListener('mouseenter',(e)=>{
                e.target.style.backgroundColor=color;
            })
        }
        if(name==="warm" || name==="cold" || name==="rgb"){
            element.addEventListener('mouseenter',(e)=>{
                e.target.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
            })
        }
    });
}


