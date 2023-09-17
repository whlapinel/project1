const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = '\
<h1 class="title">My Website</h1>\
<nav class="navbar">\
<a href="index.html">Home</a>\
<a href="project.html">Project</a>\
<a href="contact.html">Contact</a>\
</nav>';

const header = document.querySelector('header');

header.appendChild(headerTemplate.content);

const footerTemplate = document.createElement('template');

const footer = document.querySelector('footer');

footerTemplate.innerHTML = '\
<section id="footer">\
<p>this is my footer<p>\
</section>';

footer.appendChild(footerTemplate.content);
