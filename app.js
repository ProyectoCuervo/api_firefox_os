var button = document.getElementById('boton');
var txtInput = document.getElementById('introduceTexto');

button.addEventListener('click',function()
{
	var text = txtInput.value;
	alert(text);
});


$(document).ready(function()
{
	$("#btcalcular").on('click',function()
	{
		var expresion=$('#txcalculadora').val();
		alert(eval(expresion));
	});
});
