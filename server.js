const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080


app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req,res) => {
    res.end("hello world");
});

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`);
});

