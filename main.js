var model={
    cat: function(name, picture, clicks=0){
            this.name=name;
            this.picture=picture;
            this.clicks=clicks;
        }



 cat1:new cat("Eury", "image/cat1.jpg");
 cat2:new cat("Joe", "image/cat2.jpg");
 cat3:new cat("Kristen", "image/cat3.jpg");
 cat4:new cat("Eunice", "image/cat4.jpg");
 cat5:new cat("Chico", "image/cat5.jpg");

//List of all cats
 cats: [cat1,cat2,cat3,cat4,cat5];
 }

 var octopus={
     getCats: function(){
         return model.cats;
     }

 }
//View part
 var view={
//Initialize the left cat list
     init: function(){
}
 }
//Select left coloumn in dom
const leftColumn=document.querySelector(".col-4");
//Construct cat list
const ul=document.createElement("ul");
ul.className="list-group";
for(let cat of octopus.getCats()){
    const li= document.createElement("li");
    li.className="list-group-item";
    li.textContent=cat.name;
    li.addEventListener("click", ()=>{
        this.render(cat);
    })
    ul.appendChild(li);
}

leftColumn.appendChild(ul);

//Add admin button
const adminBtn= document.createElement("button");
adminBtn.textContent="Add New Cat";
adminBtn.className="btn btn-warning mt-3";
adminBtn.addEventListener("click", this.showForm)

leftColumn.appendChild(adminBtn);
//Add empty form
const form=  document.createElement("form");
leftColumn.appendChild(form);
},
//render the cat on the right
 render:function(cat){
const rightColumn= document.querySelector("col-8");
//Clear the display area
rightColumn.innerHTML="";
//Display the cat that I clicked
const h1= document.createElement("h1");
h1.textContent= cat.name;
rightColumn.appendChild(h1);

const img= document.createElement("img");
img.setAttribute("src", cat.picture);
img.setAttribute("alt", "cat");
img.addEventListener("click", ()=>{
    cat.clicks++;
    h2.textContent=`Clicks: ${cat.clicks}`;
})
rightColumn.appendChild(img);

const h2= document.createElement("h2");
h2.textContent=`Clicks: ${cat.clicks}`;
//h2.textContent= "Clicks:" + cat.clicks;//
rightColumn.appendChild(h2);
},
showForm: function() {
    const form= document.querySelector("form");
  //Reset the form
  form.innerHTML="";
//Adding name input
  const nameGroup= document.createElement("div");
  nameGroup.className="form-group";
  const nameLabel= document.createElement("label");
  nameLabel.textContent="Cat Name";
  nameLabel.setAttribute("for", "catName");
  const nameInput= document.createElement("input");
  nameInput.className="form-control";
  nameInput.setAttribute("id", "catName");
  nameGroup.appendChild(nameLabel);
  nameGroup.appendChild(nameInput);
  form.appendChild(nameGroup);

  //Adding image input
  const imgGroup= document.createElement("div");
  imgGroup.className="form-group";
  const imgLabel= document.createElement("label");
  imgLabel.textContent="Cat Picture";
  imgLabel.setAttribute("for", "catPicture");
  const imgInput= document.createElement("input");
  imgInput.className="form-control";
  imgInput.setAttribute("id", "catPicture");
  imgGroup.appendChild(imgLabel);
  imgGroup.appendChild(imgInput);
  form.appendChild(imgGroup);

}  
}

view init();

