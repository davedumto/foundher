'use client';

import React from 'react';

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FoundHer",
    "alternateName": "FoundHer Network",
    "description": "An exclusive network of visionary African women entrepreneurs building the future of business through meaningful connections and strategic partnerships.",
    "url": "https://foundhertable.com",
    "logo": "https://foundhertable.com/favicon.ico",
    "foundingDate": "2024",
    "email": "lydia@foundhertable.com",
    "areaServed": {
      "@type": "Place",
      "name": "Africa"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "African Business Network"
    },
    "sameAs": [
      "https://foundhertable.com"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "FoundHer",
    "alternateName": "FoundHer - African Women Founders Network",
    "url": "https://foundhertable.com",
    "description": "Join an exclusive network of visionary African women entrepreneurs building the future of business through meaningful connections and strategic partnerships across 30+ countries.",
    "inLanguage": "en-US",
    "publisher": {
      "@type": "Organization",
      "name": "FoundHer Network"
    }
  };

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "The FoundHer Table - Inaugural Gathering",
    "description": "Join us for the very first FoundHer Table gathering - an intimate evening where regal disruptors come together to birth a movement. This exclusive corporate chic affair marks the beginning of our journey to connect Africa's most visionary women founders.",
    "startDate": "2025-11-27",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Private Venue",
      "address": "Invitation Only"
    },
    "organizer": {
      "@type": "Organization",
      "name": "FoundHer Network",
      "url": "https://foundhertable.com"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InvitationOnly",
      "url": "https://tally.so/r/D4qzxN"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
    </>
  );
}