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

  async getUserGroups(userId: string): Promise<Group[]> {
    return [];
  }

  async getGroupProjects(group: string): Promise<Project[]> {
    return [];
  }

  async getAlerts(group: string): Promise<Alert[]> {
    return [];
  }

  async getDailyMetricData(
    metric: string,
    intervals: string,
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

  async getGroupDailyCost(group: string, intervals: string): Promise<Cost> {
    return {
      id: 'remove-me',
      aggregation: [],
      change: {
        ratio: 0,
        amount: 0,
      },
    };
  }

  async getProjectDailyCost(project: string, intervals: string): Promise<Cost> {
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
    catalogEntityRef: string,
    intervals: string,
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

  async getProductInsights(options: ProductInsightsOptions): Promise<Entity> {
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
