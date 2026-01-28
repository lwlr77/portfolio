# PostHog post-wizard report

The wizard has completed a deep integration of your Next.js portfolio project with PostHog analytics. The integration includes client-side event tracking using `posthog-js`, initialized via the `instrumentation-client.ts` file (the recommended approach for Next.js 15.3+). A reverse proxy has been configured to route PostHog requests through your domain at `/ingest`, which helps avoid tracking blockers and improves reliability.

## Integration Summary

The following changes were made to your project:

1. **PostHog SDK Installation** - Added `posthog-js` package
2. **Client-side Initialization** - Configured PostHog in `src/instrumentation-client.ts` with EU host, reverse proxy, exception capture, and debug mode for development
3. **Reverse Proxy Setup** - Added Next.js rewrites in `next.config.mjs` to proxy PostHog requests through `/ingest`
4. **Event Tracking** - Added custom event capture across key user interaction points

## Events Implemented

| Event Name | Description | File |
|------------|-------------|------|
| `social_link_clicked` | User clicked a social link (GitHub, LinkedIn, Email, Credly) from the hero section | `src/app/page.tsx` |
| `project_link_clicked` | User clicked on a project link to view on GitHub | `src/app/page.tsx` |
| `github_profile_clicked` | User clicked the 'View All My Projects on GitHub' button | `src/app/page.tsx` |
| `theme_toggled` | User toggled the theme between light and dark mode | `src/components/ThemeToggle.tsx` |
| `popup_dismissed` | User dismissed the welcome popup notification | `src/components/Popup/Popup.tsx` |
| `footer_social_clicked` | User clicked a social link from the footer | `src/components/Footer/Footer.tsx` |
| `section_navigated` | User navigated to a section using the navbar | `src/components/navbar/Navbar.tsx` |

## Environment Variables

Your `.env.local` file contains the required PostHog configuration:

```
NEXT_PUBLIC_POSTHOG_KEY=phc_1EdhQhGgbxxNOt4pSsrv84RXDadIAaysZxTxIImPpd2
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com
```

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://eu.posthog.com/project/120335/dashboard/503131) - Core analytics dashboard tracking user engagement

### Insights
- [Social Link Clicks Over Time](https://eu.posthog.com/project/120335/insights/e8WrEWYV) - Tracks clicks on social links from hero and footer
- [Project Engagement](https://eu.posthog.com/project/120335/insights/EPR6OmAg) - Tracks clicks on project links and GitHub profile button
- [Section Navigation Patterns](https://eu.posthog.com/project/120335/insights/RFR3M9Zc) - Shows how users navigate between sections
- [Theme Preference Changes](https://eu.posthog.com/project/120335/insights/K6ujyQnz) - Tracks theme toggle usage
- [Popup Engagement](https://eu.posthog.com/project/120335/insights/C9kQhJkm) - Tracks welcome popup dismissals

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
