import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import GeneralNews from './GeneralNews';
import TravelNewsPage from './TravelNewsPage';
import BusinessNewsPage from './BusinessNewsPage';
export default class TabsPage extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="General">
            <GeneralNews />
          </Tab>
          <Tab heading="Travel">
            <TravelNewsPage />
          </Tab>
          <Tab heading="Business">
            <BusinessNewsPage />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}