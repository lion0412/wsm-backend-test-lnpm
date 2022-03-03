$(document).ready(function () {
    $(document).on('click', '#checkAll', function () {
        $(".itemRow").prop("checked", this.checked);
    });
    $(document).on('click', '.itemRow', function () {
        if ($('.itemRow:checked').length === $('.itemRow').length) {
            $('#checkAll').prop('checked', true);
        } else {
            $('#checkAll').prop('checked', false);
        }
    });
    var count = $(".itemRow").length;
    $(document).on('click', '#addItem', function () {
        count++;
        var htmlRows = '';
        exam_id = $('#txt_exam').val();
        if (exam_id === null) {
            alert('ERROR: El campo EXAMEN es obligatorio.  Debe seleccionar el examen.');
            document.getElementById('category').focus();
            return false;
        } else {
            texto = $('select[name="txt_exam"] option:selected').text();
            a = texto.indexOf("C$");
            costo = parseFloat(texto.slice(a + 2));
            htmlRows += '<tr>';
            htmlRows += '<td><input class="itemRow" type="checkbox"></td>';
            htmlRows += '<td><input type="hidden" name="exam_id[]" id="exam_id_' + count + '" class="form-control form-control-sm" value="' + exam_id + '" autocomplete="off"><input type="text" name="exam_name[]" id="exam_name_' + count + '" class="form-control form-control-sm" value="' + texto + '" autocomplete="off"></td>';
            htmlRows += '<td><input type="number" name="order_value[]" id="order_value_' + count + '" class="form-control form-control-sm quantity text-right" value="' + costo + '" autocomplete="off"></td>';
            htmlRows += '</tr>';
            $('#orderItem').append(htmlRows);
        }
    });
    $(document).on('click', '#removeItem', function () {
        $(".itemRow:checked").each(function () {
            $(this).closest('tr').remove();
        });
        $('#checkAll').prop('checked', false);
        calculateTotal();
    });
    $(document).on('click', "#addItem", function () {
        calculateTotal();
    });
    $(document).on('blur', "[id^=exam_name_]", function () {
        calculateTotal();
    });
    $(document).on('blur', "[id^=order_value_]", function () {
        calculateTotal();
    });
    $(document).on('blur', "#orderTax", function () {
        calculateTotal();
    });
    /*$(document).on('click', '.deleteInvoice', function () {
     var id = $(this).attr("id");
     if (confirm("Are you sure you want to remove this?")) {
     $.ajax({
     url: "action.php",
     method: "POST",
     dataType: "json",
     data: {id: id, action: 'delete_invoice'},
     success: function (response) {
     if (response.status == 1) {
     $('#' + id).closest("tr").remove();
     }
     }
     });
     } else {
     return false;
     }
     });*/
});
function calculateTotal() {
    var totalAmount = 0;
    var total = 0;
    $("[id^='order_value_']").each(function () {
        var id = $(this).attr('id');
        id = id.replace("order_value_", '');
        var order_value = $('#order_value_' + id).val();
        totalAmount += parseFloat(order_value);
    });
    $('#subTotal').val(parseFloat(totalAmount));
    var taxRate = $("#orderTax").val();
    var subTotal = $('#subTotal').val();
    if (subTotal) {
        var taxAmount = subTotal * taxRate / 100;
        $('#iva').val(taxAmount);
        total = parseFloat(subTotal) + parseFloat(taxAmount);
        $('#total').val(total.toFixed(2));
    }
}