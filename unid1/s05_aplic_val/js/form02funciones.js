function fnValidar02()
{
    var xNombre = document.getElementById("txtNombres").value;
    if(xNombre == "")
    {
        alert("Escriba nombres");
        return false;
    }
    var xApellidos = document.getElementById("txtApellidos").value;
    if(xApellidos == "")
    {
        alert("Escriba Apellidos");
        return false;
    }
    var xDireccion = document.getElementById("txtDireccion").value;
    if(xDireccion == "")
    {
        alert("Escriba Dirección");
        return false;
    }
    var xEdad = document.getElementById("txtEdad").value;
    if(xEdad == "")
    {
        alert("Escriba su Edad");
        return false;
    }

    var xFec = document.getElementById("fecNac").value;
    if(xFec == "")
    {
        alert("Escriba la fecha");
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
        alert("Elija Genro");
        return false;
    }

    var xEsta = document.getElementById("lstEstado").value;
    if(xEsta == "")
    {
        alert("Elija un estado civil");
        return false;
    }


    return true;
}