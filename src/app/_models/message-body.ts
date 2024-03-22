export const enum MessageType {
  "WARNING",
  "ERROR",
  "OK"
}

export interface MessageBody {
  message : string,
  type: MessageType
}
