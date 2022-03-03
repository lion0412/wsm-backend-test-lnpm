$(document).ready(function () {
    $("#category").on('change', function () {
        $("#category option:selected").each(function () {
            id = $(this).val();
            $.post("exams.php", {id: id}, function (data) {
                $("#txt_exam").html(data);
            });
        });
    });
});

$(document).ready(function () {
    $("#exam_id").on('change', function () {
        $("#exam_id option:selected").each(function () {
            id = $(this).val();
            $.post("result.php", {id: id}, function (data) {
                $("#result").html(data);
            });
        });
    });
});

$(document).ready(function () {
    $("#txt_exam").on('change', function () {
        $("#txt_exam option:selected").each(function () {
            id = $(this).val();
            $.post("result.php", {id: id}, function (data) {
                $("#result").html(data);
            });
        });
    });
});

$(document).ready(function () {
    $("#result").on('change', function () {
        $("#result option:selected").each(function () {
            id = $(this).val();
            $.post("subResult.php", {id: id}, function (data) {
                $("#subresult").html(data);
            });
        });
    });
});

/* Catálogos */
$(document).ready(function () {
    $("#category_cat").on('change', function () {
        $("#category_cat option:selected").each(function () {
            id = $(this).val();
            $.post("exams.php", {id: id}, function (data) {
                $("#exam_cat").html(data);
            });
        });
    });
});

$(document).ready(function () {
    $("#exam_cat").on('change', function () {
        $("#exam_cat option:selected").each(function () {
            id = $(this).val();
            $.post("result.php", {id: id}, function (data) {
                $("#result_cat").html(data);
            });
        });
    });
});

$(document).ready(function () {
    $("#result_cat").on('change', function () {
        $("#result_cat option:selected").each(function () {
            id = $(this).val();
            $.post("subResult.php", {id: id}, function (data) {
                $("#subresult_cat").html(data);
            });
        });
    });
});