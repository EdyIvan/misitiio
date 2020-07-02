var alu=Array(
	Array("1","Raul","Abril Mestas","Dia"),
	Array("2","Gustavo","Alvarez Bravo","Dia"),
	Array("3","Luis","Aguedo Apaza","Dia"),
	Array("5","Joel","Condori Avila","Dia"),
	Array("6","Frank","Condori Pinto","Dia"),
	Array("7","Jose","Esquivel Huarca","Dia"),
	Array("8","Melquiades","Gomez","Dia"),
	Array("9","Javier","Gamero Quispe","Dia"),
	Array("10","Edy","Holguin Vilca","Dia"),
	Array("11","Ever","Leon Avendaño","Dia"),
	Array("12","Andrea","Iqueño Ticona","Dia"),
	Array("13","Yon","Nina Mendoza","Dia"),
	Array("14","Ronal","Oscco Flores","Dia"),
	Array("15","Lucero","Orozco Ilachoque","Dia"),
	Array("16","Edith","Peña Ollachica","Dia"),
	Array("17","Aimar","Prieto Cuno","Dia"),
	Array("18","Jose","Quispe Cahuana","Dia"),
	Array("19","Delia","Quispe Rospigliosi","Dia"),
	Array("20","Yordinio","Segovia Lastra","Dia"),
	Array("21","Reyli","Rodriguez Gutierrez ","Dia"),
	Array("22","Angela","Taya Huarachi","Dia"),
	Array("23","Luis","Tejada Raya","Dia"),
	);
function bucleTabla(cantidad)
{
	for(var f=0; f < cantidad; f++)
	{
		document.write("<table border='1'>");
			document.write("<tr><th colspan='3'>Datos</th></tr>");
			document.write("<tr><td>#</td><td>Nombres</td><td>Apellidos</td></tr>");
			document.write("<tr>");
			for(var c=0; c < 3; c++){
				document.write("<td>"+alu[f][c]+"</td>");
			}
			document.write("</tr>");
		document.write("</table> <br>");
	}
	
/*
	for(var f=0; f < cantidad; f++){ 
		document.write("<table border='1'> <tr><th colspan='3'>Datos</th></tr> <tr><td>#</td><td>Nombres</td><td>Apellidos</td></tr> <tr>");
		for(var c=0; c < 3; c++){
			document.write("<td>"+alu[f][c]+"</td>"); 
		}
		document.write("</tr> </table> <br>");
	}
*/
}