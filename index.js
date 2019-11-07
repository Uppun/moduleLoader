const parser = require('./parser');
const fs = require('fs');

const modules = fs.readdirSync('./modules');

const messageParser = new parser();

for (const moduleName of modules) {
    const module = require('./modules/' + moduleName);
    const testModule = new module(messageParser);
}

messageParser.informModules({content:'hello'});
messageParser.informModules({content:'!test hello'});