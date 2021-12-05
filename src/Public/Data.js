const data = {
    appetizer : [
        {
            name: "Tomato Soup",
            protein: 155,
            cal: 33,
            price: 3.50,
            bugs: ["Cricket"],
            sides: ["Baguette", "Chirps"],
            description: "Tomato Soup with crickets mixed into it with" +
                  " some baguette and cricket chips on the side."
        },
        {
            name: "Carrot Soup",
            protein: 155,
            cal: 33,
            price: 3.50,
            bugs: ["Worm"],
            sides: ["Baguette", "Chirps"],
            description: "Carrot Soup with worms mixed into it with" +
                  " some baguette and cricket chips on the side."
        },
        {
            name: "Veggie Soup",
            protein: 155,
            cal: 33,
            price: 3.50,
            bugs: ["Tarantula"],
            sides: ["Baguette", "Chirps"],
            description: "Veggie Soup with tarantulas mixed into it with" +
                  " some baguette and cricket chips on the side."
        }
    ],
    main_dish: [
        {
            name: "Stir Fry",
            protein: 500,
            cal: 125,
            price: 5,
            bugs: ["Large Cricket", "Meal Worms", "Lemon Ants"],
            sides: ["Lemon Ant Ade", "Soda"],
            description: "An Amazing Stir Fry with a variety of bugs and a customizable" +
                  " amount of lemon ants to maintain the bitterness to ones taste."
        },
        {
            name: "Tacos",
            protein: 600,
            cal: 150,
            price: 7.50,
            bugs: ["Large Cricket", "Meal Worms", "Lemon Ants", "Tarantula Legs"],
            sides: ["Lemon Ant Ade", "Soda"],
            description: "A large taco that consists of amazing bugs and bugs parts" +
                  " along with veggies and a amazing tortilla."
        },
        {
            name: "Bug Bowl",
            protein: "Varies",
            cal: "Varies",
            price: 10,
            bugs: ["Large Cricket", "Meal Worms", "Lemon Ants",
                "Tarantula", "Beetles", "Grass Hoppers", "Stink Bugs"],
            sides: ["Lemon Ant Ade", "Soda", "Mint (for the stink bug)"],
            description: "A customizable bowl that you can add veggies and a wid assortment of bugs" +
                  " it comes with a mint in case you add stink bugs."
        }
    ],
    dessert : [
        {
            name: "Chocorantula",
            protein: 100,
            cal: 100,
            price: 3,
            bugs: ["Tarantula"],
            sides: ["Chocolate Bar", "Chocolate Whipped Creame"],
            description: "A chocolate covered tarantula with various sweet" +
                  " sides made from the best chocolate available for man kind."
        },
        {
            name: "Ginger Cookies",
            protein: 10,
            cal: 100,
            price: 0.50,
            bugs: ["Cricket"],
            sides: ["Milk"],
            description: "Delicious crickets backed in a ginger & brown sugar cookie dough."
        },
        {
            name: "Carmel Cheescake",
            protein: 150,
            cal: 1000,
            price: 12,
            bugs: ["Cricket"],
            sides: ["Oreo Cricket Smoothie"],
            description: "Delicious crickets based cheesecake that is served with an even better smoothie." +
                  " If you are Mr.Beast, Dream, Dani, Tech With Tim, Kolaonii I will give a 100 for free."
        },
    ]
}
const noneObj = {
    name: "",
    protein: 0,
    cal: 0,
    price: 0,
    bugs: [],
    sides: [],
    description: ""
}
function calcPrice(a, m, d, sa, sm, sd) {
    const price = Math.ceil(a.price + m.price + d.price)
    let missing = "";
    
    if (a === noneObj) {
        missing = "Appetizer"
    }
    if (m === noneObj) {
        missing = "Main Dish"
    }
    if (d === noneObj) {
        missing = "Dessert"
    }
    
    if (missing !== "") {
        alert(`You are missing ${missing} Please add a ${missing} .`)
    }
    else {
        sa(0);
        sm(0);
        sd(0);
    }
    
    return price;
}

export {data, noneObj, calcPrice};