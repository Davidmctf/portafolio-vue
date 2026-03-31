abstract class BaseUseCase<TInput = void, TOutput = void> {
  abstract execute(input: TInput): Promise<TOutput> | TOutput
}

export { BaseUseCase }
