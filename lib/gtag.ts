export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export function gtag() { window.dataLayer.push(arguments); }

export const pageview = (url: string) => {
  if (!GA_TRACKING_ID) {
    return;
  }
  // @ts-ignore
  gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({
  // @ts-ignore
  action, category, label, value,
}) => {
  if (!GA_TRACKING_ID) {
    return;
  }
  // @ts-ignore
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
