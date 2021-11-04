import { Publisher, Subjects, TicketUpdatedEvent } from "@mcrtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
