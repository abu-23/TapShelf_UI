import { React, useState } from "react";
import { mockdata, Inventories } from "../../mocks/mocks";
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
  AddProduct,
  Filters,
  Download,
  DeleteIcon,
  Span,
  Description,
  SectionDiv,
  Sections,
  HorizontalLine,
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
          {Inventories.map((item) => (
            <Col col={3}>
              <SubInventoryDiv>
                <SectionName section={item.section}>{item.section}</SectionName>
                <Row>
                  <Col col={6}>
                    <Count>{item.count}</Count>
                  </Col>
                  <Col col={6}>
                    <div>{item.price}</div>
                  </Col>
                </Row>
                <SectionDiv>
                  <Row>
                    <Col col={6}>
                      <Date>{item.duration}</Date>
                    </Col>
                    <Col col={6}>
                      <Description>{item.type}</Description>
                    </Col>
                  </Row>
                </SectionDiv>
              </SubInventoryDiv>
            </Col>
          ))}
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
          <Sections>
            <Row>
              <Col col={2}>Products</Col>
              <Col col={1.5}>Buying Price</Col>
              <Col col={2}>Quantity</Col>
              <Col col={2}>Threshold value</Col>
              <Col col={2}>Expiry date</Col>
              <Col col={2}>Availablity</Col>
              <Col col={0.5}>Delete</Col>
            </Row>
          </Sections>
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
                  <Col col={12}>
                    <HorizontalLine />
                  </Col>
                </Row>
              </>
            ))}
          </Row>
        </ProductsList>
      </ProductsDiv>
    </MainDiv>
  );
}
