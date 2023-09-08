const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3306;
const mongoose = require('mongoose');



const mongoUri = 'mongodb+srv://hutum:hutum@cluster0.v8sh5.mongodb.net/Newdb';

mongoose.connect(mongoUri, {
useNewUrlParser: true,
useUnifiedTopology: true,
});



const usernoticeSchema = new mongoose.Schema({
  firstName: String,
  });
const UsernoticeModel = mongoose.model("notice", usernoticeSchema);
app.get('/api/notice', async (req, res) => {
try {
// Fetch data from the database
const usersnotice = await UsernoticeModel.find();
console.log('from notice react');
// Send the data as JSON
res.json(usersnotice);
} catch (error) {
console.error('Error:', error);
res.status(500).json({ error: 'Internal Server Error' });
}
});  





const usernoticeSchemaexam = new mongoose.Schema({
  firstName: String,
  });
const UsernoticeModelexam = mongoose.model("exam", usernoticeSchemaexam);
app.get('/api/exam', async (req, res) => {
try {
// Fetch data from the database
const users = await UsernoticeModelexam.find();
console.log('from notice react');
// Send the data as JSON
res.json(users);
} catch (error) {
console.error('Error:', error);
res.status(500).json({ error: 'Internal Server Error' });
}
}); 



const usernoticeSchemaroutine = new mongoose.Schema({
  firstName: String,
  });
const UsernoticeModelroutine = mongoose.model("routine", usernoticeSchemaroutine);
app.get('/api/routine', async (req, res) => {
try {
// Fetch data from the database
const users = await UsernoticeModelroutine.find();
console.log('from routine react');
// Send the data as JSON
res.json(users);
} catch (error) {
console.error('Error:', error);
res.status(500).json({ error: 'Internal Server Error' });
}
}); 




const usernoticeSchemaadmission = new mongoose.Schema({
  firstName: String,
  });
const UsernoticeModeladmission = mongoose.model("admission", usernoticeSchemaadmission);
app.get('/api/admission', async (req, res) => {
try {
// Fetch data from the database
const users = await UsernoticeModeladmission.find();
console.log('from admission react');
// Send the data as JSON
res.json(users);
} catch (error) {
console.error('Error:', error);
res.status(500).json({ error: 'Internal Server Error' });
}
}); 




const usernoticeSchemaclasssix = new mongoose.Schema({
  class6ma: String,
  class6mp: String,
  class6fa: String,
  class6fp: String,
  class7ma: String,
  class7mp: String,
  class7fa: String,
  class7fp: String,
  class8ma: String,
  class8mp: String,
  class8fa: String,
  class8fp: String,
  class9ma: String,
  class9mp: String,
  class9fa: String,
  class9fp: String,
  class10ma: String,
  class10mp: String,
  class10fa: String,
  class10fp: String,
  });
const UsernoticeModelclasssix = mongoose.model("it", usernoticeSchemaclasssix);
app.get('/api/classsix', async (req, res) => {
try {
// Fetch data from the database
const users = await UsernoticeModelclasssix.find();
console.log('from classsix react');
// Send the data as JSON
res.json(users);
} catch (error) {
console.error('Error:', error);
res.status(500).json({ error: 'Internal Server Error' });
}
}); 







// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle all other routes by serving the 'index.html' file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});