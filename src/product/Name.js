import React from 'react';

class Name extends React.Component{
      constructor(props){
            super();
            this.name = props.product.name;
            this.info = props.product.info;

            console.log(this.info);
      }
      render(){
            return(
                  <div className="productName">
                        <p className="noPadding">
                        {this.name}
                        </p>
                  </div>
            )
      }
}
export default Name;
