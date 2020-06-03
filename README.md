## YnPraktikum.project12.2. v1.2.0
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

##### ОБНОВЛЕНО!!!!
1. В схеме пользователя есть обязательные email и password;
2. Поле email уникально и валидируется;
3. В контроллере createUser почта и хеш пароля записываются в базу;
4. Есть контроллер login, он проверяет, полученные в теле запроса почту и пароль;
5. Если почта и пароль верные, контроллер login создаёт JWT, в пейлоуд которого записано свойство _id с идентификатором пользователя; срок жизни токена — 7 дней;
6. Если почта и пароль верные, контроллер login возвращает созданный токен в ответе;
7. Если почта и пароль не верные, контроллер login возвращает ошибку 401;
8. В app.js есть обработчики POST-запросов на роуты /signin и /signup;
9. Есть файл middlewares/auth.js, в нём мидлвэр для проверки JWT;
10. При правильном JWT авторизационный мидлвэр добавляет в объект запроса пейлоуд и пропускает запрос дальше;
11. При неправильном JWT авторизационный мидвэр возвращает ошибку 401;
12. Все роуты, кроме /signin и /signup, защищены авторизацией;
13. Удалён хардкод req.user из самостоятельного проекта предыдущего спринта;
14. Пользователь не может удалить карточку, которую он не создавал;
15. API не возвращает хеш пароля;

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

