import React from 'react';
import '../styles/widget.scss';

declare function fussballdeWidgetAPI(): any;

type FootballWidgetProps = {
  id: string,
  name: string,
}

class FootballWidget extends React.Component<FootballWidgetProps> {
  private id: string;
  private name: string;

  constructor(props: FootballWidgetProps) {
    super(props);
    this.id = props.id;
    this.name = props.name;
  }

  componentDidMount() {
    fussballdeWidgetAPI().showWidget(this.name, this.id);
  }

  render() {
    return(
      <div className="widget-container">
        <div className="widget-content" id={this.name}></div>
      </div>
    );
  }
}

export default FootballWidget;