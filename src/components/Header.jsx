import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home,
  Coffee,
  UtensilsCrossed,
  ShoppingBag,
  Calendar,
  Phone,
  Menu,
  X,
} from "lucide-react";

import logo from "../assets/logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");
  
    if (!footer) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideHeader(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );
  
    observer.observe(footer);
  
    return () => observer.disconnect();
  }, []);

  const links = [
    { to: "/", icon: Home, label: "Início" },
    { to: "/sobre", icon: Coffee, label: "Sobre Nós" },
    { to: "/cardapio", icon: UtensilsCrossed, label: "Cardápio" },
    { to: "/loja", icon: ShoppingBag, label: "Loja Online" },
    { to: "/eventos", icon: Calendar, label: "Eventos" },
    { to: "/contato", icon: Phone, label: "Contato" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .8 }}
      className="
        fixed
        top-0
        left-0
        w-full
        z-[999]
        px-4
        md:px-6
        lg:px-12
        py-4
        lg:py-5
        pointer-events-none
      "
    >
      <div
        className="
          max-w-[1700px]
          mx-auto
          bg-black/25
          backdrop-blur-[2px]
          border
          border-white/10
          rounded-[10px]
          px-5
          lg:px-[50px]
          py-3
          flex
          items-center
          justify-between
          pointer-events-auto
          shadow-[0_10px_40px_rgba(0,0,0,.18)]
        "
      >
        {/* Desktop */}
        <nav className="hidden lg:flex gap-[50px] text-white text-[16px]">
          <Link to="/" className="flex items-center gap-2 hover:text-[#017459] transition">
            <Home size={14} />
            Início
          </Link>

          <Link to="/sobre" className="flex items-center gap-2 hover:text-[#017459] transition">
            <Coffee size={14} />
            Sobre Nós
          </Link>

          <Link to="/cardapio" className="flex items-center gap-2 hover:text-[#017459] transition">
            <UtensilsCrossed size={14} />
            Cardápio
          </Link>
        </nav>

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Opera Café"
            className="h-12 md:h-14 lg:h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex gap-[50px] text-white text-[16px]">
          <Link to="/loja" className="flex items-center gap-2 hover:text-[#017459] transition">
            <ShoppingBag size={14} />
            Loja Online
          </Link>

          <Link to="/eventos" className="flex items-center gap-2 hover:text-[#017459] transition">
            <Calendar size={14} />
            Eventos
          </Link>

          <Link to="/contato" className="flex items-center gap-2 hover:text-[#017459] transition">
            <Phone size={14} />
            Contato
          </Link>
        </nav>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="
            lg:hidden
            text-white
            p-2
          "
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 12 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: .3 }}
            className="
              lg:hidden
              mt-3
              bg-black/85
              backdrop-blur-xl
              border
              border-white/10
              rounded-xl
              overflow-hidden
              pointer-events-auto
            "
          >
            {links.map(({ to, icon: Icon, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="
                  flex
                  items-center
                  gap-3
                  px-6
                  py-4
                  text-white
                  border-b
                  border-white/10
                  hover:bg-white/5
                  transition
                "
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}