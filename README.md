# Лендинг фотографа

Минималистичный адаптивный сайт на React + Vite.

## Запуск

```bash
npm install
npm run dev
```

## Проверка

```bash
npm test
npm run build
```

## Автопубликация на GitHub Pages

В репозитории есть workflow `.github/workflows/deploy.yml`: он запускает тесты и сборку при каждом push в `main`, затем публикует `dist` на GitHub Pages. После создания репозитория выберите **Settings → Pages → Build and deployment → GitHub Actions**.

Перед публикацией замените «ВАШЕ ИМЯ» и `hello@example.com` в `src/LandingPage.jsx`, а также фотографию `heroPhoto` на собственный кадр.
