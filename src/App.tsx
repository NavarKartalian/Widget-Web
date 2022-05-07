import { Header } from './components/Header';
import { Main } from './components/Main';
import { Widget } from './components/Widget';

export function App() {

  return (
    <div className='relative min-h-screen w-full flex flex-col scrollbar-thumb-zinc-700 
    scrollbar-track-transparent scrollbar-thin h-0'>
      <Header />
      <Main />
      <Widget />
    </div>
  )
}
