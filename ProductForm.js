import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css"; // Import CSS file

const ProductForm = () => {
  const [image, setImage] = useState(null);

  const formik = useFormik({
    initialValues: {
      productName: "",
      category: "",
      price: "",
      condition: "",
      description: "",
      contact: "",
      image: null,
    },
    validationSchema: Yup.object({
      productName: Yup.string().min(3, "At least 3 characters").required("Required"),
      category: Yup.string().required("Required"),
      price: Yup.number().positive("Must be a positive number").required("Required"),
      condition: Yup.string().required("Required"),
      description: Yup.string().min(10, "At least 10 characters").required("Required"),
      contact: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be a 10-digit phone number")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert("Product Listed Successfully!\n" + JSON.stringify(values, null, 2));
    },
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      formik.setFieldValue("image", file);
    }
  };

  return (
    <div className="form-container">
      <h2>List Your Product</h2>
      <form onSubmit={formik.handleSubmit} className="product-form">
        {/* Product Name */}
        <label>Product Name</label>
        <input
          type="text"
          name="productName"
          {...formik.getFieldProps("productName")}
        />
        {formik.touched.productName && formik.errors.productName && (
          <div className="error">{formik.errors.productName}</div>
        )}

        {/* Category */}
        <label>Category</label>
        <select name="category" {...formik.getFieldProps("category")}>
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
          <option value="Others">Others</option>
        </select>
        {formik.touched.category && formik.errors.category && (
          <div className="error">{formik.errors.category}</div>
        )}

        {/* Price */}
        <label>Price (₹)</label>
        <input
          type="number"
          name="price"
          {...formik.getFieldProps("price")}
        />
        {formik.touched.price && formik.errors.price && (
          <div className="error">{formik.errors.price}</div>
        )}

        {/* Condition */}
        <label>Condition</label>
        <select name="condition" {...formik.getFieldProps("condition")}>
          <option value="">Select Condition</option>
          <option value="New">New</option>
          <option value="Used - Like New">Used - Like New</option>
          <option value="Used - Good">Used - Good</option>
          <option value="Used - Fair">Used - Fair</option>
        </select>
        {formik.touched.condition && formik.errors.condition && (
          <div className="error">{formik.errors.condition}</div>
        )}

        {/* Description */}
        <label>Description</label>
        <textarea name="description" {...formik.getFieldProps("description")} rows="3"></textarea>
        {formik.touched.description && formik.errors.description && (
          <div className="error">{formik.errors.description}</div>
        )}

        {/* Contact Number */}
        <label>Contact Number</label>
        <input
          type="text"
          name="contact"
          {...formik.getFieldProps("contact")}
        />
        {formik.touched.contact && formik.errors.contact && (
          <div className="error">{formik.errors.contact}</div>
        )}

        {/* Image Upload */}
        <label>Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={image} alt="Product Preview" className="preview-img" />}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;
