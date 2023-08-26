/* eslint-disable no-undef */
module.exports = {
  default: [
    '--require-module ts-node/register',
    '--require-module tsconfig-paths/register',
    '--require __tests__/app/features/start.step.ts',
    '__tests__/app/features/health/*.feature',
    '--require __tests__/app/features/health/health.step.ts',
    '__tests__/app/features/examples/*.feature',
    '--require __tests__/app/features/examples/task.step.ts',
    '--force-exit',
  ].join(' '),
};
