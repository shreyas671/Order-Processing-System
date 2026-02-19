import express, { NextFunction, Request, Response } from "express";
import { MessageBroker } from "../utils";
import { OrderEvent } from "../types";

const router = express.Router();

router.post(
  "/order",
  async (req: Request, res: Response, next: NextFunction) => {

    //Order Create Logic

    // Step 3: Publish the Message
    await MessageBroker.publish({
      topic: "OrderEvents",
      headers: { token: req.headers.authorization },
      event: OrderEvent.CREATE_ORDER,
      message: {
        OrderId: 1,
        items: [
          {
            productId: 1,
            quantity: 1
          },
          {
            productId: 2,
            quantity: 2
          }
        ],
      },
    });

    return res.status(200).json({ message: "create order" });
  }
);

router.get(
  "/order",
  async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "create order" });
  }
);

router.get(
  "/order/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "create order" });
  }
);

router.delete(
  "/order/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: "create order" });
  }
);

export default router;
