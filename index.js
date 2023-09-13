const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = '<h1 class="title">My Website</h1><nav class="navbar"><ul><li><a href="index.html">Home</a></li><li><a href="project.html">Project</a></li><li><a href="contact.html">Contact</a></li></ul></nav>';

document.body.appendChild(headerTemplate.content);
