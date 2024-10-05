export default interface IMessage {
  content: string;
  summary?: string;
  timestamp: Date;
  type: IMessageType;
}

export enum IMessageType {
  User,
  AI,
}

export interface IRoles {
  scope: string;
  roleDefinitionId: string;
}