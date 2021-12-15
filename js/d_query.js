
let d_query = false;

$('#query-by-date').click(function() {
console.log('click');
if (d_query == false){
    d_query = true;
    template_q = `
            <input name="search" id="search" class="form-control mr-sm-2" type="date" aria-label="Search">
            <button id="query-by-date" type="button" class="btn btn-primary fas fa-calendar"></button>
            `
    $('#type-query').html(template_q)
} else {
    d_query = false;
    template_q = `
            <input name="search" id="search" class="form-control mr-sm-2" type="search" placeholder="Nombre del producto" aria-label="Search">
            <button id="query-by-date" type="button" class="btn btn-primary fas pencil-alt"></button>
            `
    $('#type-query').html(template_q)        
}
console.log(d_query);
});