const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');

db.sequelize.sync();

require('./app/routes/user.routes')(app);
require('./app/routes/image.routes')(app);

app.use('/images', express.static('public/images'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
