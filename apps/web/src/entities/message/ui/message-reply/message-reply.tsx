import classes from './message-reply.module.css';

export function MessageReply() {
  return (
    <button className={classes.root} type="button">
      <span className={classes.decoration} />
      <div className={classes.container}>
        <div className={classes.sender}>Tú</div>
        <div className={classes.messageContainer}>
          Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text
          Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text
          Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text
          Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text
          Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text
          Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text
          Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text
          Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text
          Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text
        </div>
      </div>
      <div className={classes.preview} />
    </button>
  );
}
