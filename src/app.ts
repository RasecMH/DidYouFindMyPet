import express from 'express';
import httpErrorMiddleware from './middleware/errorMiddleware';
import UserRouter from './routes/UserRouter';
import PetRouter from './routes/PetRouter';
import LocationRouter from './routes/LocationRouter';
import 'dotenv/config';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use('/user', UserRouter);
    this.app.use('/pet', PetRouter);
    this.app.use('/location', LocationRouter);
    this.app.use(httpErrorMiddleware);

    this.app.use('/images', express.static('public/images/qrcodes'));
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

const PORT = process.env.APP_PORT || 3001;
new App().start(PORT);
