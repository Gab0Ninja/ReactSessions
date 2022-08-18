import './App.scss';

function Digitou(event) {
  alert("Você digitou " + event.target.value)
}

function Clicou() {
  alert("Você clicou")
}

function App() {
  return (
    <div className="page-eventos">
      <div>
        <h1>Olá, seja bem vindo!</h1>
      </div>
      <div>
        <div>
          <div>
          <input className='digite' type="text" placeholder='Digite aqui' onChange={Digitou} />
          </div>
            <select onClick={Clicou}> 
              <option>Selecione</option>            
            </select>
          </div>
        <div>
          <input type="radio" name='radio' /> Opção 1
          <input type="radio" name='radio' /> Opção 2
        </div>
        <div>
          <input type="checkbox" name='check' /> Opção 1
          <input type="checkbox" name='check' /> Opção 2
        </div>
        <div>
          <button>Okay</button>
        </div>

      </div>

    </div>
  );
}

export default App;