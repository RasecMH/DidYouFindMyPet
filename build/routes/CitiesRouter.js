"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CitiesController_1 = __importDefault(require("../controller/CitiesController"));
const router = (0, express_1.Router)();
const controller = new CitiesController_1.default();
router.get('/:id', controller.findById);
router.get('/search', controller.findByQuery);
exports.default = router;
//# sourceMappingURL=CitiesRouter.js.map