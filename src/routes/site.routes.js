import { Router } from 'express';
import siteController from './../core/controllers/SiteController.js';

const router = Router();
router.get('/', siteController.home);

export default router;
