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
</nav>

<main>
<section>
<article>
<p>Fill out this form if you would like me to get back to you. You can press the
<strong>Tab</strong> key once you are done with a field. Don't forget to press
the Submit button. The asteriks signifies that a field is necessary in order to 
submit the form. A red box signifies that your input deosn't meet the required
pattern.
</p>
<form action="/form_contact" method="POST">
<fieldset>
<legend>This part of the form is required</legend>
<label class="required" for="name">
Name:
</label>
<input type="text" name="name" id="name" placeholder="name" autofocus required minlength="3"
maxlength="30" size="10">
<label class="required" for="email">
Email:
</label>
<input type="email" name="email" id="email" placeholder="email" required minlength="3"
maxlength="20" size="10" pattern="[^ @]+@[^ @]+.[a-z]+">
<label class="required" for="reason">
Why are you contacting me today?:
</label>
<select name="reason" id="reason" required>
<option value="">--Please select an option--</option>
<option value="you would like me to build a website">Website Creation</option>
<option value="you need tutoring"> Tutoring</option>
<option value="you want to offer me employment">Employment Oppotunity</option>
<option value="you just want to connect">Just want to connect</option>
</select>
<label for="why" class="required">
Please explain your case:
</label>
<textarea name="why" id="why" maxlength="200" rows="5" cols="40" required placeholder="Write 200 characters or less..."></textarea>
</fieldset>
<fieldset>
<legend>This part of the form is optional</legend>
<div>
<span>How did you find me?:</span>
<div>
<input name="found_me" value="Google"  id="google" type="checkbox">
<label class="checkbox" for="google" >Google Search</label>
</div>
<div>
<input name="found_me" value="LinkedIn" id="linkedin" type="checkbox">
<label class="checkbox" for="linkedin">Through LinkedIn</label>
</div>
<div>
<input name="found_me" value="word of mouth" id="word" type="checkbox">
<label class="checkbox" for="word">Word of Mouth</label>
</div>
<div>
<input name="found_me" value="other" id="other" type="checkbox">
<label class="checkbox" for="other">Other</label>
</div>
</div>
<label for="more_info">
Anything else I need to know?:
</label>
<textarea name="more_info" id="more_info" rows="5" cols="40" placeholder="Write 200 characters or less..."></textarea>
<div>
<span>
Is this time sensitive?
</span>
<div>
<input type="radio" value="urgent" id="yes_urgency" name="urgency" unchecked>
<label class="radio" for="yes_urgency">Yes</label><br>
</div>
<div>
<input type="radio" value="not urgent" id="no_urgency" name="urgency" checked>
<label class="radio" for="no_urgency">No</label><br>
</div>
                            <div>
                            <input type="radio" value="somewhat urgent" id="somewhat_urgency" name="urgency" unchecked>
                            <label class="radio" for="somewhat_urgency">Somewhat</label><br>
                            </div>
                            </div>
                            </fieldset>
                            <label for="submission"></label>
                            <button class="submit" name="submit">Submit</button>
                            </form>
                            </article>
                            </section>
                            `
                            
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
</nav>

<main>
<section>
<article>
<p>

</p>
<form action="/form_order" method="POST">
<fieldset class="order_info">
<legend>Please provide your information</legend>
<div>
                            <label class="required" for="name">Name:</label>
                            <input type="text" name="name" id="name" placeholder="name" autofocus required minlength="3"
                            maxlength="30" size="20">
                            </div>
                            <div>
                            <label class="required" for="email">Email:</label>
                            <input type="email" name="email" id="email" placeholder="email" required minlength="3"
                            maxlength="30" size="20" pattern="[^ @]+@[^ @]+.[a-z]+">
                            </div>
                            <div>
                            <label class="required" for="address_1">Address line 1</label>
                            <input type="text" name="address_1" id="address_1" required placeholder="111 Your Street"
                            size="20">
                            </div>
                            <div>
                            <label for="address_2">Address line 2</label>
                            <input type="text" name="address_2" id="address_2" placeholder="Apartment or Suite if necessary"
                            size="20">
                            </div>
                            <div>
                            <label class="required" for="city">City</label>
                            <input type="text" name="city" id="city" required placeholder="City"
                            size="20">
                            </div>
                            <div>
                            <label class="required" for="state">State</label>
                            <select name="state" id="state">
                            <option value="" selected disabled>---select state---</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="DC">District Of Columbia</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                                </select>
                                </div>
                                <div>
                                <label for="postal_code" class="required" required placeholder="00000">Postal Code</label>
                                <input type="text" step="1" id="postal_code" name="postal_code" required minlength="5" 
                                pattern="[0-9]+" size="10">
                                </div>
                                </fieldset>
                                <fieldset>
                                <legend>Select one product</legend>
                                <table>
                                <thead>
                                <tr>
                                <th>Company</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Selection</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>AGYM</td>
                                    <td>Spinning Cat Scratcher Ball</td>
                                    <td>52.99</td>
                                    <td>
                                    <div>
                                    <input type="radio" value="Spinning Cat Scratcher Ball"
                                    name="product_select" id="cat_scratcher">
                                    <label class="radio" for="cat_scratcher">select</label>
                                    </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>Jasonwell</td>
                                    <td>Foldable Dog Pool</td>
                                    <td>27.25</td>
                                    <td>
                                    <div>
                                    <input type="radio" value="Foldable Dog Pool" name="product_select" id="dog_pool">
                                    <label class="radio" for="dog_pool" >select</label>
                                    </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>Expawlorer</td>
                                    <td>Dog Fence Window</td>
                                    <td>30.50</td>
                                    <td>
                                    <div class="table_radio">
                                    <input type="radio" value="Dog Fence Window" name="product_select" id="dog_fence">
                                    <label class="radio" for="dog_fence">select</label>
                                    </div>
                                    </td>
                                    </tr>
                                <tr>
                                <td>Lollimeow</td>
                                <td>Capsule Pet Travel Backpack</td>
                                <td>59.00</td>
                                <td>
                                <div class="table_radio">
                                <input type="radio" value="Capsule Pet Travel Backpack" id="pet_backpack"
                                name="product_select">
                                <label class="radio" for="pet_backpack">select</label>
                                </div>
                                </td>
                                </tr>
                                <tr>
                                <td>Drool'd</td>
                                <td>Cat Hamster Wheel</td>
                                <td>349.75</td>
                                <td>
                                <div class="table_radio">
                                <input type="radio" value="Cat Hamster Wheel" name="product_select" id="cat_wheel">
                                <label class="radio" for="cat_wheel">select</label>
                                </div>
                                </td>
                                </tr>
                                </tbody>
                                </table>
                                <div>
                                <label for="product_quantity">Specify Quantity</label>
                                <input type="number" name="product_quantity" id="product_quantity" placeholder="0">
                                </div>
                                <label for="delivery">Delivery Instructions:</label>
                                <textarea name="delivery" id="delivery" maxlength="200" rows="5" cols="40" required
                                placeholder="Write 200 characters or less..."></textarea>
                                </fieldset>
                    <label for="submit"></label>
                    <button class="submit" name="submit">Place Order</button>
                    </form>
                    </article>
                    </section>`
                    
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
        