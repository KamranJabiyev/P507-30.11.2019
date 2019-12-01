// let dragItem=document.getElementById("dragItem");
// let dropItem=document.getElementById("dropItem");

// let Id;
// dragItem.ondragstart=function(ev){
//     ev.dataTransfer.setData("id",this.id);
//     // Id=this.id;
// }

// dragItem.ondragend=function(){
//     console.log("drag bitti");
// }

// dragItem.ondrag=()=>console.log("Drag davam edir");

// dropItem.ondragenter=function(){
//     console.log("drag enter")
// }

// dropItem.ondragleave=function(){
//     console.log("drag leave")
// }

// dropItem.ondragover=function(e){
//     e.preventDefault();
// }

// dropItem.ondrop=function(ev){
//     // console.log(ev.dataTransfer.getData("id"))
//     // let item=document.getElementById(Id);
//     // this.append(item);
// }

//Task-1

// let dragItems=document.querySelectorAll(".test");
// let dropItem=document.getElementById("dropItem");

// for(let item of dragItems){
//     item.ondragstart=function(ev){
//         ev.dataTransfer.setData("id",this.id);
//     }
// }


// dropItem.ondragover=e=> e.preventDefault();


// dropItem.ondrop=function(ev){
//     // ev.preventDefault();
//     let id=ev.dataTransfer.getData("id");
//     this.append(document.getElementById(id))
// }

// Task-2

let numbers=document.querySelectorAll(".number");
let items=document.querySelectorAll(".item");

let Id;
for(let number of numbers){
    number.ondragstart=function(){
       Id=this.id;
    }
}

for(let item of items){
    item.ondragover=ev=>ev.preventDefault();

    item.ondrop=function(){
        let dragElm=document.getElementById(Id);
        let number=Number(dragElm.getAttribute("data-num"));
        let min=Number(this.getAttribute("data-min"));
        let max=Number(this.getAttribute("data-max"));
        console.log(number+","+min+","+max);

        if(number>=min && number<=max){
            this.append(dragElm)
        }
    }
}