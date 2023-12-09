function UpdateProduct() {
  return (
    <div>
      <h1>Update Product</h1>
      <form action="">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="price">Price</label>
        <input type="number" name="price" id="price" />
        <label htmlFor="category">Category</label>
        <input type="text" name="category" id="category" />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description" />
        <label htmlFor="image">Image</label>
        <input type="image" name="image" id="image" />
        <input type="submit" value="Update Product" />
      </form>
    </div>
  );
}

export default UpdateProduct;
