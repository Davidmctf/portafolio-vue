abstract class BaseBuilder<T> {
  protected instance: Partial<T> = {}

  protected abstract validate(instance: Partial<T>): void

  build(): T {
    this.validate(this.instance)
    return this.instance as T
  }

  reset(): this {
    this.instance = {}
    return this
  }
}

export { BaseBuilder }
