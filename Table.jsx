import react from 'react';
import ReactDOM from "react-dom";
import { Table, Dropdown } from 'semantic-ui-react';

export default class Table extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      content: 1
    }
  }

  render(){
    return(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <Header as="h3"
                      content="this.state.content"
                      floated="left"/>
            </Table.HeaderCell>
          </Table.Row>
          <Table.Row>
            <span> Location
              <Dropdown placeholder='location' options={this.state.content}
              />
            </span>
          </Table.Row>
        </Table.Header>
      </Table>
    )
  }
}

ReactDOM.render((), document.getElementById("root"));
