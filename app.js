const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Allow all CORS requests
app.use(cors());

// Serve static files from the 'images' directory
app.use('/images', express.static(path.join(__dirname, 'images')));
// Define your API endpoints
app.get('/api/setb', (req, res) => {
  res.json({ data: [
    {
      "name": "Vegetable Stir Fry",
      "category": "Vegetarian",
      "description": "A colorful and nutritious stir fry made with a variety of fresh vegetables sautéed in a flavorful sauce.",
      "price": 9.99,
      "image": "images/setb1.jpg"
    },
    {
      "name": "Caprese Salad",
      "category": "Salad",
      "description": "A simple yet delicious salad made with fresh tomatoes, mozzarella cheese, basil leaves, and balsamic glaze.",
      "price": 7.49,
      "image": "images/setb2.jpg"
    },
    {
      "name": "Vegetable Curry",
      "category": "Vegetarian",
      "description": "A fragrant and spicy curry dish made with an assortment of vegetables cooked in a rich coconut milk sauce.",
      "price": 11.99,
      "image": "images/setb3.jpg"
    },
    {
      "name": "Mushroom Risotto",
      "category": "Vegetarian",
      "description": "Creamy and comforting risotto made with arborio rice, mushrooms, onions, and Parmesan cheese.",
      "price": 13.99,
      "image": "images/setb1.jpg"
    },
    {
      "name": "Vegetable Lasagna",
      "category": "Vegetarian",
      "description": "Layers of lasagna noodles, marinara sauce, assorted vegetables, and melted cheese, baked to perfection.",
      "price": 12.49,
      "image": "images/setb2.jpg"
    },
    {
      "name": "Greek Salad",
      "category": "Salad",
      "description": "A refreshing salad made with crisp lettuce, tomatoes, cucumbers, olives, onions, and feta cheese, drizzled with olive oil and herbs.",
      "price": 8.99,
      "image": "images/setb3.jpg"
    },
    {
      "name": "Quinoa Stuffed Bell Peppers",
      "category": "Vegetarian",
      "description": "Bell peppers stuffed with a savory mixture of quinoa, black beans, corn, tomatoes, and spices, topped with melted cheese.",
      "price": 10.99,
      "image": "images/setb1.jpg"
    },
    {
      "name": "Vegetable Paella",
      "category": "Vegetarian",
      "description": "A Spanish-inspired rice dish loaded with vegetables, saffron, and flavorful spices.",
      "price": 14.99,
      "image": "images/setb2.jpg"
    },
    {
      "name": "Eggplant Parmesan",
      "category": "Vegetarian",
      "description": "Slices of eggplant coated in breadcrumbs, fried until crispy, layered with marinara sauce and melted mozzarella cheese.",
      "price": 11.49,
      "image": "images/setb3.jpg"
    },
    {
      "name": "Vegetable Pad Thai",
      "category": "Vegetarian",
      "description": "A Thai-inspired noodle dish made with stir-fried rice noodles, tofu, bean sprouts, peanuts, and a tangy sauce.",
      "price": 12.99,
      "image": "images/setb1.jpg"
    },
    {
      "name": "Spinach and Feta Stuffed Mushrooms",
      "category": "Vegetarian",
      "description": "Mushroom caps filled with a savory mixture of spinach, feta cheese, breadcrumbs, and herbs, baked until golden.",
      "price": 9.49,
      "image": "images/setb2.jpg"
    },
    {
      "name": "Vegetarian Chili",
      "category": "Vegetarian",
      "description": "Hearty chili made with beans, tomatoes, bell peppers, onions, and a blend of spices, simmered to perfection.",
      "price": 10.49,
      "image": "images/setb3.jpg"
    },
    {
      "name": "Avocado Toast",
      "category": "Breakfast",
      "description": "Sliced avocado served on toasted bread, drizzled with olive oil, and sprinkled with salt and pepper.",
      "price": 6.99,
      "image": "images/setb1.jpg"
    },
    {
      "name": "Vegetable Fajitas",
      "category": "Vegetarian",
      "description": "Sizzling fajitas made with grilled vegetables, served with warm tortillas, salsa, guacamole, and sour cream.",
      "price": 13.49,
      "image": "images/setb2.jpg"
    },
    {
      "name": "Vegetarian Sushi Rolls",
      "category": "Vegetarian",
      "description": "Sushi rolls filled with a variety of fresh vegetables like cucumber, avocado, and carrot, wrapped in seaweed and sushi rice.",
      "price": 15.99,
      "image": "images/setb3.jpg"
    },
    {
      "name": "Vegetable Quesadillas",
      "category": "Vegetarian",
      "description": "Cheesy quesadillas filled with a mixture of sautéed vegetables, served with salsa and sour cream.",
      "price": 11.99,
      "image": "images/setb1.jpg"
    },
    {
      "name": "Vegetarian Buddha Bowl",
      "category": "Vegetarian",
      "description": "A nourishing bowl filled with quinoa, roasted vegetables, avocado, chickpeas, and a drizzle of tahini sauce.",
      "price": 12.99,
      "image": "images/setb2.jpg"
    },
    {
      "name": "Cauliflower Buffalo Wings",
      "category": "Vegetarian",
      "description": "Crispy baked cauliflower florets tossed in spicy buffalo sauce, served with ranch or blue cheese dressing.",
      "price": 9.99,
      "image": "images/setb3.jpg"
    },
    {
      "name": "Vegetable Sushi Bowl",
      "category": "Vegetarian",
      "description": "All the flavors of sushi in a convenient bowl format, featuring sushi rice, vegetables, and optional tofu or avocado.",
      "price": 11.99,
      "image": "images/setb2.jpg"
    },
    {
      "name": "Vegetable Frittata",
      "category": "Vegetarian",
      "description": "A hearty egg dish loaded with sautéed vegetables, cheese, and herbs, baked until golden and fluffy.",
      "price": 10.49,
      "image": "images/setb3.jpg"
    }
  ]
   });
});

