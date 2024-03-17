import URIs from './URIs.json';
import express from 'express';

const app = express();
const port = process.env.PORT || 80;

for (const i of URIs) {
    app.get(`/${i.path}`, (req, res) => {
        res.redirect(i.longURI);
    })
}

app.listen(port, () => console.log(`Listening on port ${port}`));