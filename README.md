# Bu proje ile V3 Integrator Idempotency'nin notify-url header'ının nasıl çalıştığını test edebilirsiniz.

Çalıştırmadan önce bilgisayarınız üzerinde node.js olduğuna emin olunuz. cmd/terminal: 

`node -v`

Projeyi VS Code'da açtıktan sonra, terminali üzerinde :

`node -save install`

`node app.js`

Artık http://localhost:8080/notify url'ine gelecek bir post requestini terminal logunda görebilir durumdasınız. Aşağıdaki JS kodu ile entegratore'e istek atabilir yada Postman Collectionunu inceleyebilirsiniz.

```javascript

//* http://localhost:61 V3 Integrator Url / http://localhost:8080 Notify Url
fetch('http://localhost:61/IntegratorService/Connect', {
        method: 'POST',
        body: JSON.stringify({
            ModelType: 1,
            DatabaseName: "V3Co",
            UserGroupCode: "MGZ",
            UserName: "O2",
            Password: "1",
            Validate: true
        })
    })
    .then(res => res.json())
    .then(response => {
        fetch(`http://localhost:61/IntegratorService/RunProc/${response['Token']}`, {
            method: 'POST',
            headers: {
                'Idempotent-Key': 'inv-1',
                'Call-Type': 'Async',
                'Notify-Url': 'http://localhost:8080/notify/inv-1'
            },
            body: JSON.stringify({
                ProcName: "usp_SAMPLE_GetItemInventoryBulk"
            })
        })
        .then(res => res.json())
        .then(response => console.log(response))
    })
    .catch(error => console.log(error))

```

Postman Colleciton : https://documenter.getpostman.com/view/4246869/TzCS66qf

### idempotency_notify_sample_api

