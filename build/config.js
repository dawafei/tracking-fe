/**
 * Created by gaofei on 2018/10/13.
 */
let path = require('path');
let json = require('rollup-plugin-json');
let babel = require('rollup-plugin-babel');
let replace = require('rollup-plugin-replace');
let buble = require('rollup-plugin-buble');
let alias = require('rollup-plugin-alias');
let resolve = require('rollup-plugin-node-resolve');
let commonjs = require('rollup-plugin-commonjs');
let uglify = require('rollup-plugin-uglify').uglify;
let hash = require('rollup-plugin-hash');
let builtins = require('rollup-plugin-node-builtins');
let progress = require('rollup-plugin-progress');
let {name, version, main} = require('../package.json');
let format = 'umd';
let file = main;
let {target = 'production', mode = ''} = process.env;

if (mode) {
    file = `dist/${name}.${mode}.js`;
   format = mode;
   name = 'track';
}

module.exports = {
    input: 'src/index.js',
    output: {
        file,
        format,
        name,
        sourcemap: true,
    },
    plugins: [       
    ]
};