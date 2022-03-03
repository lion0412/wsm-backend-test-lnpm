/*$(document).ready(function () {
    $('#bt_add').click(function () {
        agregarFila();
    });
});*/
var cont = 0;
var id_fila_selected = [];

function agregarFila() {
    cont++;
    
    
    
    var fila =
            '<tr class="selected" id="fila' + cont + '" onclick="seleccionar2(this.id);"><td>' + cont + '</td>' +
            '<td><input type="text" name="nombres" id="nombres"></td>' +
            '<td><input type="text" name="cargo" id="cargo"></td>' +
            '<td><input type="text" name="cedula" id="cedula"></td>' +
            '<td><input type="text" name="sexo" id="sexo"></td>' +
            '<td><input type="text" name="telefono" id="telefono"></td>' +
            '<td><input type="text" name="correo" id="correo"></td>' +
            '<td style="text-align: center;"><a href="#" id="borrar" name="borrar" onclick="return eliminarFilaSel();"><span class="fa fa-trash-o"></span></a></td></tr>';

    $('#tabla').append(fila);
    reordenarFilas();
    return false;
}

function eliminarFilaSel() {
    $(document).on('click', '#borrar', function (event) {
        event.preventDefault();
        $(this).closest('tr').remove();
    });
    reordenarFilas();
    return false;
}

function reordenarFilas() {
    var num = 1;
    $('#tabla tbody tr').each(function () {
        $(this).find('td').eq(0).text(num);
        num++;
    });
    return false;
}