// Components
import { AddProductForm } from "@/components/add-product-form"
import { ProductList } from "@/components/product-list"

const App = () => {
  return (
    <main className="min-h-dvh space-y-6 bg-background font-open-sans">
      <header>
        <h1 className="bg-[#1c8894] py-4 text-center font-urbanist text-3xl text-white">
          Desafio Oak Tecnologia
        </h1>
      </header>

      <section className="mx-auto max-w-xl">
        <div className="flex items-center justify-between pb-6">
          <h2 className="font-urbanist text-xl font-bold">
            Listagem de Produtos
          </h2>
          <AddProductForm />
        </div>
        <ProductList />
      </section>
    </main>
  )
}

export default App
