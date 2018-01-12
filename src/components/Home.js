import React, { Component } from 'react';
import { Header, Segment, Grid, Table } from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {
    state = { cities: [] }

  
    componentDidMount() {
      axios.get('https://api.got.show/api/cities')
        .then( res => {
          this.setState({ cities: res.data })
        })
        .catch ( err => {
          console.log(err);
        });
    }

    displayCities() {
      let randomPop = Math.floor(Math.random() * 1001);
      return this.state.cities.map(city => {
        return (
          <Table.Row>
            <Table.Cell>
              { city.name } 
            </Table.Cell>
            <Table.Cell>
              Mother of Dragons
            </Table.Cell>
            <Table.Cell>
              { randomPop }
            </Table.Cell>
          </Table.Row>
        )
      })
    }
  
    render() {
      return (
        <Table singleLine>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell width={6}>City Name</Table.HeaderCell>
                    <Table.HeaderCell width={4}>Present Ruler</Table.HeaderCell>
                    <Table.HeaderCell width={4}>Population</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {this.displayCities()}
                </Table.Body>
              </Table>
      );
    
    }
  }

export default Home;
