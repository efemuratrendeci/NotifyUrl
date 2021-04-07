# Bu proje ile V3 Integrator Idempotency'nin notify-url header'ının nasıl çalıştığını test edebilirsiniz.

Çalıştırmadan önce bilgisayarınız üzerinde node.js olduğuna emin olunuz. cmd/terminal: 

`node -v`

Projeyi VS Code'da açtıktan sonra, terminali üzerinde :

`node -save install`
`node app.js`

Artık http://localhost:8080/notify url'ine gelecek bir post requestini terminal logunda görebilir durumdasınız.

### idempotency_notify_sample_api

