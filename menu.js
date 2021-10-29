///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
let pizza = {
    name: 'Roma',
    price: 14,
    category: 'Thin Crust Pizza',
    poplarity: 7,
    rating: 4,
    tags: ['pizza', 'italian', 'cheesy', 'vegtables', 'entree']
}


//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(pizza.poplarity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
const {price} = pizza
console.log(pizza.price)

/*
    Fourth, and last, destructure the category
    property. *There is not a 'Property' catagory-- so I desctrucured 'popularity'. Also, I wasn't sure if I was supposed to do anything after destructuring
     as the instructions aren't really clear on that. 

    Print the value of your category variable. 
*/

//CODE HERE
const {poplarity} = pizza
console.log(pizza.poplarity)

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
let foodArr = [
    {
        name: 'Meat Lover Calzone',
        price: 12,
        category: 'Calzone',
        poplarity: 8,
        rating: 3,
        tags: ['calzone', 'italian', 'cheesy', 'pepperoni', 'entree']
    },
    {
        name: 'Ciabatta',
        price: 9,
        category: 'Appetizers',
        poplarity: 9,
        rating: 5,
        tags: ['bread', 'italian', 'cheesy', 'yeast']
    },
    {
        name: 'Vegitarian Calzone',
        price: 18,
        category: 'Calzone',
        poplarity: 4,
        rating: 2,
        tags: ['calzone', 'italian', 'cheesy', 'vegtables', 'entree']
    },
    {
        name: 'Italian Salad',
        price: 10,
        category: 'Salad',
        poplarity: 6,
        rating: 5,
        tags: ['salad', 'italian', 'fresh', 'vegtables', 'side']
    },
    {
        name: 'Chicken Fingers',
        price: 12,
        category: 'Kids',
        poplarity: 9,
        rating: 2,
        tags: ['kids', 'fries', 'american', 'entree']
    },

]


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

let t = 'kids'
const tagFilter = (element, index, array) => {
        return element.tags.includes('kids')
}
const filteredFood = foodArr.filter(tagFilter) 

console.log(foodArr.filter(tagFilter)[0])





//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE


/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
let filterByProperty = (property, num, type) => {
    let filteredArr = foodArr.filter(element => {
        if (type === 'above') {
           return element[property] > num
        } else {
           return element[property] < num
        }
    })
    return filteredArr
}

console.log(filterByProperty('price', 14, 'below'))