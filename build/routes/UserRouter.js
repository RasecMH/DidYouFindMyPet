"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateLoginFields_1 = __importDefault(require("../middleware/validateLoginFields"));
const validateRegisterFields_1 = __importDefault(require("../middleware/validateRegisterFields"));
const UserController_1 = __importDefault(require("../controller/UserController"));
const validateToken_1 = __importDefault(require("../middleware/validateToken"));
const router = (0, express_1.Router)();
const controller = new UserController_1.default();
router.post('/register', validateRegisterFields_1.default, controller.register);
router.post('/login', validateLoginFields_1.default, controller.login);
router.get('/', validateToken_1.default, controller.findById);
exports.default = router;
//# sourceMappingURL=UserRouter.js.map