// data.js
const date = new Date();
// Sample data
const data = {
    categories: [
        { id: 1, name: 'Social Media', description: 'Social Media', count: 5 },
        { id: 2, name: 'Finance', description: 'Finance', count: 5 },
        { id: 3, name: 'Email', description: 'Email', count: 5 },
        { id: 4, name: 'Entertainment', description: 'Entertainment', count: 5 },
        { id: 5, name: 'Shopping', description: 'Shopping', count: 5 },
        { id: 6, name: 'Work', description: 'Work-related', count: 5 },
        { id: 7, name: 'Travel', description: 'Travel-related', count: 5 },
        { id: 8, name: 'Education', description: 'Educational', count: 5 },
        { id: 9, name: 'Health', description: 'Health-related', count: 5 },
        { id: 10, name: 'News', description: 'News-related', count: 5 },
        { id: 11, name: 'Utilities', description: 'Utilities', count: 5 },
        { id: 12, name: 'Gaming', description: 'Gaming', count: 5 },
        { id: 13, name: 'Sports', description: 'Sports-related', count: 5 },
        { id: 14, name: 'Food', description: 'Food-related', count: 5 },
        { id: 15, name: 'Music', description: 'Music-related', count: 5 },
        { id: 16, name: 'Books', description: 'Book-related', count: 5 },
        { id: 17, name: 'Art', description: 'Art-related', count: 5 },
        { id: 18, name: 'Photography', description: 'Photography-related', count: 5 },
        { id: 19, name: 'Technology', description: 'Technology-related', count: 5 },
        { id: 20, name: 'Other', description: 'Other', count: 5 }
    ],
    passwords: [
        {
            id: 1,
            name: 'Facebook',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username1',
            password: 'fb1234',
            category: 'Social Media'
        },
        {
            id: 2,
            name: 'Instagram',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username2',
            password: 'in1234',
            category: 'Social Media'
        },
        {
            id: 3,
            name: 'Twitter',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username3',
            password: 'tw1234',
            category: 'Social Media'
        },
        {
            id: 4,
            name: 'LinkedIn',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username4',
            password: 'li1234',
            category: 'Social Media'
        },
        {
            id: 5,
            name: 'GitHub',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username5',
            password: 'gh1234',
            category: 'Developer Tools'
        },
        {
            id: 6,
            name: 'Google',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username6',
            password: 'go1234',
            category: 'Search Engine'
        },
        {
            id: 7,
            name: 'Amazon',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username7',
            password: 'am1234',
            category: 'E-commerce'
        },
        {
            id: 8,
            name: 'Netflix',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username8',
            password: 'nf1234',
            category: 'Entertainment'
        },
        {
            id: 9,
            name: 'YouTube',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username9',
            password: 'yt1234',
            category: 'Video Sharing'
        },
        {
            id: 10,
            name: 'Reddit',
            lastUsed: date.toLocaleDateString('en-US'),
            username: 'username10',
            password: 'rd1234',
            category: 'Discussion Forums'
        }
    ]
};

// Export the data object
export default data;