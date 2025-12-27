import { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

export default function App() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (!debouncedSearch) return;

    console.log("Buscando por:", debouncedSearch);

  }, [debouncedSearch]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Busca com Debounce</h2>

      <input
        type="text"
        value={search}
        placeholder="Digite para buscar..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

