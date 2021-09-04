const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// var hello = "hello"

// //Question 1

const cat = {
    complain: function() {
        console.log("meow");
    }
        
    
}
cat.complain();

// //Question 2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";

// console.log(heading)

//Question 3

heading.style.fontSize = "2em";

//Question 4

heading.className = "subheading";

//Question 5

const paragraphs = document.querySelectorAll("p");

for(let i = 0; i < paragraphs.length; i++){
    //console.dir(paragraphs[i].innerHTML);

    paragraphs[i].style.color = "red";
}


// //Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `
    <p>New paragraph</p>
`;
resultsContainer.style.background = "yellow";

//console.log(resultsContainer);

// //Question 7

function findCats (list){
    for(let i = 0; i < list.length; i++){
        // console.log(list[i].name);
    }
}

findCats(cats);

//Question 8

const container = document.querySelector(".cat-container");

console.log();

let html = "";

function createCats(){
    for(let i = 0; i < cats.length; i++){
        // console.log(cats[i].age);
        if(cats[i].age === undefined){
            // html+=  `<p>${cats[i].age} Age unknown </p>`; NEIIIIII
            
        }
        html += `<div>
                    <h5>${cats[i].name}</h5>
                    <p>Age:${cats[i].age}</p>
        
                </div>
        `;
    }
    container.innerHTML = html;
    console.log(html);
}



createCats();






// function createCats(){
//     let html =""
//     for(let i = 0; i < cats.length; i++){
//         let ageNot = "Uknown age";
//         if (cats[i].age) {
//             catsNot = cats[i].age;

//         }
//         html += `<div>
//             <h5>${cats[i].name}</h5>
//             <p>Age: ${cats[i].age}</p>
//         </div>
//         `;
//     }
//     return html;
// }
// createCats();



