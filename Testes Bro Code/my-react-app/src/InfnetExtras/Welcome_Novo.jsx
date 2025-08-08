import Header_Novo from './Header_Novo.jsx';
import Login from './Login.jsx';

// function Welcome({loggedin}) {
//     return (
//     <div>
//         {/* 1ª forma: operador ternário */}
//         {/* {loggedin ? <Header_Novo /> : <Login />} */}

//         {/* 2ª forma: operador lógico AND */}
//         {loggedin && <Header_Novo />}
//         {!loggedin && <Login />}

        

//     </div>
//     );
// }


// 3ª forma - vai sair na primeira condição que satisfazer pois todos os ifs tem return

function Welcome({loggedin, loading, error}) {
    if(loading) {
        return <p>Carregando...</p>;
    }
    if(error) {
        return <p>Ocorreu um erro.</p>;
    }
    return (
        <div>{loggedin ? <Header_Novo /> : <Login />}</div>
    );
}



export default Welcome;
