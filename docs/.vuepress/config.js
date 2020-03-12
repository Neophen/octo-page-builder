module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Octo Form',
      description: 'Documentation site for the Octo Form library plugin'
    }
  },

  themeConfig: {
    repoLabel: 'Contribute!',
    repo: 'https://github.com/Neophen/octo-form',
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
          { text: 'Components', link: '/components/' },
          { text: 'GitHub', link: 'https://github.com/Neophen/octo-form' }
        ],
        sidebar: {
          '/components/': [
            {
              title: 'Components',
              collapsable: false,
              children: [
                'form',
                'film',
              ]
            }
          ]
        }
      }
    }
  }
}