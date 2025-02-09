document.addEventListener("DOMContentLoaded", function () {
    const usuarioLogado = sessionStorage.getItem("usuarioLogado");

    if (!usuarioLogado) {
        alert("Você precisa fazer login primeiro!");
        window.location.href = "../Login/index.html";
    }
});
function openNav() 
{
	document.getElementById("mySidenav").style.width = "230px";
	document.getElementById("main").style.marginLeft = "230px";
}
function closeNav() 
{
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";

}
function openSecondNav() 
{
	document.getElementById("mySidenav").style.width="0";
	document.getElementById("main").style.marginLeft = "0";
 	document.getElementById("mySecondsidenav").style.width = "400px";
}
function closeSecondNav() 
{
	document.getElementById("mySidenav").style.width = "230px";
	document.getElementById("main").style.marginLeft = "230px";

	document.getElementById("mySecondsidenav").style.width = "0";
}


//Code of Register Client
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) 
{
	coll[i].addEventListener("click", function() 
	{
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") 
		{
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}

// Get the modal
var modal = document.getElementById("openModal");
var btn = document.getElementById("buttonModal");
var span = document.getElementsByClassName("close")[0];
var btnClose1 = document.getElementsByClassName("close3")[0];
btn.onclick = function() 
{
  	modal.style.display = "block";
}
span.onclick = function() 
{
  	modal.style.display = "none";
}
btnClose1.onclick = function()
{
	modal.style.display = "none"
}
window.onclick = function(event) 
{
  	if (event.target == modal) 
  	{
   		modal.style.display = "none";
  	}
}
//Modal 2
var modal2 = document.getElementById("modalProgress");
var btn2 = document.getElementById("buttonProgress");
var span2 = document.getElementsByClassName("close2")[0];
var btnClose = document.getElementsByClassName("close1")[0];
btn2.onclick = function()
{
	modal2.style.display = "block";
}
window.onclick = function(event)
{
	if (event.target == modal2)
	{
		modal2.style.display = "none";
	}
}
span2.onclick = function() 
{
  	modal2.style.display = "none";
}
btnClose.onclick = function()
{
	modal2.style.display = "none";
}

//search bar
function search() 
{
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputSearch");
  filter = input.value.toUpperCase();
  table = document.getElementById("tableClients");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) 
  {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) 
    {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) 
      {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

//Double button function
function removerContato(botao) {

    console.log("clicou na função removerContato");
     
   botao.parentNode.innerHTML =(
        '<button type="button" class="btn btn-success btn-xs" onclick="vincularContato(this)"><span class="glyphicon glyphicon-ok">Ativar</span></button>')
 }
 
 function vincularContato(botao) {
 
    console.log("clicou na função vincularContato");
 
   botao.parentNode.innerHTML =(
        '<button type="button" class="btn btn-danger btn-xs" onclick="removerContato(this)"><span class="glyphicon glyphicon-ok">Desativar</span></button>')
 
 }