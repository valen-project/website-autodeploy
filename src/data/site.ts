export interface NavItem {
  number: string;
  label: string;
  href: string;
}

export function withBase(path: string): string {
  if (!path || /^(https?:|mailto:|tel:|#)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}` || '/';
}

export const SITE_INFO = {
  brandName: 'AutoDeploy',
  tagline: 'Providing Business Solution in the Society 5.0 Era',
  eyebrowLine1: 'AUTODEPLOY // SOLUSI BISNIS DIGITAL',
  eyebrowLine2: 'ERA SOCIETY 5.0',
  headquarters: 'Anomia Project (Headquarters)',
  parentCompany: 'PT. Anomia Digital Industry',
  foundedYear: 2026,
  contactPerson: 'Affan Abdul Hanan',
  contactRole: 'Ketua Pelaksana AutoDeploy',
  address: 'Jl. Elang Mas A No. 12, RT.03 / RW.11, Gonilan, Kartasura, Sukoharjo',
  phoneDisplay: '085642550886',
  whatsappNumber: '6285642550886',
  email: 'affanhanan10@gmail.com',
  logoPath: withBase('/assets/logo.png'),
} as const;

export const NAV_ITEMS: NavItem[] = [
  { number: '01', label: 'Beranda', href: withBase('/') },
  { number: '02', label: 'Tentang Kami', href: withBase('/about') },
  { number: '03', label: 'Layanan', href: withBase('/services') },
  { number: '04', label: 'Kemitraan & Kolaborasi', href: withBase('/partnership') },
  { number: '05', label: 'Kontak', href: withBase('/contact') },
];

export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${SITE_INFO.whatsappNumber}`;
  if (!message) return baseUrl;
  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
