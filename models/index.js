// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// if a product can only belong to one category, then should i use hasOne?
Product.belongsTo(Category, {
  foreignKey: "category_id",
})


// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE", //is this part necessary
})
// Products belongToMany Tags (through ProductTag)
// whats the difference between belongsto and hasmany vs belongstomany
Product.belongsToMany(Tag, {
  through: ProductTag, //not sure what this means
  foreignKey: "product_id",
})
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: "tag_id",
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
