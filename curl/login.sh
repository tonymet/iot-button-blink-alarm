curl -v -H "Host: prod.immedia-semi.com" -H "Content-Type: application/json" \
  --data-binary "{ \"password\" : \"$BLINK_PASSWORD\", \"client_specifier\" : \"iPhone 9.2 | 2.2 | 222\", \"email\" : \"$BLINK_USERNAME\" }" \
  --compressed  https://rest.prod.immedia-semi.com/login
