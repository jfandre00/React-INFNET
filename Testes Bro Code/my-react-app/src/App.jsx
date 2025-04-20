import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button/Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';

function App() {
  
    return(
      <>
        <Header/>
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
        <Footer/>
      </>
    );
}

export default App
