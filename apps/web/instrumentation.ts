export function register() {
  // No-op for initialization
}

export const onRequestError = async (
  err: Error,
  request: Request,
  _context: unknown
) => {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { getPostHogServer } = await import('./lib/posthog-server');
    const posthog = getPostHogServer();

    if (!request.headers.get('cookie')) {
      posthog.captureException(err);
      return;
    }

    let distinctId: string | undefined = undefined;

    const cookieString = request.headers.get('cookie') || '';
    const postHogCookieMatch = cookieString.match(/ph_phc_.*?_posthog=([^;]+)/);

    if (postHogCookieMatch && postHogCookieMatch[1]) {
      try {
        const decodedCookie = decodeURIComponent(postHogCookieMatch[1]);
        const postHogData = JSON.parse(decodedCookie);
        distinctId = postHogData.distinct_id;
      } catch (e) {
        console.error('Error parsing PostHog cookie:', e);
      }
    }

    await posthog.captureException(err, distinctId);
  }
};
