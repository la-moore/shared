import { ClassConstructor, instanceToPlain, plainToInstance } from 'class-transformer'

export function deserialize(obj: any, cls: ClassConstructor<any>) {
  return plainToInstance(cls, obj, { /* params */ })
}

export function serialize(obj: any, cls?: ClassConstructor<any>) {
  if (cls) { Object.setPrototypeOf(obj, cls.prototype) }
  return instanceToPlain(obj, { exposeDefaultValues: true })
}
