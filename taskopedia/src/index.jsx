import ReactDOM from "react-dom/client";
import "./CSS/style.css";
import Header from "./Layout/TheHeader";
import Footer from "./Layout/TheFooter";
import MainBody from "./MainBody";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: "black", color: "gray" }}>
    <Header />
    <div className="px-4">
      <MainBody />
    </div>

    <Footer />
  </div>
);
