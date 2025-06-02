const title = document.getElementById("title");
const description = document.getElementById("description");

const form = document.querySelector("form");

const container = document.querySelector(".container");

const tasks= sessionStorage.getItem("tasks") ?
 JSON.parse(sessionStorage.getItem("tasks")) : [];

showAlltasks();

// let a,b;
// a=4,b=2;
//  a>b ? console.log(a- b)  : console.log(b-a) ;


// title.addEventListener("click",()=>{
//     console.log("hello");
// });


function showAlltasks(){
    tasks.forEach((value,index) =>{
        const div=document.createElement("div");
        div.setAttribute("class","task");
        
        const second_div = document.createElement("div");
        div.append(second_div);
        
        const p= document.createElement("p");
        p.innerText = value.title;  //value isliye kiya kuiki forEach me value hai first parameter
        second_div.append(p); 
        
        const span = document.createElement("span");
        span.innerText = value.description;
        second_div.append(span);

        const delete_btn = document.createElement("button");
        delete_btn.setAttribute("class","delete-Btn");
        delete_btn.innerText = "-";
        div.append(delete_btn);
        
        container.append(div);
        
        delete_btn.addEventListener("click" , ()=>{
            deleteAlltasks();
            tasks.splice(index,1);
            showAlltasks();
            localStorage.setItem("tasks",JSON.stringify(tasks));



    });
    });
    
};



function deleteAlltasks(){
    // delete_btn.addEventListener("click" ,()=>{
    // tasks.pop(tasks.values);
    tasks.forEach(() =>{
    const div= document.querySelector(".task");
    div.remove();
    });
};
    



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    deleteAlltasks();
    tasks.push({
        title: title.value,
        description: description.value,
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
    
    showAlltasks();
;});
    
    















