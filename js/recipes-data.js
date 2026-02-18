// Complete recipes database with detailed information
const recipesData = {
    biryani: {
        title: "Chicken Biryani",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1200&h=800&fit=crop",
        prepTime: "30 minutes",
        cookTime: "60 minutes",
        servings: "6 people",
        difficulty: "Medium",
        ingredients: [
            "500g basmati rice, soaked for 30 minutes",
            "750g chicken, cut into pieces",
            "2 large onions, thinly sliced",
            "1 cup yogurt",
            "4 tablespoons ghee or oil",
            "2 tablespoons ginger-garlic paste",
            "4 green chilies, slit",
            "1/2 cup chopped mint leaves",
            "1/2 cup chopped cilantro",
            "1 teaspoon turmeric powder",
            "2 teaspoons red chili powder",
            "1 tablespoon biryani masala",
            "1 teaspoon garam masala",
            "A pinch of saffron soaked in 1/4 cup warm milk",
            "Salt to taste",
            "4 cups water for rice",
            "Fried onions for garnish"
        ],
        instructions: [
            "Marinate chicken with yogurt, ginger-garlic paste, turmeric, red chili powder, and salt for at least 30 minutes.",
            "Heat ghee in a large heavy-bottomed pot. Fry sliced onions until golden brown, then remove half for garnish.",
            "Add marinated chicken to the pot with remaining onions. Cook on high heat for 5 minutes, stirring occasionally.",
            "Add mint, cilantro, green chilies, and biryani masala. Cook for another 10 minutes until chicken is 70% cooked.",
            "In a separate large pot, bring 4 cups of water to boil with salt. Add soaked rice and cook until 70% done (rice should still be firm).",
            "Drain the rice and layer it over the chicken. Sprinkle garam masala, saffron milk, and fried onions on top.",
            "Cover the pot with aluminum foil, then place a tight-fitting lid. Cook on high heat for 3 minutes.",
            "Reduce heat to low and cook for 25-30 minutes (dum cooking). Do not open the lid during this time.",
            "Turn off heat and let it rest for 5 minutes before opening.",
            "Gently mix the biryani with a fork, taking care not to break the rice grains. Serve hot with raita and salad."
        ],
        timeBreakdown: [
            ["Preparation", "30 minutes"],
            ["Marination", "30 minutes"],
            ["Cooking chicken", "20 minutes"],
            ["Cooking rice", "10 minutes"],
            ["Dum cooking", "30 minutes"],
            ["Total Time", "90 minutes"]
        ],
        nutrition: [
            ["Calories", "520 kcal"],
            ["Protein", "32g"],
            ["Carbohydrates", "58g"],
            ["Fat", "18g"],
            ["Fiber", "3g"],
            ["Sodium", "680mg"]
        ],
        tips: [
            "Use aged basmati rice for best results - it gives longer, fluffier grains.",
            "Don't skip the dum (steaming) step - this is what makes biryani aromatic and perfectly cooked.",
            "Make sure your pot has a tight-fitting lid to trap the steam properly.",
            "You can place the pot on a flat griddle (tawa) to prevent burning at the bottom.",
            "Leftover biryani tastes even better the next day!"
        ]
    },
    pizza: {
        title: "Margherita Pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&h=800&fit=crop",
        prepTime: "20 minutes",
        cookTime: "25 minutes",
        servings: "4 people",
        difficulty: "Easy",
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 packet (7g) active dry yeast",
            "1 teaspoon sugar",
            "3/4 cup warm water",
            "2 tablespoons olive oil",
            "1 teaspoon salt",
            "1 cup tomato sauce",
            "2 cloves garlic, minced",
            "1 teaspoon dried oregano",
            "250g fresh mozzarella cheese, sliced",
            "Fresh basil leaves",
            "Extra virgin olive oil for drizzling",
            "Salt and pepper to taste"
        ],
        instructions: [
            "In a bowl, mix warm water, yeast, and sugar. Let it sit for 5-10 minutes until foamy.",
            "Add flour, salt, and olive oil to the yeast mixture. Mix until a dough forms.",
            "Knead the dough on a floured surface for 8-10 minutes until smooth and elastic.",
            "Place dough in an oiled bowl, cover with a damp cloth, and let rise for 1 hour until doubled in size.",
            "Meanwhile, prepare the sauce by mixing tomato sauce with minced garlic, oregano, salt, and pepper.",
            "Preheat your oven to 475°F (245°C). If you have a pizza stone, place it in the oven to heat.",
            "Punch down the risen dough and divide it into two equal portions for two pizzas.",
            "Roll out each portion into a 12-inch circle on a floured surface.",
            "Spread tomato sauce evenly over the dough, leaving a 1-inch border for the crust.",
            "Arrange mozzarella slices on top of the sauce.",
            "Bake for 12-15 minutes until the crust is golden and cheese is bubbly and slightly browned.",
            "Remove from oven, top with fresh basil leaves, and drizzle with extra virgin olive oil. Slice and serve hot!"
        ],
        timeBreakdown: [
            ["Dough preparation", "15 minutes"],
            ["Rising time", "60 minutes"],
            ["Sauce preparation", "5 minutes"],
            ["Assembly", "10 minutes"],
            ["Baking", "15 minutes"],
            ["Total Time", "105 minutes"]
        ],
        nutrition: [
            ["Calories", "285 kcal"],
            ["Protein", "12g"],
            ["Carbohydrates", "36g"],
            ["Fat", "10g"],
            ["Fiber", "2g"],
            ["Sodium", "520mg"]
        ],
        tips: [
            "For a crispier crust, bake the pizza on the lowest oven rack.",
            "Don't overload the pizza with toppings - less is more for authentic Italian pizza.",
            "Use fresh mozzarella for the best flavor and texture.",
            "A pizza stone or steel will give you a crispier, more professional crust.",
            "Add basil after baking to keep it fresh and aromatic."
        ]
    },
    burger: {
        title: "Classic Beef Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1200&h=800&fit=crop",
        prepTime: "15 minutes",
        cookTime: "15 minutes",
        servings: "4 burgers",
        difficulty: "Easy",
        ingredients: [
            "600g ground beef (80/20 lean to fat ratio)",
            "4 burger buns, toasted",
            "4 slices cheddar cheese",
            "4 lettuce leaves",
            "1 large tomato, sliced",
            "1 red onion, sliced",
            "Pickle slices",
            "1 teaspoon salt",
            "1/2 teaspoon black pepper",
            "1/2 teaspoon garlic powder",
            "1/2 teaspoon onion powder",
            "2 tablespoons butter for toasting buns",
            "Special sauce: 1/4 cup mayonnaise, 2 tablespoons ketchup, 1 tablespoon relish, 1/2 teaspoon paprika"
        ],
        instructions: [
            "In a bowl, mix mayonnaise, ketchup, relish, and paprika to make the special sauce. Refrigerate until ready to use.",
            "Divide ground beef into 4 equal portions (about 150g each). Form into patties slightly larger than your buns as they'll shrink when cooking.",
            "Make a small indent in the center of each patty with your thumb to prevent puffing up during cooking.",
            "Season both sides of patties generously with salt, pepper, garlic powder, and onion powder.",
            "Heat a large skillet or grill pan over medium-high heat. Add a little oil if needed.",
            "Cook patties for 4-5 minutes on the first side without moving them. This creates a nice crust.",
            "Flip the burgers and cook for another 4-5 minutes for medium doneness.",
            "In the last minute of cooking, place a cheese slice on each patty and cover with a lid to melt the cheese.",
            "While burgers finish cooking, butter the buns and toast them in a separate pan until golden brown.",
            "Assemble burgers: Spread special sauce on the bottom bun, add lettuce, tomato, the burger patty with melted cheese, onions, pickles, and top with more sauce.",
            "Place the top bun and serve immediately with fries or chips!"
        ],
        timeBreakdown: [
            ["Sauce preparation", "3 minutes"],
            ["Forming patties", "5 minutes"],
            ["Cooking patties", "10 minutes"],
            ["Toasting buns", "3 minutes"],
            ["Assembly", "5 minutes"],
            ["Total Time", "26 minutes"]
        ],
        nutrition: [
            ["Calories", "650 kcal"],
            ["Protein", "38g"],
            ["Carbohydrates", "42g"],
            ["Fat", "35g"],
            ["Fiber", "3g"],
            ["Sodium", "890mg"]
        ],
        tips: [
            "Don't overmix or overwork the meat when forming patties - this makes them tough.",
            "Only flip the burger once for the best crust and juiciness.",
            "Let the burgers rest for 2-3 minutes after cooking to redistribute juices.",
            "Use an 80/20 beef blend for the juiciest, most flavorful burgers.",
            "Toast your buns - it prevents them from getting soggy and adds great texture!"
        ]
    },
    pasta: {
        title: "Creamy Pasta Alfredo",
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1200&h=800&fit=crop",
        prepTime: "10 minutes",
        cookTime: "15 minutes",
        servings: "4 people",
        difficulty: "Easy",
        ingredients: [
            "400g fettuccine pasta",
            "1 cup heavy cream",
            "1/2 cup butter (1 stick)",
            "1 1/2 cups freshly grated Parmesan cheese",
            "3 cloves garlic, minced",
            "1/4 teaspoon nutmeg (optional)",
            "Salt and black pepper to taste",
            "Fresh parsley, chopped for garnish",
            "Extra Parmesan for serving"
        ],
        instructions: [
            "Bring a large pot of salted water to boil. Add fettuccine and cook according to package directions until al dente (usually 8-10 minutes).",
            "While pasta cooks, melt butter in a large skillet over medium heat.",
            "Add minced garlic to the butter and sauté for 1-2 minutes until fragrant. Don't let it brown.",
            "Pour in the heavy cream and bring to a gentle simmer. Cook for 2-3 minutes, stirring occasionally.",
            "Reduce heat to low and gradually add grated Parmesan cheese, stirring constantly until melted and smooth.",
            "Add nutmeg if using, and season with salt and black pepper to taste.",
            "Reserve 1 cup of pasta cooking water before draining the pasta.",
            "Add the drained pasta to the sauce and toss to coat evenly. If the sauce is too thick, add reserved pasta water a little at a time until you reach desired consistency.",
            "Cook for 1-2 minutes, tossing constantly, until the pasta is well coated and the sauce clings to it.",
            "Serve immediately garnished with fresh parsley and extra Parmesan cheese."
        ],
        timeBreakdown: [
            ["Boiling water", "5 minutes"],
            ["Cooking pasta", "10 minutes"],
            ["Making sauce", "8 minutes"],
            ["Combining", "3 minutes"],
            ["Total Time", "25 minutes"]
        ],
        nutrition: [
            ["Calories", "720 kcal"],
            ["Protein", "22g"],
            ["Carbohydrates", "68g"],
            ["Fat", "42g"],
            ["Fiber", "3g"],
            ["Sodium", "650mg"]
        ],
        tips: [
            "Use freshly grated Parmesan cheese - pre-grated doesn't melt as smoothly.",
            "Don't let the sauce boil after adding cheese or it may become grainy.",
            "Reserve pasta water - the starch helps bind the sauce to the pasta.",
            "Serve immediately as Alfredo sauce thickens as it cools.",
            "Add grilled chicken or shrimp for a protein-packed meal!"
        ]
    },
    noodles: {
        title: "Chilli Garlic Noodles",
        image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=1200&h=800&fit=crop",
        prepTime: "10 minutes",
        cookTime: "10 minutes",
        servings: "4 people",
        difficulty: "Easy",
        ingredients: [
            "400g noodles (egg noodles or your choice)",
            "2 tablespoons vegetable oil",
            "6-8 cloves garlic, finely chopped",
            "3-4 red chilies, sliced (adjust to taste)",
            "1 bell pepper, julienned",
            "1 carrot, julienned",
            "1 cup cabbage, shredded",
            "3 green onions, chopped",
            "3 tablespoons soy sauce",
            "2 tablespoons chili sauce or sriracha",
            "1 tablespoon vinegar",
            "1 tablespoon brown sugar",
            "1 teaspoon sesame oil",
            "Salt and pepper to taste",
            "Sesame seeds for garnish"
        ],
        instructions: [
            "Cook noodles according to package instructions until al dente. Drain and rinse with cold water. Toss with a little oil to prevent sticking.",
            "In a small bowl, mix soy sauce, chili sauce, vinegar, brown sugar, and sesame oil to make the sauce.",
            "Heat oil in a large wok or skillet over high heat until smoking hot.",
            "Add chopped garlic and sliced red chilies. Stir-fry for 30 seconds until fragrant and garlic is slightly golden.",
            "Add bell pepper and carrot. Stir-fry for 2 minutes keeping vegetables crisp.",
            "Add cabbage and stir-fry for another minute.",
            "Add the cooked noodles to the wok and toss everything together.",
            "Pour the prepared sauce over the noodles and toss vigorously for 2-3 minutes until everything is well coated and heated through.",
            "Add green onions and toss for another 30 seconds.",
            "Taste and adjust seasoning with salt and pepper if needed.",
            "Serve hot garnished with sesame seeds and extra green onions."
        ],
        timeBreakdown: [
            ["Prep vegetables", "8 minutes"],
            ["Cooking noodles", "6 minutes"],
            ["Stir-frying", "8 minutes"],
            ["Total Time", "22 minutes"]
        ],
        nutrition: [
            ["Calories", "380 kcal"],
            ["Protein", "12g"],
            ["Carbohydrates", "62g"],
            ["Fat", "10g"],
            ["Fiber", "4g"],
            ["Sodium", "1120mg"]
        ],
        tips: [
            "Have all ingredients prepped before you start cooking - stir-frying is very fast!",
            "Use high heat for authentic wok flavor and texture.",
            "Don't overcook the vegetables - they should remain crispy.",
            "You can add protein like chicken, shrimp, or tofu for a complete meal.",
            "Adjust the amount of chilies based on your spice tolerance."
        ]
    },
    tacos: {
        title: "Mexican Street Tacos",
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200&h=800&fit=crop",
        prepTime: "20 minutes",
        cookTime: "15 minutes",
        servings: "4 people (12 tacos)",
        difficulty: "Easy",
        ingredients: [
            "600g beef or chicken, thinly sliced",
            "12 small corn tortillas",
            "1 white onion, finely diced",
            "1 cup fresh cilantro, chopped",
            "2 limes, cut into wedges",
            "2 teaspoons cumin powder",
            "2 teaspoons chili powder",
            "1 teaspoon paprika",
            "1/2 teaspoon garlic powder",
            "1/2 teaspoon onion powder",
            "Salt and pepper to taste",
            "2 tablespoons vegetable oil",
            "Optional toppings: salsa, sour cream, avocado, hot sauce"
        ],
        instructions: [
            "In a bowl, mix cumin, chili powder, paprika, garlic powder, onion powder, salt, and pepper.",
            "Season the sliced meat with the spice mixture, making sure it's evenly coated.",
            "Heat oil in a large skillet over medium-high heat.",
            "Add the seasoned meat and cook for 5-7 minutes, stirring occasionally, until browned and cooked through.",
            "While meat cooks, prepare your toppings: dice onions, chop cilantro, and cut lime wedges.",
            "Warm the tortillas: You can do this on a dry skillet for 30 seconds per side, in the oven wrapped in foil, or directly over a gas flame for authentic char.",
            "Once meat is cooked, remove from heat and let rest for 2-3 minutes, then chop into smaller pieces if needed.",
            "To assemble: Take two warm tortillas (double layer for authenticity), add a generous portion of meat.",
            "Top with diced onions and fresh cilantro.",
            "Squeeze fresh lime juice over each taco.",
            "Add your favorite toppings like salsa, sour cream, or avocado.",
            "Serve immediately while warm and enjoy!"
        ],
        timeBreakdown: [
            ["Prep ingredients", "15 minutes"],
            ["Seasoning meat", "3 minutes"],
            ["Cooking meat", "8 minutes"],
            ["Warming tortillas", "5 minutes"],
            ["Assembly", "5 minutes"],
            ["Total Time", "36 minutes"]
        ],
        nutrition: [
            ["Calories", "320 kcal"],
            ["Protein", "28g"],
            ["Carbohydrates", "34g"],
            ["Fat", "10g"],
            ["Fiber", "5g"],
            ["Sodium", "380mg"]
        ],
        tips: [
            "Use corn tortillas for authentic street tacos - they're traditional and gluten-free!",
            "Double up on tortillas to prevent them from breaking and absorbing more flavor.",
            "Don't overload your tacos - simplicity is key to authentic street tacos.",
            "Fresh lime juice is essential - it brightens all the flavors.",
            "Make your own salsa for even more authentic flavor!"
        ]
    }
};
