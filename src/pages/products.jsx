'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/component/footer'
import { Header } from '@/components/component/header'

const products = [
  { id: 1, name: "Aceite Esencial de Lavanda", description: "Relajante y calmante", image: "/placeholder.svg?height=200&width=200", price: 3.99 },
  { id: 2, name: "Sales de Baño de Rosas", description: "Hidratante y aromático", image: "/placeholder.svg?height=200&width=200", price: 3.99 },
  { id: 3, name: "Crema Facial de Aloe Vera", description: "Refrescante y nutritiva", image: "/placeholder.svg?height=200&width=200", price: 3.99 },
  { id: 4, name: "Vela de Masaje de Vainilla", description: "Relajante y sensual", image: "/placeholder.svg?height=200&width=200", price: 3.99 },
  { id: 5, name: "Exfoliante Corporal de Coco", description: "Suavizante y revitalizante", image: "/placeholder.svg?height=200&width=200", price: 3.99 },
  { id: 6, name: "Mascarilla de Arcilla Verde", description: "Purificante y tonificante", image: "/placeholder.svg?height=200&width=200", price: 3.99 },
]

const services = [
  { id: 1, name: "Masaje Relajante", description: "60 minutos de puro relax", image: "/placeholder.svg?height=200&width=200", price: 59.99 },
  { id: 2, name: "Facial Rejuvenecedor", description: "Tratamiento anti-edad", image: "/placeholder.svg?height=200&width=200", price: 79.99 },
  { id: 3, name: "Manicura y Pedicura", description: "Cuidado completo para manos y pies", image: "/placeholder.svg?height=200&width=200", price: 49.99 },
]

export function ProductsJsx() {
  return (
    (<div className="min-h-screen bg-gray-100">
      {/* Espacio para el header */}
      <header className="bg-white shadow-md p-4">
        <Header />
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">Nuestros Productos</h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {products.map((product) => (
              <Link
                href={`/checkout/${product.id}`}
                key={product.id}
                className="w-full max-w-sm">
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-bold text-pink-600">${product.price.toFixed(2)}</p>
                      <Button className="bg-pink-500 text-white hover:bg-pink-600">
                        Comprar
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-pink-600 mb-8">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold text-pink-600">${service.price.toFixed(2)}</p>
                    <Button className="bg-pink-500 text-white hover:bg-pink-600">
                      Reservar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      {/* Espacio para el footer */}
      <footer className="bg-white shadow-md mt-12 p-4">
      <Footer />
      </footer>
    </div>)
  );
}
