import { OrbitProgress } from "react-loading-indicators";

const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center bg-Black items-center">
        <OrbitProgress dense color="rgba(1, 71, 85, 1)" size="large" text="تحميل" textColor="" />
    </div>
  )
}

export default Loading