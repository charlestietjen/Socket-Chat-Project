import 'the-new-css-reset/css/reset.css';
import './App.css';
import Hero from './components/Hero';
import ChatBody from './components/ChatBody';
import ChatInput from './components/ChatInput';

function App() {
  return (
    <div className="App">
      <Hero />
      <ChatBody />
      <ChatInput />
    </div>
  );
}

export default App;