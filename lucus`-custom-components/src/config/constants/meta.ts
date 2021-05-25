import { PageMeta } from './types';

export const DEFAULT_META: PageMeta = {
  title: 'EasyBake',
  description:
    'The most popular AMM on Polkadot by user count! Earn OVEN in the Bakery, then stake it in Dough Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  // image: 'https://pancakeswap.finance/images/easter-battle.png',
  image: '',
};

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'EasyBake | Home',
    description: 'Homepage of EasyBakeFinance.',
    image: '',
  },
  '/bakery': {
    title: 'EasyBake | Bakery',
    description: 'Bake LP tokens to earn OVEN.',
    image: '',
  },
  '/refinery': {
    title: 'EasyBake | Refinery',
    description: 'Turn up the temperature of your tokens to earn OVEN.',
    image: '',
  },
  '/team': {
    title: 'EasyBake | Refinery',
    description: 'Our Chefs who provide the goods.',
    image: '',
  },
};
