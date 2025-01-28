async function fetchWasteData() {
  try {
    const response = await fetch('http://localhost:3000/api/waste-data', {
      headers: {
        'Accept': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (err) {
    console.error("Error fetching waste data:", err);
    throw err;
  }
}

export { fetchWasteData };