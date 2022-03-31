import 'the-new-css-reset/css/reset.css';
import 'bulma/css/bulma.css';
import './App.css';
import Hero from './components/Hero';
import ChatBody from './components/ChatBody';
import ChatInput from './components/ChatInput';
import EnterName from './components/EnterName';

function App() {
  return (
    <div className="App">
      <Hero />
      <EnterName />
      {/* <ChatBody room='goblinhours' />
      <ChatInput room='goblinhours' /> */}
    </div>
  );
}

export default App;