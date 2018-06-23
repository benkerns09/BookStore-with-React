//Step 1. Describe what the page should look like
/*
<div>
    <h1>Bookstore</h1>
    <ul>
        <li>Books are coming soon!</li>
    </ul>
    <footer>Copyright 2018</footer>
</div>
*/
//$('<h1>', { text: 'Bookstore' })
//$('.react-root').append(element);

/*const books = [
    { title: 'A tale of Two Cities', author: 'Charles Dickens'},
    { title: 'How To Code', author: 'Bootstrap Ben'}
];



let h = React.createElement;

let bookRows = books.map(book =>
    h('li', null, book.title + ' by ' + book.author)

);



let container = h('div', null, [
    h('h1', null, 'Bookstore'),
    h('ul', { className: 'book-list' },
        bookRows
    ),
    h('footer', null, 'Copyright 2018'),
]);
//console.log(element)

/*React.createElement = function(type, mystery, children) {//creates object with the info you gae it
    return {
        type: type
        props: {
            children: children
        }
    }
};*/

/*ReactDOM.render(
    container,
    document.querySelector('.react-root')//only reference you will see to realDom
);//not gonna render until we put in DIV
*/







