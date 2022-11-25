import React from "react";

import { DivColor, Tag } from "./Styled";


const CategoryTitle = ({ categoryList }) => {

  return (
    <>
      {categoryList.map((category) => {
        return (
          <Tag key={category.id}>
            <DivColor color={category.color}/>
            {category.title}
          </Tag>
        )
      })}
    </>
  )

}

export default CategoryTitle;