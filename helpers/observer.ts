interface EventSubscriberInterface {
  name: string
  fn: (data: any) => void
}

export class Observer {
  observers: EventSubscriberInterface[] = []

  subscribe(name: string, fn) {
    const subscriber = { name, fn }

    this.observers.push(subscriber)
    return fn
  }

  unsubscribe() {
    this.observers = []
  }

  broadcast(name, data) {
    const observers = this.observers.filter(subscriber => subscriber.name === name || subscriber.name === '')

    observers.forEach(subscriber => subscriber.fn(data))
  }
}
