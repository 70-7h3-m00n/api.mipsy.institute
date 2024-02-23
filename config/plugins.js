// module.exports = ({ env }) => ({
//   'users-permissions': {
//     config: {
//       jwt: {
//         expiresIn: '7d',
//       },
//     },
//   },
//   'email': {
//     provider: 'smtp',
//     providerOptions: {
//       host: 'smtp.jino.ru',
//       port: 587, // Порт SMTP-сервера (обычно 587 для TLS)
//       secure: false, // Включить SSL/TLS (обычно false для STARTTLS)
//       logger: true,
//       debug: true,
//       username: env('SMTP_LOGIN'),
//       password: env('SMTP_PASS'),
//       // auth: {
//       //   user: env('SMTP_LOGIN'), // Логин для SMTP
//       //   pass: env('SMTP_PASS'), // Пароль для SMTP
//       // },
//     },
//     settings: {
//       defaultFrom: 'main@smtp-mip.ipo.msk.ru', // Адрес отправителя по умолчанию
//       defaultReplyTo: 'vanjaklp@yandex.ru', // Адрес ответа по умолчанию
//     },
//   },
//   upload: {
//     provider: 'cloudinary',
//     providerOptions: {
//       cloud_name: env('CLOUDINARY_NAME'),
//       api_key: env('CLOUDINARY_KEY'),
//       api_secret: env('CLOUDINARY_SECRET')
//     },
//     actionOptions: {
//       upload: {},
//       delete: {}
//     }
//   }
// })
