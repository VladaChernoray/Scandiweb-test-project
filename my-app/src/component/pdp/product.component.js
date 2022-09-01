import React from "react";
  
export default class ProductComponent extends React.Component {
  render() {
    return(
      <p>{JSON.stringify(this.props.attributes)}</p>
    )
  }
}