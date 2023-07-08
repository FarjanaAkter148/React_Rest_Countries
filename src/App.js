
import './App.css';
import Countries from './Components/Countries/Countries';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}
// function CountriesLoad() {
//   const [country , setCountries] = useState([])
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data));
//   }, [])
//   console.log(country);

  
  

//   return (
//     <div>
//       <h1>Load Countries: {Countries.length}</h1>
//       {/* {
//         contries.map(country =>console.log(country.name))
//       } */}
      

//     </div>
//   )
// }

// function NameCountry(props) {
//   return (
//     <div>
//       <h3>Name:{ props.name}</h3>
//     </div>
//   )
// }
export default App;
