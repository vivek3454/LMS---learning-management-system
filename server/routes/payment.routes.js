import { Router } from "express";
import { allPayments, buySubscription, cancelSubscription, getRazorpayApiKey, verifySubscription } from "../controllers/payment.controller.js";
import { authorizedRoles, isLoggedIn } from "../middlewares/auth.middleware.js";

const paymentRouter = Router();

// get razorpay key
paymentRouter.route('/razorpay-key')
    .get(isLoggedIn, getRazorpayApiKey);

// buy subscription
paymentRouter.route('/subscribe')
    .post(isLoggedIn, buySubscription);

// verify subscription
paymentRouter.route('/verify')
    .post(isLoggedIn, verifySubscription);

// cancel subscription
paymentRouter.route('/unsubscribe')
    .post(isLoggedIn, cancelSubscription);

// get all payments detail
paymentRouter.route('/')
    .get(isLoggedIn, authorizedRoles('ADMIN'), allPayments);

export default paymentRouter