const express = require('express');
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8001;

// user html page mate (route)
app.get("/Users", (req, res) => {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
    `;
    res.send(html);

})


// Route hybride server use (REST API)

app.get("/api/Users", (req, res) => {
    return res.json(users)
});


app.get("/api/Users/:id", (req, res) => {
    const id = Number (req.params.id);
    const user = users.find ((user) => user.id === id);
    return res.json(user );
});

app
   .route("/api/users/:id")
   .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
   })

   .patch((req, res) => {
    // Edit user with id
    return res.json({ status: "pending"});
   });

   delete((req, res) => {
    // Delete user with id
    return res.json({ status: "pending"});
   });

   app.post("/api/users", (req, res) =>{
    // TOOd: Create new user
    return res.json({ status: "pending"});
   });






app.listen(PORT, () => console.log('Server Started at PORT:${PORT}'))

