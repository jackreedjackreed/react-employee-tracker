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
                    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                    <div class="flex-shrink-0">
            </div>
            <div>
     <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-blue-500">You have a new message!</p>
    </div>
            </div>
                </div>
            )
        }        
    };

export default Welcome