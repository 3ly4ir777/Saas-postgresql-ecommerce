
import { useState } from 'react';
import { 
  LayoutDashboard, ShoppingBag, Package, Users, 
  Tags, TicketPercent, BadgePercent, CreditCard, 
  Truck, ReceiptText, Menu, X 
} from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { name: 'Productos', icon: ShoppingBag, href: '/dashboard/productos' },
  { name: 'Pedidos', icon: Package, href: '/dashboard/pedidos' },
  { name: 'Usuarios', icon: Users, href: '/dashboard/usuarios' },
  { name: 'Categorías', icon: Tags, href: '/dashboard/categorias' },
  { name: 'Cupones', icon: TicketPercent, href: '/dashboard/cupones' },
  { name: 'Descuentos', icon: BadgePercent, href: '/dashboard/descuentos' },
  { name: 'Pagos', icon: CreditCard, href: '/dashboard/pagos' },
  { name: 'Envíos', icon: Truck, href: '/dashboard/envios' },
  { name: 'Impuestos', icon: ReceiptText, href: '/dashboard/impuestos' },
];


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botón Hamburguesa - Solo visible en móvil */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay para cerrar al hacer clic fuera (móvil) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-slate-900 text-white flex flex-col min-h-screen shadow-xl transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:inset-auto
      `}>
        <div className="p-6">
          <h1 className="text-xl font-bold text-blue-400 tracking-tight">Tienda Admin</h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <a 
                key={item.name}
                href={item.href} 
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-800 hover:text-blue-300 transition-all duration-200 group"
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </a>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <p className="text-xs text-slate-500 text-center">v1.0 - NestJS API</p>
        </div>
      </aside>
    </>
  );
}