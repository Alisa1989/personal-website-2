'use strict';

const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.urlencoded({
  extended: true
}))

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});



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
    </nav>

    <main>
        <section>
            <h2>Contact</h2>
            <p>Fill out this form if you would like me to get back to you. You can press the 
                <strong>Tab</strong> key once you are done with a field. Don't forget to press 
                the Submit button.
            </p>
            <form action="/form_data" method="POST">
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
                        <label for="why" required>
                            Please explain your case:
                        </label>
                        <textarea name="why" id="why" maxlength="200">
                            Write 200 characters or less...
                        </textarea>
                </fieldset>
                <fieldset>
                    <legend>This part of the form is optional</legend>
                    <div>
                        How did you find me?:
                        <label class="checkbox">
                            <input name="found_me" value="Google" type="checkbox">
                            Google Search
                        </label>
                        <label class="checkbox">
                            <input name="found_me" value="LinkedIn" type="checkbox">
                            Through LinkedIn
                        </label>
                        <label class="checkbox">
                            <input name="found_me" value="word of mouth" type="checkbox">
                            Word of Mouth
                        </label>
                        <label class="checkbox">
                            <input name="found_me" value="other" type="checkbox">
                            Other
                        </label>
                    </div>
                    <label for="more_info">
                        Anythign else I need to know?:
                    </label>
                    <textarea name="more_info" id="more_info">
                            Write 200 characters or less...
                        </textarea>
                    <div>
                        <div>
                            Is this time sensitive?
                            <label>
                                Yes
                                <input type="radio" value="urgent" name="urgency" unchecked>
                            </label>
                            <label>
                                No
                                <input type="radio" value="not urgent" name="urgency" checked>
                            </label>
                            <label>
                                Somewhat
                                <input type="radio" value="somewhat urgent" name="urgency" unchecked>
                            </label>
                        </div>
                    </div>
                </fieldset>
                <label>
                    <button class="submit" name="submit">Submit</button>
                </label>
            </form>
        </section>
    </main>
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

// POST
app.post("/form_data", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const reason = req.body.reason;
    const why = req.body.why;
    const found_me = req.body.found_me.join(`, `);
    const more_info = req.body.more_info;
    const urgency = req.body.urgency;

    res.send(`${htmlTop}
    <h2>Hello, ${name}. <h2>
    <p>You are contacting me today because <strong>${reason}</strong> and, more specifically:
    <strong>${why}</strong>. You found me through 
    <strong>${found_me}</strong>. Your level of urgency is <strong>${urgency}</strong>. You also
    left the following message: <strong>${more_info}</strong>
    ${htmlBottom}`);

})