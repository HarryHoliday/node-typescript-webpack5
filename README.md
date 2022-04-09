# project

```bash
mkdir [PROJECT-NAME]
cd [PROJECT-NAME]
touch README.md

npm init -y
npm install --save-dev eslint typescript
npm install --save-dev @types/node
npx tsc --init
npm init @eslint/config
```

[npm init @eslint/config - SETTING](./doc/SETTING_ESLINT.md)

```bash
git init
git branch -m main
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
npm install --save-dev husky lint-staged
npx husky install
npm set-script prepare "husky install"
npx husky add .husky/pre-commit "npx lint-staged"
```

add below at packagejson

```json
...
  "lint-staged": {
    "src/**/*.{js,ts,json}": [
      "prettier --write",
      "git add"
    ]
  },
...
```

```bash
npm install --save-dev webpack webpack-cli ts-loader
npm install --save-dev eslint-webpack-plugin
npm install --save-dev dotenv dotenv-expand nodemon nodemon-webpack-plugin webpack-node-externals
npm install --save-dev tsconfig-paths-webpack-plugin
```

src/index.ts
```ts
import path from 'path';

console.log(path.resolve(__dirname, './'));
```
