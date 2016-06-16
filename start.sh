#DEBUG=sca:* env=dev PORT=12403 nodemon -i node_modules ./index.js

pm2 delete odi
pm2 start odi.js --watch --ignore-watch="test .sh$ doc ui example"

