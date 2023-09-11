
import './App.css'
import Card from './Components/Card'
import FetchData from './Components/FetchData';
import UseState from './Components/Use-state/UseState';
import UseEffect from './Components/UseEffect/UseEffect';
import UseStatePremium from './Components/UseStatePremium/UseStatePremium';

function App() {
  const items = [
    { id: 1, name: 'Item 1', description: 'Description of item 1' },
    { id: 2, name: 'Item 2', description: 'Description of item 2' },
    { id: 3, name: 'Item 3', description: 'Description of item 3' },
  ];
  return (
    <>
      <h1 className='text-center text-4xl font-bold my-10'>React World</h1>
   <div className='container mx-auto'>
   <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:grid-cols-2' >
    {
      items.map((item) => <Card item={item} key={item.id}></Card>)
    }
     </div>
   </div>
   <UseState></UseState>

<UseStatePremium></UseStatePremium>
<UseEffect></UseEffect>
<FetchData></FetchData>
<PropsDrilling
    </>

  )
}




export default App
