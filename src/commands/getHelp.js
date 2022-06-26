const fs = require("fs/promises");
const path = require("path")

async function getHelp(){
    const file = await fs.readFile(path.resolve(__dirname, "../telegram/help.html"), "utf-8");

    return file;
}

module.exports = {
    getHelp
}