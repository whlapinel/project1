/* head template so I don't have to change fonts everywhere */ 
const headTemplate = document.createElement('template');
headTemplate.innerHTML = '\
<meta charset="UTF-8">\
<meta name="viewport" content="width=device-width, initial-scale=1.0">\
<link href="css/styles.css" rel="stylesheet">\
<link rel="preconnect" href="https://fonts.googleapis.com">\
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\
<link href="https://fonts.googleapis.com/css2?family=Courier+Prime&family=\
Patua+One&family=Roboto&family=Sofia+Sans&display=swap" rel="stylesheet">\
<title>Home</title>';
const head = document.querySelector('head');
head.appendChild(headTemplate.content);

/* header template so title and nav-bar are the same everywhere */
const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = '\
<div class="title-bar">\
<image id="logo" src="/images/logo.png">\
<h1>Will Lapinel</h1>\
</div>\
<nav class="navbar">\
<a href="index.html">Home</a>\
<a href="project.html">Project</a>\
<a href="contact.html">Contact</a>\
</nav>';
const header = document.querySelector('header');
header.appendChild(headerTemplate.content);

/* footer template so footer is the same everywhere */
const footerTemplate = document.createElement('template');
const footer = document.querySelector('footer');
footerTemplate.innerHTML = '\
<section id="footer">\
<p>this is my footer<p>\
</section>';
footer.appendChild(footerTemplate.content);
