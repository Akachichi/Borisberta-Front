
export const fetchProducts = async () => {
    // Lógica para obtener los datos desde el API
    const response = await fetch('/api/products');
    const data = await response.json();
    return data;
  };