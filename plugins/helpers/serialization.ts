import { ClassConstructor, classToPlain, plainToClass } from 'class-transformer'

export function deserialize(obj: any, cls: ClassConstructor<any>) {
  return plainToClass(cls, obj, { /* params */ })
}

export function serialize(obj: any, cls?: ClassConstructor<any>) {
  if (cls) { Object.setPrototypeOf(obj, cls.prototype) }
  return classToPlain(obj, { exposeDefaultValues: true })
}
