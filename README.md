REST-API-UTILS
===================================
This project has implemented some useful REST API services and tt's currently available on the following address in Heroku.com:
  * https://rest-api-utils.herokuapp.com/
## SPOTIFY APIs
 - To request an access token use the following method:
   - ***URL:*** https://rest-api-utils.herokuapp.com/spotify/login
   - ***Method:*** POST
   - ***Body:*** {
      client_id: <spotify-client_id>
      client_secret: <spotify-client_secret>
     }
   
   - ***Response:***
      {
        "access_token": <The access token to consume the Spotify API>,
        "token_type": "Bearer",
        "expires_in": 3600,
        "scope": ""
      }
