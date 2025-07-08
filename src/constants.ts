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
    title: 'Custom Token Minter',
    info: 'Mint custom tokens (name, symbol, decimals) on both Testnet and Mainnet with ease.',
  },
  {
    icon: Icons.monitor,
    title: 'Contract Duplication',
    info: 'Clone contracts across networks, deploying Testnet contracts to Mainnet with identical logic and interface.',
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
    title: 'Streamlined Development',
    info: 'Accelerate your development cycle by automating repetitive and complex tasks.',
  },
  {
    icon: Icons.monitor,
    title: 'Reduced Errors',
    info: 'Minimize human error with automated processes for data management and interaction.',
  },
  {
    icon: Icons.server,
    title: 'Enhanced Reliability',
    info: 'Ensure your applications remain robust with guaranteed log delivery and data persistence.',
  },
  {
    icon: Icons.palette,
    title: 'Soroban Ecosystem Focus',
    info: 'Tools specifically designed and optimized for the unique needs of Soroban and Stellar.',
  },
  {
    icon: Icons.seo,
    title: 'Scalable Infrastructure',
    info: 'Built on a robust infrastructure designed for reliability and future growth.',
  },
];
