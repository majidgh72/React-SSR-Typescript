import express, { static as ExpressStatic } from 'express';
import compression from 'compression';
import { renderApp } from './utils';

const server = express();

server.set('view engine', 'hbs');
server.set('views', 'src/server');

server.use(compression());

server
  .disable('x-powered-by')
  .use(ExpressStatic(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req: express.Request, res: express.Response) => {
    const { markup = '', cssLinks, scriptTags, redirect = false } = renderApp(req);

    if (redirect) {
      res.redirect(redirect);
    } else {
      res.render('template', {
        markup,
        cssLinks,
        scriptTags,
      });
    }
  });

export default server;
