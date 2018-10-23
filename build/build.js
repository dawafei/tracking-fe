/**
 * Created by gaofei on 2018/10/13.
 */

const rollup = require('rollup');
let config = require('./config');

async function build() {
    const bundle = await rollup.rollup(config);
    await bundle.write(config.output);
}

build();
