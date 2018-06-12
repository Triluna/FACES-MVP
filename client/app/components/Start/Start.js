import React, {Component} from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import '../../styles/Start.css';

class start extends Component {
    render() {
        return (
            <div>
                <Navbar />
              <header id="header" >
                <div className="embed-responsive embed-responsive-16by9">
                  <div className="intro2 embed-responsive-item">
                    <div className="container">
                      <div className="row">
                        <div className="intro-text">
                          <h1><span className="brand">Faces</span></h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </header>

                <section id="three" className="wrapper style2">
                    <div className="inner">
                        <header className="align-center">
                          <br></br>
                            <h2>Aktuelle Projekte</h2>
                        </header>
                        <div className="gallery">
                          <div className="container">
                            <div className="row">
                              <div className="row-sm pixBox1">
                               by XXXX
                                <br></br>
                                <a href="Home"> Festivals in Berlin </a>

                                <br></br>
                              </div>
                              <br></br>
                              <div className="row-sm pixBox2">
                                <br></br>
                                by XXXX
                                <br></br>
                                <a href="Home">Festivals in Berlin </a>

                                <br></br>
                            </div>
                              <br></br>
                              <div className="row-sm pixBox3">
                                <br></br>
                                by XXXX
                                <br></br>
                                <a href="Home"> Festivals in Berlin </a>
                                <br></br>
                             </div>
                            </div>
                            <br></br>
                            <div className="col">
                              <div className="col-sm pixBox1">
                                by XXXX
                                <br></br>
                                <a href="Home"> Festivals in Berlin </a>

                                <br></br>
                              </div>
                              <br></br>
                              <div className="col-sm pixBox2">
                                <br></br>
                                by XXXX
                                <br></br>
                                <a href="Home">Festivals in Berlin </a>

                                <br></br>
                              </div>
                              <br></br>
                              <div className="col-sm pixBox3">
                                <br></br>
                                by XXXX
                                <br></br>
                                <a href="Home"> Festivals in Berlin </a>
                                <br></br>
                              </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>

                <Footer/>

            </div>
        );
    }
}

export default start;
