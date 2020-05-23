## YnPraktikum.project12.2.
### Учебный проект по созданию сервера на Node.js с использованием фреймворка Express.js.

#### Цель
Создание сервера на Node.js для сервиса Mesto по размещению фотокарточек.

#### Функциональность API

1. Node.js приложение подключается к серверу Mongo по адресу mongodb://localhost:27017/mestodb;
2. запрос на GET /users возвращает всех пользователей из базы;
3. запрос GET /users/:userId возвращает конкретного пользователя;
4. запрос POST /users создаёт пользователя;
5. запрос GET /cards возвращает все карточки всех пользователей;
6. запрос POST /cards создаёт карточку;
7. если в любом из запросов что-то идёт не так, сервер возвращает ответ с ошибкой и соответствующим ей статусом;

#### Установка и запуск проекта
1. Скачать сборку архивом или используя команду:  
```git clone https://github.com/Atm0Sphere94/project13.git```  
2. Запустить установку зависимостей через терминал:  
```npm i```  
3. Установить [MongoDB community edition](https://docs.mongodb.com/manual/administration/install-community/) и запустить daemon MongoDB

4. Выбрать необходимый вариант запуска сервера:  
##### production - запуск сервера  
```npm run start```  
##### develop - запуск сервера с hot reload  
```npm run dev```  

#### Использованные технологии
+ Node.js
+ Express.js
+ MongoDB
+ Mongoose

