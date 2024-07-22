import { Router } from "express";
import * as controller from "../../controllers/client/tours.controller"

const router: Router = Router();

router.get("/", controller.index);

export const toursRouter: Router = router;
