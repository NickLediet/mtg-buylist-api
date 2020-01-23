import { ScryfallModels } from "../../../scryfall/lib/scryfallClient";

export default interface IUrlSerivce {
  readonly BASE_URL: string;
  getUrl(card: ScryfallModels.Card): string;
}
