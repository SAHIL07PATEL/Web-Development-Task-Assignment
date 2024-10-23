import './App.css'
import CheckList from './CheckList'
import CheckListContext from './CheckListContext'

function App() {

  return (
    <>
      <CheckListContext>
        <div>
          <h1>CheckBox Example</h1>
          <CheckList/>
        </div>
      </CheckListContext>
    </>
  )
}

export default App
