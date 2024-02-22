#!/bin/bash

uglifyjs "now-ui-kit.js" -o "now-ui-kit.min.js" --source-map "url='now-ui-kit.min.js.map',filename='now-ui-kit.min.js.map'" --mangle reserved=['$','require','exports'] --comments '/^!|@preserve|@license|@cc_on/'
uglifyjs "now-ui-kit-plugins.js" -o "now-ui-kit-plugins.min.js" --source-map "url='now-ui-kit-plugins.min.js.map',filename='now-ui-kit-plugins.min.js.map'" --mangle reserved=['$','require','exports'] --comments '/^!|@preserve|@license|@cc_on/'
