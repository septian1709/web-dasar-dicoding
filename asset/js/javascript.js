window.onload = function() {
	var testimoni1 = document.getElementById('testimoniPembeli1');
	var testimoni2 = document.getElementById('testimoniPembeli2');
	var testimoni3 = document.getElementById('testimoniPembeli3');

  	document.getElementById("btn-testimoni1").onclick = function() {
    	if (testimoni1.style.display == "none") {
			testimoni1.style.display = "block";
			document.getElementById('btn-testimoni1').innerText="Sembunyikan Testimoni";
		}
		else
		{
			testimoni1.style.display = "none";
			document.getElementById('btn-testimoni1').innerText="Tampilkan Testimoni";
		}
  	}

  	document.getElementById("btn-testimoni2").onclick = function() {
    	if (testimoni2.style.display == "none") {
			testimoni2.style.display = "block";
			document.getElementById('btn-testimoni2').innerText="Sembunyikan Testimoni";
		}
		else
		{
			testimoni2.style.display = "none";
			document.getElementById('btn-testimoni2').innerText="Tampilkan Testimoni";
		}
  	}

  	document.getElementById("btn-testimoni3").onclick = function() {
    	if (testimoni3.style.display == "none") {
			testimoni3.style.display = "block";
			document.getElementById('btn-testimoni3').innerText="Sembunyikan Testimoni";
		}
		else
		{
			testimoni3.style.display = "none";
			document.getElementById('btn-testimoni3').innerText="Tampilkan Testimoni";
		}
  	}
}