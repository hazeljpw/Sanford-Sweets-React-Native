 // * The require() function is a Node.js function that is used to include external modules from files other than the current file. It works in the same way as the import statement and allows us to include images.

// *The elevation attribute specifies the direction angle for the light source from the XY plane towards the Z-axis, in degrees. Note that the positive Z-axis points towards the viewer of the content.

// TODO: elevation & featured TBD.

export const PRODUCTS = [
    {
        id: 0,
        name: "Chocolate Crinkles",
        image: require("../assets/images/crinkles.jpg"),
        elevation: 1233,
        featured: false,
        description: "Powdered sugar-dusted cookies with a fudgy interior, boasting a delightful balance of rich cocoa flavors and irresistible sweetness.",
        price: '$10.00'
    },
    {
        id: 1,
        name:"Brazil Expresso",
        image: require("../assets/images/coffee-brazil.jpg"),
        elevation: 877,
        featured: false,
        description: "Espresso embodies the perfection of a single shot espresso, brimming with intricate flavors and a subtle note of caramelized pecan.",
        price: '$15.00'
    },
    {
        id: 2,
        name:"Colombia Supremo",
        image: require("../assets/images/coffee-colombia.jpg"),
        elevation: 2901,
        featured: false,
        description: "Smooth texture, gentle acidity, delightful orange sweetness, subtle undertones of nutty almond, and a satisfyingly sweet vanilla finish.",
        price: '$15.00'
    },
    {
        id: 3,
        name:"Mexico Mocabe HG",
        image: require("../assets/images/coffee-mexico.jpg"),
        elevation: 42,
        featured: true,
        description: "A rich dark chocolate notes, subtle touch of citrusy sweetness, hints of nuttiness, all culminating in a harmoniously balanced body.",
        price: '$15.00'
    },
    {
        id: 4,
        name:"Jamaica Blue Mountains",
        image: require("../assets/images/coffee-jamaica.jpg"),
        elevation: 42, 
        featured: true,
        description: "Notes of chocolate with blackberries and currants, accompanied by a smooth and velvety body, complemented by a gentle, mild acidity.",
        price: '$15.00'
    },
    {
        id: 5,
        name:"Costa Rica La Gladiola",
        image: require("../assets/images/coffee-jamaica.jpg"),
        elevation: 42, 
        featured: true,
        description: "Offers a gratifying heft on the palate, enhancing the overall sense of fulfillment during your coffee journey.",
        price: '$15.00'
    },
    {
        id: 6,
        name:"Coffee Beans",
        image: require("../assets/images/coffee-intro.jpg"),
        elevation: 42, 
        featured: true,
        description: "Experience an array of distinctive coffee bean seections from various corners of the globe",
    },
    {
        id: 7,
        name:"Baked Goods",
        image: require("../assets/images/flour-intro.jpg"),
        elevation: 42, 
        featured: true,
        description: "Dicover variety of pastries and breads from diverse culinary traditions.",
    },
];