app.get('/api/setc', (req, res) => {
  res.json({ data: [
    {
      "name": "Jeff Bezos",
      "gender": "Male",
      "CTC": "10 LPA",
      "mobile": "+1234567890",
      "company": "Amazon",
      "logo": "images/amazon.jpg"
    },
    {
      "name": "Elon Musk",
      "gender": "Male",
      "CTC": "15 LPA",
      "mobile": "+1987654321",
      "company": "Tesla",
      "logo": "images/tesla.jpg"
    },
    {
      "name": "Bill Gates",
      "gender": "Male",
      "CTC": "12 LPA",
      "mobile": "+1122334455",
      "company": "Microsoft",
      "logo": "images/microsoft.jpg"
    },
    {
      "name": "Warren Buffett",
      "gender": "Male",
      "CTC": "20 LPA",
      "mobile": "+1567890123",
      "company": "Berkshire Hathaway",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Mark Zuckerberg",
      "gender": "Male",
      "CTC": "8 LPA",
      "mobile": "+1444445555",
      "company": "Facebook",
      "logo": "images/facebook.jpg"
    },
    {
      "name": "Larry Ellison",
      "gender": "Male",
      "CTC": "18 LPA",
      "mobile": "+1789456123",
      "company": "Oracle",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Mukesh Ambani",
      "gender": "Male",
      "CTC": "25 LPA",
      "mobile": "+1678901234",
      "company": "Reliance",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Larry Page",
      "gender": "Male",
      "CTC": "14 LPA",
      "mobile": "+1345678901",
      "company": "Google",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Steve Ballmer",
      "gender": "Male",
      "CTC": "16 LPA",
      "mobile": "+1876543210",
      "company": "Microsoft",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Sergey Brin",
      "gender": "Male",
      "CTC": "13 LPA",
      "mobile": "+1567890123",
      "company": "Google",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Alice Walton",
      "gender": "Female",
      "CTC": "18 LPA",
      "mobile": "+1456789012",
      "company": "Walmart",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Michael Bloomberg",
      "gender": "Male",
      "CTC": "22 LPA",
      "mobile": "+1345678901",
      "company": "Bloomberg",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Jack Ma",
      "gender": "Male",
      "CTC": "11 LPA",
      "mobile": "+1234567890",
      "company": "Alibaba",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Françoise Bettencourt Meyers",
      "gender": "Female",
      "CTC": "20 LPA",
      "mobile": "+1122334455",
      "company": "L'Oréal",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Beate Heister & Karl Albrecht Jr.",
      "gender": "Female",
      "CTC": "19 LPA",
      "mobile": "+1987654321",
      "company": "Aldi",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Elaine Marshall",
      "gender": "Female",
      "CTC": "14 LPA",
      "mobile": "+1567890123",
      "company": "DuPont",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Jacqueline Mars",
      "gender": "Female",
      "CTC": "16 LPA",
      "mobile": "+1444445555",
      "company": "Mars",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Leonardo Del Vecchio",
      "gender": "Male",
      "CTC": "20 LPA",
      "mobile": "+1789456123",
      "company": "Luxottica",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Hui Ka Yan",
      "gender": "Male",
      "CTC": "17 LPA",
      "mobile": "+1678901234",
      "company": "Evergrande",
      "logo": "images/atmiyauniversity.jpg"
    },
    {
      "name": "Susanne Klatten",
      "gender": "Female",
      "CTC": "18 LPA",
      "mobile": "+1345678901",
      "company": "BMW",
      "logo": "images/atmiyauniversity.jpg"
    }
  ]
   });
});

