import React from "react";
import Image from "next/image";
import style from "../styles/Blog.module.css";
import { Blogsdata } from "../Blogsdata/Blogs";
const blogs = () => {
  return (
    <div className={`  container`}>
      <div className={`row ${style.flexer}`}>
        {Blogsdata.map((e) => {
          return (
            <>
              <div
                className={`${style.cardwrapper} $ col-md-3 col-lg-3 col-10`}
              >
                <div className={style.imgwrap}>
                  <Image src={e.image} className="img-fluid" />
                </div>
                <h6 className={`${style.title} text-left`}>{e.title}</h6>
                <p className={`${style.title} ${style.content}`}>
                  {e.content.slice(0, 200) + "...."}
                </p>
                <div className={`${style.cardbase}`}>
                  <div className={`${style.logo}`}>
                    {" "}
                    <Image
                      src={e.image}
                      className={`${style.logo} img-fluid`}
                      layout="intrinsic"
                    />
                  </div>

                  <div className="basetext">
                    <p className={`${style.p}`}>Techsquad community</p>
                    <p className={`${style.p}`}>
                      {e.date} - {e.readtime}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default blogs;
