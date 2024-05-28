// data.js
const date = new Date();
// Sample data
const data = {
    users :[
        {id: 1, username: 'majed', password: '1234'},
        {id: 2, username: 'user2', password: '1234'},
        {id: 3, username: 'user3', password: '1234'},
        {id: 4, username: 'user4', password: '1234'},
        {id: 5, username: 'user5', password: '1234'},
        {id: 6, username: 'user6', password: '1234'},
        {id: 7, username: 'user7', password: '1234'},
        {id: 8, username: 'user8', password: '1234'},
        {id: 9, username: 'user9', password: '1234'},
        {id: 10, username: 'user10', password: '1234'},
    ],
    categories: [
        { id: 1, name: 'Social Media', description: 'Social Media'},
        { id: 2, name: 'Finance', description: 'Finance'},
        { id: 3, name: 'Email', description: 'Email'},
        { id: 4, name: 'Entertainment', description: 'Entertainment'},
        { id: 5, name: 'Shopping', description: 'Shopping'},
        { id: 6, name: 'Work', description: 'Work-related'},
        { id: 7, name: 'Travel', description: 'Travel-related'},
        { id: 8, name: 'Education', description: 'Educational'},
        { id: 9, name: 'Health', description: 'Health-related'},
        { id: 10, name: 'News', description: 'News-related'},
        { id: 11, name: 'Utilities', description: 'Utilities'},
        { id: 12, name: 'Gaming', description: 'Gaming'},
        { id: 13, name: 'Sports', description: 'Sports-related'},
        { id: 14, name: 'Food', description: 'Food-related'},
        { id: 15, name: 'Music', description: 'Music-related'},
        { id: 16, name: 'Books', description: 'Book-related'},
        { id: 17, name: 'Art', description: 'Art-related'},
        { id: 18, name: 'Photography', description: 'Photography-related' },
        { id: 19, name: 'Technology', description: 'Technology-related' },
        { id: 20, name: 'Other', description: 'Other' }
    ],
    passwords: [
        {
            id: 1,
            name: 'Facebook',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username1',
            password: 'fb1234',
            category: 1
        },
        {
            id: 2,
            name: 'Instagram',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username2',
            password: 'in1234',
            category: 1
        },
        {
            id: 3,
            name: 'Twitter',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username3',
            password: 'tw1234',
            category: 1
        },
        {
            id: 4,
            name: 'LinkedIn',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username4',
            password: 'li1234',
            category: 1
        },
        {
            id: 5,
            name: 'GitHub',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username5',
            password: 'gh1234',
            category: 19
        },
        {
            id: 6,
            name: 'Google',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username6',
            password: 'go1234',
            category: 5
        },
        {
            id: 7,
            name: 'Amazon',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username7',
            password: 'am1234',
            category: 3
        },
        {
            id: 8,
            name: 'Netflix',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username8',
            password: 'nf1234',
            category: 3
        },
        {
            id: 9,
            name: 'YouTube',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username9',
            password: 'yt1234',
            category: 14
        },
        {
            id: 10,
            name: 'Reddit',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username10',
            password: 'rd1234',
            category: 10
        }
    ],
    generateNewPasswordId: () => {
        let maxId = Math.max(...data.passwords.map(p => p.id));
        return maxId + 1 || 1;
    },
    generateNewCategoryId: () => {
        let maxId = Math.max(...data.categories.map(c => c.id));
        return maxId + 1 || 1;
    },
    addPassword: (password) => {
        let id = data.generateNewPasswordId();
        password = {id, ...password};
        data.passwords.push(password);
    },
    addCategory: (category) => {
        let id = data.generateNewCategoryId();
        category = {id, ...category};
        data.categories.push(category);
    },
};

// Export the data object
export default data;