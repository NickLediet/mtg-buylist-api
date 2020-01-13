import * as yaml from 'js-yaml';
import { readFileSync } from 'fs';

export interface VendorMapSchema {
  [key: string]: string
}

export interface SetMapSchema {
  [key: string]: VendorMapSchema
}

export default class SetMapper {
  private static instance: SetMapper;
  private maps: SetMapSchema;

  private constructor(maps: SetMapSchema) {
    this.maps = maps;
  }

  public static getInstance(): SetMapper {
    if(!SetMapper.instance) {
      SetMapper.instance = SetMapper.factory();
    }

    return SetMapper.instance;
  }

  private static factory(): SetMapper {
    const maps = yaml.safeLoad(readFileSync(`${__dirname}/../../../configs/set-name-mapper.yaml`), 'utf8');

    return new SetMapper(maps)
  }

  public getMaps(): SetMapSchema {
    return this.maps;
  }
}
