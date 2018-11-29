import React, { Component } from 'react';
import fire from '../config/Fire';
import '../styles/Home.css'

class Home extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
          email: null,
        }
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
                <div class="card">
                    <img class="card-img-top" src="" alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Nombre obtenido de la BD</h5>
                      <p class="card-text">Biografia obtenida de la BD</p>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">Cras justo odio</li>
                      <li class="list-group-item">Dapibus ac facilisis in</li>
                      <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                    <button onClick={this.logout} type="button" class="btn btn-danger">Salir</button>
                </div>
                
              </div>
            </div>
            <div className="col-sm-7">
            <div className="Home_infoPost">
              aca va input para insertar texto
            </div>
            <div className="Home_infoFromServer">
              aca obtendo datos del server
            </div>
            </div>
          </div>
        </div>
        
        
			</div>





		
    )
  };
}

export default Home;
