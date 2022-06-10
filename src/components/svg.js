import React from "react";
export default class Svg extends React.Component {

  constructor(props)
  {
    super(props);
    this.seconds = props.seconds ? props.seconds : 0;
    this.minutes = props.minutes ? props.minutes : 0;
    this.hours = props.hours ? props.hours : 0;
    this.size = props.size ? props.size : 300;


      if (this.seconds === 0 && this.minutes === 0 && this.hours === 0)
        this.minutes = 5;
        
        this.dt = new Date(this.hours * 1000 * 60 * 60 + this.minutes * 1000 * 60 +  this.seconds * 1000);

        let seconds = Math.floor(this.dt / 1000 % 60);
        let minutes = Math.floor(this.dt / 1000 / 60) % 60;
        let hours = Math.floor(this.dt / 1000 / 60 / 60) % 24;
        
        this.state = {
            date: this.dt,
            angle: Math.floor(360 / 60 * seconds) + 180,
            angle2: Math.floor(360 / 60 * minutes) + 180,
            angle3: Math.floor(360 / 12 * hours) + 180
      };

    }

    componentDidMount() {
        setInterval(this.updateTime, 1000);
    }

    updateTime = () => { // стрелочный метод привязывается сам

        let seconds = Math.floor(this.state.date / 1000 % 60);
        let minutes = Math.floor(this.state.date / 1000 / 60) % 60;
        let hours = Math.floor(this.state.date / 1000 / 60 / 60) % 24;

        this.setState({
            angle: Math.floor(360 / 60 * seconds) + 180,
            angle2: Math.floor(360 / 60 * minutes) + 180,
            angle3: Math.floor(360 / 12 * hours) + 180,
            date: this.dt > 0 ? this.dt.setTime(this.dt.getTime() - 1000) : this.dt
        });
    }
    
    
    manyLines = () => {
        let tmp = [];
        for (let i = 0; i < 12; i++)
        {
            let rotate = `rotate(${i * 360 / 12} ${this.size/2} ${this.size/2})`;
            tmp.push(<circle cx="50%" cy={this.size/20} r={this.size/30} fill="green" 
                transform={rotate} filter="url(#myFilter)"/>);
        }

        return tmp;
    }

    arrow = () => {
        let tmp = [];

        let widthArr = this.size * 0.05;
        let yArr = Math.floor(this.size / 2 - widthArr / 2);
        let rotate = `rotate(${this.state.angle} ${this.size/2} ${this.size/2})`;
           tmp.push(<rect x={yArr} y={yArr} width={widthArr} height={this.size / 2 * 0.9} fill="orange" 
               transform={rotate} filter="url(#myFilter)" />);

           let rotate2 = `rotate(${this.state.angle2} ${this.size/2} ${this.size/2})`;
           tmp.push(<rect x={yArr} y={yArr} width={widthArr} height={this.size / 2 * 0.9} fill="blue" 
               transform={rotate2} filter="url(#myFilter)" />);

           let rotate3 = `rotate(${this.state.angle3} ${this.size/2} ${this.size/2})`;
           tmp.push(<rect x={yArr} y={yArr} width={widthArr} height={this.size / 3 * 0.9} fill="green" 
               transform={rotate3} filter="url(#myFilter)" />);

           return tmp;
    }
  render()
  {
      let vb = `0 0 ${this.size} ${this.size}`;
  return (
    <svg version="1.1"
     width={this.size} height={this.size}
          viewBox={vb} >
          <filter id="myFilter" filterUnits="userSpaceOnUse"
              x="0" y="0"
              width="100%" height="100%" >
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
              <feOffset in="blur" dx="4" dy="4" result="offsetBlur" />
              <feSpecularLighting in="blur" surfaceScale="5" specularConstant=".75"
                  specularExponent="20" lighting-color="#bbbbbb"
                  result="specOut">
                  <fePointLight x="-5000" y="-10000" z="20000" />
              </feSpecularLighting>
              <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
              <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic"
                  k1="0" k2="1" k3="1" k4="0" result="litPaint" />
          </filter>
          <circle cx="50%" cy="50%" r="50%" fill="red" filter="url(#myFilter)"/>
         {this.manyLines()}
         {this.arrow()}
    </svg>
  );
  }
}