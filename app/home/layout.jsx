import Sidenav from "../ui/components/sidenav"

export default function homeLayout({ children }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden dark:bg-gray-900 bg-white">
      <div className="w-full flex-none md:w-64">
        <Sidenav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-5">{children}</div>
    </div>
  );
}