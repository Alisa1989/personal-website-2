'use strict';

import express from 'express';
import 'dotenv/config';
import asyncHandler from'express-async-handler';
import {products} from './products.js';
import nodemailer from "nodemailer";

const PORT = process.env.PORT;
const app = express();
let apiCalls = 0

app.use(express.urlencoded({
  extended: true
}))

app.use(express.static('public'))

app.use((error, req, res, next) => {
    console.log(`Unhandled error ${error}, URL = ${req.originalUrl}, method = ${req.method}`)
    res.status(500).json('500 - server error');
});


app.get('/random-person', asyncHandler(async (req, res, next) => {
    apiCalls += 1;
    if (apiCalls >= 10) {
        console.log(`Total number of API calls = ${apiCalls}`)
    }
    next()
}));

app.get('/random-person', asyncHandler(async (req, res, next) => {
    const response = await fetch('https://randomuser.me/api/')
    const person = await response.json() 
    res.send(person)
}));

// -------------------------Node Mailer--------------------


// async..await is not allowed in global scope, must use a wrapper
async function processEmail(contact_name, reason, why, found_me, more_info, urgency) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });
    
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "a.steinhauslin@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<section>
        <h2>Thank you ${contact_name}, I received your request</h2>
        <p>You are contacting me today because <strong>${reason}</strong> and, more specifically:
        <strong>${why}</strong>. You found me through 
        <strong>${found_me}</strong>. Your level of urgency is <strong>${urgency}</strong>. You also
        left the following message: <strong>${more_info}.</strong>
        </section>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);


// -------------------------Contact Form----------------------------------

let htmlTop =`
<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Alexandre Steinhauslin</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" media="screen" href="main.css">
<script src="main.js"></script>
</head>

<body>
<header>
<h1><span>Alexandre Steinhauslin</span></h1>
</header>

<nav class="pages">
<a href="index.html">Home</a>
<a href="contact.html">Contact</a>
<a href="gallery.html">Gallery</a>
<a href="order.html">Order</a>
<a href="staff.html">Staff</a>
</nav>

<main>`
    
let htmlBottom =`
</main>
<footer>
<p>
&copy 2023 <a href="https://www.alexandresteinhauslin.dev/">Alexandre Steinhauslin Web Developer</a>
</p>
</footer>
</body>
</html>
`

function emptyStringIfUndefined(value) {
    //returns an empty string if undefined
    if (value == undefined) {
        return 'not selected'
    } else {
        return value.join(`, `)
    }
}
    
    // POST
    app.post("/form_contact", (req, res) => {
    const contact_name = req.body.name;
    const contact_email = req.body.email;
    const reason = req.body.reason;
    const why = req.body.why;
    const found_me = emptyStringIfUndefined(req.body.found_me);
    const more_info = req.body.more_info || "None Specified";
    const urgency = req.body.urgency;
    processEmail(contact_name, reason, why, found_me, more_info, urgency)
    
    res.send(`${htmlTop}
    <section>
    <h2>Thank you ${contact_name}, I received your request</h2>
    <article>
    <p>You are contacting me today because <strong>${reason}</strong> and, more specifically:
    <strong>${why}</strong>. You found me through 
    <strong>${found_me}</strong>. Your level of urgency is <strong>${urgency}</strong>. You also
    left the following message: <strong>${more_info}.</strong>
    </article>
    </section>
    ${htmlBottom}
    `);
    
})

// -----------------------------FORM ORDER---------------------------------
function compareSelection(product_select, products) {
    // compares the user selected product with the database list of products
    // returns the product from the database data
    for (let product of products){
        if (product.product == product_select){
            return product;
        }    
    }
}

function calculateTotal(product, quantity) {
    //takes in the product and the quantity so it can calculate the total price
    return product.price * quantity;
}

let htmlTopOrder = `<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>Alexandre Steinhauslin</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css" media="screen" href="main.css">
<script src="main.js"></script>
</head>

<body>
<header>
<h1>Alexandre Steinhauslin</h1>
</header>

<nav class="pages">
<a href="index.html">Home</a>
<a href="contact.html">Contact</a>
<a href="gallery.html">Gallery</a>
<a href="order.html">Order</a>
<a href="staff.html">Staff</a>
</nav>

<main>`


let htmlBottomOrder = ` </main>
<footer>
<p>
&copy 2023 <a href="https://www.alexandresteinhauslin.dev/">Alexandre Steinhauslin Web Developer</a>
</p>
</footer>
</body>

</html>`

app.post("/form_order", (req, res) => {
    const order_name = req.body.name;
    const order_email = req.body.email;
    const address_1 = req.body.address_1;
    const address_2 = req.body.address_2 || '';
    const city = req.body.city;
    const state = req.body.state;
    const postal_code = req.body.postal_code;
    const product_select = compareSelection(req.body.product_select, products);
    const product_quantity = req.body.product_quantity;
    const delivery = req.body.delivery;
    
    const total = calculateTotal(product_select, product_quantity)
    
    res.send(
        `${htmlTopOrder}
        <section>
        <h2>Order Confirmation</h2>
        <article>
        <p>Great choice <strong>${order_name}</strong>, you selected the <strong>${product_select.name}</strong> 
        (qt: <strong>${product_quantity}</strong>), for a total of <strong>${total.toLocaleString("en-US", {style:"currency", currency:"USD"})}</strong>.
         This item will be delivered to <strong>${address_1} ${address_2}, ${city}, ${state} ${postal_code}</strong>. 
         Thank you also for providing the following delivery instructions, we are sure the driver will
         appreciate. <strong>${delivery}</strong>. </p>
         </article>
         </section>
         ${htmlBottomOrder}`
         );
        })
        
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
        