import React from "react";

const TransactionContent = () => {
  return (
    <div
      style={{
        borderRadius: "8px",
        boxShadow: "0 0 10px rgb(0 0 0 / 10%)",
        padding: "1rem",
      }}
    >
      <div className="w-25 my-2">
        <form class="d-flex ms-2">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <table class="table table-borderless">
        <thead>
          <tr className="table-primary">
            <th scope="col">Số tham chiếu</th>
            <th scope="col">Loại giao dịch</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Tần suất</th>
            <th scope="col">Ngày giao dịch</th>
            <th scope="col">Tổng giao dịch</th>
            <th scope="col">Số tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1/1/2023</th>
            <td>Thanh toán</td>
            <td>Thành công</td>
            <td>Một lần</td>
            <td>1/4/2023</td>
            <td>1</td>
            <td>VND 234.000</td>
          </tr>
          <tr>
            <th scope="row">1/1/2023</th>
            <td>Thanh toán</td>
            <td>Thành công</td>
            <td>Một lần</td>
            <td>1/4/2023</td>
            <td>1</td>
            <td>VND 234.000</td>
          </tr>
          <tr>
            <th scope="row">1/1/2023</th>
            <td>Thanh toán</td>
            <td>Thành công</td>
            <td>Một lần</td>
            <td>1/4/2023</td>
            <td>1</td>
            <td>VND 234.000</td>
          </tr>
          <tr>
            <th scope="row">1/1/2023</th>
            <td>Thanh toán</td>
            <td>Thành công</td>
            <td>Một lần</td>
            <td>1/4/2023</td>
            <td>1</td>
            <td>VND 234.000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionContent;
