import React from "react";
import { List, Image } from "semantic-ui-react";

export default function index() {
  return (
    <div>
      This is layout
      <List>
        <List.Item>
          <Image avatar src="https://react.semantic-ui.com/images/avatar/small/rachel.png" />
          <List.Content>
            <List.Header as="a">Rachel</List.Header>
            <List.Description>
              Last seen watching{" "}
            
                <b>Arrested Development</b>
              
              just now.
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </div>
  );
}
