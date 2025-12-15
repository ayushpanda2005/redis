const client = require("./client")

async function init() {
    const result = await client.get("user:1")
    console.log("Result---> " , result) 
}

async function inits() {
    await client.set("user:4","jagyan")
    // await client.expire("user:4",10) //expire cache content after 10s
    const result = await client.get("user:4")
    console.log("Result---> " , result) 
}

inits() ;