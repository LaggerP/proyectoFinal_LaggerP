import React, { Component } from 'react';
import fire from '../config/Fire';
import '../styles/Home.css'
import FormPost from './posts/FormPost'
import AllPost from './posts/AllPost'

class Home extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
      fire.auth().signOut();
    }

    

  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="Home_profile">
                <div className="card">
                    <img className="card-img-top" src={this.props.img} alt="Card img cap"/>
                    <div className="card-body">
                      <h5 className="card-title">{this.props.user}</h5>
                      <p className="card-text">Biografia obtenida de la BD</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Cras justo odio</li>
                      <li className="list-group-item">Dapibus ac facilisis in</li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <button onClick={this.logout} type="button" className="btn btn-light" id="botonSalir">Cerrar sesión</button>
                </div>
                
              </div>
            </div>
            <div className="col-sm-7">
            <div className="Home_infoPost">
              <FormPost/>
            </div>
            <div className="Home_infoFromServer">
              <AllPost/>
            </div>
            </div>
          </div>
        </div>
        
        
			</div>





		
    )
  };
}

export default Home;
