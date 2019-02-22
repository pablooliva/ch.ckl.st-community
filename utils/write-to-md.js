/*
Call this file using node from a directory within the repo, i.e. $ node utils/write-to-md.js -s fileName.json
The -s flag denotes the source file to use, followed by the JSON file to parse into md format.
The JSON files need to be stored in /checklists/source-files/ and when called from the command line, do not
require the path, just the filename.
The .md filed created will be saved to /checklist/result-files/.
 */

const argv = require("minimist")(process.argv.slice(2));
const fs = require("fs");
const path = require("path");
const readFilePath = path.join(__dirname, "../checklists/source-files/" + argv["s"]);
fs.readFile(readFilePath, "utf8", function (err,data) {
  if (err) {
    return "Your file could not be read: " + err;
  }
  
  const fileObj = JSON.parse(data);
  let strOut = `# ${ fileObj.documentTitle }
  
${ fileObj.flexibleText }
`;


  fileObj.sections.forEach(section => {
    strOut += `

## ${ section.title }

${ section.flexibleText }
  
`;
    section.checklistItems.forEach(item => {
      strOut += `- [ ] ${ item.label }
      ${ item.flexibleText }

`;
    });
  });
  
  
  const fileName = fileObj["_id"] + "_" + fileObj.documentTitle.replace(/\s/g, "_");
  const writeFilePath = path.join(__dirname, "../checklists/result-files/" + fileName + ".md");
  fs.writeFile(writeFilePath, strOut, function(err) {
    if(err) {
      return "Your file could not be saved: " + err;
    }
    
    console.log("The file was saved!");
  });
});