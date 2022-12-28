/* eslint-disable @typescript-eslint/no-unused-expressions */

import logger from '#modules/logger.js';
import sourceMapSupport from 'source-map-support';
import yargs from 'yargs';

sourceMapSupport.install();

const log = logger();

yargs(process.argv.slice(2)).option('-p', { describe: 'test' }).argv;

log.info('cli boilerplate');
