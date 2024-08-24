// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Framework from "./pages/Framework";
// import Layout from "./Layout";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="framework/:id" element={<Framework />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Framework from "./pages/Framework";
import Layout from "./Layout";
import Login from "./components/Login"; // Import the Login component
import Signup from "./components/Signup"; // Import the Signup component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="framework/:id" element={<Framework />} />
          <Route path="login" element={<Login />} /> {/* Login route */}
          <Route path="signup" element={<Signup />} /> {/* Signup route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
