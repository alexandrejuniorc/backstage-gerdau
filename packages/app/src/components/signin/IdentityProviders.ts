import { SignInProviderConfig } from '@backstage/core-components';
import {
  githubAuthApiRef,
  gitlabAuthApiRef,
  microsoftAuthApiRef,
} from '@backstage/core-plugin-api';

export const providers: SignInProviderConfig[] = [
  {
    id: 'github',
    title: 'GitHub',
    message: 'Sign in using GitHub',
    apiRef: githubAuthApiRef,
  },
  {
    id: 'gitlab',
    title: 'GitLab',
    message: 'Sign in using GitLab',
    apiRef: gitlabAuthApiRef,
  },
  {
    id: 'azure',
    title: 'Azure',
    message: 'Sign in using Azure',
    apiRef: microsoftAuthApiRef,
  },
];
