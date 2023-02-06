"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateCreatePetFields_1 = __importDefault(require("../middleware/validateCreatePetFields"));
const validateToken_1 = __importDefault(require("../middleware/validateToken"));
const PetController_1 = __importDefault(require("../controller/PetController"));
const router = (0, express_1.Router)();
const controller = new PetController_1.default();
router.post('/create', validateCreatePetFields_1.default, validateToken_1.default, controller.create);
router.get('/:id', controller.findById);
exports.default = router;
//# sourceMappingURL=PetRouter.js.map