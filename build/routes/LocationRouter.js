"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateCreateLocationFields_1 = __importDefault(require("../middleware/validateCreateLocationFields"));
const LocationController_1 = __importDefault(require("../controller/LocationController"));
const validateToken_1 = __importDefault(require("../middleware/validateToken"));
const router = (0, express_1.Router)();
const controller = new LocationController_1.default();
router.post('/create', validateCreateLocationFields_1.default, controller.create);
router.get('/:id', validateToken_1.default, controller.findById);
router.get('/all/:petId', validateToken_1.default, controller.findAllByPetId);
exports.default = router;
//# sourceMappingURL=LocationRouter.js.map