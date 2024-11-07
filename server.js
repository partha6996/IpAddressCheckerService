const express = require('express')
const ip = require('ip');

const app = express();

app.get('/', (re1, res) => {
    const serverIp = ip.adress();
    return res.json({
        ping: 'Pong',
        message: serverIp 
    })
});

app.listen(3000, () => {
    console.log("server is running");
})
