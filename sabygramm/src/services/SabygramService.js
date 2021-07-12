export default class SabygramService {
    dialogData = [
        [
            {
                id: 0,
                name: "Анжелина Гафурова",
                lastMessage: "Как ты?",
                img: "https://bugaga.ru/uploads/posts/2016-12/1481556556_kot-volshebnik-1.jpg"
            },
            {
                id: 1,
                name: "Ксения Ерофеева",
                lastMessage: "Встала сегодня в 6 утра прикинь...",
                img: "https://yt3.ggpht.com/a/AATXAJynSQVjxLr742pi_eZXJxyzjfWLaRcCxgYaeJX_Cg=s900-c-k-c0xffffffff-no-rj-mo"
            }      
        ],
        [
            {
                id: 1,
                name: "Ксения Ерофеева",
                lastMessage: "Встала сегодня в 6 утра прикинь...",
                img: "https://yt3.ggpht.com/a/AATXAJynSQVjxLr742pi_eZXJxyzjfWLaRcCxgYaeJX_Cg=s900-c-k-c0xffffffff-no-rj-mo"
            },
            {
                id: 2,
                name: "Сергей Патрушев",
                lastMessage: "Не забывайте подписывать время в тасках",
                img: "https://i02.fotocdn.net/s110/defbcd4b451a9263/gallery_xl/2460844912.jpg"
            }
        ],
        [
            {
                id: 2,
                name: "Сергей Патрушев",
                lastMessage: "Не забывайте подписывать время в тасках",
                img: "https://i02.fotocdn.net/s110/defbcd4b451a9263/gallery_xl/2460844912.jpg"
            },
            {
                id: 0,
                name: "Анжелина Гафурова",
                lastMessage: "Как ты?",
                img: "https://bugaga.ru/uploads/posts/2016-12/1481556556_kot-volshebnik-1.jpg"
            }
        ]
    ];

    async sendLoginForm(formData){
        let response = await fetch('/', {
            method: 'POST',
            body: {
                login: formData.login,
                password: formData.password
            }
          });
        if(response.ok){
            alert("Logged in!")
        }
    }

    getDialogData(id){
        return this.dialogData[id];
    }
}