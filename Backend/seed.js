const mongoose = require('mongoose');
const blog=[
        {
            title: "paneer ka pratha",
            image:"https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=600&quality=80",
            author: "mukul",
            body: "Donuts, also known as doughnuts, are a popular type of fried or baked pastry. They are typically round with a hole in the center, though there are various shapes and flavors available. The dough is made from ingredients like flour, sugar, yeast, and often eggs and milk, resulting in a soft and slightly sweet texture. Donuts are commonly enjoyed as a breakfast treat or a snack, and they have become a beloved staple of many cuisines around the world. ",
            usermail:"mukul1singh23@gmail.com"
        },
        {
            title: "gobi ka pratha",
            image:"https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=600&quality=80",
            author: "rajat",
            body: "Donuts, also known as doughnuts, are a popular type of fried or baked pastry. They are typically round with a hole in the center, though there are various shapes and flavors available. The dough is made from ingredients like flour, sugar, yeast, and often eggs and milk, resulting in a soft and slightly sweet texture. Donuts are commonly enjoyed as a breakfast treat or a snack, and they have become a beloved staple of many cuisines around the world. ",
            usermail:"rajatGupta@gmail.com"
        },
        {
            title: "paneer ka pratha",
            image:"https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=600&quality=80",
            author: "ajay",
            body: "Donuts, also known as doughnuts, are a popular type of fried or baked pastry. They are typically round with a hole in the center, though there are various shapes and flavors available. The dough is made from ingredients like flour, sugar, yeast, and often eggs and milk, resulting in a soft and slightly sweet texture. Donuts are commonly enjoyed as a breakfast treat or a snack, and they have become a beloved staple of many cuisines around the world.",
            usermail:"Ajaytyagi@gmail.com"
        }
    ]

