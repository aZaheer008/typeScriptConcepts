import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps , User } from './models/User';

const users = new Collection('http://localhost:3000/users',(json: UserProps) => {
    return User.buildUser(json);
});

users.on('change',() => {
    const root = document.getElementById('root');
    if (root){
        new UserList(root, users).render();
    }
});

users.fetch();


// import { UserEdit } from './views/UserEdit';
// import { User } from './models/User';

// const user = User.buildUser({ name : 'NAME', age:20});

// const root = document.getElementById('root');
// if (root){
//     const userEdit = new UserEdit(root, user)
//     userEdit.render();
//     console.log("---userEdit---",userEdit);
// } else {
//     throw new Error('Root element not found');
// }

// import { User  } from './models/User';

// const collection = User.buildUserCollection();

// collection.on('change',() => {
//     console.log(collection);
// });

// collection.fetch();

// import { User } from './models/User';

// const user = User.buildUser({ id : 1});
// const user = new User({ id : 1, name : "new user zaheer", age:98 });

// user.on('change',() => {
//     console.log(user);
// })

// user.fetch();

// user.events.on('change', () => {
//     console.log('change');
// });

// user.events.trigger('change');

// user.save();

// user.on('change', () => {


//     console.log("change #")
// });
// user.trigger('change');
// console.log("----user----",user);

// user.set({name:'zaheer',age:87});
// user.set({name:'Habib'})

// console.log(user.get('name'));
// console.log(user.get('age'));