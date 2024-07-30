import {
  CostInsightsApi,
  ProductInsightsOptions,
  Alert,
  Cost,
  Entity,
  Group,
  MetricData,
  Project,
} from '@backstage-community/plugin-cost-insights';

export class CostInsightsClient implements CostInsightsApi {
  async getLastCompleteBillingDate(): Promise<string> {
    return '2021-01-01'; // YYYY-MM-DD
  }

  async getUserGroups(_userId: string): Promise<Group[]> {
    return [];
  }

  async getGroupProjects(_group: string): Promise<Project[]> {
    return [];
  }

  async getAlerts(_group: string): Promise<Alert[]> {
    return [];
  }

  async getDailyMetricData(
    _metric: string,
    _intervals: string,
  ): Promise<MetricData> {
    return {
      id: 'remove-me',
      format: 'number',
      aggregation: [],
      change: {
        ratio: 0,
        amount: 0,
      },
    };
  }

  async getGroupDailyCost(_group: string, _intervals: string): Promise<Cost> {
    return {
      id: 'remove-me',
      aggregation: [],
      change: {
        ratio: 0,
        amount: 0,
      },
    };
  }

  async getProjectDailyCost(
    _project: string,
    _intervals: string,
  ): Promise<Cost> {
    return {
      id: 'remove-me',
      aggregation: [],
      change: {
        ratio: 0,
        amount: 0,
      },
    };
  }

  async getCatalogEntityDailyCost(
    _catalogEntityRef: string,
    _intervals: string,
  ): Promise<Cost> {
    return {
      id: 'remove-me',
      aggregation: [],
      change: {
        ratio: 0,
        amount: 0,
      },
    };
  }

  async getProductInsights(_options: ProductInsightsOptions): Promise<Entity> {
    return {
      id: 'remove-me',
      aggregation: [0, 0],
      change: {
        ratio: 0,
        amount: 0,
      },
      entities: {},
    };
  }
}
