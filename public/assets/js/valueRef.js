$(document).ready(function () {
    $("#value_ref_minmax").on('change', function(){
        var option = $('input[name=value_ref]:checked', '#formID').val();
        if(option == 0)
        {
            $("#range_lower").show();
            $("#range_top").show();
            $("#range_val").hide();

            $("#range_values").val("");
            $("#showRange").empty();
        }
        if(option == 1)
        {
            $("#range_lower").hide();
            $("#range_top").hide();
            $("#range_val").show();

            $("#min_value").val("");
            $("#max_value").val("");
        }
    });
    $("#value_ref_range").on('change', function(){
        var option = $('input[name=value_ref]:checked', '#formID').val();
        if(option == 0)
        {
            $("#range_lower").show();
            $("#range_top").show();
            $("#range_val").hide();

            $("#range_values").val("");
            $("#showRange").empty();
        }
        if(option == 1)
        {
            $("#range_lower").hide();
            $("#range_top").hide();
            $("#range_val").show();

            $("#min_value").val("");
            $("#max_value").val("");
        }
    });
    $("#btnAddRange").on('click', function(){
        $("#msgRange").empty();
        var description = $.trim($("#range_description").val());
        var valor = $.trim($("#range_valor").val());
        if(description.length > 0 && valor.length > 0)
        {   var validationValue = true;   
            $('#showRange li').each(function(){
                var desLista = $.trim($(this).text());
                var arraydesLista = desLista.split(':');
                for(var i = 0; i < arraydesLista.length; i++)
                {
                    var desListaLi = $.trim(arraydesLista[0]);
                    if(desListaLi == description)
                    {
                        validationValue = false;
                    }
                }                
            });
            if(validationValue)
            {
                var html = "<li>" + description + " : " + valor + "</li>";
                $("#showRange").append(html);
                var value = $("#range_values").val();
                value = value + description + ":" + valor + ";";
                $("#range_description").val("");
                $("#range_valor").val("");
                $("#range_values").val(value);
            }else{
                $("#msgRange").html("<p class='text-danger'>" + "La descripción del rango ya existe." + "</p>");
            }            
        }else{
            $("#msgRange").html("<p class='text-danger'>" + "Ingrese descripción del rango y el valor o valores." + "</p>");
        }
    });
    $("#btnDeleteRange").on('click', function(){
        $("#showRange").empty();
        $("#range_values").val("");
    });
});