import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: '10px' }}>
      <Link route="/">
        {/* If you want to see a href in the html use a tag  */}
        {/* <a className="item">CrowdCoin</a> */}
        <Menu.Item>CrowdCoin</Menu.Item>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <Menu.Item>Campaigns</Menu.Item>
        </Link>
        <Link route="/campaigns/new">
          <Menu.Item>+</Menu.Item>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
