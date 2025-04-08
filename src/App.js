import React from 'react';
import data from "./data.json"

import CategoryList from './category/CategoryList.js';
import MenuHeader from './misc/MenuHeader.js';
import Åpningstider from './misc/Åpningstider.js';
import Footer from './misc/Footer.js'
// import EditList from './edit/EditList.js'

class App extends React.Component {
      constructor(props) {
            super(props);
            this.cat = data;
      }

      render(){
            document.title = "Kafémeny";
            return (
                  <div className="top">
                        {/* <EditList /> */}
                        <MenuHeader />
                        <CategoryList
                              categories={this.cat} />
                        <Åpningstider />
                        <Footer />
                  </div>
            );
      }
}
export default App;
