require("babel-register")({
  "presets": [
    ["env", {
      "targets": {
        "node": "current"
      }
    }]
  ],
  "cache": true
});
require('./app/index');