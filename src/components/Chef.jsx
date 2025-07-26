function Chef() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const ingredientElement = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });
  function submitted(event) {
    event.preventDefault();
    console.log("Form submitted!");
    const formData = new FormData(event.target);
    const ingredient = formData.get("ingredient");
    console.log("Ingredient added: ", ingredient);
  }
  return (
    <main className="main">
      <form action="" className="add-ingredient-form" onSubmit={submitted}>
        <input
          type="text"
          aria-label="add ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      <ul>{ingredientElement}</ul>
    </main>
  );
}
export default Chef;
