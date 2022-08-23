import { ArrowRight, ArrowLeft } from "@material-ui/icons";
import { useState } from "react";
import "./Blogs.scss";

export default function Blogs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Design Patterns",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      title: "React Hooks",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      title: "SDLC",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://media.istockphoto.com/photos/devops-engineer-working-on-software-development-and-it-operations-picture-id1351549172?b=1&k=20&m=1351549172&s=170667a&w=0&h=Ik6vmAUvRuSMGfdRP00dmN51P4VzjYD4Fr9fKJewWYg=",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="blogs" id="blogs">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Read more</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowLeft className="arrow left" onClick={() => handleClick("left")} />
      <ArrowRight className="arrow right" onClick={() => handleClick()} />
    </div>
  );
}
