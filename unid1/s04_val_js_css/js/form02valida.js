function fnValidar02()
{
    var xValor = document.getElementById("lstPreferencias").value;
    if(xValor=="")
    {
        alert("Selecciones una preferencia...");
        return false;
    }

    var xValor = document.getElementById("lstMes").value;
    if(xValor=="")
    {
        alert("Seleccione mes...");
        return false;
    }

    /// Caso contrario ///
    return true;
}