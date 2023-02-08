"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qrcode_1 = __importDefault(require("qrcode"));
const path_1 = __importDefault(require("path"));
const createQrCode = async (id) => {
    console.log(__dirname);
    const myPath = path_1.default.join(__dirname, 'public/images/qrCodes');
    // const fileName = `${id}.png`;
    console.log(`${myPath}/${id}.png`);
    const qrBase64 = await qrcode_1.default.toFile(`/public/images/qrcodes/${id}.png`, `https://did-you-find-my-pet.vercel.app/pet/${id}`);
    return qrBase64;
};
exports.default = createQrCode;
//# sourceMappingURL=createQrCode.js.map