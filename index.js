const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/teseh')
  .then(() => console.log('Connected!'));

const Schema = mongoose.Schema;
const dataSchema = new Schema({
  username: String,
  password: String,
  age:String,
});
const Data = mongoose.model('Data', dataSchema);
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.post('/submit', async (req, res) => {
    const { username, password, age } = req.body;
    const newData = new Data({
      username,
      password,
      age,
    });
    console.log(newData);
      await newData.save();
      res.sendFile(__dirname + '/payment.html');
  });
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login.html');
    
})
 

const port = 9960;
app.listen(port, () => {
  console.log('Server started on port ${port}');
});