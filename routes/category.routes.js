import { Router } from "../dep.js";

const router = new Router();

import categoryController from "../controllers/category.controller.js";
router
  .get("/categories", categoryController.getAllCategory)
  .post("/category", categoryController.createCategory)
  .get("/category/:id", categoryController.getOneCategory)
  .put("/category/:id", categoryController.updateOneCategoryById)
  .delete("/category/:id", categoryController.deleteCategoryById);

export default router;
