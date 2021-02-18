import React, { Component } from "react";

export class Solutions extends Component {
  render() {
    return (
      <div id="solutions" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Solutions</h2>
          </div>
          <div className="row">
              {/*  BURASI ÇOK İYİYMİŞ BEYLER!!!!!!!!!! */}
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "loading..."}
              {/*  BURASI ÇOK İYİYMİŞ BEYLER!!!!!!!!!! */}
          </div>
        </div>
      </div>
    );
  }
}

export default Solutions;
