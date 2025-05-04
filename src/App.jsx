import { Component } from "react";
import "./App.css";

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(data) {
    this.props.onClick(data);
  }

  render() {
    return (
      <>
        {this.props.cards.map(({ color1, color2, title, cardId }, index) => (
          <div
            className="card"
            key={index}
            onClick={() =>
              this.handleOnClick({ color1, color2, title, cardId })
            }
            id={cardId}
          >
            <div className="colors">
              <div className="color" style={{ backgroundColor: color1 }}></div>
              <div className="color" style={{ backgroundColor: color2 }}></div>
            </div>
            <div className="card-info">
              <div className="color-values">
                <div>{color1}</div>
                <div>{color2}</div>
              </div>
              <div className="card-title">
                <h2>{title}</h2>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          color1: " #ff9a8b",
          color2: " #fad0c4",
          title: "Sunset",
          cardId: 1,
        },
        {
          color1: " #00c9ff",
          color2: " #92fe9d",
          title: "Ocean Breeze",
          cardId: 2,
        },
        {
          color1: " #b993d6",
          color2: " #8ca6db",
          title: "Lavender Fields",
          cardId: 3,
        },
        {
          color1: " #f6d365",
          color2: " #fda085",
          title: "Citrus Burst",
          cardId: 4,
        },
        {
          color1: " #a1ffce",
          color2: " #faffd1",
          title: "Minty Fresh",
          cardId: 5,
        },
        {
          color1: " #fcb69f",
          color2: " #ffecd2",
          title: "Blush Bloom",
          cardId: 6,
        },
        {
          color1: " #76b2fe",
          color2: " #b69efe",
          title: "Skyline",
          cardId: 7,
        },
        {
          color1: " #ffecd2",
          color2: " #fcb69f",
          title: "Peach Punch",
          cardId: 8,
        },
        {
          color1: " #a18cd1",
          color2: " #fbc2eb",
          title: "Royal Violet",
          cardId: 9,
        },
        {
          color1: " #a8edea",
          color2: " #fed6e3",
          title: "Mossy Creek",
          cardId: 10,
        },
        {
          color1: " #bdc3c7",
          color2: " #2c3e50",
          title: "Cool Ash",
          cardId: 11,
        },
        {
          color1: " #f6f9d4",
          color2: " #e0c3fc",
          title: "Lemon Ice",
          cardId: 12,
        },
        {
          color1: " #f83600",
          color2: " #f9d423",
          title: "Tangerine Twist",
          cardId: 13,
        },
        {
          color1: " #89f7fe",
          color2: " #66a6ff",
          title: "Calm Water",
          cardId: 14,
        },
        {
          color1: " #e8cbc0",
          color2: " #636fa4",
          title: "Rosé Smoke",
          cardId: 15,
        },
        {
          color1: " #ff9a9e",
          color2: " #fad0c4",
          title: "Tropical Kiss",
          cardId: 16,
        },
        {
          color1: " #2b5876",
          color2: " #4e4376",
          title: "Deep Space",
          cardId: 17,
        },
        {
          color1: " #e0c3fc",
          color2: " #8ec5fc",
          title: "Berry Smoothie",
          cardId: 18,
        },
        {
          color1: " #c1dfc4",
          color2: " #deecdd",
          title: "Green Tea",
          cardId: 19,
        },
        {
          color1: " #d7d2cc",
          color2: " #304352",
          title: "Stormy Sky",
          cardId: 20,
        },
      ],
      data: {
        color1: " #ff9a8b",
        color2: " #fad0c4",
        title: "Sunset",
      },
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(value) {
    this.setState({ data: value });
  }

  render() {
    return (
      <div className="app">
        <div className="sample-grid">
          <Card cards={this.state.cards} onClick={this.onClick} />
        </div>
        <div className="preview">
          <div
            className="preview-pallate"
            style={{ backgroundColor: this.state.data.color1 }}
          >
            {this.state.data.title}
          </div>
          <div
            className="preview-pallate"
            style={{ backgroundColor: this.state.data.color2 }}
          >
            {this.state.data.title}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
