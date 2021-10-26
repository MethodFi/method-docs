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
    { label: 'Guides', className: 'sidebar-section-header sidebar-icon-guides-introduction', type: 'link', href: '/guides' },
    'guides',
    { label: 'Quick start', className: 'sidebar-section-header sidebar-icon-guides-quick-start', type: 'link', href: '/guides/quick-start/dashboard' },
    'guides/quick-start/dashboard',
    'guides/quick-start/environment-setup',
    'guides/quick-start/create-your-first-payment',
    'guides/quick-start/how-it-works',
    'guides/quick-start/next-steps',
    { label: 'Concepts', className: 'sidebar-section-header sidebar-icon-guides-concepts', type: 'link', href: '/guides/concepts/entities/individual' },
    {
      type: 'category',
      label: 'Entities',
      items: [
        'guides/concepts/entities/individual',
        'guides/concepts/entities/corporation',
      ],
    },
    {
      type: 'category',
      label: 'Accounts',
      items: [
        'guides/concepts/accounts/ach',
        'guides/concepts/accounts/liability',
      ],
    },
    {
      type: 'category',
      label: 'Account verification',
      items: [
        'guides/concepts/account-verification/micro-deposits',
      ],
    },
    {
      type: 'category',
      label: 'Payments',
      items: [
        'guides/concepts/payments/payment-cycle',
        'guides/concepts/payments/returned-payment',
      ],
    },
    'guides/concepts/merchants',
    'guides/concepts/risk-and-compliance',
    { label: 'Use cases', className: 'sidebar-section-header sidebar-icon-guides-use-cases', type: 'link', href: '/guides/use-cases/payoff-debts' },
    'guides/use-cases/payoff-debts',
    'guides/use-cases/transfer-credit-card-balance',
    'guides/use-cases/swap-payment-method',
    { label: 'Products', className: 'sidebar-section-header sidebar-icon-guides-products', type: 'link', href: '/guides/products/core-api' },
    'guides/products/core-api',
    'guides/products/link',
    'guides/products/connections',
    'guides/products/balance-transfer',
    'guides/products/money-transfer',
    { label: 'Integrations', className: 'sidebar-section-header sidebar-icon-guides-integrations', type: 'link', href: '/guides/integrations/using-plaid' },
    'guides/integrations/using-plaid',
    'guides/integrations/using-link',
    { label: 'Launch Checklist', className: 'sidebar-section-header sidebar-icon-guides-launch-checklist', type: 'link', href: '/guides/launch-checklist/production-setup' },
    'guides/launch-checklist/production-setup',
    'guides/launch-checklist/capabilities-and-verification',
    'guides/launch-checklist/logging-and-troubleshooting',
    'guides/launch-checklist/webhooks-configurations',
    'guides/launch-checklist/returned-payments',
    'guides/launch-checklist/product-requirements',
    { label: 'Security and Privacy', className: 'sidebar-section-header sidebar-icon-guides-security', type: 'link', href: '/guides/privacy-and-security/api-keys' },
    'guides/privacy-and-security/api-keys',
    'guides/privacy-and-security/ip-address-whitelisting',
    'guides/privacy-and-security/manage-team-access',
    'guides/privacy-and-security/your-users-data',
    { label: 'Support', className: 'sidebar-section-header sidebar-icon-guides-support', type: 'link', href: '#' },
    'guides/support/faqs',
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
