#!/bin/sh
docker compose up -d
php artisan key:generate
php artisan migrate:fresh
php artisan passport:keys --force
php artisan passport:client --personal --no-interaction
php artisan typescript:generate
npm i
npm run test