import {
  createBrowserRouter,
  createRoutesFromElements,
  /* BrowserRouter, */ /* Link, */ /* NavLink, */
  Route,
  RouterProvider,
  // Routes
} from "react-router-dom";

// Pages
import About from "./pages/About";
import Home from "./pages/Home";
import FAQ from "./pages/help/FAQ";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import CareersDetails, { careerDetailsLoader } from "./pages/careers/CareersDetails";

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";
import Careers, { loaderFunction } from "./pages/careers/Careers";
import CareersError from "./pages/careers/CareersError";



const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
          <Route path = 'about' element ={<About/>}/>
          <Route index element ={<Home/>}/>
          <Route path='help' element={<HelpLayout/>}>
            <Route path="faq" element={<FAQ/>}/>
            <Route path="contact" element={<Contact/>} action={contactAction}/>
          </Route>
          <Route path="careers" element={<CareersLayout/>} errorElement={<CareersError/>}>
            <Route index element={<Careers/>} loader={loaderFunction}></Route>
            <Route path=':id' element={<CareersDetails/>} loader={careerDetailsLoader}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Route>
))

function App() {
  return (
    // <BrowserRouter>
    // <header>
    //   <nav>
    //     <h1>Browser Routes</h1>
    //     {/* <Link to='/'>Home</Link> */} {/* adds active class to the anchor tags */ }
    //     <NavLink to='/'>Home</NavLink>
    //     <NavLink to='about'>About</NavLink>
    //   </nav>
    // </header>
    //   <main>
    //     <Routes>
    //       <Route path = 'about' element ={<About/>}/>
    //       <Route index element ={<Home/>}/>
    //     </Routes>
    //   </main>
    // </BrowserRouter>
    <RouterProvider router={router}/>
  );
}

export default App;