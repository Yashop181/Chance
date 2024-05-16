const express = require('express');
const cors = require('cors');
const Chance = require('chance');
const chance = new Chance();
const app = express();
const PORT = 5000;
app.use(cors());

app.get('/api/users',(req,res)=>{
    const users = Array.from({length:10},()=>({
        name: chance.name(),
        email: chance.email(),
        age: chance.age(),
        address: {
            city: chance.city(),
            state: chance.state({ full: true }),
            zip: chance.zip(),
          },
        phone: chance.phone(),
        birthday: chance.birthday({ string: true, american: false, type: 'adult' }),
    }))
    res.json(users);
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})