export class Mnotification {
  constructor(title: string, message: string) {
    new Notification(title, {
      body: message,
      tag: "theSame",
      renotify: true
    });
  }
}
