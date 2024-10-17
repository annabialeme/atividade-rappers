import { Router } from "express";
import rappersRoutes from "";

const routes = Router();

routes.get("/", (req, res) => {
    return res.status (200).json({ message: "eu amo Deus!"})
});

routes.use ("/rappers", rappersRoutes);

export default routes;