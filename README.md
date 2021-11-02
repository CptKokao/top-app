Полный курс по современному Frontend на React и Next.js. Всё от CSS Grid и TypeScript до React Hooks и SSR

# 🚀 Установка

1.  **Утановить next.js**

    ```bash
    npx create-next-app top-app --use-npm
    ```

2.  **Добавить поддержку typescript**

    Перейти в проект
    
    ```bash
    cd top-app
    touch tsconfig.json
    ```
    
    Установите локальные зависимости при помощи пакетного менеджера npm
    
    ```bash
    npm i -D typescript @types/react @types/node
    ```

3.  **Добавить eslint**

    Установите локальные зависимости при помощи пакетного менеджера npm
    
    ```bash
    npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
    ```
    
    Добавить .eslintrc.json
    
    ```json
        {
        	"root": true,
        	"parser": "@typescript-eslint/parser",
        	"plugins": [
        		"@typescript-eslint"
        	],
        	"rules": {
        		"semi": "off",
        		"@typescript-eslint/semi": [
        			"warn"
        		],
        		"@typescript-eslint/no-empty-interface": [
        			"error",
        			{
        				"allowSingleExtends": true
        			}
        		]
        	},
        	"extends": [
            "next/core-web-vitals",
        		"eslint:recommended",
        		"plugin:@typescript-eslint/eslint-recommended",
        		"plugin:@typescript-eslint/recommended"
        	]
        }
    ```

4.  **Добавить stylelint**

    Установите локальные зависимости при помощи пакетного менеджера npm

    ```bash
    npm i -D stylelint stylelint-config-standard stylelint-order stylelint-order-config-standart
    ```
    Добавить .stylelintrc.json
    
    ```json
        {
        	"extends": [
        		"stylelint-config-standard",
        		"stylelint-order-config-standard"
        	],
        	"plugins": [
        		"stylelint-order"
        	],
        	"rules": {
        		"indentation": [
        			"tab"
        		],
        		"color-hex-case": "upper"
        	}
        }
    ```

    Добавить скрипт проверки и автоисправления

    
    ```bash
        "stylelint": "stylelint \"**/*.css\"",
        "stylelint-fix": "stylelint \"**/*.css\" --fix"
    ```

# 🚀 Разработка

## Создать рабочую ветку

1.  **Синхронизируйтесь при необходимости**

    ```bash
    $ git checkout main
    $ git pull origin main --rebase
    ```

2.  **Создайте новую ветку для изменений**

    ```bash
    $ git checkout -b new-branch-name-for-work-custom-name
    ```

## Создать коммит (commit)

1. **Убедитесь, что находитесь в только что созданной ветке (не ветка main)**
   ```bash
   $ git status
   ```
2. **Сделайте изменения и добавьте их**
   ```bash
   $ git add .
   ```
3. **Создайте коммит (commit)**
   ```bash
   $ git commit -m 'feat: commit description here'
   ```

## Создать Pull Request

1. **Убедитесь, что текущая ветка - та, которую вы только что создали (не ветка main)**

   ```bash
   $ git status
   ```

2. **Получить последние изменения из origin**
   ```bash
   $ git fetch origin
   ```
3. **Перебазируйте текущую ветку в origin main (лучше использовать визуальное сравнение кода)**

   или

   ```bash
   $ git rebase origin/main
   ```

4. **При помощи команды push внесите изменение в удаленный репозиторий**

   ```bash
   $ git push
   ```

   далее следуйте подсказкам в консоли

5. **Создайте Pull Request, используя GitHub web interface**

## 🧐 Что внутри?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: Эта папка содержит все модули кода, от которых зависит проект (npm пакеты), и установленные автоматически.

2.  **`/src`**: В этой папке будет находиться код, относящийся к внешнему виду сайта (то, что отображает браузер) - шапка сайта или шаблоны страниц. Здесь основной код.

3.  **`.gitignore`**:Этот файл сообщает git, для каких файлов он не должен отслеживать / не вести историю версий.

4.  **`.prettierrc`**: Это файл конфигурации для [Prettier](https://prettier.io/). Prettier - это инструмент, помогающий поддерживать единообразие форматирования кода.

5.  **`gatsby-browser.js`**: Файл, в котором описаны способы и механизмы взаимодействия с браузером при помощи [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/).

6.  **`gatsby-config.js`**: Это главный файл конфигурации сайта генератора сайтов Gatsby. Тут вы можете указать информацию о сайте: описание сайта, заголовок, какие плагины вы хотите использовать и т.д. Детальнее здесь ( [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) ).

7.  **`gatsby-node.js`**: Файл, в котором описаны способы и механизмы применения [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) для воздействия на части кода во время разработки.

8.  **`gatsby-ssr.js`**: В этом файле находятся настройки [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (если есть) серверной части сайта, влияющие на рендеринг на стороне сервера.

9.  **`package-lock.json`** Это автоматически сгенерированный файл на основе точных версий ваших зависимостей npm, которые были установлены для вашего проекта.**(Напрямую этот сайт изменить не получится).**

10. **`package.json`**: Файл манифеста для проектов Node.js, который включает такие вещи, как метаданные (название проекта, автор и т. д.). С помощью этого манифеста npm узнает, какие пакеты установить для вашего проекта.

11. **`README.md`**: Файл с полезными ссылками и информацией о проекте.
