const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = '\
<h1 class="title">My Website</h1>\
<nav>\
<ul>\
<li class="navbar"><a href="index.html">Home</a></li>\
<li class="navbar"><a href="project.html">Project</a></li>\
<li class="navbar"><a href="contact.html">Contact</a></li>\
</ul>\
</nav>';

const header = document.querySelector('header')

header.appendChild(headerTemplate.content);
