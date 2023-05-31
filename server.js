//requires
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

const studentController = require('./routes/student');
const Student = require('./models/student');

const methodOverride = require('method-override');
const PORT = process.env.PORT || 3001;

//mongoose
const mongoose = require('mongoose');
mongoose.set("strictQuery",false);


//middleware

app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use(methodOverride('_method'));

app.use((req,res,next) => {
    console.log("running for all routes");
    next();
});

//encode on url parameters
app.use(express.urlencoded({ extended: false }));

//views - temporary for testing
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//mock data
// const students = new Student ([
//     {
//         name: "Jumana"
//     },
//     {
//         name: "Rania"
//     }
// ]

// )

// Student.create(students).then((log) => {
//     console.log(log);
// }).catch((err) => {
//     console.log(err.message);
// })

//call router
app.use('/student', studentController);


//routes

//login page-homepage
app.get('/', async (req,res) => {

    res.render('Homepage');

})


//listen
const launchMongoose = () => {
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });

        mongoose.connection.once("open", () => {
            console.log("connected to mongoose");
        });

        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`);
        });
    } catch (error)
    {
        console.log(error.message);
    }
}

launchMongoose();
