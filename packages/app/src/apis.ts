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

import { MyOwnClient } from './lib/MyClient';
import { techRadarApiRef } from '@backstage-community/plugin-tech-radar';
import { costInsightsApiRef } from '@backstage-community/plugin-cost-insights';
import { CostInsightsClient } from './lib/CostInsightsClient';

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  ScmAuth.createDefaultApiFactory(),
  createApiFactory(techRadarApiRef, new MyOwnClient()),
  createApiFactory({
    api: costInsightsApiRef,
    deps: {},
    factory: () => new CostInsightsClient(),
  }),
];
