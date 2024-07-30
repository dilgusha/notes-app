const express = require('express')
const { port } = require('./config')
const router = require('./routes')
const cors = require('cors');
const { errormiddleware } = require('./middlewares/error.middleware');
const app = express();
app.use(express.json());
app.use(cors())
app.use(router)
// require('./models/index')()


app.use(errormiddleware)

app.listen(port, (err) => {
    if (err) console.log(err);
    else console.log(`port is running: ${port} `)
})
