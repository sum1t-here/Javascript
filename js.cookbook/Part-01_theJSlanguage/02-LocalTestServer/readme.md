Two simple, reliable choices are the http-server and lite- server packages that you can install through npm. We use lite-server here, because it adds a live update feature that automatically refreshes the page in the browser when you save changed code in your editor.

Before you install lite-server, it helps to have a sample web page to request. If you haven’t already done so, make a project folder and configure it with the npm init -y command

Then, add a file named index.html with a basic content.

To install lite-server, use:

`npm install lite-server --save-dev`

Now you can run lite-server directly from a terminal window using
npm’s package runner

`npx lite-server`

The lite-server attempts to return index.html, or just displays “Cannot GET /” if you don’t have a file with that name

a more convenient setup is to make a development run task that automatically starts the server. You can do that by editing the package.json file and adding the following instruction to the scripts section:

{
...
"scripts": {
"dev": "lite-server"
} }

You can now run it with the npm run command at the terminal:

`npm run dev`
