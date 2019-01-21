export default class Package {
  name: string;
  version: string;

  constructor(path: string) {
    const loadPackage = global["loadPackage"];
    const pkg = loadPackage(path);
    this.name = pkg.name;
    this.version = pkg.version;
  }
}
