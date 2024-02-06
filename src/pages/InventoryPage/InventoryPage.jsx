import { React, useState } from "react";
import mockdata from "../../mocks/mocks";
import { Row, Col } from "../../components/Layout/LayoutStyle";
import AddProductModal from "./AddProductModal/AddProductModal";
import {
  MainDiv,
  HeadDiv,
  OverallInventoryDiv,
  TitleDiv,
  SubInventoryDiv,
  SectionName,
  Count,
  Date,
  ProductsDiv,
  ProductsList,
  Products,
  ProductsEditDiv,
  ProductDetails,
  AddProduct,
  Filters,
  Download,
  StyledModal,
  Container,
  DiscardButton,
  DeleteIcon,
  Span,
} from "./InventoryPageStyle";
import deleteIcon from "../../assets/bin.png";

export default function InventoryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState(mockdata);

  const ModalToggle = () => {
    setIsOpen(!isOpen);
  };
  function DeleteProduct(id) {
    const newList = products.filter((item) => item.id != id);
    setProducts(newList);
  }

  const AddProducts = (productDetails) => {
    let toBeAddedProduct = productDetails;
    setProducts((prev) => [...prev, toBeAddedProduct]);
    setIsOpen(!isOpen);
  };

  return (
    <MainDiv>
      <OverallInventoryDiv>
        <TitleDiv>Overall Inventory</TitleDiv>
        <Row>
          <Col col={3}>
            <SubInventoryDiv>
              <SectionName>Categories</SectionName>
              <Count>14</Count>
              <Date>Last 7 days</Date>
            </SubInventoryDiv>
          </Col>
          <Col col={3}>
            <SubInventoryDiv>
              <SectionName>Total Products</SectionName>
              <Count>14</Count>
              <Date>Last 7 days</Date>
            </SubInventoryDiv>
          </Col>
          <Col col={3}>
            <SubInventoryDiv>
              <SectionName>Top Selling</SectionName>
              <Count>5</Count>
              <Date>Last 7 days</Date>
            </SubInventoryDiv>
          </Col>
          <Col col={3}>
            <SubInventoryDiv>
              <SectionName>Low Stocks</SectionName>
              <Count>12</Count>
              <Date>Last 7 days</Date>
            </SubInventoryDiv>
          </Col>
        </Row>
      </OverallInventoryDiv>
      {/* //Products */}
      <ProductsDiv>
        <HeadDiv>
          <Row>
            <Col col={1.5}>
              <Products>Products</Products>
            </Col>
            <Col col={4}>{}</Col>
            <Col col={2.5}>
              <AddProduct onClick={ModalToggle}>Add Product</AddProduct>
            </Col>
            {isOpen && (
              <AddProductModal
                AddProducts={AddProducts}
                ModalToggle={ModalToggle}
              />
            )}
            <Col col={1.5}>
              <Filters>Filters</Filters>
            </Col>
            <Col col={2.5}>
              <Download>Download all</Download>
            </Col>
          </Row>
        </HeadDiv>
        <ProductsList>
          <Row>
            <Col col={2}>Products</Col>
            <Col col={1.5}>Buying Price</Col>
            <Col col={2}>Quantity</Col>
            <Col col={2}>Threshold value</Col>
            <Col col={2}>Expiry date</Col>
            <Col col={2}>Availablity</Col>
            <Col col={0.5}>Delete</Col>
          </Row>
          <hr />
          <Row>
            {products?.map((item) => (
              <>
                <Col col={2}>{item.product}</Col>
                <Col col={1.5}>${item.buyingPrice}</Col>
                <Col col={2}>{item.quantity} packets</Col>
                <Col col={2}>{item.threshold_value} packets</Col>
                <Col col={2}>{item.expiry_date}</Col>
                <Col col={2}>
                  <Span availablity={item?.availablity}>
                    {item?.availablity}
                  </Span>
                </Col>
                <Col col={0.5}>
                  <div onClick={() => DeleteProduct(item.id)}>
                    <DeleteIcon src={deleteIcon} />
                  </div>
                </Col>
                <Row>
                  <hr />
                </Row>
              </>
            ))}
          </Row>
        </ProductsList>
      </ProductsDiv>
    </MainDiv>
  );
}
