'use strict';

import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();

const {

    PORT,
    HOST,
    HOST_URL,
    DATABASE_URL
} = process.env;

assert(PORT, 'PORT is Required');
assert(HOST, 'HOST is Required');

const config = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    database_url: DATABASE_URL
}

export default config;