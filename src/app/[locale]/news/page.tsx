

export default async function ProductsPage() {
  // 产品列表数据
  const products = [
    {
      id: 1,
      name: "Solar Inverter",
      description: "High efficiency solar inverter for residential and commercial use.",
    },
    {
      id: 2,
      name: "Solar Battery",
      description: "Long-lasting solar battery storage solutions.",
    },
    {
      id: 3,
      name: "Solar Panel",
      description: "Premium solar panels with high energy conversion rates.",
    },
    {
      id: 4,
      name: "Solar Lighting",
      description: "Energy-efficient solar lighting systems for outdoor use.",
    },
    {
      id: 5,
      name: "Solar Water Pump",
      description: "Reliable solar-powered water pumping solutions.",
    },
    {
      id: 6,
      name: "Solar Energy System",
      description: "Complete solar energy systems for homes and businesses.",
    },
  ];

  return (
    <div className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">{"Our Products"}</h1>
        <p className="text-lg mb-8">
          { "Explore our range of solar energy products"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
              <a 
                href={`/products/${product.id}`} 
                className="text-green-600 hover:text-green-800 font-medium"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}