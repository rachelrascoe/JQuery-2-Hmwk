$(document).ready(function(){
    $('table').DataTable({
        "order": [[ 0, "desc" ]],
        "scrollY":        "150px",
        "scrollCollapse": true,
        "paging":         false
    } );
} );
