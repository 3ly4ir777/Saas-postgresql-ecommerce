import React, { useState } from 'react';
import { Package, DollarSign, Image as ImageIcon, Barcode, Box } from 'lucide-react';

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    type: 'simple',
    sku: '',
    regularPrice: 0,
    salePrice: '',
    stock_quantity: 0,
    imageUrl: '',
    is_visible: true
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enviando a NestJS:', formData);
   
    alert('Producto guardado (ver consola)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: val }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
      
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Package size={20} className="text-blue-500" /> Información General
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre del Producto</label>
                <input required name="name" type="text" onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Ej: iPhone 15 Pro" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Descripción</label>
                <textarea name="description" rows={4} onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Describe los detalles del producto..."></textarea>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <DollarSign size={20} className="text-green-500" /> Precios e Inventario
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Precio Regular</label>
                <input required name="regularPrice" type="number" step="0.01" onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="0.00" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Precio de Oferta (Opcional)</label>
                <input name="salePrice" type="number" step="0.01" onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="0.00" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1">
                  <Barcode size={14} /> SKU (Código único)
                </label>
                <input required name="sku" type="text" onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="PROD-123" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-1">
                  <Box size={14} /> Stock Disponible
                </label>
                <input required name="stock_quantity" type="number" onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="0" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <ImageIcon size={20} className="text-purple-500" /> Multimedia
            </h2>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">URL de la Imagen</label>
              <input name="imageUrl" type="url" onChange={handleChange} className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm" placeholder="https://..." />
              {formData.imageUrl && (
                <img src={formData.imageUrl} className="mt-4 rounded-lg border h-32 w-full object-cover" alt="Vista previa" />
              )}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="font-medium text-slate-800 mb-4 text-sm uppercase">Ajustes de Visibilidad</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Tipo de producto</span>
                <select name="type" onChange={handleChange} className="text-sm border rounded p-1">
                  <option value="simple">Simple</option>
                  <option value="variable">Variable</option>
                </select>
              </div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" name="is_visible" checked={formData.is_visible} onChange={handleChange} className="w-4 h-4 text-blue-600 rounded" />
                <span className="text-sm text-slate-600">Visible en la tienda</span>
              </label>
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all">
            Guardar Producto
          </button>
        </div>
      </div>
    </form>
  );
}