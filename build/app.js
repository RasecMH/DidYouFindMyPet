"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const UserRouter_1 = __importDefault(require("./routes/UserRouter"));
const PetRouter_1 = __importDefault(require("./routes/PetRouter"));
const LocationRouter_1 = __importDefault(require("./routes/LocationRouter"));
const CitiesRouter_1 = __importDefault(require("./routes/CitiesRouter"));
require("dotenv/config");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.app.get('/', (req, res) => res.json({ ok: true }));
    }
    config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(express_1.default.json());
        this.app.use(accessControl);
        this.app.use('/user', UserRouter_1.default);
        this.app.use('/pet', PetRouter_1.default);
        this.app.use('/location', LocationRouter_1.default);
        this.app.use('/cities', CitiesRouter_1.default);
        this.app.use(errorMiddleware_1.default);
        this.app.use('/images', express_1.default.static('public/images/qrcodes'));
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
const PORT = process.env.APP_PORT || 3001;
new App().start(PORT);
//# sourceMappingURL=app.js.map