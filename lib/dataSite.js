import { House, Router, Settings, LibraryBig } from 'lucide-react';

const navLinks = [
  {
    href: "/home",
    label: "Início",
    title: "Voltar à tela inicial",
    icon: <House className="text-green-400" size={25} />,
    activeColor: "bg-blue-200 dark:bg-blue-950",
  },
  {
    href: "/home/comodato",
    label: "Comodatos",
    title: "Equipamentos em comodato",
    icon: <Router className="text-orange-400" size={25} />,
    activeColor: "bg-blue-200 dark:bg-blue-950",
  },
  {
    href: "/home/records",
    label: "Registros",
    title: "Registros",
    icon: <LibraryBig className="text-blue-400" size={25} />,
    activeColor: "bg-blue-200 dark:bg-blue-950",
  },
  {
    href: "/home/settings",
    label: "Configurações",
    title: "Configurações",
    icon: <Settings className="text-purple-400" size={25} />,
    activeColor: "bg-blue-200 dark:bg-blue-950",
  },
];

export { navLinks }