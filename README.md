# CRUD-MyApp
Project 2 - General Assembly
Cruisen Cali

A full CRUD application

Check out CRUD app here:

https://crud-myapp-production.up.railway.app/destination

Screenshot of the App

# ![](/photos/Screen%20Shot%202022-11-29%20at%208.50.34%20PM.png)

List of the Technologies used:

- All photos are from my personal camera
- visual studio code text editor
- languages: css, html, and javascript
-MongoDB, Express, Mongoose, Ejs, Nodemon

Your User stories:

-As someone who likes to ride motorcycles , i wanted my Users to be able to store their information and personalize the app, I'd like them to be able to find new rides in the area that fits their riding style!
-As a busy young adult coming up with ideas of how to spend time with friends, significant others and family becomes rather difficult, if there looking for a new hobby or already enjoy riding motorcycles it'd be nice to have a place that has my favorite rides as well as new ones.
-As a motorcycle rider I'm always looking for new rides in the area my app is the perfect way to accomplish just that.

WireFrame:

# ![](/photos/Screen%20Shot%202022-11-18%20at%208.36.16%20AM.png)

[ ] REST Table

| **URL**               | **HTTP Verb** | **REST Action** | **CRUD Action** |
| --------------------- | ------------- | --------------- | --------------- |
| /destination/         | GET           | index           | read            |
| /destination/:id      | GET           | show            | read            |
| /destination/new      | GET           | new             | read            |
| /destination          | POST          | create          | create          |
| /destination/:id/edit | GET           | edit            | read            |
| /destination/:id      | PATCH/PUT     | update          | update          |
| /destination/:id      | DELETE        | destroy         | delete          |
| /user/                | GET           | index           | read            |
| /user/new             | GET           | new             | read            |
| /user                 | POST          | create          | create          |

[ ] Unsolved problems:

Styling is quite to my satisfaction.
User info gets stored but the app has no personalization features. Not to mention theres no link that takes you directly to users.