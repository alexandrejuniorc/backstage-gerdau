import {
  TechRadarApi,
  TechRadarLoaderResponse,
} from '@backstage-community/plugin-tech-radar';

import techRadarData from '../data/tech-radar.json';

export class TechRadarClient implements TechRadarApi {
  async load(_id: string | undefined): Promise<TechRadarLoaderResponse> {
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
