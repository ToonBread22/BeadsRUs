import './App.css';

function App() {
  function handleCheckout(beadId) {
    const payload = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        section: JSON.stringify({beadId})
    }
    fetch("/checkout",payload)
        .then(res => res.json())
        .then(res => console.info(res))
}
  return (
    <div className="App">

      <header className="App-header">
        <h1>Beads R Us</h1>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa9PJfZDobkGi2nOCZfTohzivvhPg_MUxIhQ&usqp=CAU"></img>
      </header>
      <section>
        <div>
        <h2>Beads</h2>
          <label for="Beads">Choose Bead Type:</label>
            <select name="beads" id="beads">
              <option value="plastic">Original</option>
              <option value="wooden">Wooden</option>
              <option value="Rubber">Rubber</option>
            </select>
</div>
<div>
        <h2>String</h2>
          <label for="size">Choose String Size:</label>
            <select name="size" id="size">
              <option value="S">38 mm</option>
              <option value="M">40 mm</option>
              <option value="L">42 mm</option>
              <option value="XL">45 mm</option>
            </select>
</div>

<div>
        <h2>Clips</h2>
          <label for="Clips">Choose Clips Color:</label>
            <select name="clips" id="clips">
              <option value="color">Red</option>
              <option value="color">Orange</option>
              <option value="color">Yellow</option>
              <option value="color">Green</option>
              <option value="color">Blue</option>
              <option value="color">Purple</option>
              <option value="color">Gold</option>
              <option value="color">Silver</option>
              <option value="color">Rose Gold</option>
            </select>
            </div>
            
            <button
              onclick={() => handleCheckout()}>
                CheckOut
            </button>
      </section>
    </div>
    
  );
}

export default App;
