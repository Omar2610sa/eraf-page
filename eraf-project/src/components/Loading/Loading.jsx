import { OrbitProgress } from "react-loading-indicators";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
const Loading = () => {
  return (
    <>
    <Navbar />
    <div className="w-full h-screen flex justify-center items-center">
        <OrbitProgress dense color="rgba(1, 71, 85, 1)" size="large" text="تحميل" textColor="" />
    </div>
    </>
  )
}

export default Loading