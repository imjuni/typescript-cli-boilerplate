import log from 'consola';
import { isError } from 'my-easy-fp';
import { install as sourceMapSupportInstall } from 'source-map-support';
import yargs from 'yargs';

import Container from 'src/modules/container';

sourceMapSupportInstall();

const parser = yargs(process.argv.slice(2));
parser.option('-p', { describe: 'test' });

const handler = async () => {
  const c = new Container('typescript cli boilerplate');
  log.info(`start typescript cli boilerplate: ${c.name}`);
  await parser.argv;
};

handler().catch((caught) => {
  const err = isError(caught, new Error('unknown error raised'));
  log.error(err.message);
  log.error(err.stack);
});
