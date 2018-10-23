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
    file = `disk/${name}.${mode}.js`;
    format = mode;
}

module.exports = {
    input: 'src/index.js',
    output: {
        file,
        format,
        name,
        sourcemap: true,
        banner: `/* mki library version ${version} */`
    },
    plugins: [
        resolve(),
        json(),
        mode !== 'es' && babel({
            babelrc: false, 
            plugins: ['external-helpers'],
            exclude: 'node_modulesn/**',
            runtimeHelpers: true,
            presets: [
                [
                  "env",
                  {
                    "modules": false
                  }
                ]
              ]
        }),
        replace({
            ENVIRONMENT: JSON.stringify(target)
        }),
        commonjs(),
        mode !== 'es' && buble(),
        target === 'production' && uglify(),
        target === 'production'&& hash({ 
            dest: `dist/${name}.[hash:6].js`,
            manifest:'conf/manifest.json',
            manifestKey:`${name}.js`
        }),
        builtins(),
        progress()
    ],
    onwarn ({code, loc, frame, message}) {
        // 跳过某些警告
        if (code === 'UNUSED_EXTERNAL_IMPORT') return;

        // 抛出异常
        if (code === 'NON_EXISTENT_EXPORT') throw new Error(message);

        // 打印位置（如果适用）
        if (loc) {
            console.warn(`${loc.file} (${loc.line}:${loc.column}) ${message}`);
            if (frame) console.warn(frame);
        } else {
            console.warn(message);
        }
    },
    watch: {
        chokidar: true,
        exclude: 'node_modules/**',
        include: 'src/**'
    }

};