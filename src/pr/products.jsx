import React, { useState, useEffect } from "react";
import Pagination from "../common/Pagination";
import { paginate } from "../../utils/paginate";
import { Link } from "react-router-dom";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

import { getProducts, deleteProduct } from "../../services/productService";

const Products = () => {
  // state = {
  //   records: [],
  //   pageSize: 5,
  //   currentPage: 1,
  // };

  const [records, setRecords] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // async componentDidMount() {
  //   const { data: products } = await getProducts();
  //   this.setState({ records: products });
  // }

  useEffect(() => {
    (async function anyNameFunction() {
      const { data: products } = await getProducts();
      setRecords(products);
    })();
  }, []);

  const handleDelete = async (id) => {
    const allproducts = records;
    const products = allproducts.filter((m) => m._id !== id);
    setRecords(products);
    try {
      await deleteProduct(id);
      console.log("Record Successfully deleted.");
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log("The record has already been deleted");
      }
      setRecords(allproducts);
    }
  };

  const handlePageChange = (pageNo) => {
    setCurrentPage(pageNo);
  };

  const getPagedData = () => {
    const paginatedRecords = paginate(records, currentPage, pageSize);
    return {
      totalCount: !records.length ? 0 : records.length,
      data: paginatedRecords,
    };
  };

  const actionBodyTemplate = (record) => {
    return (
      <React.Fragment>
        <Link
          to={"/products/" + record._id + ""}
          className="btn btn-warning btn-sm m-1"
        >
          Update
        </Link>
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger"
          onClick={() => handleDelete(record._id)}
        />
      </React.Fragment>
    );
  };

  const { totalCount, data: paginatedProducts } = getPagedData();

  return (
    <React.Fragment>
      <div className="row mt-4">
        <div className="col-sm-5">
          <Link
            to="/products/new"
            className="btn btn-primary custom-btn"
            style={{ marginBottom: 20 }}
          >
            New Product
          </Link>
        </div>
        {totalCount === 0 ? (
          <div className="col-sm-4">
            <p>There are no records to show create a record</p>
          </div>
        ) : (
          <div className="col-sm-2">
            <p>There are {totalCount} products</p>
          </div>
        )}
      </div>
      <DataTable value={records} dataKey="_id" className="p-datatable-striped">
        <Column field="_id" header="_id" filter sortable></Column>
        <Column field="ProdName" header="ProdName" filter sortable></Column>
        <Column field="Price" header="Price" filter sortable></Column>
        <Column body={actionBodyTemplate}></Column>
      </DataTable>
      <Pagination
        itemsCount={totalCount}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </React.Fragment>
  );
};
export default Products;
