import IUrlSerivce from "./IUrlService";
import { ScryfallModels } from "../../../scryfall/lib/scryfallClient";

export default class StarCityGamesUrlService implements IUrlSerivce {
  public readonly BASE_URL = 'https://starcitygames.com/';
  private safeCardNameRegex = /[^a-z0-9\s]/;

  public getUrl(card: ScryfallModels.Card, language = null) {
    const cardName = card.name
      .toLowerCase()
      .replace(this.safeCardNameRegex, '')
      .replace(' ', '-');

    const slug = `${cardName}-sgl-mtg-${card.set}-${card.collectorNumber}-${
      language || 'enn'
    }`;

    return  this.BASE_URL + slug;
  }
}
