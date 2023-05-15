import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div
      className="h-64 p-2 bg-gradient-to-b from-blue-800 to-blue-500"
    >
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold mb-2">
          Book your table at your favorite restaurants
        </h1>
        <SearchBar />
      </div>
    </div>
  );
}
