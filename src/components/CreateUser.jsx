import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function CreateUser({ setBook }) {
  return (
    <>
      <Link to={"/users"}>
        <button
          className="create__user__btn bg-slate-600 rounded-xl text-center text-xs p-2"
          onClick={() =>
            setBook((book) => [
              ...book,
              { src: twoPack[1].src, id: twoPack[1].id },
            ])
          }
        >
          Create Your Own
        </button>
      </Link>
    </>
  );
}
