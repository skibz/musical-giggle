
# musical-giggle

```bash
# generate a new route and unit test
npm run new-route "my route"
# run unit tests for your route callbacks (fast)
npm run test-routes
# or, test your http socket and route callbacks (not fast)
npm test
```

```
.
├── .editorconfig
├── .gitignore
├── .nvmrc
├── .travis.yml
├── LICENSE
├── README.md
├── bin
│   └── new-route
├── index.js
├── package.json
├── routes
│   ├── example.js
│   └── healthcheck.js
└── test
    ├── index.js
    └── routes
        ├── example.js
        └── healthcheck.js

4 directories, 14 files
```

##### todos

* [x] route and test generator
* [x] factor out mocking of express's request and response streams
* [ ] codeclimate test coverage reporting
