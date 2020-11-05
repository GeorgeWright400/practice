import React from "react";

class NewPage1 extends React.Component {
  constructor(props){
    super(props);
    this.fetchItems = this.fetchItems.bind(this);
    this.call_the_fetcher = this.call_the_fetcher.bind(this);
  };

  async fetchItems() {
    return fetch('https://philosophy-quotes-api.glitch.me/quotes ').then((response) => {
      return response.json();
    }).then((jsonResponse) => {
      return jsonResponse.map((item)=> {
        console.log(item.philosophy)
        return {
          quote: item.quote,
          source: item.source,
          philosophy: item.philosophy,
        }
        console.log(item.philosophy)
      })
    })
  }

  call_the_fetcher(){
    this.fetchItems();
  }
  render() {
    return (
    <div>
      <h1>hey</h1>
      {this.call_the_fetcher()}


    </div>
    )
  }
}

export default NewPage1;
