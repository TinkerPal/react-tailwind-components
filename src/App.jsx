import { useState } from "react";
import ProductModal from "./ProductModal";

// import "./App.css";

import ImageGallery from "./ImageGallery";
import LoginModal from "./LoginModal";
import LoginModalAudaxious from "./LoginModalAudaxious";
import LoadingAudaXious from "./LoadingAudaXious";
import InfoForm from "./InfoForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LoginModalAudaxious />
    </>
  );
}

export default App;
