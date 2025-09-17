//your JS code here. If required.
document.getElementById("submit").addEventListener("click",
	function(event){
		event.preventDefault();
		const gridid=document.getElementById("input").value;
		const color=document.getElementById("color").value;

		const allgrid=document.querySelectorAll(".grid");
		allgrid.forEach(item=>{
			item.style.backgroundColor='transparent'
		})
		const selectgrid=document.getElementById(gridid)
		if(selectgrid){
			selectgrid.style.backgroundColor=color;
		}else{
			alert("Invalid grid number! Please enter a number between 1 and 9.")
		}
	})