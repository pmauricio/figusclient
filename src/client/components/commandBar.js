import * as React from 'react';

import { CommandBar, ICommandBarProps } from 'office-ui-fabric-react/lib/CommandBar';
import { CommandBarButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';
import { PanelLector } from  './Lector';
export class CommandBarBasicExample extends React.Component<ICommandBarProps, {}> {
  constructor(props: ICommandBarProps) {
    super(props);
    this.child = React.createRef();
    this.state = {
      areNamesVisible: true,
      areIconsVisible: true
    };
  }
  openPanel(){
    console.log("poen ");
    this.child.current._onShowPanel();
  }

   render() {
    const {overflowItems, farItems } = this.props;
  var items = [
  {
    key: 'newItem',
    name: 'New',
    cacheKey: 'myCacheKey',
    iconProps: {
      iconName: 'Add'
    },
    ariaLabel: 'New. Use left and right arrow keys to navigate',
    ['data-automation-id']: 'newItemMenu',
    subMenuProps: {
      items: [
        {
          key: 'emailMessage',
          name: 'Email message',
          iconProps: {
            iconName: 'Mail'
          },
          ['data-automation-id']: 'newEmailButton'
        },
        {
          key: 'calendarEvent',
          name: 'Calendar event',
          iconProps: {
            iconName: 'Calendar'
          }
        }
      ]
    }
  },
  {
    key: 'share',
    name: 'Share',
    iconProps: {
      iconName: 'Share'
    },
    onClick: () => this.openPanel()
  },
  {
    key: 'download',
    name: 'Download',
    iconProps: {
      iconName: 'Download'
    },
    onClick: () => console.log('Download')
  }
];

    return (
      <div>
        <CommandBar
          items={items}
          overflowItems={overflowItems}
          farItems={farItems}
          ariaLabel={'Use left and right arrow keys to navigate between commands'}
        />
        <PanelLector ref={this.child} />  
      </div>
    );
  }
}