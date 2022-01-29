import React from "react";

class Item extends React.Component{
    render() {
        return(
            <li>{this.props.content}</li>
        )
    }
}

class AddForm extends React.Component{
    ref = React.createRef();

    add = () => {
        let innerValue = this.ref.current.value;

        this.props.add(innerValue);

        this.ref.current.value = "";
    }

    render() {
        return(
            <div className="col-9 text-center mx-auto">
                <input type="text" className="text-end" ref={this.ref}/>
                <button className="btn btn-outline-primary btn-sm ms-3" onClick={this.add}>Add</button>
            </div>
        )
    }
}

class App extends React.Component{
  state = {
      items:[
      ]
  }

  add = (innerValue) => {
      let id = this.state.items.length + 1;
      if (innerValue === ""){
          return "" ;
      }else {
          this.setState({
              items:[
                  ...this.state.items,
                  {content:innerValue,id}
              ]
          })
      }
  }

  render(){
    return (
        <div className="container vh-100 bg-danger">
            <div className="row-cols-1">

                <AddForm add={this.add}/>
                <div className="col-3 mx-auto">
                    <ul>
                        {this.state.items.map(i => {
                            return(
                                <Item key={i.id} content={i.content}/>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
  }
}

export default App;