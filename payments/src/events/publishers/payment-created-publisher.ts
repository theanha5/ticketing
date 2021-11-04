import { Subjects, Publisher, PaymentCreatedEvent } from '@mcrtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
    readonly subject = Subjects.PaymentCreated
}