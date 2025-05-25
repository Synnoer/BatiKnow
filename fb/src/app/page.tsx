import { NavBar } from "./component/navigation";
import { About } from "./component/about";
import { Service } from "./component/service";
import { Footer } from "./component/footer";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="bg-gray-100">
        <About></About>
        <Service></Service>
        <Footer></Footer>
      </div>
    </div>
  );
}
