import { createBackendModule } from '@backstage/backend-plugin-api';
import {
  authProvidersExtensionPoint,
  createOAuthProviderFactory,
} from '@backstage/plugin-auth-node';

import { microsoftAuthenticator } from '@backstage/plugin-auth-backend-module-microsoft-provider';

export const PluginAuthBackendModuleMicrosoftProvider = createBackendModule({
  pluginId: 'auth',
  moduleId: 'custom-auth-microsoft-provider',
  register(reg) {
    reg.registerInit({
      deps: { providers: authProvidersExtensionPoint },
      async init({ providers }) {
        providers.registerProvider({
          providerId: 'microsoft',
          factory: createOAuthProviderFactory({
            authenticator: microsoftAuthenticator,
            async signInResolver(info, ctx) {
              const { fullProfile } = info.result;

              const userRef = `user:default/${fullProfile.username}`;
              return ctx.issueToken({
                claims: {
                  sub: userRef,
                  ent: [userRef],
                },
              });
            },
          }),
        });
      },
    });
  },
});
