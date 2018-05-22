import React from "react";
import "./index.css";

class RequestFullTest extends React.Component {
  toFullVideo(ele) {
    if (ele.requestFullscreen) {
      return ele.requestFullScreen();
    } else if (ele.webkitRequestFullScreen) {
      return ele.webkitRequestFullScreen();
    } else if (ele.mozRequestFullScreen) {
      return ele.mozRequestFullScreen();
    } else {
      return ele.msRequestFullscreen();
    }
  }

  handleFullScreen = () => {
    // 让全屏下的父级元素设置全屏
    this.toFullVideo(this.wrap);
  };

  render() {
    return (
      <div ref={v => (this.wrap = v)} className="wrap">
        <div className="text">我要在全屏内显示</div>
        <video
          ref={c => (this.player = c)}
          src="http://www.w3school.com.cn/i/movie.ogg"
          controls
        />
        <span
          className="full-screen-btn"
          onClick={() => this.handleFullScreen()}
        />
      </div>
    );
  }
}

export default RequestFullTest;
