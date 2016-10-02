'use strict';

const Composer = require('./index');


Composer((err, server) => {

    if (err) {
        throw err;
    }

    server.start(() => {

        console.log('Started the Image Processor backend on port ' + server.info.port);
    });
});
