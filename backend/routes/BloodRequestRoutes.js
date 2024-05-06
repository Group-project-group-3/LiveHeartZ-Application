import express from "express";
import { createBloodRequest,requestsByBloodGroup,Allrequests,getTotalRequestsCount  } from '../controllers/BloodRequestController.js';

const router = express.Router();

router.get('/total-requests-count', getTotalRequestsCount);
router.post('/bloodrequest', createBloodRequest);
router.get('/requests/:blood', requestsByBloodGroup);
router.get('/allrequests', Allrequests);


export default router;