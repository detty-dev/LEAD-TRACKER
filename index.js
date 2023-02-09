const treeEl = document.getElementById("tree-el")
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn =document.getElementById("delete-btn")
const tabBtn =document.getElementById("tab-btn")
const getLocal= JSON.parse( localStorage.getItem("myLead") )
let myLead = []
const tab = [
    {url:"https://www.google.com"}
]

 //gettion localStorage
 
 if (getLocal) {
     myLead = getLocal
     render(myLead)
 }
      
        //adding a function
      function render(lead) {
    let listItem = ""
    for (i = 0; i < lead.length;i++) {
    listItem+=  `
    <li>
    <a target='_blank' href='${lead[i]}'>
    ${lead[i]}
    </a>  
    </li>
    `
    }            
     ulEl.innerHTML = listItem
}     
            // adding evenyt listeners    
tabBtn.addEventListener("click", function() {
    myLead.push(tab[0].url)
    localStorage.setItem("myLead", JSON.stringify(myLead) )
    render(myLead)
})    
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLead = []
    render(myLead)
})                  
inputBtn.addEventListener("click", function() {
    myLead.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem=("myLead", JSON.stringify(myLead))
   render(myLead)
})



