import ScryfallApi from './lib/ScryfallApi';
import { ScryfallModels } from '../scryfall/lib/scryfallClient';
import StarCityGamesUrlService from './lib/UrlSerivices/StarCityGamesUrlService';
const scryfallApi: ScryfallApi = ScryfallApi.getInstance();


async function main() {
  try {
    const card: ScryfallModels.Card = await scryfallApi.getClient().cards.getByCodeByNumber('gk1', 57);

    const scgUrlService = (new StarCityGamesUrlService());

    console.log(scgUrlService.getUrl(card));

    console.log(scgUrlService.getUrl(
      await scryfallApi.getClient().cards.getRandom()
    ));
  } catch(err) {
    console.log(err)
  }

}

main()
