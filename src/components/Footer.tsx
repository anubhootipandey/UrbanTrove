import { Heart, Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex-1 flex flex-col gap-2">
            <div className="text-[#f20089] text-2xl font-bold flex items-center gap-1">
              fynk
              <span className="text-xs rounded flex items-center">
                ✨
              </span>
            </div>
            <p className="text-gray-600 text-sm mt-2">
              fynk is your one-stop shop for trending fashion, electronics, and lifestyle products. Explore amazing deals and join our elite membership for exclusive offers.
            </p>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <h3 className="text-[#f20089] font-semibold mb-2">Categories</h3>
            <div className="flex flex-col gap-1 text-sm">
              <Link to='/category/men' className="cursor-pointer hover:text-[#f20089] transition">Men</Link>
              <Link to='/category/women' className="cursor-pointer hover:text-[#f20089] transition">Women</Link>
              <Link to='/category/kids' className="cursor-pointer hover:text-[#f20089] transition">Kids</Link>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <h3 className="text-[#f20089] font-semibold mb-2">Customer Support</h3>
            <div className="flex flex-col gap-1 text-sm">
              <span className="cursor-pointer hover:text-[#f20089] transition">Help Center</span>
              <span className="cursor-pointer hover:text-[#f20089] transition">Track Order</span>
              <span className="cursor-pointer hover:text-[#f20089] transition">Contact Us</span>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-2">
            <h3 className="text-[#f20089] font-semibold mb-2">Follow Us</h3>
            <div className="flex items-center gap-4 text-[#f20089]">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-[#f12d9d] transition" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-[#f12d9d] transition" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-[#f12d9d] transition" />
              <Heart className="w-5 h-5 cursor-pointer hover:text-red-500 transition" />
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm">
          Copyright © {new Date().getFullYear()} fynk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
