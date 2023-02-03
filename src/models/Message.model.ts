interface Message {
  id?: number;
  content: string;
  createdAt?: Date;
  userId: number;
  chatId: number;
};

export default Message;
