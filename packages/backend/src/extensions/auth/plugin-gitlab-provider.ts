import { createBackendModule } from '@backstage/backend-plugin-api';
import {
  authProvidersExtensionPoint,
  createOAuthProviderFactory,
} from '@backstage/plugin-auth-node';

import {gitlabAuthenticator} from '@backstage/plugin-auth-backend-module-gitlab-provider'

export const PluginAuthBackendModuleGitlabProvider = createBackendModule({
  pluginId: 'auth',
  moduleId: 'custom-auth-gitlab-provider',
  register(reg) {
    reg.registerInit({
      deps: { providers: authProvidersExtensionPoint },
      async init({ providers }) {
        providers.registerProvider({
          providerId: 'gitlab',
          factory: createOAuthProviderFactory({
            authenticator: gitlabAuthenticator,
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
