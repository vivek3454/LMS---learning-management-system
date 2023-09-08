import AppError from "../utils/error.util.js";
import { razorpay } from "../server.js";
import User from "../models/user.model.js";
import Payment from "../models/payment.model.js";

// get razorpay key
const getRazorpayApiKey = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      message: "Razarpay API key",
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (e) {
    return next(new AppError(e.message, 500));
  }
};

// buy subscription
const buySubscription = async (req, res, next) => {
  try {
    const { id } = req.user;
    const user = await User.findById(id);

    if (!user) {
      return next(new AppError("Unauthorized, please login"));
    }

    if (user.role === "ADMIN") {
      return next(new AppError("Admin cannot purchase a subscription", 400));
    }

    // create razorpay subscriptions
    const subscription = await razorpay.subscriptions.create({
      plan_id: process.env.RAZORPAY_PLAN_ID,
      customer_notify: 1,
    });

    user.subscription.id = subscription.id;
    user.subscription.status = subscription.status;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Subscribed Successfully",
      subscription_id: subscription.id,
    });
  } catch (e) {
    return next(new AppError(e.message, 500));
  }
};

// verify subscription
const verifySubscription = async (req, res, next) => {
  try {
    const { id } = req.user;
    const {
      razorpay_payment_id,
      razorpay_signature,
      razorpay_subscription_id,
    } = req.body;

    const user = await User.findById(id);
    if (!user) {
      return next(new AppError("Unauthorized, please login"));
    }

    const subcsriptionId = user.subscription.id;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(`${razorpay_payment_id}|${subcsriptionId}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return next(new AppError("Payment not verified, please try again", 500));
    }

    // create payment
    await Payment.create({
      razorpay_payment_id,
      razorpay_signature,
      razorpay_subscription_id,
    });

    user.subscription.status = "active";
    await user.save();

    res.status(200).json({
      success: true,
      message: "Payment verified successfully!",
    });
  } catch (e) {
    return next(new AppError(e.message, 500));
  }
};

// cancel subscriptions
const cancelSubscription = async (req, res, next) => {
  try {
    const { id } = req.user;

    const user = await User.findById(id);

    if (!user) {
      return next(new AppError("Unauthorized, please login"));
    }

    if (user.role === "ADMIN") {
      return next(new AppError("Admin cannot purchase a subscription", 400));
    }

    const subscriptionId = user.subscription.id;

    // cancel razorpay subscriptions
    const subscription = await razorpay.subscriptions.cancel(subscriptionId);

    user.subscription.status = subscription.status;

    await user.save();
  } catch (e) {
    return next(new AppError(e.message, 500));
  }
};

// get all payments detail
const allPayments = async (req, res, next) => {
  try {
    const { count } = req.query;

    const subscriptions = await razorpay.subscriptions.all({
      count: count || 10,
    });

    res.status(200).json({
      success: true,
      message: 'All payments',
      subscriptions
    })
  } catch (e) {
    return next(new AppError(e.message, 500));
  }

};

export {
  getRazorpayApiKey,
  buySubscription,
  verifySubscription,
  cancelSubscription,
  allPayments
}