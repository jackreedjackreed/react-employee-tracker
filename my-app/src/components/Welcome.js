import React, {Component} from "react";
// import API from "../utils/API";


  


class Welcome extends Component {

    classes = {
        wrapper: 'border-2 m-16 p-16',
        title: 'text-gray-800 text-xl text-center font-bold',
      };

    BasicComponent = () => {
        <div className={this.classes.wrapper}>
          <h1 className={this.classes.title}>Basic Component</h1>
        </div>
    };
        render() {
            return (
                <div>
                    BasicComponent
                </div>
            )
        }        
    };

export default Welcome