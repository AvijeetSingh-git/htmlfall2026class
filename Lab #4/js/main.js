// Runs on every page. It uses the components form the component.js
// Now we ask what page are we on?

const page = document.body.dataset.page;
// Now that we have our what page.. now we can add our metadata
const pageMeta = {
    home: {
        title: "Home",
        description: "This is a home decription"
    },
    about: {
        title: "About",
        description: "This is a about description"
    },
    contact: {
        title: "Contact",
        description: "This is a contract description"
    }
};
// the CIA content
const ctaContent = {
    home: {
        heading: "fasjkgfbaerhjgvb",
        text: "angrjkqernghjse",
        buttonText: "gnwjkbgvhiwv",
        link: "index.html"
    },
    about: {
        heading: "768257346573",
        text: "647234y8224",
        buttonText: "rb2yury989220",
        link: "about.html"
    },
    contact: {
        heading: "djdjjddjjdjdjdjdjdu52346721r346723t4",
        text: "adadadadadaddau67246672t4",
        buttonText: "djdjdjdjdjjd7839179479e2",
        link: "contact.html"
    }
}
const favourites = [
    {title:"Espresso", text:"blah"},
    {title:"Cold Brew", text:"blah blah"},
    {title:"Croissant", text:"blah blah blah"},
];

//
// Now build the damn thing
//
// metadata goes in the <head>
const meta = pageMeta[page];
renderHead(createMetadata(meta.title, meta.description, meta.robots));
// now fill in our pages
render("#site-header", createHeader(page));
render("#site-footer", createFooter(siteName));
render("cta", createCallToAction(ctaContent[page]));
// turn object in the array into a card
const cardHtml = favourites
    .map((item) => createCard(item.title, item.text))
    .join("");

    render("#cards", cardsHtml);