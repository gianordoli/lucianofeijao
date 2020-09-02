var ghpages = require('gh-pages');

ghpages.publish(
  // '__sapper__/export/yourproject',// <-- replace yourproject with your repo name
  '__sapper__/export/',// <-- replace yourproject with your repo name
  {
    branch: 'gh-pages',
    repo: 'https://github.com/gianordoli/lucianofeijao.git',
    user: {
      name: 'Gabriel Gianordoli',
      email: 'gianordoligabriel@yahoo.com.br'
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)