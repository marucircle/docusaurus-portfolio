// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
const fs = require('fs')
const path = require('path')

const getAllDirectories = (dirPath, directories = []) => {
  try {
    const items = fs.readdirSync(dirPath, { withFileTypes: true })

    for (const item of items) {
      const fullPath = path.join(dirPath, item.name)
      if (item.isDirectory()) {
        directories.push(fullPath) // ディレクトリを追加
        getAllDirectories(fullPath, directories) // 再帰的に探索
      }
    }
  } catch (err) {
    console.error(`Error reading directory ${dirPath}:`, err)
  }

  return directories
}

const artifactFolders = getAllDirectories('./artifact')

module.exports = [
  {
    type: 'select',
    name: 'directory',
    message: '生成する成果物ページのディレクトリ:',
    choices: [...artifactFolders, 'artifact'],
  },
  {
    type: 'input',
    name: 'fileName',
    message: 'ファイル名を入力(ディレクトリも合わせて入力):',
    validate: (input) => (input ? true : 'ファイル名の入力が必要'),
  },
]
