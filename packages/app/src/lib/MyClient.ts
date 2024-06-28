import {
  TechRadarApi,
  TechRadarLoaderResponse,
} from '@backstage-community/plugin-tech-radar';

import techRadarData from '../data/tech-radar.json';

export class MyOwnClient implements TechRadarApi {
  // async load(id: string | undefined): Promise<TechRadarLoaderResponse> {
  //   // if needed id prop can be used to fetch the correct data

  //   const data = await fetch('https://mydata.json').then(res => res.json());

  //   // For example, this converts the timeline dates into date objects
  //   return {
  //     ...data,
  //     entries: data.entries.map(entry => ({
  //       ...entry,
  //       timeline: entry.timeline.map(timeline => ({
  //         ...timeline,
  //         date: new Date(timeline.date),
  //       })),
  //     })),
  //   };
  // }

  async load(id: string | undefined): Promise<TechRadarLoaderResponse> {
    return {
      ...techRadarData,
      entries: techRadarData.entries.map(entry => ({
        ...entry,
        timeline: entry.timeline.map(timeline => ({
          ...timeline,
          date: new Date(timeline.date),
        })),
      })),
    };
  }
}
