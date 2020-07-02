function fnValidar02()
{
    var xTexto = document.getElementById("txtTexto").value;
	if (xTexto.indexOf(" ") !== -1 || xTexto=="") {
        alert("Ingrese texto sin ESPACIOS");
        return false;
    }

    var elementoGenero = document.getElementsByName("rdGenero");
    var seleccionado = false;
    var valorSeleccionado = "";
    for(var i=0; i < elementoGenero.length; i++)
    {
        if(elementoGenero[i].checked)
        {
            valorSeleccionado = elementoGenero[i].value;
            seleccionado = true;
        }
    }

    if(!seleccionado){
        alert("Elija un Genero");
        return false;
    }


    var preferencia = document.getElementsByName("chkPref[]");
    var seleccionado1 = false;
    var seleccionado2 = false;
    var seleccionado3 = false;
    var seleccionado4 = false;
    var valorSeleccionado = "";
    for(var i=0; i < preferencia.length; i++)
    {
        if(preferencia[i].checked)
        {
            valorSeleccionado = preferencia[i].value;
            seleccionado1 = true;


            for(var z=0; z < i; z++){

                if(preferencia[z].checked){
                valorSeleccionado = preferencia[i].value;
                seleccionado2 = true;

                for(var a=0; a < z; a++)
                {
                    if(preferencia[a].checked)
                    {
                        valorSeleccionado = preferencia[i].value;
                        seleccionado3 = true;
            
            
                        for(var f=0; f < a; f++){
            
                            if(preferencia[f].checked){
                            valorSeleccionado = preferencia[i].value;
                            seleccionado4 = true;
                            }
                        }
                    }
                }
                }
            }
        }
    }

    if(!seleccionado1){
        alert("Elija las 2 Preferencias");
        return false;
    }

    if(!seleccionado2){
        alert("Elija 1 preferencia mas");
        return false;
    }

    if(seleccionado3){
        alert("No puede elejir mas de 2");
        return false;
    }
    if(seleccionado4){
        alert("No puede elejir mas de 2");
        return false;
    }
}