export default interface AppState {
  projectName: string;
  group: string;
  language: string;
  version: string;
  encoding: string;
  sonaruri: string;
  sonarsources: string;
  exclusions: string;
  sonartests: string;
  inclusions: string;
  lint: string;
  loading: boolean;
}