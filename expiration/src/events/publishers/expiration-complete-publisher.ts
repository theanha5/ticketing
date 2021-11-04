import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@mcrtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
