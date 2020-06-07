const express = require('express');
const app = express();
const request = require('request');
const spotifyUrlToken = 'https://accounts.spotify.com/api/token';

app.post('/spotify/login', (req, resp) => {
  let body = req.body;

  var authOptions = {
    url: spotifyUrlToken,
    headers: {
      Authorization: 'Basic ' + new Buffer(body.client_id + ':' + body.client_secret).toString('base64')
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  request.post(authOptions, (err, httpResponse, body) => {
    if (err) {
      return resp.status(400).json({
        ok: false,
        mensaje: 'No se pudo obtener el token',
        err
      })
    }

    resp.json(body);
  });
});


module.exports = app;