import React, { Component } from 'react';
import './style.css';

export default class App extends Component {
  state = {
    gorev: "",
    yapilacaklar: ["okula git", "yurda git","yemek ye"],
  }

  gorevEkle = () => {
    const { gorev, yapilacaklar } = this.state;
    if (gorev.trim() !== "") { // Input boş değilse işlem yap
      this.setState({ 
        yapilacaklar: [...yapilacaklar, gorev], 
        gorev: "" 
      });
    }
  }

  gorevSil = (index) => {
    const yeniYapilacaklar = [...this.state.yapilacaklar];
    yeniYapilacaklar.splice(index, 1);
    this.setState({ yapilacaklar: yeniYapilacaklar });
  }

  render() {
    return (
      <div className="container">
        <h1>TODO APP</h1>
        <input 
          type="text" 
          value={this.state.gorev} 
          onChange={e => this.setState({ gorev: e.target.value })} 
        />
        <button onClick={this.gorevEkle}>Tamam</button>
        <ul>
          {this.state.yapilacaklar.map((item, index) => (
            <li key={index}>
              {item}
              <button className="delete-button" onClick={() => this.gorevSil(index)}>Sil</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
