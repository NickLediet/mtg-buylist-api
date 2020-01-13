import { ScryfallClient } from "../../scryfall/lib/scryfallClient";

export default class ScryfallApi {
  private static instance: ScryfallApi;
  private scryfallClient: ScryfallClient;

  private constructor(scryfallClient: ScryfallClient) {
    this.scryfallClient = scryfallClient;
  }


  public static getInstance() {
    if (!ScryfallApi.instance) {
      ScryfallApi.instance = new ScryfallApi(new ScryfallClient);
    }

    return ScryfallApi.instance;
  }

  public getClient():ScryfallClient {
    return this.scryfallClient;
  }
}
