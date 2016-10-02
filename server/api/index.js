'use strict';

var Jimp = require("jimp");
var fs = require('fs');


exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {

            reply({ message: 'Welcome to the Image Processing Service.' });
        }
    });

    server.route({
        method: 'POST',
        path: '/submit',
        config: {

            payload: {
                output: 'file',
                parse: true,
                allow: ['application/json', 'multipart/form-data']
            },

            handler: function (request, reply) {
                var data = request.payload;
                if (data.path) {
                    Jimp.read(data.path, function (err, lenna) {
                        var saveFileName = generateUUID();
                        var jpgFileName = `/tmp/${saveFileName}.jpg`;
                        if (err) throw err;
                        lenna.greyscale()                 // set greyscale 
                            .write(jpgFileName, (err) => {
                                fs.readFile(jpgFileName, null,  function (err, contents) {
                                    reply(contents);
                                });
                                
                            });

                    });

                }

            }
        }
    });


    next();
};




exports.register.attributes = {
    name: 'api'
};

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};
