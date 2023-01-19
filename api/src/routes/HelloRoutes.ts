import express from "express";
import HelloController from "../controller/hello/HelloController";

const router = express.Router();
const helloController = new HelloController();

router.get('/', helloController.hello);

export default router;