const recipe=[
    {
        title: "gobi ka pratha",
        image:"https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=600&quality=80",
        author: "mukul",
        body: "Donuts, also known as doughnuts, are a popular type of fried or baked pastry. They are typically round with a hole in the center, though there are various shapes and flavors available. The dough is made from ingredients like flour, sugar, yeast, and often eggs and milk, resulting in a soft and slightly sweet texture. Donuts are commonly enjoyed as a breakfast treat or a snack, and they have become a beloved staple of many cuisines around the world. ",
        CookingTime: "10 min ",
        calories:"50",
        Procedure:" In a large mixing bowl, whisk together the all-purpose flour, granulated sugar, baking powder, and salt. In a large mixing bowl, whisk together the all-purpose flour, granulated sugar, baking powder, and salt.In a large mixing bowl, whisk together the all-purpose flour, granulated sugar, baking powder, and salt.Cover the bowl with plastic wrap and refrigerate the dough for at least 30 minutes.On a floured surface, roll out the chilled dough to about 1/2-inch thickness.Using a donut cutter or a glass, cut out donut shapes and use a smaller cutter or a bottle cap to cut out the donut holes in the center.Heat vegetable oil in a deep pot or a deep fryer to 350°F (175°C).Carefully lower the donuts into the hot oil, frying a few at a time, but not overcrowding the pot.Fry the donuts for 1-2 minutes per side or until they are golden brown and cooked through.Use a slotted spoon to remove the donuts from the oil and place them on a paper towel-lined plate to drain excess oil.While the donuts are still warm, dust them with powdered sugar.Enjoy these delicious homemade donuts with your favorite coffee or tea!",
        Ingredients:"2 1/4 cups all-purpose flour. 1/2 cup granulated sugar. 2 teaspoons baking powder. 1/2 teaspoon salt. 1/2 cup milk. 1/4 cup unsalted butter melted. 1 large egg. 1 teaspoon vanilla extract.Vegetable oil, for frying. Powdered sugar, for dusting",

        usermail:"mukul1singh23@gmail.com"
    },
    {
        title: "paneer ka pratha",
        image:"https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=600&quality=80",
        author: "ajay",
        body: "Donuts, also known as doughnuts, are a popular type of fried or baked pastry. They are typically round with a hole in the center, though there are various shapes and flavors available. The dough is made from ingredients like flour, sugar, yeast, and often eggs and milk, resulting in a soft and slightly sweet texture. Donuts are commonly enjoyed as a breakfast treat or a snack, and they have become a beloved staple of many cuisines around the world. ",
        CookingTime: "10 min ",
        calories:"50",
        Procedure:" In a large mixing bowl, whisk together the all-purpose flour, granulated sugar, baking powder, and salt. In a large mixing bowl, whisk together the all-purpose flour, granulated sugar, baking powder, and salt.In a large mixing bowl, whisk together the all-purpose flour, granulated sugar, baking powder, and salt.Cover the bowl with plastic wrap and refrigerate the dough for at least 30 minutes.On a floured surface, roll out the chilled dough to about 1/2-inch thickness.Using a donut cutter or a glass, cut out donut shapes and use a smaller cutter or a bottle cap to cut out the donut holes in the center.Heat vegetable oil in a deep pot or a deep fryer to 350°F (175°C).Carefully lower the donuts into the hot oil, frying a few at a time, but not overcrowding the pot.Fry the donuts for 1-2 minutes per side or until they are golden brown and cooked through.Use a slotted spoon to remove the donuts from the oil and place them on a paper towel-lined plate to drain excess oil.While the donuts are still warm, dust them with powdered sugar.Enjoy these delicious homemade donuts with your favorite coffee or tea!",
        Ingredients:"2 1/4 cups all-purpose flour. 1/2 cup granulated sugar. 2 teaspoons baking powder. 1/2 teaspoon salt. 1/2 cup milk. 1/4 cup unsalted butter melted. 1 large egg. 1 teaspoon vanilla extract.Vegetable oil, for frying. Powdered sugar, for dusting",
        usermail:"rajat@gmail.com"
    },
    {
        title: "gobi alu",
        image:"https://i0.wp.com/picjumbo.com/wp-content/uploads/traditional-korean-dish-bibimbap-with-chopsticks-free-photo.jpg?w=600&quality=80",
        author: "ajay",
        body: "Donuts, also known as doughnuts, are a popular type of fried or baked pastry. They are typically round with a hole in the center, though there are various shapes and flavors available. The dough is made from ingredients like flour, sugar, yeast, and often eggs and milk, resulting in a soft and slightly sweet texture. Donuts are commonly enjoyed as a breakfast treat or a snack, and they have become a beloved staple of many cuisines around the world. ",
        CookingTime: "10 min ",
        calories:"50",
        Procedure:" In a large mixing bowl, whisk together the all-purpose flour, granulated sugar, baking powder, and salt. In a large mixing bowl, whisk together the all-purpose flour, granulated sugar, baking powder, and salt.In a large mixing bowl, whisk together the all-purpose flour, granulated sugar, baking powder, and salt.Cover the bowl with plastic wrap and refrigerate the dough for at least 30 minutes.On a floured surface, roll out the chilled dough to about 1/2-inch thickness.Using a donut cutter or a glass, cut out donut shapes and use a smaller cutter or a bottle cap to cut out the donut holes in the center.Heat vegetable oil in a deep pot or a deep fryer to 350°F (175°C).Carefully lower the donuts into the hot oil, frying a few at a time, but not overcrowding the pot.Fry the donuts for 1-2 minutes per side or until they are golden brown and cooked through.Use a slotted spoon to remove the donuts from the oil and place them on a paper towel-lined plate to drain excess oil.While the donuts are still warm, dust them with powdered sugar.Enjoy these delicious homemade donuts with your favorite coffee or tea!",
        Ingredients:"2 1/4 cups all-purpose flour. 1/2 cup granulated sugar. 2 teaspoons baking powder. 1/2 teaspoon salt. 1/2 cup milk. 1/4 cup unsalted butter melted. 1 large egg. 1 teaspoon vanilla extract.Vegetable oil, for frying. Powdered sugar, for dusting",
        usermail:"adi@gmail.com"
    }
]


const Blog=require('./Models/blog');
const Recipe=require('./Models/recipe')
async function seedDB(){
    await Blog.insertMany(blog);
    await Recipe.insertMany(recipe);
    console.log("db seeded");
}


module.exports=seedDB();