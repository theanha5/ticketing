import { Publisher, Subjects,  TicketCreatedEvent} from '@mcrtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    readonly subject = Subjects.TicketCreated;
}
