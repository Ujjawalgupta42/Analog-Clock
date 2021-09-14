setInterval(()=> {
	let date=new Date();
	let hours=date.getHours();
	let minutes=date.getMinutes();
	let seconds=date.getSeconds();

	let hrotation=hours*30+minutes/2;
	let mrotation=minutes*6;
	let srotation=seconds*6;

	let day=date.getDate();
	let mo=date.getMonth();
	let year=date.getFullYear();
	let month=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
	//date=date.substr(0,11);

	hour.style.transform=`rotate(${hrotation}deg)`;
	minute.style.transform=`rotate(${mrotation}deg)`;
	second.style.transform=`rotate(${srotation}deg)`;
	//let d=document.getElementById("display");
	//d.innerHTML=year;
	//d.innerHTML=day+" "+month[mo]+", "+year;
},1000);