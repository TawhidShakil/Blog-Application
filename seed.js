const {faker} = require('@faker-js/faker')
const User = require('./src/model/User')
const Article = require('./src/model/Article')

const seedUser = (noOfUsers=5)=>{
    for(let i=0; i<noOfUsers; i++){
        const user = new User({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        })

        user.save();
    }


}

const seedAritlce = (noOfAritcle)=>{
    for(let i=0; i<noOfAritcle; i++){
        const article = new Article({
            title: faker.book.title(),
        })
    }
}

module.exports = { seedUser };