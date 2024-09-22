const NavbarData = {
  logo: {
    name: 'stripe',
    link: '/',
  },
  links: [
    {
      parent: 'Início',
      children: [
        {
          name: 'Payments',
          link: '/payments',
          desc: 'Online payments',
        },
        {
          name: 'Checkout',
          link: '/checkout',
          desc: 'Checkout experience',
        },
        {
          name: 'Billing',
          link: '/billing',
          desc: 'Subscriptions & invoicing',
        },
        {
          name: 'Connect',
          link: '/connect',
          desc: 'Payments for platforms',
        },
        {
          name: 'Payouts',
          link: '/payouts',
          desc: 'Send money globally',
        },
        {
          name: 'Radar',
          link: '/radar',
          desc: 'Fraud & risk management',
        },
        {
          name: 'Sigma',
          link: '/sigma',
          desc: 'Custom reports',
        },
        {
          name: 'Atlas',
          link: '/atlas',
          desc: 'Startup incorporation',
        },
      ],
    },
    {
      parent: 'Biblioteca Colaborativa',
      children: [
        {
          name: 'Documentation',
          link: '/documentation',
          desc: 'Products and Tools',
        },
        {
          name: 'Libraries and SDKs',
          link: '/lib-sdk',
          desc: 'Get started in minutes',
        },
        {
          name: 'App Integration',
          link: '/app-integration',
          desc: 'Plugins and extensions',
        },
      ],
    },
    {
      parent: 'Ekonavi',
      children: [
        {
          name: 'About',
          link: '/about',
          desc: 'Our story and team',
        },
        {
          name: 'Customers',
          link: '/customers',
          desc: 'Who we work with',
        },
        {
          name: 'Jobs',
          link: '/jobs',
          desc: 'We’re hiring',
        },
        {
          name: 'Blog',
          link: '/blog',
          desc: 'News and updates',
        },
      ],
    },
    {
      parent: 'Registro OndeFoi',
      children: null,
      link: '/pricing',
    },
    {
      parent: 'Assessoria Sofia',
      children: null,
      link: '/pricing',
    },
    {
      parent: 'Liga Colaborativa',
      children: null,
      link: '/pricing',
    },
  ],
  action: {
    name: 'Login',
    link: '/login',
  },
  action2: {
    name: 'SignUp',
    link: '/register',
  },
};

export default NavbarData;
