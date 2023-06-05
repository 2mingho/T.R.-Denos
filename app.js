const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path")
const app = express();

const MainRoute = require("./routes/MainRoutes")
const booking = require("./routes/BookingRoute")
const excursion = require("./routes/ExcurcionRoute")
const contact = require("./routes/indexRoute")
const payment =require("./routes/PaymentRoute")
const error = require("./Controller/NotFound")

app.engine("hbs", engine({layoutsDir:"views/layout/", defaultLayout:"main_layout",extname:"hbs"}));
app.set("view engine","hbs");
app.set("views","views");


app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended:false}))


app.use(MainRoute);
app.use(excursion);
app.use(booking);
app.use(contact);
app.use(payment);

app.use("/",error.notFounded);

// app.use("/", NotF)



app.listen(3000)