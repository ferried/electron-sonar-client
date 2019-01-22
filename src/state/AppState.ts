export default interface AppState {
  path: string | null;
  group: string | null;
  language: string | null;
  encoding: string | null;
  sonaruri: string | null;
  sonarsources: string | null;
  exclusions: string | null;
  sonartests: string | null;
  inclusions: string | null;
  lint: string | null;
  loading: boolean ;
}
