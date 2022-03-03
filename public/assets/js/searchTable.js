$(document).ready(function () {
    $('#tblPatients').DataTable({
        "order": [[2, "asc"]],
        "lengthMenu": [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]],
        "language": {
            "url": "assets/Spanish.json",
            "decimal": ".",
            "thousands": ","
        }
    });
});

$(document).ready(function () {
    $('#tblFullPatients').DataTable({
        "order": [[2, "asc"]],
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "language": {
            "url": "assets/Spanish.json",
            "decimal": ".",
            "thousands": ","
        }
    });
});

$(document).ready(function () {
    $('#tblFullBioanalysts').DataTable({
        "order": [[2, "asc"]],
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "language": {
            "url": "assets/Spanish.json",
            "decimal": ".",
            "thousands": ","
        }
    });
});

$(document).ready(function () {
    $('#tblFullOrders').DataTable({
        "order": [[0, "asc"]],
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "language": {
            "url": "assets/Spanish.json",
            "decimal": ".",
            "thousands": ","
        }
    });
});

$(document).ready(function () {
    $('#tblFullDoctors').DataTable({
        "order": [[2, "asc"]],
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "language": {
            "url": "assets/Spanish.json",
            "decimal": ".",
            "thousands": ","
        }
    });
});

$(document).ready(function () {
    $('#tblValues').DataTable({
        "order": [[2, "asc"]],
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        "language": {
            "url": "assets/Spanish.json",
            "decimal": ".",
            "thousands": ","
        }
    });
});