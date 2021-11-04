import { Publisher, OrderCreatedEvent, Subjects } from "@mcrtickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
    readonly subject = Subjects.OrderCreated
}
