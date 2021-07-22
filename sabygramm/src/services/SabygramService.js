export default class SabygramService {
    dialogData = [[{"id": 21, "name": "\u0414\u0438\u0432\u0430\u043d\u043d\u044b\u0439 \u0418\u043c\u043f\u0435\u0440\u0430\u0442\u043e\u0440", "lastMessage": "\u0410 \u0445\u043e\u0447\u0435\u0448\u044c \u043f\u0440\u043e \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u0437\u043c \u0440\u0430\u0441\u0441\u043a\u0430\u0436\u0443?", "img": "/var/www/web/sites/java-ekb.ru/media/9000002202.jpg", "timing": "2021-07-20 21:12:00"}], [], []]
    // dialogData = [
    //     [
    //         {
    //             id: 0,
    //             name: "Анжелина",
    //             lastMessage: "Как ты?",
    //             img: "https://bugaga.ru/uploads/posts/2016-12/1481556556_kot-volshebnik-1.jpg",
    //             timing: "15 м"
    //         },
    //         {
    //             id: 1,
    //             name: "Крис",
    //             lastMessage: "Встала сегодня в 6 утра прикинь...",
    //             img: "https://yt3.ggpht.com/a/AATXAJynSQVjxLr742pi_eZXJxyzjfWLaRcCxgYaeJX_Cg=s900-c-k-c0xffffffff-no-rj-mo",
    //             timing: "1 ч"
    //         }

    //     ],
    //     [

    //         {
    //             id: 2,
    //             name: "Сергей",
    //             lastMessage: "Не забывайте подписывать время в тасках",
    //             img: "https://i02.fotocdn.net/s110/defbcd4b451a9263/gallery_xl/2460844912.jpg",
    //             timing: "2 ч"
    //         },
    //         {
    //             id: 3,
    //             name: "Эдуард",
    //             lastMessage: "Пароль не подошел",
    //             img: "https://pm1.narvii.com/7357/dd8ddd1a25b83dcf20d7036a4656fc47b7aad917r1-1080-1198v2_hq.jpg",
    //             timing: "1 д"
    //         },
    //         {
    //             id: 7,
    //             name: "Серёжа",
    //             lastMessage: "Привет, у меня вопрос",
    //             img: "https://i0.wp.com/prostolike.net/wp-content/uploads/2018/08/image3_700x669.jpg?w=700&ssl=1",
    //             timing: "2 д"
    //         }
    //     ],
    //     [
    //         {
    //             id: 4,
    //             name: "Вова",
    //             lastMessage: "Выучил реакт за час",
    //             img: "https://cutewallpaper.org/21/grumpy-cat-screensaver/Grumpy-Wallpapers-Wallpaper-Cave.jpg",
    //             timing: "2 ч"
    //         },
    //         {
    //             id: 5,
    //             name: "Саша",
    //             lastMessage: "Я на 2 этаже куда идти?",
    //             img: "https://ustaliy.ru/wp-content/uploads/2019/03/universe.jpg",
    //             timing: "1 н"
    //         },
    //         {
    //             id: 6,
    //             name: "Лёша",
    //             lastMessage: "Я в столовой, если что",
    //             img: "https://avatars.mds.yandex.net/get-zen_doc/1886729/pub_5d62dba6998ed600ad85c10e_5d62dbc135c8d800adef2383/scale_1200",
    //             timing: "2 н"
    //         }

    //     ]
    // ];

    sendDataPost(data, url) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
    }
    sendDataGet(data, url) {
        return new Promise((resolve) => {
            setTimeout(() => resolve([
                {
                    id: 0,
                    name: "Halo",
                    number: "Salut",
                    picture:"https://i0.wp.com/prostolike.net/wp-content/uploads/2018/08/image3_700x669.jpg?w=700&ssl=1"
                }
            ]), 500)
        })
        // return fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(data)
        // })
        // это для поиска контактов
    }
    getDialogData() {
        // return new Promise((resolve) => {
        //     setTimeout(() => resolve([]), 500)
        // })
        return fetch('http://185.93.109.221:8000/dialogs')
    }
}