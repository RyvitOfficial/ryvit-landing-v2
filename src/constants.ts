import Icons from './assets/icons';

export const COLORS = {
  primaryBg: '#0A0A0F',
  secondaryBg: '#141419',
  accentBlue: '#2563EE',
  textWhite: '#FFFFFF',
  textLightGray: '#E0E0E0',
  textBlueHighlight: '#93C5FD', // A lighter blue for subheadings/highlights
};

export const FADE_IN_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const ICON_SIZE = 'h-12 w-12'; // Tailwind classes for icon size
export const ICON_COLOR = 'text-blue-400'; // Tailwind class for icon color

export const perks = [
  {
    icon: Icons.bolt,
    title: 'TTL Management',
    info: 'Automatically track, monitor, and renew Soroban contract data keys to prevent expiration and logic breaks.',
  },
  {
    icon: Icons.monitor,
    title: 'Contract Interaction',
    info: 'Interact with any contract function via UI, with auto ABI parsing, type conversion, and code snippet generation.',
  },
  {
    icon: Icons.server,
    title: 'Event & Log Monitoring',
    info: 'Guaranteed log delivery, persistence, and reliability for Soroban contracts, with push and SDK integration.',
  },
];

export const moreTools = [
  {
    icon: Icons.bolt,
    title: 'Developer-Friendly SDK',
    info: 'Install our NPM package to simplify event handling, type conversions, and contract interactions in your Node.js projects.',
    code: 'npm install ryvit',
  },
  {
    icon: Icons.monitor,
    title: 'Auto Code Generation',
    info: 'Get ready-to-use TypeScript code for every contract function, with automatic type conversion helpers built-in.',
    code: `import { setupRyvit, RyvitStr } from 'ryvit';

setupRyvit(app, {
  publicKey: "YOUR_KEY",
  handler: {}
});

// Type Conversion Helpers
RyvitStr.u64("32394456") // => 32394456n
RyvitStr.u64Sc("32394456") // => scvU64({_value: 32394456n})`,
  },
];

export const paymentMethod = [
  {
    icon: Icons.bolt,
    title: 'Direct Wallet Signing',
    info: 'Pay for operations directly from your own wallet. Ideal for one-off transactions and full control.',
  },
  {
    icon: Icons.monitor,
    title: 'Internal XLM Credit System',
    info: 'Deposit XLM credits in advance for automated features like TTL renewals, operating independently.',
  },
];

export const whyRyvit = [
  {
    icon: Icons.bolt,
    title: 'Ship Faster',
    info: 'Skip weeks of infrastructure setup. Focus on building features while Ryvit handles TTL management, event streaming, and contract interactions.',
  },
  {
    icon: Icons.monitor,
    title: 'Zero Data Loss',
    info: 'Never miss a contract event again. Our dedicated infrastructure guarantees delivery even during downtime, with cryptographic verification.',
  },
  {
    icon: Icons.server,
    title: 'Dedicated Infrastructure',
    info: 'Your own Stellar node, RPC, and indexer. Complete real-time data access without rate limits or shared resource bottlenecks.',
  },
  {
    icon: Icons.palette,
    title: 'Developer Experience First',
    info: 'Auto-generated TypeScript code, type-safe helpers, and one-line SDK integration. Write less boilerplate, deploy with confidence.',
  },
  {
    icon: Icons.seo,
    title: 'Always Up-to-Date',
    info: 'Our indexer continuously syncs with the blockchain, ensuring every data entry, event, and function call is captured in real-time.',
  },
  {
    icon: Icons.bolt,
    title: 'Cost Effective',
    info: 'Pay only for what you use. Start free with testnet credits, scale seamlessly to mainnet without rebuilding your infrastructure.',
  },
];
