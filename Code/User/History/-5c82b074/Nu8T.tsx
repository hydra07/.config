import './App.css';

function App() {
  return (
    <div className='bg-pink-400 h-screen'>
      <form action="" className='rounded border-red-500 p-6 m-auto w-1/3 bg-white'>
        <label htmlFor="input" className='text-blue-500 font-bold mb-2 block'>Account</label>
        <input type="text" className='border-2 border-blue-500 w-full px-3 py-2 rounded' />
        <br />
        <label htmlFor="input" className='text-blue-500 font-bold mb-2 block mt-4'>Password</label>
        <input type="password" className='border-2 border-blue-500 w-full px-3 py-2 rounded' />
        <button type='submit' className='float-right rounded-lg hover:bg-green-600'>summit</button>
      </form>
    </div>
    
  );
}

export default App;
