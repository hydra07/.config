import './App.css';

function App() {
  return (
    <div className='bg-gray-700 w-full'>
      <header className='text-center text-violet-500'>
        ReactApp
      </header>
      <div className='flex justify-center h-screen'>
        <button className='bg-green-500 rounded h-12 w-24 hover:bg-violet-600 active:h-14 active:w-28'>click</button>
      </div>
    </div>
  );
}

export default App;
