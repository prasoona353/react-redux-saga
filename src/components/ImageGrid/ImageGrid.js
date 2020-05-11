import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles.css";

const key = "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";

class ImageGrid extends Component {
  state = {
    images: [],
  };

  componentDidMount() {
    fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
      .then((res) => res.json())
      .then((images) => {
        this.setState({
          images,
        });
      });
  }

  render() {
    const { images } = this.state;
    return (
      <section className="grid">
        {images.map(
          (image) => (
            console.log(image, "image"),
            (
              <img
                key={image.id}
                src={image.urls.small}
                alt={image.user.username}
                className={`item-${Math.ceil(image.height / image.width)}`}
                // className="item-5"
              />
            )
          )
        )}
      </section>
    );
  }
}
const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error,
});

export default connect(mapStateToProps, null)(ImageGrid);
