'use strict'

const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk')
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');

const spriner = ora('building for production...');
spriner.start();

rm(path.resolve(config.build.assetsRoot,config.build.assetsSubDirectory), err => {
    if(err) throw err;
    webpack(webpackConfig, (err, stats) => {
        spriner.stop();
        if (err) throw err;
        // process.stdout.write(stats, toString({
        //     colors: true,
        //     modules: false,
        //     children: false,
        //     chunks: false,
        //     chunkModules: false
        // }) + '\n\n');
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
            chunks: false,
            chunkModules: false
          }) + '\n\n')

        if(stats.hasErrors()) {
            console.log(chalk.red(' build failed with errors. \n'));
            process.exit(1)
        }

        console.log(chalk.cyan( 'build complete. \n'));
        console.log(chalk.yellow(
            ' Tip: built files are meant to be served over an HTTP server.\n' + 
            ' Opening index.html over file:// won\'t work .\n'
        ))

    })
})


