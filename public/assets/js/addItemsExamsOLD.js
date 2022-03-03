/*function exams() {
 var tbody = $('#tblExams tbody');
 var fila_contenido = tbody.find('tr').first().html();
 
 $('#tblExams .btn_add').click(function () {
 var fila_nueva = $('<tr></tr>');
 fila_nueva.append(fila_contenido);
 tbody.append(fila_nueva);
 });
 
 $('#tblExams').on('click', '.btn_delete', function () {
 $(this).parents('tr').eq(0).remove();
 });
 }*/

$(document).ready(function () {
    var maxField = 10; //Input fields increment limitation
    var addButton = $('#addItem'); //Add button selector
    var wrapper = $('.field_wrapper'); //Input field wrapper
    var texto;
    var exam_id;
    var a;
    var costo = 0;
    //var total = 0;
    var fieldHTML; //New input field html 
    var x = 1; //Initial field counter is 1

    //Once add button is clicked
    $(addButton).click(function () {
        //Check maximum number of input fields
        exam_id = $('#txt_exam').val();
        if (exam_id === null) {
            alert('ERROR: El campo EXAMEN es obligatorio.  Debe seleccionar el examen.');
            document.getElementById('category').focus();
            return false;
        } else {
            texto = $('select[name="txt_exam"] option:selected').text();
            a = texto.indexOf("C$");
            costo = parseFloat(texto.slice(a + 2));
            fieldHTML = '<tr><td><input type="hidden" id="exam_id_' + x + '" name="exam_id[]" value="' + exam_id + '"><input type="text" class="form-control form-control-sm" name="exam_name[]" id="exam_name_' + x + '" value="' + texto + '" readonly></td><td><input type="text" class="form-control form-control-sm text-right number" name="order_value[]" id="order_value_' + x + '" value="' + costo.toFixed(2) + '" required></td><td class="text-center"><button type="button" class="btn btn-danger btn-sm btn_delete"><span class="fa fa-trash-o"></span></button></td></tr>';
            //total += costo;
            //$('#total').val(total.toFixed(2));
            if (x < maxField) {
                x++; //Increment field counter
                $(wrapper).append(fieldHTML); //Add field html
                costSum();
            }
        }
    });

    $(document).on('blur change', "[id^=cost_]", function () {

        costSum();
    });

    //Once remove button is clicked
    /*$(wrapper).on('click', '.btn_delete', function (e) {
     e.preventDefault();
     $(this).parent('tr').remove(); //Remove field html
     x--; //Decrement field counter
     });*/
    $('#tblExams').on('click', '.btn_delete', function () {
        $(this).parents('tr').eq(0).remove();
        //$("#order_tax").val(0);
        //$("#subtotal").val(0);
        //$("#total").val(0);
        x--;
        costSum();
    });
});

function costSum() {
    var $subtotal = 0;
    var $total = 0;
    var $iva = 0;
    var $tax = $("#order_tax").val();
    console.log($("#order_tax").val());
    $("#subtotal").val(0);
    $("#total").val(0);
    $("#iva").val(0);
    $("input[name='order_value[]']").each(function (indice, elemento) {
        $subtotal = $subtotal + parseFloat($(elemento).val());
    });
    $("#subtotal").val($subtotal.toFixed(2));
    console.log($("#subtotal").val());
    if ($tax === 0) {
        $total = $subtotal;
    } else {
        $iva = $subtotal * ($tax / 100);
        $("#iva").val($iva.toFixed(2));
        $total = $subtotal + $iva;
    }
    console.log($iva);
    $("#total").val($total.toFixed(2));
}

/*$("#mainForm").submit(function (event) {
 var $total = 0;
 $("input[name='cost[]']").each(function (indice, elemento) {
 $total = $total + parseFloat($(elemento).val());
 });
 $("#total").val($total.toFixed(2));
 });*/
