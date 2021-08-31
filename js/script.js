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

var hello = "hello"

//Question 1

const cat = {
    complain: function() {
        console.log("meow");
    }
        
    
}
cat.complain();

//Question 2

const heading = document.querySelector("h3");

heading.InnerHTML = "updated heading";