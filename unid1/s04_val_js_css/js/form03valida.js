function fnValidar03()
{	
    var elementoPref = document.getElementsByName("chkPrefer");
    for(var i=0; i < elementoPref.length; i++)
    {
        if(!elementoPref[i].checked)
        {
            alert("Falta seleccionar preferencias");
            return false;
        }
    }

    var elementoEstado = document.getElementsByName("radEstado");
    var seleccionado = false;
    var valorSeleccionado = "";
    for(var i=0; i < elementoEstado.length; i++)
    {
        if(elementoEstado[i].checked)
        {
            valorSeleccionado = elementoEstado[i].value;
            seleccionado = true;
        }
    }

    if(!seleccionado){
        alert("Elija estado CIVIL");
        return false;
    }
    alert("Estado civil ELEGIDO");

    /// Caso contrario ///
    return true;
}