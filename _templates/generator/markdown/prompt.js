// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: 'select',
    name: 'type',
    message: '生成する記事のディレクトリ:',
    choices: ['artifact', 'blog', 'output'],
  },
  {
    type: 'input',
    name: 'fileName',
    message: 'ファイル名を入力:',
    validate: (input) => (input ? true : 'ファイル名の入力が必要'),
  },
]
