import {
  ScmIntegrationsApi,
  scmIntegrationsApiRef,
  ScmAuth,
} from '@backstage/integration-react';
import {
  AnyApiFactory,
  configApiRef,
  createApiFactory,
} from '@backstage/core-plugin-api';

import { techRadarApiRef } from '@backstage-community/plugin-tech-radar';
import { costInsightsApiRef } from '@backstage-community/plugin-cost-insights';
import { CostInsightsClient, TechRadarClient } from './lib';

export const apis: AnyApiFactory[] = [
  ScmAuth.createDefaultApiFactory(),
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  createApiFactory(techRadarApiRef, new TechRadarClient()),
  createApiFactory({
    api: costInsightsApiRef,
    deps: {},
    factory: () => new CostInsightsClient(),
  }),
];
