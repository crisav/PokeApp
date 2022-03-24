import { Provider } from "react-redux"
import { store } from "./store/store"

Provider

function App() {
  return (
    <Provider store={store}>
      <h1>Hola Mundo!!!</h1>
    </Provider>
  )
}

export default App
