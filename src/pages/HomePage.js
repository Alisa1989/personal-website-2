import React from "react";

function HomePage() {
  return (
    <>
      <section>
        <h2>Web Dev Concepts:</h2>
        <nav class="locations">
          {/* <!-- sections  --> */}
          <a href="#webServers">Web Servers</a>
          <a href="#frontendDesign">Frontend Design</a>
          <a href="#optimizingImages">Optimizing Images</a>
          <a href="#cascadingStylesheets">Cascading Stylesheets</a>
          <a href="#forms">Forms</a>
          <a href="#backend">Backend</a>
          <a href="#javascript">JavaScript</a>
          <a href="#theDOM">The DOM</a>
        </nav>
        <article id="webServers">
          <h3>Web Servers</h3>
          {/* <!-- Explain what index means as it relates to websites and servers. --> */}
          <p>
            The <strong>index.html</strong> nomenclature is the industry-wide
            standard used for the homepage of websites. Websites are built
            inside a directory on a web server, and every page is saved as a
            separate file. The index.html is the web server's default page when
            no other page is specified in the URL. It is best practice to
            include a file called index.html in your directory, some other
            standard options are default.html, home.html, or any file named
            index with a different extension.
          </p>
          {/* <!-- Explain what you see in the browser's Web Dev/Inspector tools. What is different about the file's details on the web server versus the local computer? --> */}
          <p>
            The difference between the file details of the web server and the
            local computer are that the Request URLs are different. The server
            request has the web address, while the local computer request URL is
            equivalent to the file's location in the local computer. Ultimately,
            the server request URL includes a remote address and port. There are
            two additional requests for the web server compared to the local
            computer; the favicon.ico and the executor.js. Request headers and
            response headers have many more parts for the web server; some of
            these in the response headers are the Connection, Content-Encoding
            and Length, the E-tag and the type of server, in this case, is
            Apache/2.4.6 (CentOS). The Request headers also have many more
            parts, including the accepted language, cookies, accepted encoding,
            acceptances, and others.
          </p>
          {/* <!-- Explain why the favicon.ico file has a status 200, but the main.css and main.js files do not. --> */}
          <p>
            The favicon.ico has a status of 200 because it sends a request to a
            different URL where it finds the icon. On the other hand, main.js
            and main.css are being requested to the same directory of the HTML
            file, where they are not found (status code: 404) because there are
            no files named like that in said directory.
          </p>
          {/* <!-- Explain the parts of the URL to your web file. What are the scheme, subdomain, host domain, and resources? --> */}
          <p>
            The URL to this web file is the following:
            https://web.engr.oregonstate.edu/~steinhal/
            <strong>HTTPS</strong>
            is the scheme that identifies the protocol that must be used for the
            request. HTTPS is an encrypted protocol.
            <strong>web.engr</strong>
            is the subdomain name
            <strong>oregonstate.edu</strong>
            is the domain name, which gets mapped by the DNS to an IP address
            where the request is sent.
            <strong>~steinhal</strong>
            is the path to the resource. In this case, this is just a drive.
            Since the specific file is not specified, the web server will look
            for a default file, in this case, index.html, and return it.
          </p>
        </article>
        <article id="frontendDesign">
          <h3>Frontend Design</h3>
          {/* <!-- The concept of frontend design --> */}
          <p>
            <strong>Frontend Design</strong> is the development of the graphical
            aspects of a website or application. It encompasses the page's
            visual design, the graphical user interface (GUI), and the user's
            interactive experience (Usability). Many elements compose the design
            of a website/app, from color schemes to typography, images, and
            more. A good frontend design looks good, is easy to use, and it
            caters to the user group and brand of the website.
          </p>
          {/* <!-- The five "E"s of usability, in a <dl> definition list that separates the topics and descriptions.  --> */}
          <h4>The five "E"s of Usability</h4>
          <dl>
            <dt>
              <strong>Effective</strong>
            </dt>
            <dd>
              It needs to allow users to meet their goals. Users are after
              information, they are not interested in fill-in text. This
              information needs to be as complete and clear as possible while,
              at the same time, being accurate and up-to-date.
            </dd>
            <dt>
              <strong>Efficient</strong>
            </dt>
            <dd>
              These goals need to be met quickly, with the fewest steps. This
              means that the information needs to be found quickly, be
              understandable, concise, and best if it uses visuals to help
              convey it. One of the greatest factors of bad user experience is
              long response times. To mitigate the chance of loosing a user, it
              is recommended to use a wait/busy cursor for delays of 2 to 10
              seconds, and progress bars for longer.
            </dd>
            <dt>
              <strong>Easy to navigate/learn</strong>
            </dt>
            <dd>
              The navigation is intuitive and allows users to locate their goals
              quickly. This means that the navigation needs to be clear. The
              product is constructed in a way that supports initial and
              continued learning. One of the factors that contribute to bad
              navigation are content depth levels. As the number of levels a
              user has to go through to get to the content of interest rises,
              the ability for the user to navigate easily will decrease and so
              the likelihood of returning to the website.
            </dd>
            <dt>
              <strong>Error-free</strong>
            </dt>
            <dd>
              In order to avoid accessibility and availability issues, there
              must be no room for errors, such as roadblocks or inability to
              locate retrieve or locate resources. In addition, the content
              needs to be clear and unambiguous, in other words, not likely to
              be misunderstood.
            </dd>
            <dt>
              <strong>Enjoyable/Engaging</strong>
            </dt>
            <dd>
              The overall experience makes it so that the users will likely come
              back. The content is presented well, it looks clean and it's not
              overwhelming.
            </dd>
          </dl>
          {/* <!-- The purpose of page layout tags, in a <p> paragraph. --> */}
          <p>
            The purpose of <strong>page layout tags</strong> is that these tags
            help structure the web page so that the user can easily navigate
            through it. Although they do not add much style, and sometimes not
            at all, layout tags help users with visual organization and help
            machines distinguish different webpage areas. The
            <strong>&lt;header&gt;</strong> is the banner of the page, and it is
            usually consistent throughout the website and displays the brand or
            logo of the organization.
            <strong>&lt;nav&gt;</strong> wraps the navigational anchors and it
            can appear more than once on a page. It commonly consists of tabs
            for a desktop App and a dropdown menu for handheld ones. The{" "}
            <strong>&lt;main&gt;</strong> element represents the main block of
            content and encompasses all the other layout tags. The{" "}
            <strong>&lt;section&gt;</strong> element is contained within the
            &lt;main&gt; and groups content that has a main theme. It usually
            contains at least a second-level headline and an article. The{" "}
            <strong>&lt;article&gt;</strong> element wraps a single specific
            topic and a third-level headline.
            <strong>&lt;aside&gt;</strong>
            and <strong>&lt;figure&gt;</strong> are used for side text and
            pictures, respectively.
            <strong>&lt;footer&gt;</strong> typically holds legal and contact
            information and, in some cases, critical links. The{" "}
            <strong>&lt;div&gt;</strong> element is, instead, a general element
            used as a placeholder for a future or to divide content that
            wouldn't make sense to wrap under a different tag.
          </p>
          {/* <!-- How anchors link to content and from page to page. What is the  */}
          {/* conceptual difference between text anchors and navigation? --> */}
          <p>
            <strong>Anchor tags</strong> &lt;a&gt; can create hyperlinks to
            other web pages or different locations on the same page. When anchor
            tags are used in navigation, they are contained in a nav tag and
            displayed either as a menu or tabs. On the other hand, when they are
            used as text anchors, they are often contained in paragraphs, lists,
            or tables, with their destination being another web page that builds
            upon the paragraph's topic.
          </p>
        </article>
        <article id="optimizingImages">
          <h3>Optimizing Images</h3>
          {/* <!-- What are the 6 major specifications of images for the web?  And why?  --> */}
          <p>
            Images, in order to be optimized, need to meet certain
            specifications. They need to have a
            <strong>descriptive file name</strong>. A descriptive file name
            helps improve SEO, so users can find it.{" "}
            <strong>Small file size</strong> to attain the fastest load time.
            This also means delivering high resolution images only to high
            resolution devices. <strong>Exact dimensions</strong>, utilizing
            larger pixels images for smaller pixels spaces only increases load
            time, it is necessary to crop or reduce these in size.{" "}
            <strong>Correct file format</strong>, different file formats are
            suited for different purposes, using the correct one will reduce
            load time. And, finally, the <strong>color mode</strong>, using RGB
            versus indexed coloring.
          </p>
          {/* <!-- Which file formats are most appropriate for photos and for line art? And why? --> */}
          <p>
            The most common file formats for images are .JPG and WebP for
            photography, which have good compression. While, on the other hand,
            .GIF, .PNG, and .SVG are used for line art.
          </p>
        </article>
        <article id="cascadingStylesheets">
          <h3>Cascading Stylesheets</h3>
          {/* <!-- What are the main reasons to incorporate stylesheets in websites and apps? --> */}
          <p>
            While semantic HTML gives basic structure to webpages, it is
            actually CSS (Cascading Stylesheets) that defines how the content is
            supposed to behave. We incorporate stylesheets in websites because
            they can improve usability, readability, and give the webpage an
            engaging design.
          </p>
          {/* <!-- What are the 5 ways to incorporate styles? And why? --> */}
          <p>
            There are different ways you can incorporate stylesheets to your
            App.
            <strong>Externally</strong> through the reference of an external
            .css file from the &lt;link&gt; tag inside the &lt;head&gt; area of
            a website. This is by far the most preferred method. You would use
            this method because it is the most efficient. The other ways are
            done directly within the HTML and JavaScript files.
            <strong>Embedded</strong> within a &lt;style&gt; tag.
            <strong>Inline</strong> within the element we are styling. In{" "}
            <strong>JavaScript template literals</strong> within a JavaScript
            function. And, finally <strong>regular JavaScript</strong>, my
            directly manipulation of the DOM(Document Object Module).
          </p>
        </article>
        <article id="forms">
          <h3>Forms</h3>
          {/* <!-- What are the 6 major goals of accessible forms? And why? --> */}
          <p>
            There are six major goals for accessible forms, the first one being
            to
            <strong>provide clear instructions</strong> above the form and in
            the labels, keeping in mind that placeholder values are only helpful
            to users with vision.
            <strong>Why</strong> is the data being gathered and{" "}
            <strong>which fields are required</strong>. It is also important to
            set the <strong>first field to autofocus</strong>, so users don't
            have to use a pointer to start filling the form out. Add{" "}
            <strong>tab indexing</strong> to complex forms, so users know in
            which order to fill the form fields. Furthermore, the{" "}
            <strong>validation messages need to be screen readable</strong>, so
            the visually impaired can correct the errors in their form. These
            goals are essential to achieve because they ensure a minimum amount
            of accessibility, which means that users with physical or mental
            disabilities can utilize them.
          </p>
          {/* <!-- What are the major tags, their attributes, and their purposes?   --> */}
          <p>
            The most significant tags of forms are the &lt;form&gt;,
            &lt;label&gt;, &lt;input&gt;, and the &lt;textarea&gt; tags. The{" "}
            <strong>&lt;form&gt;</strong> is by far the most important, it
            encompasses the entire form. Two of its main attributes are{" "}
            <strong>action</strong>, which specifies, as a URL, where the
            request from the form should be sent; and the
            <strong>method</strong>, which specifies the HTTP method to be used
            in the request sent when the form is submitted. The &lt;label&gt;
            tag is used by screen readers to describe which data will be needed.
            It also increases the pointer's click area. The for attribute in the
            label needs to match the form control's id, this could be avoided by
            nesting the form control inside the label
            <strong>&lt;input&gt;</strong> and <strong>&lt;textarea&gt;</strong>
            are used to collect the form's data. Thanks to its{" "}
            <strong>type</strong> attribute, the &lt;input&gt; tag can accept
            many different kinds of data, from text to checkboxes, buttons, and
            all sorts of dropdown menus. The <strong>name</strong> attribute is
            essential to the &lt;input&gt; tag as it pairs up with the form's
            value when the form is submitted.
            <strong>Required</strong> is also an important attribute for the
            &lt;input&gt; tag as the form can't be submitted until this field is
            filled in. For field that require multiple lines &lt;textarea&gt; is
            used. This tag has no unique attributes.
          </p>
          {/* <!-- What are the major form style recommendations to improve usability?  And why? --> */}
          <p>
            There are many ways to improve form usability. One way is to use the
            additional &lt;fieldset&gt; and &lt;legend&gt; tags to separate form
            controls into logical groups, not only because it helps understand
            the group, but also because it improves accessibility to the
            visually impaired. Since many forms are filled via cellphone, the
            height and width of control elements should be at least the size of
            the tip of a finger. In order to not overwhelm the user and to make
            the form easier to understand, it is recommended to display the
            labels as blocks. Other styling changes will help the user's
            experience of filling out a form by seeing where they are at and
            what is already completed. One of these styling changes is the{" "}
            <strong>autofocus</strong>
            attribute for the &lt;input&gt; tag. This attributes places the
            user's cursor in, preferably, the first field to be filled, without
            the need to select it. Pointing out which fields are required is
            also very helpful.
          </p>
        </article>
        <article id="backend">
          <h3>Backend</h3>
          {/* <!-- What are these three technologies, and how can we use them to improve the web development experience? --> */}
          <p>
            <strong>Node.js</strong>
            is a runtime environment that allows us to run JavaScript outside
            the browser. This means that JavaScript can be used to develop
            server-side and networking applications. Node offers a great amount
            of JavaScript libraries which ease development.
          </p>
          <p>
            <strong>NPM</strong>
            stands for Node Package Manager, and it allows us to manage our Node
            packages. NPM makes it easy to download packages directly from the
            command line. Other things that NPM is useful for is creating new
            node applications with a simple command "NPM init". NPM contains
            over
            <a href="https://www.w3schools.com/whatis/whatis_npm.asp"> 800,000 libraries</a>
            and it is used by open-source developers to share software.
          </p>
          <p>
            <strong>Express.js</strong> is a framework for Node that allows us
            to manage HTTP requests at different URL paths. One of the great
            things about Express is that developers have created middleware
            packages to fix almost any problem.
          </p>
        </article>
        <article id="javascript">
          <h3>JavaScript</h3>
          {/* <!-- What are the main data types? --> */}
          <p>
            The main data types in JavaScript are{" "}
            <strong>numbers, boolean values, strings, symbols, objects</strong>{" "}
            and special values <strong>undefined</strong> and{" "}
            <strong>null</strong>. All these types, except for objects, are
            considered primitive data types. In JavaScript we don't need to
            declare the data type of a variable in fact, we can even assign
            values of different types to the same variable throughout the
            program.
          </p>
          {/* <!-- How are objects, arrays and JSON used? --> */}
          <p>
            a JavaScript <strong>object</strong> is a set of name-value pairs
            known as object properties. We can get a list of all the properties
            of an object by passing it to the method "Object.keys()"{" "}
            <strong>Arrays</strong> in JS are objects whose property names are
            integers but as strings (ex. '0','1','2') although, the can be
            accessed by using them in integer form. The elements of arrays can
            be of different data types, even objects. By using method
            "includes()" we can determine if an array contains an element with
            the passed in value.
            <strong>JSON</strong> JavaScript Object Notation is a widely used
            format to exchange data between applications and programming
            languages. JSON is so widely used that many programming languages
            have libraries to read and write it. We can use "JSON.stringify()"
            to create a JSON string from a JavaScript object, and "JSON.parse()"
            to create JavaScript object from a JSON string.
          </p>
          {/* <!-- How are conditionals and loops used? --> */}
          <p>
            One thing that makes JavaScript different from other programming
            languages is the <strong>automatic type conversion</strong>, which
            in JS can have unexpected results. For this reason, it is
            recommended to avoid automatic conversion to Boolean values when it
            can be easily done by having conditions explicitly produce Boolean
            values. Furthermore, when using comparison operators, make sure that
            both operands are of the same data type. Another important aspect of
            JS is the difference between strict and loose comparison operators,
            it is important to use the strict comparison operators when possible
            as they don't allow for automatic typecasting. Like other languages,
            JavaScript supports "if" and "switch" statements. The loops in JS
            are of course the usual "while" loop, but also "do while", "for",
            "for of", and "for in". The <strong>while</strong> loop keeps
            executing as long as the condition is met, while the
            <strong>do while</strong> loop is mostly the same except that it
            executes the loop once before evaluating the expression. The
            <strong>for</strong> loop is the same as many other languages, but
            what JS offers more than some other languages is the
            <strong>for of</strong> loop for iterating over elements of an
            iterable value, <strong>for in</strong> which, instead, iterates
            over the properties of an object.
          </p>
          {/* <!-- What is object-oriented programming? --> */}
          <p>
            <strong>Object-oriented programming</strong>, or OOP for short, is
            the utilization of classes and objects for the creation of functions
            and the storing of information within a program. Classes and Objects
            make it easy to structure the code into simple and reusable pieces
            of code. Classes set the blueprints and rules on how objects are
            created and behave. Objects, instead, are instances of classes and
            are meant to easily represent real world "objects", such as a
            bicycle or a dog. Classes can also inherit from other classes in
            order to reutilize some of those values and methods but, at the same
            time, allowing them to be modified by the subclass.
          </p>
          {/* <!-- What is functional programming? --> */}
          <p>
            <strong>Functional programming</strong> doesn't use classes and
            objects but, instead, uses independent functions and also closure to
            store values. What allows JavaScript to br such an effective
            functional programming language is the ability to assign functions
            to variables, define functions that receive other functions as
            arguments, and also define function that return functions.
          </p>
          {/* <!-- JavaScript golden rules --> */}
          <p>
            The Golden Rules of JavaScript are: 1. declare variables with let or
            const, not var. 2. Use strict mode. 3. Know your types and avoid
            automatic type conversion. Golden Rule 4: Understand prototypes, but
            use modern syntax for classes, constructors, and methods.
          </p>
          {/* <!-- let, var and const --> */}
          <p>
            <strong>const</strong> is used for values that don't change.{" "}
            <strong>let</strong> is instead used when a value will or might
            change. When it comes to objects, we can indeed modify values of
            const object properties, but we cannot assign a new value to a const
            variable. Declaring variables with <strong>var</strong> should be
            avoided because unlike let, var variables can be redeclared, they
            don't have Block Scope, and can be used before being declared.
            Always use <strong>"strict mode"</strong> as it makes otherwise
            accepted bad syntax into real errors. For example, mistyping a
            variable in JS creates a new variable instead of throwing an error.
            ES modules are automatically in strict mode. The{" "}
            <strong>One True Brace Style</strong> is recommended when writing
            JavaScript.
          </p>
        </article>
        <article id="theDOM">
          <h3>The DOM</h3>
          {/* <!-- Why do developers update the DOM of a page using JavaScript and Express? --> */}
          <p>
            Developers use JavaScript to manipulate the <strong>DOM</strong> in
            order to make web applications interactive. This interactivity in
            web applications is called <strong>event-driven programming</strong>
            . It works by waiting for a user's action, such as a mouse click or
            pressing a key, and it dispatches an event as a response.{" "}
            <strong>Express.js</strong> is a web application framework for
            Node.js, and it is to manipulate the DOM because it is used to
            handle HTTP methods. Used in conjunction with frontend JavaScript,
            it allows us to manipulate the DOM in real-time, so we can add more
            (or less) information to the web page.
          </p>
          {/* <!-- what are preventDefault and stopPropagation --> */}
          {/* <!-- <p>
                    If the parent element has defined an event handler for the same event, the event gets propagated upwards.
                </p> --> */}
          {/* <!-- what is asynchronous JS  -->
                <!-- <p>
                    resolve and reject
                    "callback hell"
                </p> --> */}
        </article>
      </section>
    </>
  );
}

export default HomePage;
