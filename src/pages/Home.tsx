import { Gift } from "lucide-react"
import Hero from "../components/Hero"
import New from "../components/New"
import ProductList from "../components/ProductList"
import Brands from "./Brands"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <>
    <Hero />
    <Brands />
    <ProductList />
    <div className="flex flex-col gap-8 max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div
        className="relative overflow-hidden h-64 md:h-82 rounded-xl shadow-lg bg-linear-to-r from-pink-400 to-pink-300 text-white flex flex-col md:flex-row items-center justify-between p-6 cursor-pointer"
      >
        <div className="flex flex-col items-center md:items-start text-center flex-1">
          <div className="mb-4">
            <Gift size={48} />
          </div>

          <h3 className="text-3xl font-extrabold mb-2">
            Buy 1 Get 1
          </h3>
          <p className="text-lg opacity-90 mb-4">Exclusive Fashion Offer</p>

          <Link to='/products' className="bg-white text-[#f20089] font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition shadow-md">
            Shop Now
          </Link>
        </div>

        <div className="shrink-0 mt-6 md:mt-0 md:ml-6">
          <img
            src="/pic1.png"
            alt="Offer"
            className="h-48 md:h-56 object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
    <New />
    </>
  )
}

export default Home