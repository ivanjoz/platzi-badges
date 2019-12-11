const fs = require('fs');
const path = require('path');
const http = require('http');

const static = ['public','styles','pages','libs','images','components'];

// Server PORT
const PORT = 3000;
const indexPath = path.join(__dirname,'index.html');

// Function to handle requests and send response
function handleRequest(req, res){
  const method = req.method;
  const url = req.url;
  const uriPaths = url.split('/');
  console.log(uriPaths);
  // Cheking if the request if for a static resource
  if(method==='GET' && static.includes(uriPaths[1])){
    
    let filePath = path.join(__dirname,uriPaths[1],uriPaths[2]);
    // console.log('Sending : ' + filePath);    
    let exists = fs.existsSync(filePath);
    if(exists){
      // Cheking mimeType
      let mimeType = filePath.substring(filePath.lastIndexOf('.'));
      let contentType = contentTypes[mimeType];
      
      if(!contentType) return;
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(filePath).pipe(res);
    }
  } 
  // Badges API
  else if(uriPaths[1]=== 'badges-api'){
    handleBadgesAPI(req, res, uriPaths[2]); return;
  }
  // In any other cases, send the main index file
  else if(method==='GET'){
    console.log('enviando index file');
    res.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
    fs.createReadStream(indexPath).pipe(res);
  }
};

// Function to handle Badges API
async function handleBadgesAPI(req,res,uriPath){
  console.log('sending badges');
  let BadgesColl = db.getCollection('badges')
  // Sent badges information
  if(req.method === 'GET' && !uriPath){
    let allBadges = BadgesColl.find({});
    res.writeHead(200, { 'Content-Type': 'application/json;charset=UTF-8' });
    res.write(JSON.stringify(allBadges));
    res.end();
  };
}

const contentTypes = {
  '.js': 'text/javascript;charset=UTF-8',
  '.css': 'text/css;charset=UTF-8',
  '.svg': 'image/svg+xml;charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
}

// Creates the server
const Server = http.createServer(handleRequest);

// Starting the server !
Server.listen(PORT, function(){
  console.log("Web Application Started on Port : ", PORT);
});

// Loki JSON Database
const loki = require(path.join(__dirname,'server','lokijs.min.js'));
const dbPath = path.join(__dirname,'server','database.json');

const db = new loki(dbPath, {autoload: true, autoloadCallback : databaseInitialize});
var badgesCollection;

// Database loaded handler
function databaseInitialize(){

  badgesCollection = db.getCollection("badges");
  if (!badgesCollection) {
    badgesCollection = db.addCollection("badges");
    // Add the initial db badges
    let initialBadgesPath = path.join(__dirname,'server','initialDBRecords.json');
    let initialBadgesData = fs.readFileSync(initialBadgesPath,{encoding:'UTF-8'});
    initialBadgesData = JSON.parse(initialBadgesData);
    let badgesArray = initialBadgesData.badges;
    for(let badge of badgesArray){
      badgesCollection.insert(badge);
    };
    // Write database to disk
    db.saveDatabase();
  };  
};


