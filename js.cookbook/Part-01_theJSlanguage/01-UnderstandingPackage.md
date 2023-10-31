The package.json file is an application configuration file that was introduced with Node, but is now used for a variety of purposes. It stores descriptive information about your project, its creator, and its license, which becomes important if you ever decide to publish your project as a package on npm.

The package.json file also tracks your dependencies (the packages your application uses) and can store extra configuration steps for debugging and deployment.

It’s a good practice to begin by creating a package.json file whenever you start a new project. You can create the file by hand, or using the npm init -y command

The newly generated file looks like the one below:

{
"name": "test_site", "version": "1.0.0", "description": "", "main": "index.js", "scripts": {
"test": "echo \"Error: no test specified\" && exit 1" },
"keywords": [], "author": "",
"license": "ISC"
}

The package.json file uses the JSON (JavaScript Object Notation) format. It holds a comma-separated list of property settings, all wrapped inside {} braces. You can edit package.json in your code editor at any time.
When you install a package with npm, that dependency is recorded in package.json using a property named dependencies. For example, if you install Lodash, the package.json file will look like this:

{
"name": "test_site", "version": "1.0.0", "description": "", "main": "index.js", "scripts": {
"test": "echo \"Error: no test specified\" && exit 1" },
"keywords": [], "author": "", "license": "ISC", "dependencies": {
"lodash": "^4.17.20" }
}

Don’t confuse package.json with package-lock.json. The package.json file stores basic project settings and lists all the packages you use. The package- lock.json file specifies the exact version and checksum of every package you use (and the version and checksum of each package those packages use). For example, here’s the automatically created package-lock.json file after you install Lodash:

{
"name": "test-site", "version": "1.0.0", "lockfileVersion": 1, "requires": true, "dependencies": {
"lodash": {
"version": "4.17.20",
"resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.20.tgz", "integrity": "sha512-
PlhdFcillOINfeV7Ni6oF1TAEayyZBoZ8bcshTHqOYJYlrqzRK5h
agpagky5o4HfCzzd1TRkXPMFq6cKk9rGmA=="
} }
}

In other words, package-lock.json “locks” your packages to a specific version. This is useful if you’re deploying your project to another computer, and you want to install exactly the same versions of every package that you used during development.
