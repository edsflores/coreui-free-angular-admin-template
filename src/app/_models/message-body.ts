export const enum MessageType {
  "WARNING" = 'WARNING',
  "ERROR" = 'ERROR',
  "OK" = 'OK'
}

export interface MessageBody {
  message : string,
  type: MessageType
}
