import { NavBar } from "./component/navigation";
import { About } from "./component/about";
import { Service } from "./component/service";
import { Footer } from "./component/footer";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <NavBar></NavBar>
      <div>
        <About></About>
        <Service></Service>
        <Footer></Footer>
      </div>
    </div>
  );
}
