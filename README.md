# char-api
## Demo API
This is a demo web API which returns the count of occurrences of a character in an array of words
## How to use
Server runs on environment set port or defaults to 3000
It has only a single end-point, /countchars which accepts a POST request containing character (a single character to count) and words (an array of alphabetical strings)

```
{
    "character": "w",
    "words":["word","word"]
}
```

## How to start

All required files are included in the repo. To start the server you will need to run the following commands
>npm install

This will install the project dependencies. Followed by
>npm start

Which will start the server.
