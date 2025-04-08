import React from 'react';
import timeplan from '../imgs/åpningstider.png';
class MenuHeader extends React.Component{
      render(){
            return(<div className="image">
                <span className='info'>
                    <img
                        className="timeplanImage hmargin"
                        src={timeplan}
                        alt="Kaféens åpningstider"
                    />
                </span>
            </div>);
      }
}
export default MenuHeader;
