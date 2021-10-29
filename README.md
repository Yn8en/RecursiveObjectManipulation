<!-- GETTING STARTED -->
## Getting Started
Very straight forward .... its just 4 simple files:
1.flattenObj.js
  this is the core JS file!
2. testObject.json
  this is the JSON object that is flattend by default.
  you can of course alter easily to just hard code your obj, do whatever!
3. helpers.js
  this is just for reusability/convenience ...
  I abstracted the node FS module imports and defined the JSON read funcs (syncronous & asyncronous) in that file.
  This way I can reuse them in my other projects helper files if comes handy.
4. package.json
  just a dummyversion to enable the ES6 module im/export in node ... like that the most


###Usage
actually super simple, nothing special!

1. throw all files into a folder
2. tweak flattenObj.js and/or JSON file as you like
4. run flattenObj.js from CLI

Please note that in the repo state it has nodeJS as requirement, since its using FS import.
You can alter to any other runtime or just simply copy pasting the Object into the .js file to avoid the JSON read, whatever.
