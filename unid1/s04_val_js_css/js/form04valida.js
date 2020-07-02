function fnValidar04()
{	
    var elementoPref = document.getElementsByName("chkPrefer");
    for(var i=0; i < elementoPref.length; i++)
    {
        if(!elementoPref[i].checked)
        {
            alert("Elemento sin check " + elementoPref[i].value);
            return false;
        }
    }

    /// Caso contrario ///
    return true;
}