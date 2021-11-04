import { Publisher, OrderCancelledEvent, Subjects } from "@mcrtickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
