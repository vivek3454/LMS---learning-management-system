import { Router } from "express";
import { allPayments, buySubscription, cancelSubscription, getRazorpayApiKey, verifySubscription } from "../controllers/payment.controller";
import { authorizedRoles, isLoggedIn } from "../middlewares/auth.middleware";

const paymentRouter = Router();

paymentRouter.route('/razorpay-key')
    .get(isLoggedIn, getRazorpayApiKey);

paymentRouter.route('/subscribe')
    .post(isLoggedIn, buySubscription);

paymentRouter.route('/verify')
    .post(isLoggedIn, verifySubscription);

paymentRouter.route('/unsubscribe')
    .post(isLoggedIn, cancelSubscription);

paymentRouter.route('/')
    .get(isLoggedIn, authorizedRoles('ADMIN'), allPayments);

export default paymentRouter