app.get('/api/setd', (req, res) => {
  res.json({ data: [
    {
      "name": "Jeff Bezos",
      "domain": "E-commerce",
      "mobile": "+1234567890",
      "email": "jeff@example.com",
      "image": "images/JeffBezos.jpg"
    },
    {
      "name": "Elon Musk",
      "domain": "SpaceExploration",
      "mobile": "+1987654321",
      "email": "elon@example.com",
      "image": "images/ElonMusk.jpg"
    },
    {
      "name": "Bill Gates",
      "domain": "Technology",
      "mobile": "+1122334455",
      "email": "bill@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Warren Buffett",
      "domain": "Finance",
      "mobile": "+1567890123",
      "email": "warren@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Mark Zuckerberg",
      "domain": "SocialMedia",
      "mobile": "+1444445555",
      "email": "mark@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Larry Ellison",
      "domain": "Technology",
      "mobile": "+1789456123",
      "email": "larry@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Mukesh Ambani",
      "domain": "Telecommunications",
      "mobile": "+1678901234",
      "email": "mukesh@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Larry Page",
      "domain": "Technology",
      "mobile": "+1345678901",
      "email": "larryp@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Steve Ballmer",
      "domain": "Technology",
      "mobile": "+1876543210",
      "email": "steveb@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Sergey Brin",
      "domain": "Technology",
      "mobile": "+1567890123",
      "email": "sergeyb@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Alice Walton",
      "domain": "Supermarkets",
      "mobile": "+1456789012",
      "email": "alice@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Michael Bloomberg",
      "domain": "Media, Financial Services",
      "mobile": "+1345678901",
      "email": "michael@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Jack Ma",
      "domain": "E-commerce",
      "mobile": "+1234567890",
      "email": "jack@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Françoise Bettencourt Meyers",
      "domain": "Cosmetics",
      "mobile": "+1122334455",
      "email": "francoise@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Beate Heister & Karl Albrecht Jr.",
      "domain": "Supermarkets",
      "mobile": "+1987654321",
      "email": "beate@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Elaine Marshall",
      "domain": "Manufacturing, Chemicals",
      "mobile": "+1567890123",
      "email": "elaine@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Jacqueline Mars",
      "domain": "Candy",
      "mobile": "+1444445555",
      "email": "jacqueline@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Leonardo Del Vecchio",
      "domain": "Eyewear",
      "mobile": "+1789456123",
      "email": "leonardo@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Hui Ka Yan",
      "domain": "RealEstate",
      "mobile": "+1678901234",
      "email": "hui@example.com",
      "image": "images/avtar.jpg"
    },
    {
      "name": "Susanne Klatten",
      "domain": "Pharmaceuticals",
      "mobile": "+1345678901",
      "email": "susanne@example.com",
      "image": "images/avtar.jpg"
    }
  ]
   });
});

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
