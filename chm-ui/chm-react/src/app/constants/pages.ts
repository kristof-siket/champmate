type MenuPage = {
    title: string;
    to: string;
}
const pages: MenuPage[] = [
  {
    title: 'Home',
    to: '/',
  },
  {
    title: 'About',
    to: '/about',
  },
  {
    title: 'Contact',
    to: '/contact',
  },
  {
    title: 'Blog',
    to: '/blog',
  },
];

export default pages;
