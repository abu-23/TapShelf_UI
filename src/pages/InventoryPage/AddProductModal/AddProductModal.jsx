import { React, useState, useRef } from "react";
import propTypes from "prop-types";
import {
  StyledModal,
  Container,
  DiscardButton,
  AddProduct,
  ImageDiv,
  Title,
  InputDiv,
  ProductSpec,
  ImageSelected,
  ImageInput,
  SelectImageDiv,
  ButtonImage,
} from "./AddProductModalStyle";
import { Row, Col } from "../../../components/Layout/LayoutStyle";

const initialValues = {
  availablity: "In stock",
  buyingPrice: "",
  expiry_date: "",
  product: "",
  quantity: "",
  threshold_value: "",
  id: "",
};

export default function AddProductModal({ ModalToggle, AddProducts }) {
  const [productDetails, setProductDetails] = useState(initialValues);
  const [image, setImage] = useState(null);
  const inputRef = useRef();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductDetails({ ...productDetails, [name]: value });
  };
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setImage(URL.createObjectURL(e.dataTransfer.files[0]));
    }
  };
  return (
    <StyledModal>
      <Container>
        <Title>New Product</Title>
        {!image ? (
          <ImageInput>
            <ImageDiv onDragOver={handleDragOver} onDrop={handleDrop} />
            <SelectImageDiv>
              <div>Drag image here </div>
              <div>or</div>
              <input
                type="file"
                hidden
                onChange={onImageChange}
                ref={inputRef}
              />
              <ButtonImage onClick={() => inputRef.current.click()}>
                Browse image
              </ButtonImage>
            </SelectImageDiv>
          </ImageInput>
        ) : (
          <ImageSelected src={image} alt="Image selected " />
        )}
        <Row>
          <Col col={4}>
            <ProductSpec>Product Name</ProductSpec>
          </Col>
          <Col col={8}>
            <InputDiv
              name="product"
              value={productDetails?.product}
              onChange={handleInputChange}
              placeholder="Enter Product Name"
            />
          </Col>
        </Row>
        <Row>
          <Col col={4}>
            <ProductSpec>Product ID</ProductSpec>
          </Col>
          <Col col={8}>
            <InputDiv
              type="number"
              name="id"
              value={productDetails?.id}
              onChange={handleInputChange}
              placeholder="Enter Product ID"
            />
          </Col>
        </Row>
        <Row>
          <Col col={4}>
            <ProductSpec>Category</ProductSpec>
          </Col>
          <Col col={8}>
            <InputDiv
              name="category"
              value={productDetails?.category}
              onChange={handleInputChange}
              placeholder="Select product category"
            />
          </Col>
          <Col col={4}>
            <ProductSpec>Buying Price</ProductSpec>
          </Col>
          <Col col={8}>
            <InputDiv
              type="number"
              name="buyingPrice"
              value={productDetails?.buyingPrice}
              onChange={handleInputChange}
              placeholder="Enter buying price"
            />
          </Col>
          <Col col={4}>
            <ProductSpec>Quantity</ProductSpec>
          </Col>
          <Col col={8}>
            <InputDiv
              name="quantity"
              type="number"
              value={productDetails?.quantity}
              onChange={handleInputChange}
              placeholder="Enter product quantity"
            />
          </Col>
          <Col col={4}>
            <ProductSpec>Unit</ProductSpec>
          </Col>
          <Col col={8}>
            <InputDiv
              type="number"
              name="unit"
              value={productDetails?.unit}
              onChange={handleInputChange}
              placeholder="Enter product unit"
            />
          </Col>
          <Col col={4}>
            <ProductSpec>Expiry Date</ProductSpec>
          </Col>
          <Col col={8}>
            <InputDiv
              type="date"
              name="expiry_date"
              value={productDetails?.expiry_date}
              onChange={handleInputChange}
              placeholder="Enter expiry date"
            />
          </Col>
          <Col col={4}>
            <ProductSpec>Threshold Value</ProductSpec>
          </Col>
          <Col col={8}>
            <InputDiv
              type="number"
              name="threshold_value"
              value={productDetails?.threshold_value}
              placeholder="Enter threshold value"
              onChange={handleInputChange}
            />
          </Col>
        </Row>
        <Row>
          <Col col={5}>{}</Col>
          {/* <ButtonDiv> */}
          <Col col={3}>
            <DiscardButton onClick={ModalToggle}>Discard</DiscardButton>
          </Col>
          <Col col={4}>
            <AddProduct onClick={() => AddProducts(productDetails)}>
              Add Product
            </AddProduct>
          </Col>
          {/* </ButtonDiv> */}
        </Row>
      </Container>
    </StyledModal>
  );
}

AddProductModal.propTypes = {
  ModalToggle: propTypes?.func,
  AddProducts: propTypes?.func,
};
