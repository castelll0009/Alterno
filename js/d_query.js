
let d_query = false;

$(document).on('click', '#query-by-date', function() {
console.log('click');
if (d_query == false){
    d_query = true;
    template_q = `
            <input name="search" id="search" class="form-control mr-sm-2" type="date" aria-label="Search">
            <button id="plus-d-query" type="button" class="btn btn-primary fas fa-plus-square"></button>
            <button id="query-by-date" type="button" class="btn btn-primary fas fa-calendar"></button>
            `
    newfunction();
    $('#type-query').html(template_q)
} else {
    d_query = false;
    template_q = `
            <input name="search" id="search" class="form-control mr-sm-2" type="search" placeholder="Nombre del producto" aria-label="Search">
            <button id="query-by-date" type="button" class="btn btn-primary fas pencil-alt"></button>
            `
    newfunction();
    $('#type-query').html(template_q)        
}
console.log(d_query);
});

function newfunction () {
    console.log('funcion!');
}