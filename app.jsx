import Navbar from './components/Navbar'

function App() {

  const Color="Blue"

  return (
    <div>
       <Navbar />
      <p>Matthews Fave color is {Color}</p>
      <ul>
        <li>David</li>
        <li>Matthew</li>
        <li>Barnabas</li>
      </ul>
    </div>
  )
}

export default App
