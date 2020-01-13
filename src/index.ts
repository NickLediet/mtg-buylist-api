import ScryfallApi from './lib/ScryfallApi';
import { ScryfallModels } from '../scryfall/lib/scryfallClient';
import StarCityGamesUrlService from './lib/UrlSerivices/StarCityGamesUrlService';
import SetMapper from './lib/Util/SetMapper';
const scryfallApi: ScryfallApi = ScryfallApi.getInstance();


async function main() {
  try {
    const card: ScryfallModels.Card = await scryfallApi.getClient().cards.getByCodeByNumber('gk1', 57);

    const scgUrlService = (new StarCityGamesUrlService());

    console.log(scgUrlService.getUrl(card));

    console.log(card.setName);

    console.log(SetMapper.getInstance().getVendorSetName(card, 'f2f'))

    console.log(scgUrlService.getUrl(
      await scryfallApi.getClient().cards.getRandom()
    ));
  } catch(err) {
    console.log(err)
  }

}

main()
