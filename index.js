function clicked() {
    console.log("clicked")


    if ($(".list")[0].value.length == 0) {
        alert("Enter the task")
    }
    else if ($(".list")[0].value.length != 0) {
        let val = $(".list")[0].value;
        let id = generateId();
        let htmlString = `
     <li id = ${id} >
        <div class = "itemlist">
             <span class="liItem">${val}</span>
             <button onclick="deleted('${id}')"  class="delete"> D</button> 
             <button onclick="complete('${id}')"   class = "complete" id='btn${id}'> C</button>
        </div>  
    </li>
     `
        $("#tlist").append(htmlString);
    }
}
function deleted(id) {
    alert("This task will be deleted");
    $(`#${id}`).remove();
}
function complete(id) {
    alert("Are you sure you want to move it to completed list");
    let el = $(`#${id}`);
    $("#clist").append(el);
    let btn = $(`#btn${id}`);
    btn.remove();
}
function generateId() {
    let r = Math.random() * 1000000;
    let rVal = Math.round(r);
    let id = `id${rVal}`;
    return id;
}