# Проект: Тестовое задание для НСПК

## Описание

Этот проект представляет собой лендинг, разработанный с использованием HTML, Sass и JavaScript. Для сборки используется Webpack, а для транспиляции JavaScript-кода — Babel.

## Структура проекта

```
Корневая папка/
│── src/              # Исходные файлы проекта
│   ├── assets/       # Медиафайлы (изображения, иконки, шрифты и т. д.)
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   ├── scripts/      # JavaScript-код
│   │   ├── modules/  # Модули JavaScript
│   │   │   ├── inputHandler.js  # Обработка поля ввода
│   │   ├── main.js   # Точка входа для Webpack, импортирует модули
│   ├── styles/       # SCSS-стили
│   │   ├── base/     # Базовые стили (переменные, миксины)
│   │   ├── layout/   # Стили для сетки, контейнеров
│   │   ├── main.scss # Главный файл, который импортирует остальные
│   ├── favicon.ico   # Фавиконка
│   ├── index.html    # Главный HTML-файл
│── .gitignore        # Файл для игнорирования ненужных файлов в Git
│── package.json      # Описание проекта и зависимости
│── package-lock.json # Фиксация версий зависимостей
│── babel.config.json # Конфигурация Babel
│── webpack.config.js # Конфигурация Webpack
│── README.md         # Документация проекта
```

## Установка и запуск

1. Установите зависимости:
   ```sh
   npm install
   ```
2. Запустите проект в режиме разработки:
   ```sh
   npm run start
   ```
3. Для сборки production-версии выполните команду:
   ```sh
   npm run build
   ```

## Деплой

Проект доступен по ссылке: https://malinasavina.github.io/mir-test-task/

## Технологии

- HTML5
- Sass (SCSS)
- JavaScript (ES6+)
- Webpack
- Babel

## Автор

[Алина Савина](https://github.com/malinasavina/)
