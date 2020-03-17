module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Octo Page Builder',
      description: 'Documentation site for the Octo Page builder library plugin'
    }
  },

  themeConfig: {
    repoLabel: 'Contribute!',
    repo: 'https://github.com/Neophen/octo-page-builder',
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'dev',
    editLinkText: 'Help us improve this page!',
    search: false,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Getting Started', link: '/guide' },
          { text: 'Page Builder', link: '/components/page-builder' },
          { text: 'GitHub', link: 'https://github.com/Neophen/octo-page-builder' }
        ],
        // sidebar: {
        //   '/components/': [
        //     {
        //       title: 'Components',
        //       collapsable: false,
        //       children: [
        //         'top-bar',
        //         'sidebar',
        //         'page-builder',
        //       ]
        //     }
        //   ]
        // }
      }
    }
  }
}