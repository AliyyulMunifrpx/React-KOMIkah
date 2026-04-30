
import { createRoot } from 'react-dom/client'
import Beranda from './home/main.jsx'
import "./index.css"
import Navbar from './umum/nav.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Komika from './komika/main.jsx'
import Harga from './harga/main.jsx'
import Faq from './faq/main.jsx'
import Kaki from './umum/footer'
createRoot(document.getElementById('root')).render(


<BrowserRouter>
  <Navbar/>
  <div className='bg-black bg-[url("/background.png")] bg-contains overflow-y-hidden bg-cover bg-no-repeat pb-30 min-h-screen flex items-center justify-center '>
  <Routes>
  <Route path='/' element={<Beranda/>}/>
    <Route path='/home' element={<Beranda/>}/>
    <Route path='/komika' element={<Komika/>}/>
    <Route path='/harga' element={<Harga/>}/>
    <Route path='/faq' element={<Faq/>}/>
  </Routes>
    </div>
    <Kaki></Kaki>
  </BrowserRouter>


)
