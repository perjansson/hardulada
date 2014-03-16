var express = require("express"),
    app = express(),
    server = require('http').createServer(app),
    restApi = require(__dirname + '/server/restapi.js')

restApi.startForApp(express, server, app);