export default class SabygramService {
    dialogData = [
        [
            {
                id: 0,
                id_pair: 1,
                name: "Анжелина",
                lastMessage: "Как ты?",
                img: "https://bugaga.ru/uploads/posts/2016-12/1481556556_kot-volshebnik-1.jpg",
                timing: "15 м"
            },
            {
                id: 1,
                id_pair: 2,
                name: "Крис",
                lastMessage: "Встала сегодня в 6 утра прикинь...",
                img: "https://yt3.ggpht.com/a/AATXAJynSQVjxLr742pi_eZXJxyzjfWLaRcCxgYaeJX_Cg=s900-c-k-c0xffffffff-no-rj-mo",
                timing: "1 ч"
            }

        ],
        [

            {
                id: 2,
                id_pair: 3,
                name: "Сергей",
                lastMessage: "Не забывайте подписывать время в тасках",
                img: "https://i02.fotocdn.net/s110/defbcd4b451a9263/gallery_xl/2460844912.jpg",
                timing: "2 ч"
            },
            {
                id: 3,
                id_pair: 4,
                name: "Эдуард",
                lastMessage: "Пароль не подошел",
                img: "https://pm1.narvii.com/7357/dd8ddd1a25b83dcf20d7036a4656fc47b7aad917r1-1080-1198v2_hq.jpg",
                timing: "1 д"
            },
            {
                id: 7,
                id_pair: 5,
                name: "Серёжа",
                lastMessage: "Привет, у меня вопрос",
                img: "https://i0.wp.com/prostolike.net/wp-content/uploads/2018/08/image3_700x669.jpg?w=700&ssl=1",
                timing: "2 д"
            }
        ],
        [
            {
                id: 4,
                id_pair: 6,
                name: "Вова",
                lastMessage: "Выучил реакт за час",
                img: "https://cutewallpaper.org/21/grumpy-cat-screensaver/Grumpy-Wallpapers-Wallpaper-Cave.jpg",
                timing: "2 ч"
            },
            {
                id: 5,
                id_pair: 7,
                name: "Саша",
                lastMessage: "Я на 2 этаже куда идти?",
                img: "https://ustaliy.ru/wp-content/uploads/2019/03/universe.jpg",
                timing: "1 н"
            },
            {
                id: 6,
                id_pair: 8,
                name: "Лёша",
                lastMessage: "Я в столовой, если что",
                img: "https://avatars.mds.yandex.net/get-zen_doc/1886729/pub_5d62dba6998ed600ad85c10e_5d62dbc135c8d800adef2383/scale_1200",
                timing: "2 н"
            }

        ]
    ];
    getMockedData() {
        return this.dialogData;
    }




    sendDataPost(data, url) {
        // return new Promise((resolve) => {
        //     setTimeout(() => resolve(
        //         {
        //             status: 1,
        //             name: "antony",
        //             image_link:"https://i0.wp.com/prostolike.net/wp-content/uploads/2018/08/image3_700x669.jpg?w=700&ssl=1"
        //         }
        //     ), 500)
        // })
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
    }
    sendDataGet(data, url) {

        // return fetch(url, {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(data)
        // })
    }
    getDialogData() {
        // return new Promise((resolve) => {
        //     setTimeout(() => resolve([]), 500)
        // })
        return fetch('http://185.93.109.221:8000/dialogs')
    }

}
const data = {
    user_id: 21,
    group_number: 2
}
console.log(fetch("http://185.93.109.221:8000/handleDialogs", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
}))
fetch("http://185.93.109.221:8000/handleDialogs", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
})
