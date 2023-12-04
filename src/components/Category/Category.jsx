import React from "react";
import { STATUS } from "../../utils/status";
import "./Category.scss";
import { Link } from "react-router-dom";
import Error from '../Error/Error';
import Loader from "../Loader/Loader";

const Category = ({ categories, status }) => {
  if (status === STATUS.Error) return <Error />;
  if (status === STATUS.LOADING) return <Loader />;
  return (
    <section className="categories py-5 bg-ghost-white" id="categories">
      <div className="container">
        <div className="categories-content">
          <div className="section-title">

          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
