const app = Vue.createApp({

    data() {
        return {
            firstName: 'Jhon ',
            lastName: 'Doe',
            email: 'jhondoe@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            phone: '(057) -501-5120',
            country: 'America',
            city: 'NewYork'

        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.phone = results[0].phone
            this.country = results[0].location.country
            this.city = results[0].location.city
            this.picture = results[0].picture.large
        }
    },
})

app.mount('#app')