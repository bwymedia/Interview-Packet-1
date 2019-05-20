# BMD Coding Questions

You've recieved this packet because you're interested in interviewing with BMD for a technical position.  Contained in this packet are the files you will need to handle a series of coding questions.  The questions are structured to build one on the other, but you may be able to work on later questions even if you fail on one.

## First Challenge

In `data.json`, you'll find a data structure in JSON format.  There's just one problem with this data: it doesn't contain the expected unique keys!  Instead, it contains the string 'secure_identifier_key' everywhere a unique identifier is expected.

Write code that will automatically replace the string 'secure_identifier_key' with a different string.  Provide both the code necessary to perform this transformation, and enough documentation to allow us to run it locally.

If you're not sure what the output should look like, examine `data2.json`.

## Second Challenge

You now have a notional data for an equally notional show.  Unfortunately, your local app doesn't have the files it needs!  If you examine `download.html` and `download.js`, you'll find a very bare-bones notional download implimentation.  Click the start button, and it starts downloading, and will either succeed or fail.  This notional implimentation is intended as a starting point.  Please note that these files are bare-bones html and javascript with JQuery.  Use of complex JS frameworks such as React is not appropriate to this challenge: use basic javascript, JQuery, and HTML for this step.  You *may* use CSS, but it's absent is deliberate to help focus this challenge on what you're supposed to achieve.

Your goal is to 'download' all the files you created IDs for in the previous challenge.  Unfortunately, the download method doesn't handle several issues you're going to want to handle.

* Iterate through the datastructure from challenge 1, and 'download' all the relevant IDs -- both thumbnails and video sets.
* If a download fails, you need to retry it.
* Provide some form of UI to track this with.  It's not expected to look fantastic, just provide some basic status feedback.  Your goal is an 'at a glance' indicator of overall status.
* Bonus: You cannot simultaneously download more than X files -- where X is a parameter you call your initiating method with
* Bonus: Sometimes, repeated failures are a signal that the issue is server-side.  Assuming the server will eventually be fixed, handle this issue 'somehow'.  Create a document explaining your methodology: how it works, why you think this is a good solution, etc etc.

While working on this challenge, it may be helpful to manipulate the failure chance on the download method.  However, your finished version should include the original download method, unchanged.  When you submit, make sure that the original download method isn't changed!  The rest of the code is yours to play with.

If you have Python installed, you may find the following terminal command of use: `python -m SimpleHTTPServer 8888`  This command will run a (very) simple HTTP server at the indicated port, from the current directory.

## First Bonus Challenge

The code you wrote in part 2 produces a pretty ugly output.  Using the Javascript framework of your choice (React preferred but not required), create a more comprehensive UI with an eye towards at least basic aesthetics.  You may change data structures and methods as necessary to fit into the framework.  

Your submission must include a readme.md file containing:

* Documentation on running your implimentation, including exact console commands.  Entries like 'Install NPM' are acceptible if they include links to relevant resources.
* A review of how you changed the download method, and how you've maintained it's basic functionality in the new framework

## Second Bonus Challenge

Write up a server implimentation that can actually store and provide the requested files.  A reasonable degree of indirection is allowable: for example, if using S3, your server may simply provide an expiring URL that lets the user download directly from S3.

Your submission should support:

* An authentication scheme
* A way to download the requested files
* A way to track who has downloaded what files

Your submission should include a readme.md file containing:

* Documentation on running your implimentation, including exact console commands.  Entries like 'Install NPM' are acceptible if they include links to relevant resources.
* Documentation covering how an external application should connect to the system