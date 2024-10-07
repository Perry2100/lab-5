function show_behind() {
	document.getElementsByClassName("behind")[0].style.display = 'block';
	document.getElementById('newsBlock_1').style.opacity = '0.3';
	document.getElementById('newsBlock_2').style.opacity = '0.3';
	document.getElementById('newsBlock_3').style.opacity = '0.3';
}

function show_1() {
	show_behind();
	document.getElementById('article_1').style.display = 'block';
}

function show_2() {
	show_behind();
	document.getElementById('article_2').style.display = 'block';
}

function show_3() {
	show_behind();
	document.getElementById('article_3').style.display = 'block';
}

function hide_all() {
	document.getElementsByClassName("behind")[0].style.display = "none";
	document.getElementById('article_1').style.display = 'none';
	document.getElementById('article_2').style.display = 'none';
	document.getElementById('article_3').style.display = 'none';
	document.getElementById('newsBlock_1').style.opacity = '1';
	document.getElementById('newsBlock_2').style.opacity = '1';
	document.getElementById('newsBlock_3').style.opacity = '1';
}

