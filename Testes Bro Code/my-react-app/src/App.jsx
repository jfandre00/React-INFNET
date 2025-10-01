import './styles.css';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
import TP1 from './TP1/TP1.jsx';
import TP2 from './TP2/TP2.jsx';
import Ex01 from './ATEx01.jsx';
import Ex02 from './ATEX02.jsx';
import TemplateStrings from './InfnetExtras/TemplateStrings.jsx';
import Loops from './InfnetExtras/Loops.jsx';
import WelcomeTitle from './InfnetExtras/WelcomeTitle.jsx';
import MyButton from './InfnetExtras/MyButton.jsx';
import Profile from './InfnetExtras/profile/Profile.jsx';
import Welcome_Infnet from './InfnetExtras/Welcome_Infnet.jsx';
import UserProfile from './InfnetExtras/UserProfile.jsx';
import ProductList from './InfnetExtras/ProductList.jsx';
import Dashboard from './InfnetExtras/Dashboard.jsx';
import BlogPost from './InfnetExtras/BlogPost.jsx';
import ButtonState from './InfnetExtras/ButtonState.jsx';
import { useState } from 'react';
import Cart from './InfnetExtras/Cart.jsx';
import Restful from './InfnetExtras/Restful.jsx';
import Welcome_Novo from './InfnetExtras/Welcome_Novo.jsx';
import Menu from './InfnetExtras/Menu.jsx';
import ProductList_Novo from './InfnetExtras/ProductList_Novo.jsx';
import TaskList from './InfnetExtras/TaskList.jsx';
import FormularioReactHookForm from './FormularioReactHookForm.jsx';


export default function App() {

  const products = [
    { id:1, name: "Câmera Digital", price: 1200.00, description: "Câmera digital de alta resolução com lente intercambiável." },
    { id:2, name: "Smartphone", price: 800.00, description: "Smartphone com câmera de 108MP e 128GB de armazenamento." },
    { id:3, name: "Notebook", price: 2500.00, description: "Notebook com processador i7 e 16GB de RAM." }
  ];

  const post = {
    title: "Meu Primeiro Post no Blog",
    content: "Este é o conteúdo do meu primeiro post no blog. Estou muito animado para compartilhar minhas ideias com vocês!"
  }

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const initialCartItems = [
    { id: 1, title: "Câmera Digital", price: 1200.00 },
    { id: 2, title: "Smartphone", price: 800.00 },
    { id: 3, title: "Notebook", price: 2500.00 },
    { id: 4, title: "Headphones", price: 150.00 }
  ];

  const recipesData = [
    {
      name: "Baked Salmon",
      ingredients: [
        { name: "Salmon", amount: 1, measurement: "fillet" },
        { name: "Lemon", amount: 1, measurement: "slices" },
        { name: "Dill", amount: 1, measurement: "tablespoon" },
        { name: "Olive Oil", amount: 2, measurement: "tablespoons" }
      ],
      steps: [
        "Preheat oven to 200°C (400°F).",
        "Place salmon on a baking sheet.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Top with lemon slices and dill.",
        "Bake for 15-20 minutes or until salmon is cooked through."
      ]
    },
    {
      name: "Fish Tacos",
      ingredients: [
        { name: "White Fish", amount: 1, measurement: "pound" },
        { name: "Corn Tortillas", amount: 8, measurement: "units" },
        { name: "Cabbage", amount: 2, measurement: "cups" },
        { name: "Lime", amount: 1, measurement: "unit" },
        { name: "Cilantro", amount: 0.5, measurement: "cups" }
      ],
      steps: [
        "In a bowl, combine the white fish, lime juice, and cilantro.",
        "Warm the corn tortillas in a skillet.",
        "Assemble the tacos by placing the fish mixture on the tortillas and topping with cabbage."
      ]
    }
  ]


  const productsData = [
    {
      id: 1,
      name: "Câmera Digital",
      description: "Câmera digital de alta resolução com lente intercambiável.",
      price: 1200.00
    },
    {
      id: 2,
      name: "Smartphone",
      description: "Smartphone com câmera de 108MP e 128GB de armazenamento.",
      price: 800.00
    },
    {
      id: 3,
      name: "Notebook",
      description: "Notebook com processador i7 e 16GB de RAM.",
      price: 2500.00
    }
  ]


  
    return(
      <>
        {/* <Header/>
        <Food/>
        <Card/>
        <Button/>
        <Student name="Patrick" age={42} isStudent={false}/>
        <Student name="John Doe" age={30} isStudent={true}/>
        <Student name="Jane Doe" age={25} isStudent={false}/>
        <Student name="Alice" age={22} isStudent={true}/>
        <Student name="Larry"/>
        <Student age={35}/>
        <Student isStudent={true}/>
        <UserGreeting isLoggedIn={true} username="AndreFerreira"/>
        <UserGreeting isLoggedIn={false}/>
        <UserGreeting isLoggedIn={true}/>
        <Footer/> */}
        
        {/* <Ex01></Ex01>
        <Ex02></Ex02> */}

        {/* <TP1></TP1> */}
        {/* <TP2></TP2> */}
        {/* <List></List> */}
        {/* <TemplateStrings></TemplateStrings>
        <Loops></Loops> */}
        {/* <WelcomeTitle />
        <MyButton /> */}
        {/* <Profile />
        <Welcome_Infnet /> */}
        {/* <div>
          <h1>Lista de Usuários</h1>
          <UserProfile
            nome="João Silva"
            email="joao.silva@example.com"
            idade="25"
            hobby1="Futebol"
            hobby2="Leitura"
            hobby3="Caminhada"
          />
          <UserProfile
            nome="Maria Oliveira"
            email="maria.oliveira@example.com"
            idade="28"
            hobby1="Dança"
            hobby2="Cozinhar"
            hobby3="Viajar"
          />
          <UserProfile
            nome="Carlos Souza"
            email="carlos.souza@example.com"
            idade="35"
            hobby1="Fotografia"
            hobby2="Viajar"
            hobby3="Cozinhar"
          />
        </div> */}
        {/* <ProductList products={products} /> */}

        {/* <Dashboard /> */}

        {/* <BlogPost post={post} /> */}

        {/* <ButtonState count={count} onClick={handleClick} /> */}

        {/* <Cart inCart={initialCartItems} /> */}

        {/* <Restful /> */}

        {/* <Welcome_Novo loggedin={true} /> */}

        {/* <Welcome_Novo loggedin={false} loading={true} error={false} /> */}

        {/* <Menu title="Delicious Recipes" recipes={recipesData} /> */}


        {/* <ProductList_Novo products={productsData} /> */}

        {/* <TaskList /> */}

        <FormularioReactHookForm />
      </>
    );
}
