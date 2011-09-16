#!/usr/bin/env node

var jwk = require("./jwk"),
    vep = require("./vep"),
    jwt = require("./jwt"),
    jwcert = require("./jwcert");

var full_raw_assertion = process.argv[2];
var full_assertion = vep.unbundleCertsAndAssertion(full_raw_assertion);

var tok = new jwt.JWT();
tok.parse(full_assertion.assertion);
console.log("audience: " + tok.audience);
console.log("expires: " + tok.expires);

// FIXME: add certificates