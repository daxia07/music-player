## Google oauth2
### refresh token from backend
Topic: https://stackoverflow.com/questions/19766912/how-do-i-authorise-an-app-web-or-installed-without-user-intervention
### Oauth2 playground
Workflow:
1. Authorize API (client side)
2. Exchange auth code for tokens
3. Send refresh token to the backend 
4. Configure request for API
### Oauth2 API
1. get refresh token status by calling API
2. get new refresh token if necessary and post to API
3. get cached playlist
4. scan for new songs or changes
### packages
react-use-googlelogin
isSingedIn to replace isAuthenticated
signIn/signOut to replace MS buttons
grantOfflineAccess to fetch refresh token

POST /token HTTP/1.1
Host: oauth2.googleapis.com
Content-length: 261
content-type: application/x-www-form-urlencoded
user-agent: google-oauth-playground
code=4%2F0AY0e-g7pSK7cI6nd9VCpT-iynTxA0u89qFvm7OHSiErETl_lpiIde8iMIDM9in156lHirg&redirect_uri=https%3A%2F%2Fdevelopers.google.com%2Foauthplayground&client_id=407408718192.apps.googleusercontent.com&client_secret=************&scope=&grant_type=authorization_code

### Issues
Not working for Chrome private mode

### request refresh token
```javascript
const handleRequest = async () => {
        const code =  await grantOfflineAccess()
        console.log(code)
        const params = new URLSearchParams()
        params.append('code', urlencode(code))
        params.append('client_id', urlencode(process.env.REACT_APP_GOOGLE_CLIENT_ID))
        params.append('client_secret', urlencode(process.env.REACT_APP_GOOGLE_CLIENT_SECRET))
        params.append('scope', '')
        params.append('grant_type', 'authorization_code')
        params.append('redirect_uri', urlencode('http://localhost:3000'))
        const res = await axios.post('https://oauth2.googleapis.com', {}, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        console.log(res)
    }
```

### refresh token with device code
https://stackoverflow.com/questions/28593022/list-google-drive-files-with-curl
    