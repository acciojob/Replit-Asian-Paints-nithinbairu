//your JS code here. If required.
document.getElementById("submit").addEventListener("click",
	function(event){
		event.preventDefault();
		const gridid=document.getElementById("block_id").value;
		const color=document.getElementById("colour_id").value;

		const allgrid=document.querySelectorAll(".grid-item");
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