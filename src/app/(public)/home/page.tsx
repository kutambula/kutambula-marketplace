import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Kutambula Marketplace</h1>
        <p className="text-lg text-gray-700">
          Your one-stop shop for all your needs. Explore our wide range of products and enjoy seamless shopping experience.
        </p>
      </main>
    </div>
  );
}
