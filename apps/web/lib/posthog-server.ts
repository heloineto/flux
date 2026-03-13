import { PostHog } from 'posthog-node';

let posthogInstance: PostHog | null = null;

export function getPostHogServer() {
  if (!posthogInstance) {
    posthogInstance = new PostHog(
      process.env.NEXT_PUBLIC_POSTHOG_KEY as string,
      {
        // NOTE: Use the actual PostHog host URL for server-side (rewrites don't work server-side)
        host: 'https://us.i.posthog.com',
        flushAt: 1,
        flushInterval: 0,
      }
    );
  }
  return posthogInstance;
}
