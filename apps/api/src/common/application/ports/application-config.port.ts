export type AppMode = 'development' | 'test' | 'production';

export abstract class ApplicationConfig {
  abstract getMode(): AppMode;
  abstract getWebUrl(): string;
}
