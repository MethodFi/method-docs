/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  guides: [
    // Guides
    { label: 'Guides', className: 'sidebar-section-header sidebar-icon-guides-introduction', type: 'doc', id: 'guides' },

    // Quick start
    { label: 'Quick start', className: 'sidebar-section-header sidebar-icon-guides-quick-start', type: 'doc', id: 'guides/quick-start' },
    'guides/quick-start/environment-setup',
    'guides/quick-start/create-your-first-payment',
    'guides/quick-start/going-live',

    // Entities
    { label: 'Entities', className: 'sidebar-section-header sidebar-icon-guides-entities', type: 'doc', id: 'guides/entities' },
    'guides/entities/create-an-entity',
    'guides/entities/kyc-and-capabilities',

    // Source accounts
    { label: 'Source accounts', className: 'sidebar-section-header sidebar-icon-guides-source-accounts', type: 'doc', id: 'guides/source-accounts' },
    'guides/source-accounts/create-a-source-account',
    'guides/source-accounts/verification-and-capabilities',

    // Destination accounts
    { label: 'Destination accounts', className: 'sidebar-section-header sidebar-icon-guides-destination-accounts', type: 'doc', id: 'guides/destination-accounts' },
    'guides/destination-accounts/create-a-destination-account',
    'guides/destination-accounts/liabilities',
    'guides/destination-accounts/bank-accounts',

    // Payments
    { label: 'Payments', className: 'sidebar-section-header sidebar-icon-guides-payments', type: 'doc', id: 'guides/payments' },
    'guides/payments/create-a-payment',
    'guides/payments/lifecycle-and-errors',

    // Use cases
    // { label: 'Use Cases', className: 'sidebar-section-header sidebar-icon-guides-use-cases', type: 'doc', id: 'guides/use-cases' },
    // 'guides/use-cases/payoff-debts',
    // 'guides/use-cases/ach-transfer',
    // 'guides/use-cases/balance-transfers',
    // 'guides/use-cases/swap-payment-method',

    // Launch checklist
    // { label: 'Launch Checklist', className: 'sidebar-section-header sidebar-icon-guides-launch-checklist', type: 'link', href: '/guides/launch-checklist/production-setup' },
    // 'guides/launch-checklist/production-setup',
    // 'guides/launch-checklist/capabilities-and-verification',
    // 'guides/launch-checklist/logging-and-troubleshooting',
    // 'guides/launch-checklist/webhooks-configurations',
    // 'guides/launch-checklist/returned-payments',
    // 'guides/launch-checklist/product-requirements',

    // Support
    { label: 'Support', className: 'sidebar-section-header sidebar-icon-guides-support', type: 'doc', id: 'guides/support' },
    // 'guides/support/faqs',
    { label: 'Schedule a call', type: 'link', href: 'https://methodfi.com/contact-us' },
    { label: 'Send us a message', type: 'link', href: 'mailto:team@methodfi.com' },
  ],
  api: [
    { label: 'API Reference', className: 'sidebar-section-header sidebar-icon-api-reference', type: 'link', href: '/api' },
    'api',
    'api/authentication',
    'api/environments',
    'api/idempotency',
    'api/healthcheck',
    'api/errors',
    'api/metadata',
    { label: 'Core API', className: 'sidebar-section-header sidebar-icon-api-core', type: 'link', href: '/api/core/entities/object' },
    {
      type: 'category',
      label: 'Entities',
      items: [
        'api/core/entities/object',
        'api/core/entities/create-individual',
        'api/core/entities/create-corporation',
        'api/core/entities/create-receive-only',
        'api/core/entities/retrieve',
        'api/core/entities/update',
        'api/core/entities/list',
      ],
    },
    {
      type: 'category',
      label: 'Accounts',
      items: [
        'api/core/accounts/object',
        'api/core/accounts/create',
        'api/core/accounts/retrieve',
        'api/core/accounts/list',
        {
          type: 'category',
          label: 'ACH Verification',
          items: [
            'api/core/accounts/ach-verification/object',
            'api/core/accounts/ach-verification/create-micro-deposits',
            'api/core/accounts/ach-verification/create-plaid',
            'api/core/accounts/ach-verification/create-mx',
            'api/core/accounts/ach-verification/update',
            'api/core/accounts/ach-verification/retrieve',
          ],
        }
      ],
    },
    {
      type: 'category',
      label: 'Merchants',
      items: [
        'api/core/merchants/object',
        'api/core/merchants/list',
        'api/core/merchants/retrieve',
      ],
    },
    {
      type: 'category',
      label: 'Payments',
      items: [
        'api/core/payments/object',
        'api/core/payments/create',
        'api/core/payments/retrieve',
        'api/core/payments/delete',
        'api/core/payments/list',
      ],
    },
    {
      type: 'category',
      label: 'Webhooks',
      items: [
        'api/core/webhooks/object',
        'api/core/webhooks/create',
        'api/core/webhooks/retrieve',
        'api/core/webhooks/delete',
        'api/core/webhooks/list',
        'api/core/webhooks/ip-whitelisting',
      ],
    },
    {
      type: 'category',
      label: 'Reports',
      items: [
        'api/core/reports/object',
        'api/core/reports/create',
        'api/core/reports/retrieve',
        'api/core/reports/download',
      ],
    },
    { label: 'Elements', className: 'sidebar-section-header sidebar-icon-api-elements', type: 'link', href: '/api/elements/intro' },
    'api/elements/intro',
    'api/elements/events',
    {
      type: 'category',
      label: 'Link',
      items: [
        'api/elements/link/intro',
        {
          type: 'category',
          label: 'Implementation',
          items: [
            'api/elements/link/implementation/create-token',
            'api/elements/link/implementation/launch-link',
            'api/elements/link/implementation/exchange-public-accounts',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Connections',
      items: [
        'api/elements/connections/intro',
      ],
    },
    {
      type: 'category',
      label: 'Pay',
      items: [
        'api/elements/pay/intro',
      ],
    },
    {
      type: 'category',
      label: 'Money Transfer',
      items: [
        'api/elements/money-transfer/intro',
      ],
    },
    {
      type: 'category',
      label: 'Balance Transfer',
      items: [
        'api/elements/balance-transfer/intro',
      ],
    },
    { label: 'Utils', className: 'sidebar-section-header sidebar-icon-api-utils', type: 'link', href: '/api/utils/bins/object' },
    {
      type: 'category',
      label: 'BINs',
      items: [
        'api/utils/bins/object',
        'api/utils/bins/retrieve',
      ],
    },
    {
      type: 'category',
      label: 'Routing Numbers',
      items: [
        'api/utils/routing-numbers/object',
        'api/utils/routing-numbers/retrieve',
      ],
    },
    { label: 'Method Link (Deprecated)', className: 'sidebar-section-header sidebar-icon-api-link', type: 'link', href: '/api/link/intro' },
    'api/link/intro',
    {
      type: 'category',
      label: 'Implementation Guide',
      items: [
        'api/link/implementation/create-token',
        'api/link/implementation/launch-link',
        'api/link/implementation/exchange-public-accounts',
      ],
    },
    {
      type: 'category',
      label: 'Libraries',
      items: [
        { type: 'link', href: 'https://github.com/MethodFi/react-method-link', label: 'Web (React)' },
      ],
    },
  ],
};
