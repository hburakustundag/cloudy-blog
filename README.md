<h1>Cloudy Blog</h1>

<p>This is a web application where users can create accounts, write blogs, and leave comments on other users' blogs.</p>

<p><strong>Link to project:</strong> <a href="https://odd-pear-angelfish-tutu.cyclic.app">Cloudy Blog</a></p>

<img src="https://res.cloudinary.com/duccflor2/image/upload/v1670938017/cloudy0blog_lty8id.png" alt="Preview of Cloudy Blog">

<h2>How It's Made:</h2>

<p><strong>Tech used:</strong> HTML, CSS, EJS, Bootstrap, JavaScript, Node, ExpressJS, MongoDB, Mongoose, PassportJS</p>

<p>The first thing that was done was to plan the structure of the application and the database collections. Second, I've created a simple backend that allows EJS templates to be rendered. I then updated the backend to have routers, controllers and models for MongoDB using the MVC pattern, and added authentication mechanism with PassportJS. Also, most of the front end is built with the help of Bootstrap and plain CSS.</p>

<h2>Optimizations and Improvements:</h2>
<ul>
<li>Tests & refactoring to make unit tests easier.</li>
<li>Switching the front end to React in the future.</li>
<li>Updating the comment section to support creating comments with image uploads.</li>
<li>Limiting the image resolution to get even blog-previews.</li>
<li>Implementing profile section.</li>
</ul>

<h2>Lessons Learned:</h2>

<ul>
<li>During the project, I had to change the collection model structures several times in some steps. This has helped me understand the importance of planning the structure of models (or tables for relational databases and their relationships to each other) and how data references each other in building applications in depth.</li>
<li>Receiving input from the user is always the part that needs careful consideration. Because it can cause serious problems if we do not carefully verify and limit the input.</li>
</ul>
