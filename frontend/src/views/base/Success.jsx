import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import BaseHeader from "../partials/BaseHeader";
import BaseFooter from "../partials/BaseFooter";

import apiInstance from "../../utils/axios";

function Success() {
  const [order, setOrder] = useState([]);
  const [orderMessage, setOrderMessage] = useState("");

  const param = useParams();
  const urlParam = new URLSearchParams(window.location.search);
  const sessionId = urlParam.get("session_id");
  const paypalOrderId = urlParam.get("paypal_order_id");

  console.log(sessionId);
  console.log(paypalOrderId);
  console.log(param);

  useEffect(() => {
    const formdata = new FormData();

    formdata.append("order_oid", param.order_oid);
    formdata.append("session_id", sessionId);
    formdata.append("paypal_order_id", paypalOrderId);

    setOrderMessage("Processing Payment");

    try {
      apiInstance.post(`payment/payment-sucess/`, formdata).then((res) => {
        console.log(res.data);
        setOrderMessage(res.data.message);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(orderMessage);

  return (
    <>
      <BaseHeader />

      <section className="pt-0  position-relative overflow-hidden my-auto">
        <div className="container position-relative">
          <div className="row g-5 align-items-center justify-content-center">
            {/* Payment Successfull */}
            {orderMessage === "Payment Successfull" && (
              <>
                <div className="col-lg-5">
                  <h1 className="text-success">Enrollment Successful!</h1>
                  <p>
                    {" "}
                    Hey there, you enrollment in the 2 courses where successful,
                    visit your <a href="http://localhost:5173/student/courses">My Courses</a> page, to view the
                    courses now.
                  </p>
                  <form action="http://localhost:5173/student/courses">
                    <button
                      type="submit"
                      className="btn btn-primary mb-0 rounded-2"
                    >
                      View Enrolled Courses <i className="fas fa-arrow-right"></i>
                    </button>
                  </form>
                </div>
                <div className="col-lg-7 text-center">
                  <img
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Feducation.uoc.ac.in%2Findex.php%2Fstudents-corner&psig=AOvVaw08cD9tG9kEvb8-VurQ1RkU&ust=1726491921660000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIjc89-BxYgDFQAAAAAdAAAAABAE"
                    className="h-300px h-sm-400px h-md-500px h-xl-700px"
                    alt=""
                  />
                </div>
              </>
            )}

            {/* Already Paid */}
            {orderMessage === "Already Paid" && (
              <>
                <div className="col-lg-5">
                  <h1 className="text-success">Already Paid</h1>
                  <p>
                    {" "}
                    Hey there, you enrollment in the 2 courses where successful,
                    visit your <a href="http://localhost:5173/student/courses">My Courses</a> page, to view the
                    courses now.
                  </p>
                  <form action="http://localhost:5173/student/courses">
                    <button
                      type="submit"
                      className="btn btn-primary mb-0 rounded-2"
                    >
                      View Enrolled Courses <i className="fas fa-arrow-right"></i>
                    </button>
                  </form>

                </div>
                <div className="col-lg-7 text-center">
                  <img
                    src="https://assets.materialup.com/uploads/bc4c9683-f623-42ef-9014-464ba0411c79/preview.png"
                    className="h-300px h-sm-400px h-md-500px h-xl-700px"
                    alt=""
                  />
                </div>
              </>
            )}

            {/* Processing */}
            {orderMessage === "Processing Payment" && (
              <>
                <div className="col-lg-5">
                  <h1 className="text-warning">
                    Processing Payment{" "}
                    <i className="fas fa-spinner fa-spin"></i>
                  </h1>
                  <p>
                    {" "}
                    Hey there, hold on while we process your payment, please do
                    not leave the page.
                  </p>
                </div>
                <div className="col-lg-7 text-center">
                  <img
                    sty
                    src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1259.gif"
                    className="h-300px h-sm-400px h-md-500px h-xl-700px"
                    alt=""
                  />
                </div>
              </>
            )}

            {/* Failed */}
            {orderMessage === "Payment Failed" && (
              <>
                <div className="col-lg-5">
                  <h1 className="text-danger">Payment Failed 😔</h1>
                  <p>
                    Unfortunately, phew! Your payment did not go through. <br />{" "}
                    Please try again.
                  </p>
                  <form action="http://localhost:5173">
                    <button
                      type="submit"
                      className="btn btn-primary mb-0 rounded-2"
                    >
                      Home <i className="fas fa-arrow-right"></i>
                    </button>
                  </form>
                </div>
                <div className="col-lg-7 text-center">
                  <img
                    sty
                    src="https://media3.giphy.com/media/h4OGa0npayrJX2NRPT/giphy.gif?cid=790b76117pc6298jypyph0liy6xlp3lzb7b2y405ixesujeu&ep=v1_stickers_search&rid=giphy.gif&ct=e"
                    className="h-300px h-sm-400px h-md-500px h-xl-700px"
                    alt=""
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  );
}

export default Success;
