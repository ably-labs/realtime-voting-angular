const express = require('express');

const app = express();

app.use(express.static('./dist/ng-vote-ably'));


app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/ng-vote-ably'});
});

app.listen(process.env.PORT || 9000);
