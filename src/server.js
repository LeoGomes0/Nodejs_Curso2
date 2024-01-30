const http = require("http");
const stats = require("./ramUsage");


http.createServer((req, res) => {
    let url = req.url;

    if (url === "/stats") {
        res.end(JSON.stringify(stats, null, 2));
    } else {
        res.end(JSON.stringify({ message: "Adicione /stats" }))
    }
}).listen(3000, () => { console.log("Server Online"); });