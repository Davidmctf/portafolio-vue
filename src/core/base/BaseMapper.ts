// MAPPER
abstract class BaseMapper<T, U> {
  abstract map(source: T): U
  to(source: T): U
  to(source: T[]): U[]
  to(source: T | T[]): U | U[] {
    if (Array.isArray(source)) {
      return source.map((item) => this.map(item))
    }
    return this.map(source)
  }
}

export { BaseMapper }
